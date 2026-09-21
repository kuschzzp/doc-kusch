<template>
  <section class="post-list card-box" ref="postList" aria-label="文章列表">
    <header class="post-list-header" v-if="showHeader">
      <div>
        <span class="post-list-kicker">RECENT NOTES</span>
        <h2>最新文章</h2>
      </div>
      <span class="post-count">共 {{ totalPosts }} 篇</span>
    </header>

    <transition-group class="post-list-items" tag="div" name="post">
      <article
        class="post"
        :class="{ 'is-sticky': item.frontmatter.sticky }"
        v-for="item in sortPosts"
        :key="item.key"
      >
        <div class="post-meta">
          <span class="sticky-badge" v-if="item.frontmatter.sticky">置顶</span>
          <span
            class="post-date iconfont icon-riqi"
            v-if="item.frontmatter.date"
          >{{ item.frontmatter.date.split(' ')[0] }}</span>
          <span
            class="post-categories"
            v-if="
              $themeConfig.category !== false &&
              item.frontmatter.categories &&
              item.frontmatter.categories[0]
            "
          >
            <router-link
              :to="`/categories/?category=${encodeURIComponent(c)}`"
              v-for="(c, index) in item.frontmatter.categories"
              :key="index"
            >{{ c }}</router-link>
          </span>
        </div>

        <div class="title-wrapper">
          <h2>
            <router-link :to="item.path">
              {{ item.title }}
              <span class="title-tag" v-if="item.frontmatter.titleTag">{{
                item.frontmatter.titleTag
              }}</span>
            </router-link>
          </h2>
        </div>

        <div class="excerpt-wrapper" v-if="item.excerpt">
          <div class="excerpt" v-html="item.excerpt"></div>
        </div>

        <footer class="post-footer">
          <span
            class="post-tags iconfont icon-biaoqian"
            v-if="
              $themeConfig.tag !== false &&
              item.frontmatter.tags &&
              item.frontmatter.tags[0]
            "
          >
            <router-link
              :to="`/tags/?tag=${encodeURIComponent(t)}`"
              v-for="(t, index) in item.frontmatter.tags"
              :key="index"
            >{{ t }}</router-link>
          </span>
          <span class="post-tags-placeholder" v-else></span>
          <router-link :to="item.path" class="readmore">
            阅读文章
            <span class="iconfont icon-jiantou-you" aria-hidden="true"></span>
          </router-link>
        </footer>
      </article>
    </transition-group>

    <div class="post-empty" v-if="!sortPosts.length">暂无文章</div>

    <footer
      class="post-load-more"
      ref="loadMore"
      v-if="infinite && totalPosts"
      :aria-busy="isLoading ? 'true' : 'false'"
    >
      <template v-if="hasMorePosts">
        <button
          class="load-more-button"
          type="button"
          :disabled="isLoading"
          @click="loadMore"
        >
          {{ isLoading ? '正在加载' : '继续加载' }}
        </button>
        <span class="load-more-status" aria-live="polite">
          {{ isLoading ? '正在加载更多文章' : `已显示 ${sortPosts.length} / ${totalPosts} 篇 · 点击或继续下滑加载` }}
        </span>
      </template>
      <p class="all-posts-loaded" v-else aria-live="polite">
        已展示全部 {{ totalPosts }} 篇文章
      </p>
    </footer>
  </section>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: ''
    },
    tag: {
      type: String,
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    perPage: {
      type: Number,
      default: 10
    },
    showHeader: {
      type: Boolean,
      default: false
    },
    infinite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sortPosts: [],
      visibleCount: this.perPage,
      isLoading: false,
      observer: null,
      scrollHandler: null,
      scrollRaf: null,
      footerVisible: false,
      scrollAtFooter: null,
      lastScrollY: 0,
      autoLoadDistance: 160
    }
  },
  created() {
    this.setPosts()
  },
  computed: {
    sourcePosts() {
      if (this.category) {
        return this.$groupPosts.categories[this.category] || []
      }
      if (this.tag) {
        return this.$groupPosts.tags[this.tag] || []
      }
      return this.$sortPosts || []
    },
    totalPosts() {
      return this.sourcePosts.length
    },
    hasMorePosts() {
      return this.infinite && this.sortPosts.length < this.totalPosts
    },
    storageKey() {
      const path = this.$route && this.$route.path ? this.$route.path : '/'
      return `vdoing:post-list:${path}`
    }
  },
  mounted() {
    if (!this.infinite) return

    this.restoreVisibleCount()
    this.setPosts()
    this.$nextTick(() => this.initInfiniteScroll())
  },
  beforeDestroy() {
    this.disconnectInfiniteScroll()
  },
  watch: {
    currentPage() {
      if (this.infinite) return

      if (this.$route.query.p != this.currentPage) { // 此判断防止添加相同的路由信息（如浏览器回退时触发的）
        this.$router.push({
          query: {
            ...this.$route.query,
            p: this.currentPage
          }
        })
      }
      this.setPosts()
      this.$nextTick(() => this.scrollToList())
    },
    category() {
      this.setPosts()
    },
    tag() {
      this.setPosts()
    }
  },
  methods: {
    setPosts() {
      if (this.infinite) {
        this.sortPosts = this.sourcePosts.slice(0, this.visibleCount)
        return
      }

      const currentPage = this.currentPage
      const perPage = this.perPage

      this.sortPosts = this.sourcePosts.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
      )
    },
    restoreVisibleCount() {
      if (typeof window === 'undefined') return

      try {
        const storedCount = Number(window.sessionStorage.getItem(this.storageKey))
        if (Number.isFinite(storedCount) && storedCount > this.perPage) {
          this.visibleCount = Math.min(storedCount, this.totalPosts)
        }
      } catch (error) {
        // sessionStorage may be unavailable in privacy-restricted browsers.
      }
    },
    persistVisibleCount() {
      if (typeof window === 'undefined') return

      try {
        window.sessionStorage.setItem(this.storageKey, String(this.visibleCount))
      } catch (error) {
        // Infinite loading still works when sessionStorage is unavailable.
      }
    },
    initInfiniteScroll() {
      if (
        typeof window === 'undefined'
        || !this.$refs.loadMore
        || !this.hasMorePosts
      ) return

      this.lastScrollY = this.getScrollTop()
      this.scrollHandler = this.handleScrollEvent
      window.addEventListener('scroll', this.scrollHandler, { passive: true })

      if ('IntersectionObserver' in window) {
        this.observer = new window.IntersectionObserver(entries => {
          const entry = entries[entries.length - 1]
          if (!entry) return

          this.footerVisible = entry.isIntersecting
          this.scrollAtFooter = entry.isIntersecting
            ? this.getScrollTop()
            : null
        }, {
          rootMargin: '0px',
          threshold: 0.01
        })
        this.observer.observe(this.$refs.loadMore)
      }
    },
    disconnectInfiniteScroll() {
      if (this.observer) {
        this.observer.disconnect()
        this.observer = null
      }

      if (typeof window !== 'undefined' && this.scrollHandler) {
        window.removeEventListener('scroll', this.scrollHandler)
      }
      if (
        typeof window !== 'undefined'
        && this.scrollRaf !== null
        && window.cancelAnimationFrame
      ) {
        window.cancelAnimationFrame(this.scrollRaf)
      }

      this.scrollHandler = null
      this.scrollRaf = null
      this.footerVisible = false
      this.scrollAtFooter = null
    },
    handleScrollEvent() {
      if (this.scrollRaf !== null) return

      const update = () => {
        this.scrollRaf = null
        this.handleScroll()
      }

      if (typeof window !== 'undefined' && window.requestAnimationFrame) {
        this.scrollRaf = window.requestAnimationFrame(update)
      } else {
        update()
      }
    },
    handleScroll() {
      if (typeof window === 'undefined') return

      const scrollTop = this.getScrollTop()
      const isScrollingDown = scrollTop > this.lastScrollY
      this.lastScrollY = scrollTop

      if (!this.observer) {
        this.updateFooterVisibility(scrollTop)
      }

      if (!isScrollingDown) {
        this.scrollAtFooter = this.footerVisible ? scrollTop : null
        return
      }

      if (
        !this.hasMorePosts
        || this.isLoading
        || !this.footerVisible
        || this.scrollAtFooter === null
      ) return

      if (scrollTop - this.scrollAtFooter >= this.autoLoadDistance) {
        this.scrollAtFooter = null
        this.loadMore()
      }
    },
    updateFooterVisibility(scrollTop) {
      if (!this.$refs.loadMore || typeof window === 'undefined') return

      const rect = this.$refs.loadMore.getBoundingClientRect()
      const viewportHeight = window.innerHeight
        || document.documentElement.clientHeight
      const wasVisible = this.footerVisible
      this.footerVisible = rect.top <= viewportHeight && rect.bottom >= 0
      if (!this.footerVisible) {
        this.scrollAtFooter = null
      } else if (!wasVisible || this.scrollAtFooter === null) {
        this.scrollAtFooter = scrollTop
      }
    },
    getScrollTop() {
      if (typeof window === 'undefined') return 0

      return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0
    },
    loadMore() {
      if (!this.hasMorePosts || this.isLoading) return

      this.isLoading = true
      const appendPosts = () => {
        this.visibleCount = Math.min(
          this.visibleCount + this.perPage,
          this.totalPosts
        )
        this.setPosts()
        this.persistVisibleCount()
        this.isLoading = false

        if (!this.hasMorePosts) {
          this.disconnectInfiniteScroll()
        } else {
          this.$nextTick(() => {
            this.updateFooterVisibility(this.getScrollTop())
          })
        }
      }

      if (typeof window !== 'undefined' && window.requestAnimationFrame) {
        window.requestAnimationFrame(appendPosts)
      } else {
        appendPosts()
      }
    },
    scrollToList() {
      if (typeof window === 'undefined' || !this.$refs.postList) return

      const prefersReducedMotion = window.matchMedia
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const top = this.$refs.postList.getBoundingClientRect().top
        + window.pageYOffset
        - 76

      window.scrollTo({
        top: Math.max(0, top),
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      })
    }
  }
}
</script>

<style lang='stylus'>
.post-list
  margin-bottom 1.25rem
  overflow hidden
  .post-list-header
    min-height 4.8rem
    padding 1rem 1.5rem
    border-bottom 1px solid var(--borderColor)
    box-sizing border-box
    display flex
    align-items center
    justify-content space-between
    gap 1rem
    h2
      margin 0.15rem 0 0
      padding 0
      border none
      color var(--textColor)
      font-size 1.35rem
      line-height 1.3
      letter-spacing 0
    .post-list-kicker
      color $accentColor
      font-size 0.68rem
      font-weight 700
      line-height 1
      letter-spacing 0
    .post-count
      flex none
      color var(--textColor)
      font-size 0.82rem
      opacity 0.58
  .post-list-items
    display block
  .post
    position relative
    padding 1.45rem 1.65rem 1.35rem
    border-bottom 1px solid var(--borderColor)
    transition background-color 0.2s ease, border-color 0.2s ease
    box-sizing border-box
    &::after
      content ''
      position absolute
      top 1.1rem
      bottom 1.1rem
      left 0
      width 3px
      border-radius 0 2px 2px 0
      background $accentColor
      opacity 0
      transform scaleY(0.5)
      transition opacity 0.2s ease, transform 0.2s ease
    &:hover
      background rgba(17, 168, 205, 0.045)
      &::after
        opacity 1
        transform scaleY(1)
    &.is-sticky
      &::after
        background $activeColor
        opacity 0.65
        transform scaleY(1)
    &:last-child
      border-bottom none
    &.post-leave-active
      display none
    &.post-enter
      opacity 0
      transform translateY(8px)
    .post-meta
      min-height 1.45rem
      display flex
      align-items center
      flex-wrap wrap
      gap 0.45rem 0.7rem
      color var(--textColor)
      font-size 0.78rem
      line-height 1.45
      opacity 0.68
      .sticky-badge
        padding 0.1rem 0.42rem
        border 1px solid rgba(255, 87, 34, 0.5)
        border-radius 3px
        color $activeColor
        font-weight 600
        opacity 1
      .post-date
        &::before
          margin-right 0.3rem
      .post-categories
        display flex
        flex-wrap wrap
        gap 0.35rem
        a
          padding 0.08rem 0.45rem
          border-radius 3px
          background rgba(17, 168, 205, 0.1)
          color $accentColor
          line-height 1.4
          transition background-color 0.2s ease, color 0.2s ease
          &:hover
            background rgba(17, 168, 205, 0.18)
          &:focus-visible
            outline 2px solid $accentColor
            outline-offset 2px
    .title-wrapper
      h2
        margin 0.55rem 0 0
        padding 0
        font-size 1.32rem
        line-height 1.45
        border none
        letter-spacing 0
        a
          color var(--textColor)
          transition color 0.2s ease
          &:hover
            color $accentColor
          &:focus-visible
            outline 2px solid $accentColor
            outline-offset 3px
        .title-tag
          display inline-block
          margin-left 0.25rem
          padding 0.05rem 0.35rem
          border 1px solid $activeColor
          border-radius 0.2rem
          color $activeColor
          font-size 0.72rem
          line-height 1.2
          vertical-align 0.12rem
    .excerpt-wrapper
      margin 0.65rem 0 0
      overflow hidden
      .excerpt
        max-height 4.8em
        margin 0
        overflow hidden
        color var(--textColor)
        font-size 0.92rem
        line-height 1.6
        opacity 0.68
        > *
          margin 0
        h1, h2, h3
          display none
        img, pre, div[class*="language-"]
          display none
    .post-footer
      min-height 1.5rem
      margin-top 0.85rem
      display flex
      align-items center
      justify-content space-between
      gap 1rem
      .post-tags-placeholder
        flex 1
      .post-tags
        min-width 0
        display flex
        align-items center
        flex-wrap wrap
        gap 0.35rem 0.65rem
        color var(--textColor)
        font-size 0.78rem
        opacity 0.55
        &::before
          flex none
        a
          color inherit
          transition color 0.2s ease
          &::before
            content '#'
          &:hover
            color $accentColor
          &:focus-visible
            outline 2px solid $accentColor
            outline-offset 2px
      .readmore
        flex none
        display inline-flex
        align-items center
        gap 0.25rem
        color $accentColor
        font-size 0.82rem
        font-weight 600
        line-height 1.5
        transition color 0.2s ease
        .iconfont
          font-size 0.65rem
          transition transform 0.2s ease
        &:hover
          color darken($accentColor, 12%)
          .iconfont
            transform translateX(3px)
        &:focus-visible
          outline 2px solid $accentColor
          outline-offset 3px
  .post-empty
    padding 3rem 1.5rem
    color var(--textColor)
    text-align center
    opacity 0.55
  .post-load-more
    min-height 5.6rem
    padding 1rem 1.5rem
    border-top 1px solid var(--borderColor)
    box-sizing border-box
    display flex
    align-items center
    justify-content center
    flex-direction column
    gap 0.5rem
    .load-more-button
      min-width 8.8rem
      min-height 2.55rem
      padding 0.55rem 1.1rem
      border 1px solid rgba(17, 168, 205, 0.45)
      border-radius 4px
      background transparent
      color $accentColor
      font-family inherit
      font-size 0.88rem
      font-weight 600
      line-height 1.4
      cursor pointer
      transition background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease
      &:hover:not(:disabled)
        border-color $accentColor
        background rgba(17, 168, 205, 0.08)
      &:active:not(:disabled)
        background rgba(17, 168, 205, 0.14)
      &:focus-visible
        outline 2px solid $accentColor
        outline-offset 3px
      &:disabled
        cursor wait
        opacity 0.58
    .load-more-status,
    .all-posts-loaded
      margin 0
      color var(--textColor)
      font-size 0.76rem
      line-height 1.5
      opacity 0.55
.theme-style-line
  .post-list
    border 1px solid var(--borderColor)
    border-radius 5px
    .post:last-child
      border-bottom none
.theme-mode-dark
  .post-list
    .post-list-header .post-list-kicker
      color #b160ea
    .post
      &:hover
        background rgba(177, 96, 234, 0.07)
      &::after
        background #b160ea
      &.is-sticky::after
        background $activeColor
      .post-meta .post-categories a
        background rgba(177, 96, 234, 0.12)
        color #b160ea
        &:hover
          background rgba(177, 96, 234, 0.2)
      .title-wrapper h2 a:hover,
      .post-footer .post-tags a:hover,
      .post-footer .readmore
        color #b160ea
    .post-load-more .load-more-button
      border-color rgba(177, 96, 234, 0.5)
      color #b160ea
      &:hover:not(:disabled)
        border-color #b160ea
        background rgba(177, 96, 234, 0.1)
      &:active:not(:disabled)
        background rgba(177, 96, 234, 0.16)
@media (max-width $MQMobile)
  .post-list
    border-radius 0
    .post-list-header
      min-height 4.4rem
      padding 0.9rem 1.1rem
      h2
        font-size 1.22rem
    .post
      padding 1.2rem 1.1rem 1.1rem
      &::after
        top 0.85rem
        bottom 0.85rem
      .title-wrapper h2
        font-size 1.15rem
        line-height 1.5
        a
          font-weight 500
      .excerpt-wrapper .excerpt
        max-height 3.2em
      .post-footer
        align-items flex-end
        .post-tags a:nth-child(n+4)
          display none
    .post-load-more
      min-height 5.2rem
      padding 0.9rem 1.1rem
      .load-more-button
        width 100%
        min-height 2.75rem
@media (prefers-reduced-motion: reduce)
  .post-list .post,
  .post-list .post::after,
  .post-list .post a,
  .post-list .load-more-button
    transition none
</style>
