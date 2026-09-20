<template>
  <div class="tags-wrapper card-box" :class="{ 'is-compact': compact }">
    <header class="tags-header">
      <router-link
        to="/tags/"
        class="title iconfont icon-biaoqian1"
        title="全部标签"
      >{{ length === 'all' ? '全部标签' : '热门标签' }}</router-link>
      <router-link
        v-if="compact"
        to="/tags/"
        class="all-tags-link"
        :aria-label="`查看全部 ${tagsData.length} 个标签`"
      >全部 {{ tagsData.length }}</router-link>
    </header>
    <div class="tags">
      <router-link
        v-for="item in tags"
        :to="`/tags/?tag=${encodeURIComponent(item.key)}`"
        :key="item.key"
        :style="getTagStyle(item)"
        :class="{ active: item.key === tag }"
        :aria-current="item.key === tag ? 'page' : null"
        :title="`${item.key}，${item.length} 篇文章`"
      >
        <span class="tag-name">{{ item.key }}</span>
        <span class="tag-count">{{ item.length }}</span>
      </router-link>
      <router-link
        to="/tags/"
        class="more-tag"
        v-if="!compact && length !== 'all' && tagsData.length > length"
      >更多...</router-link>
    </div>
  </div>
</template>

<script>
const TAG_PALETTE = [
  { bg: '#E6F6FA', text: '#087A92', countBg: '#CDECF3', border: '#B7E1EA' },
  { bg: '#FFF1DD', text: '#855116', countBg: '#F9E2BD', border: '#F1D3A2' },
  { bg: '#E8F6EC', text: '#287443', countBg: '#D2EBD9', border: '#BCE0C6' },
  { bg: '#FBEAEC', text: '#8E3F4C', countBg: '#F4D5DA', border: '#EABFC7' },
  { bg: '#FCEEE7', text: '#934E38', countBg: '#F4DCD1', border: '#EAC6B7' },
  { bg: '#EDF0F8', text: '#4D6089', countBg: '#DCE2F0', border: '#C9D2E7' },
  { bg: '#F1ECFA', text: '#684B91', countBg: '#E3D9F3', border: '#D3C4EA' },
  { bg: '#EAF6F2', text: '#25705E', countBg: '#D5EBE4', border: '#BDE0D5' }
]

export default {
  props: {
    tag: {
      type: String,
      default: ''
    },
    tagsData: {
      type: Array,
      default: () => []
    },
    length: {
      type: [String, Number],
      default: 'all'
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tags () {
      if (this.length === 'all') {
        return this.tagsData
      }

      const tagsData = this.compact
        ? [...this.tagsData].sort((a, b) => {
          return b.length - a.length || a.key.localeCompare(b.key, 'zh-CN')
        })
        : this.tagsData

      return tagsData.slice(0, this.length)
    }
  },
  methods: {
    getTagStyle (item) {
      const key = String(item.key)
      let hash = 0

      for (let i = 0; i < key.length; i++) {
        hash = ((hash << 5) - hash + key.charCodeAt(i)) | 0
      }

      const color = TAG_PALETTE[Math.abs(hash) % TAG_PALETTE.length]
      return {
        '--tag-bg': color.bg,
        '--tag-text': color.text,
        '--tag-count-bg': color.countBg,
        '--tag-border': color.border
      }
    }
  }
}
</script>

<style lang='stylus'>
.tags-wrapper
  padding 0 .95rem
  .tags-header
    display flex
    align-items center
    justify-content space-between
    gap 0.75rem
  .title
    color var(--textColor)
    opacity 0.9
    font-size 1.2rem
    &::before
      margin-right 0.3rem
    &:focus-visible
      outline 2px solid $accentColor
      outline-offset 3px
  .all-tags-link
    flex none
    color var(--textColor)
    font-size 0.76rem
    line-height 1.5
    opacity 0.55
    transition color 0.2s ease, opacity 0.2s ease
    &:hover
      color $accentColor
      opacity 1
    &:focus-visible
      outline 2px solid $accentColor
      outline-offset 3px
  .tags
    display flex
    align-items center
    flex-wrap wrap
    gap 0.55rem 0.48rem
    padding 0.85rem 0 0.55rem
    text-align left
    a
      min-width 0
      max-width 100%
      min-height 2rem
      padding 0.34rem 0.42rem 0.34rem 0.68rem
      border 1px solid var(--tag-border)
      border-radius 4px
      box-sizing border-box
      display inline-flex
      align-items center
      background var(--tag-bg)
      color var(--tag-text)
      font-size 0.82rem
      font-weight 500
      line-height 1.25rem
      opacity 1
      transition border-color 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease, transform 0.2s ease
      .tag-name
        min-width 0
        max-width 10rem
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      .tag-count
        min-width 1.2rem
        margin-left 0.42rem
        padding 0 0.28rem
        border-radius 3px
        background var(--tag-count-bg)
        box-sizing border-box
        color var(--tag-text)
        font-size 0.68rem
        font-variant-numeric tabular-nums
        font-weight 600
        line-height 1.25rem
        text-align center
      &:hover
        border-color var(--tag-text)
        box-shadow 0 4px 10px rgba(0, 0, 0, 0.08)
        filter saturate(1.08)
        transform translateY(-1px)
        text-decoration none
      &:focus-visible
        outline 2px solid $accentColor
        outline-offset 2px
      &:active
        box-shadow none
        transform translateY(0)
      &.active
        border-color var(--tag-text)
        box-shadow inset 0 0 0 1px var(--tag-text), 0 4px 10px rgba(0, 0, 0, 0.08)
        &:hover
          text-decoration none
    .more-tag
      padding-right 0.68rem
      background var(--mainBg)
      border-color var(--borderColor)
      color var(--textColor)
      font-weight 400
  &.is-compact
    padding 0.95rem
    .title
      font-size 1.05rem
      line-height 1.5
    .tags
      margin 0.75rem 0 0
      padding 0
      display flex
      align-items center
      flex-wrap wrap
      gap 0.48rem 0.42rem
      text-align left
      a
        min-height 1.85rem
        padding 0.28rem 0.38rem 0.28rem 0.58rem
        font-size 0.78rem
        .tag-name
          max-width 8.5rem
        .tag-count
          min-width 1.1rem
          padding 0 0.22rem
          font-size 0.68rem
          line-height 1.2rem
.theme-mode-dark
  .tags-wrapper
    .all-tags-link:hover
      color #b160ea
@media (prefers-reduced-motion: reduce)
  .tags-wrapper a
    transition none
    &:hover,
    &:active
      transform none
</style>
