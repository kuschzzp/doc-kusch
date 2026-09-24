<template>
  <div class="copy-article-toolbar" data-copy-article-ignore>
    <button
      class="copy-article-button"
      :class="`is-${status}`"
      type="button"
      :disabled="status === 'copying'"
      :aria-label="buttonLabel"
      :title="buttonLabel"
      @click="copyArticle"
    >
      <span class="copy-article-icon" aria-hidden="true"></span>
      <span aria-live="polite">{{ buttonText }}</span>
    </button>
  </div>
</template>

<script>
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const STATUS_TEXT = {
  idle: '复制',
  copying: '复制中',
  success: '已复制',
  error: '重试'
}

const STATUS_LABELS = {
  idle: '复制全文',
  copying: '正在复制全文',
  success: '全文已复制',
  error: '复制失败，请重试'
}

const BLOCK_LABELS = {
  tip: '提示',
  note: '说明',
  warning: '注意',
  danger: '警告',
  theorem: '定理'
}

export default {
  name: 'CopyArticleButton',
  data() {
    return {
      status: 'idle',
      resetTimer: null
    }
  },
  computed: {
    buttonText() {
      return STATUS_TEXT[this.status]
    },
    buttonLabel() {
      return STATUS_LABELS[this.status]
    }
  },
  beforeDestroy() {
    window.clearTimeout(this.resetTimer)
  },
  methods: {
    async copyArticle() {
      if (this.status === 'copying') return

      this.setStatus('copying')
      try {
        const content = document.querySelector('.content-wrapper > .theme-vdoing-content')
        if (!content) throw new Error('Article content was not found')

        const markdown = this.toPortableMarkdown(content)
        if (!markdown) throw new Error('Article content is empty')

        await this.writeToClipboard(markdown)
        this.setStatus('success', 1800)
      } catch (error) {
        console.error('[CopyArticleButton] Failed to copy article:', error)
        this.setStatus('error', 2800)
      }
    },
    toPortableMarkdown(content) {
      const article = content.cloneNode(true)
      this.expandCodeGroups(article)
      this.removeInterfaceElements(article)
      this.convertCustomBlocks(article)
      this.normalizeResourceUrls(article)

      const turndown = new TurndownService({
        bulletListMarker: '-',
        codeBlockStyle: 'fenced',
        emDelimiter: '*',
        fence: '```',
        headingStyle: 'atx',
        strongDelimiter: '**'
      })
      turndown.use(gfm)
      this.addPortableRules(turndown)

      let markdown = turndown.turndown(article).trim()
      if (!article.querySelector('h1') && this.$page.title) {
        markdown = `# ${turndown.escape(String(this.$page.title).trim())}\n\n${markdown}`.trim()
      }
      return markdown ? `${markdown}\n` : ''
    },
    expandCodeGroups(article) {
      article.querySelectorAll('.theme-code-group').forEach(group => {
        const tabs = Array.from(group.querySelectorAll('.theme-code-group__nav-tab'))
          .map(tab => tab.textContent.trim())
        const blocks = Array.from(group.querySelectorAll('.theme-code-block'))

        blocks.forEach((block, index) => {
          const title = tabs[index]
          if (!title) return
          const label = document.createElement('p')
          const strong = document.createElement('strong')
          strong.textContent = title
          label.appendChild(strong)
          block.parentNode.insertBefore(label, block)
        })
      })
    },
    removeInterfaceElements(article) {
      const selectors = [
        '.header-anchor',
        'a .outbound',
        'a .sr-only',
        '.code-copy',
        '.line-numbers-wrapper',
        '.theme-code-group__nav',
        '.demo-block-control',
        '.demo-block-meta',
        '.demo-block-float-control',
        '[data-copy-article-ignore]',
        'script',
        'style',
        'noscript'
      ]
      article.querySelectorAll(selectors.join(',')).forEach(node => node.remove())
    },
    convertCustomBlocks(article) {
      article.querySelectorAll('.custom-block').forEach(block => {
        if (block.classList.contains('right')) {
          this.unwrapElement(block)
          return
        }

        if (block.tagName === 'DETAILS' || block.classList.contains('details')) {
          const summary = block.querySelector('summary')
          const title = summary ? summary.textContent.trim() : '详细内容'
          if (summary) summary.remove()
          this.replaceWithStandardBlock(block, title, false)
          return
        }

        const type = Object.keys(BLOCK_LABELS).find(name => block.classList.contains(name))
        if (!type) {
          this.unwrapElement(block)
          return
        }

        const titleNode = block.querySelector('.custom-block-title, .title')
        const customTitle = titleNode ? titleNode.textContent.trim() : ''
        if (titleNode) titleNode.remove()
        this.replaceWithStandardBlock(block, customTitle || BLOCK_LABELS[type], true)
      })
    },
    replaceWithStandardBlock(block, title, asQuote) {
      const replacement = document.createElement(asQuote ? 'blockquote' : 'div')
      if (title) {
        const label = document.createElement('p')
        const strong = document.createElement('strong')
        strong.textContent = title
        label.appendChild(strong)
        replacement.appendChild(label)
      }
      while (block.firstChild) replacement.appendChild(block.firstChild)
      block.parentNode.replaceChild(replacement, block)
    },
    unwrapElement(element) {
      const parent = element.parentNode
      while (element.firstChild) parent.insertBefore(element.firstChild, element)
      parent.removeChild(element)
    },
    normalizeResourceUrls(article) {
      const baseUrl = this.getResourceBaseUrl()

      article.querySelectorAll('a[href]').forEach(link => {
        link.setAttribute('href', this.toAbsoluteUrl(link.getAttribute('href'), baseUrl))
      })
      article.querySelectorAll('img').forEach(image => {
        const source = image.getAttribute('data-src') || image.getAttribute('data-original') || image.getAttribute('src')
        if (source) image.setAttribute('src', this.toAbsoluteUrl(source, baseUrl))
      })
      article.querySelectorAll('iframe[src], video[src], audio[src], source[src]').forEach(media => {
        media.setAttribute('src', this.toAbsoluteUrl(media.getAttribute('src'), baseUrl))
      })
    },
    getResourceBaseUrl() {
      const canonical = document.querySelector('link[rel="canonical"]')
      const fallback = canonical && canonical.href ? canonical.href : window.location.href
      const configuredOrigin = this.$themeConfig.copyArticleOrigin
      if (!configuredOrigin) return fallback

      try {
        const origin = configuredOrigin.endsWith('/') ? configuredOrigin : `${configuredOrigin}/`
        return new URL(this.$page.path || window.location.pathname, origin).href
      } catch (error) {
        return fallback
      }
    },
    toAbsoluteUrl(value, baseUrl) {
      if (!value || value.charAt(0) === '#' || /^(data|mailto|tel):/i.test(value)) return value
      try {
        return new URL(value, baseUrl).href
      } catch (error) {
        return value
      }
    },
    addPortableRules(turndown) {
      turndown.addRule('vuepressFencedCodeBlock', {
        filter: node => {
          if (node.nodeName !== 'PRE') return false
          const className = `${node.className || ''} ${node.parentElement ? node.parentElement.className : ''}`
          return /(?:^|\s)language-[^\s]+/.test(className)
        },
        replacement: (content, node) => {
          const className = `${node.className || ''} ${node.parentElement ? node.parentElement.className : ''}`
          const languageMatch = className.match(/(?:^|\s)language-([^\s]+)/)
          const language = languageMatch ? languageMatch[1].replace(/[^\w#+.-]/g, '') : ''
          const codeNode = node.querySelector('code')
          const code = (codeNode ? codeNode.textContent : node.textContent).replace(/\n$/, '')
          const fenceLength = (code.match(/^`{3,}/gm) || [])
            .reduce((length, fence) => Math.max(length, fence.length + 1), 3)
          const fence = '`'.repeat(fenceLength)
          return `\n\n${fence}${language}\n${code}\n${fence}\n\n`
        }
      })
      turndown.addRule('cardLists', {
        filter: node => node.nodeType === 1 && (
          node.classList.contains('cardListContainer') ||
          node.classList.contains('cardImgListContainer')
        ),
        replacement: (content, node) => {
          const items = Array.from(node.querySelectorAll('.card-item')).map(item => {
            const link = item.matches('a[href]') ? item : item.querySelector('a[href]')
            const nameNode = item.querySelector('.name')
            const descNode = item.querySelector('.desc')
            const name = turndown.escape((nameNode ? nameNode.textContent : item.textContent).trim())
            const description = descNode ? turndown.escape(descNode.textContent.trim()) : ''
            const label = link ? `[${name}](${link.getAttribute('href')})` : name
            return `- ${label}${description ? ` - ${description}` : ''}`
          })
          return items.length ? `\n\n${items.join('\n')}\n\n` : ''
        }
      })
      turndown.addRule('embeddedMedia', {
        filter: ['iframe', 'video', 'audio'],
        replacement: (content, node) => {
          const sourceNode = node.querySelector('source[src]')
          const source = node.getAttribute('src') || (sourceNode && sourceNode.getAttribute('src'))
          if (!source) return content
          const labels = { IFRAME: '嵌入内容', VIDEO: '视频', AUDIO: '音频' }
          return `\n\n[${labels[node.tagName]}](${source})\n\n`
        }
      })
    },
    async writeToClipboard(markdown) {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(markdown)
          return
        } catch (error) {
          // Continue with the fallback for older browsers and denied permissions.
        }
      }

      const textarea = document.createElement('textarea')
      textarea.value = markdown
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      textarea.style.top = '0'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()

      try {
        if (!document.execCommand('copy')) throw new Error('Clipboard command was rejected')
      } finally {
        document.body.removeChild(textarea)
      }
    },
    setStatus(status, resetDelay) {
      window.clearTimeout(this.resetTimer)
      this.status = status
      if (resetDelay) {
        this.resetTimer = window.setTimeout(() => {
          this.status = 'idle'
        }, resetDelay)
      }
    }
  }
}
</script>

<style scoped>
.copy-article-toolbar {
  margin: 0;
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.copy-article-button {
  width: 4.9rem;
  height: 1.9rem;
  padding: 0 0.5rem;
  border: 1px solid rgba(17, 168, 205, 0.35);
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  background: transparent;
  color: #11a8cd;
  font: inherit;
  font-size: 0.78rem;
  line-height: 1;
  letter-spacing: 0;
  cursor: pointer;
  transition: background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease;
}

.copy-article-button:hover:not(:disabled) {
  border-color: #11a8cd;
  background: rgba(17, 168, 205, 0.08);
}

.copy-article-button:focus-visible {
  outline: 2px solid #11a8cd;
  outline-offset: 2px;
}

.copy-article-button:disabled {
  cursor: wait;
  opacity: 0.72;
}

.copy-article-button.is-success {
  border-color: #42b983;
  color: #2b8a64;
}

.copy-article-button.is-error {
  border-color: #d9534f;
  color: #c0392b;
}

.copy-article-icon {
  width: 0.72rem;
  height: 0.72rem;
  border: 1px solid currentColor;
  border-radius: 1px;
  box-sizing: border-box;
  position: relative;
  flex: none;
}

.copy-article-icon::before {
  content: '';
  width: 0.54rem;
  height: 0.54rem;
  border: 1px solid currentColor;
  border-radius: 1px;
  box-sizing: border-box;
  position: absolute;
  top: -0.28rem;
  left: 0.18rem;
  background: var(--mainBg);
}

.theme-mode-dark .copy-article-button {
  border-color: rgba(177, 96, 234, 0.42);
  color: #b160ea;
}

.theme-mode-dark .copy-article-button:hover:not(:disabled) {
  border-color: #b160ea;
  background: rgba(177, 96, 234, 0.1);
}

.theme-mode-dark .copy-article-button:focus-visible {
  outline-color: #b160ea;
}

.theme-mode-dark .copy-article-button.is-success {
  border-color: #42b983;
  color: #42b983;
}

.theme-mode-dark .copy-article-button.is-error {
  border-color: #ef7773;
  color: #ef7773;
}

</style>
