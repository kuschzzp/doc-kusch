<template>
  <nav class="pagination card-box" aria-label="文章分页">
    <button
      class="pagination-nav prev"
      type="button"
      :disabled="currentPage === 1"
      aria-label="上一页"
      @click="goPrev"
    >
      <span class="iconfont icon-jiantou-zuo" aria-hidden="true"></span>
      <span class="nav-label">上一页</span>
    </button>

    <div class="pagination-list" role="group" aria-label="页码">
      <button
        v-for="item in pageItems"
        :key="item.key"
        :class="{
          active: item.type === 'page' && currentPage === item.page,
          ellipsis: item.type === 'gap'
        }"
        :aria-current="
          item.type === 'page' && currentPage === item.page ? 'page' : null
        "
        :aria-label="item.type === 'page' ? `第 ${item.page} 页` : null"
        :disabled="item.type === 'gap'"
        type="button"
        @click="item.type === 'page' && goIndex(item.page)"
      >{{ item.type === 'page' ? item.page : '…' }}</button>
    </div>

    <span
      class="mobile-page-state"
      :aria-label="`第 ${currentPage} 页，共 ${pages} 页`"
      aria-live="polite"
    >
      {{ currentPage }} / {{ pages }}
    </span>

    <button
      class="pagination-nav next"
      type="button"
      :disabled="currentPage === pages"
      aria-label="下一页"
      @click="goNext"
    >
      <span class="nav-label">下一页</span>
      <span class="iconfont icon-jiantou-you" aria-hidden="true"></span>
    </button>
  </nav>
</template>

<script>
export default {
  props: {
    total: { // 总长度
      type: Number,
      default: 10
    },
    perPage: { // 每页长
      type: Number,
      default: 10
    },
    currentPage: { // 当前页
      type: Number,
      default: 1
    }
  },
  computed: {
    pages() { // 总页数
      return Math.ceil(this.total / this.perPage)
    },
    pageItems() {
      if (this.pages <= 7) {
        return Array.from({ length: this.pages }, (_, index) => ({
          key: `page-${index + 1}`,
          type: 'page',
          page: index + 1
        }))
      }

      let start = Math.max(2, this.currentPage - 1)
      let end = Math.min(this.pages - 1, this.currentPage + 1)

      if (this.currentPage <= 4) {
        start = 2
        end = 5
      } else if (this.currentPage >= this.pages - 3) {
        start = this.pages - 4
        end = this.pages - 1
      }

      const items = [{ key: 'page-1', type: 'page', page: 1 }]
      if (start > 2) {
        items.push({ key: 'gap-start', type: 'gap' })
      }
      for (let page = start; page <= end; page++) {
        items.push({ key: `page-${page}`, type: 'page', page })
      }
      if (end < this.pages - 1) {
        items.push({ key: 'gap-end', type: 'gap' })
      }
      items.push({ key: `page-${this.pages}`, type: 'page', page: this.pages })
      return items
    }
  },
  methods: {
    goPrev() {
      let currentPage = this.currentPage
      if (currentPage > 1) {
        this.handleEmit(--currentPage)
      }
    },
    goNext() {
      let currentPage = this.currentPage
      if (currentPage < this.pages) {
        this.handleEmit(++currentPage)
      }
    },
    goIndex(i) {
      if (i !== this.currentPage) {
        this.handleEmit(i)
      }
    },
    handleEmit(i) {
      this.$emit('getCurrentPage', i)
    }
  }
}
</script>

<style lang='stylus'>
.pagination
  width max-content
  max-width calc(100% - 1.8rem)
  min-height 3.25rem
  margin 0 auto 3rem
  padding 0.35rem
  box-sizing border-box
  display flex
  align-items center
  justify-content center
  gap 0.25rem
  button
    width 2.35rem
    height 2.35rem
    padding 0
    border 1px solid transparent
    border-radius 5px
    box-sizing border-box
    background transparent
    color var(--textColor)
    font inherit
    font-size 0.88rem
    line-height 1
    cursor pointer
    transition background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease, transform 0.18s ease
    &:hover:not(:disabled)
      border-color rgba(17, 168, 205, 0.25)
      background rgba(17, 168, 205, 0.08)
      color $accentColor
      transform translateY(-1px)
    &:active:not(:disabled)
      transform translateY(0)
    &:focus-visible
      outline 2px solid $accentColor
      outline-offset 2px
    &:disabled
      border-color transparent
      background transparent
      color var(--textColor)
      cursor not-allowed
      opacity 0.28
      transform none
  .pagination-nav
    width auto
    min-width 5.2rem
    padding 0 0.75rem
    display inline-flex
    align-items center
    justify-content center
    gap 0.45rem
    .iconfont
      font-size 0.55rem
  .pagination-list
    display flex
    align-items center
    gap 0.15rem
    button
      &.active
        background $accentColor
        border-color $accentColor
        color #fff
        font-weight 700
        &:hover
          background $accentColor
          color #fff
          transform none
      &.ellipsis
        border-color transparent
        opacity 0.45
  .mobile-page-state
    min-width 4.5rem
    display none
    color var(--textColor)
    font-size 0.86rem
    font-variant-numeric tabular-nums
    text-align center
    opacity 0.68
.theme-mode-dark
  .pagination
    button
      &:hover:not(:disabled)
        border-color rgba(177, 96, 234, 0.32)
        background rgba(177, 96, 234, 0.1)
        color #b160ea
      &:focus-visible
        outline-color #b160ea
    .pagination-list button.active
      border-color #904ac2
      background #904ac2
      color #fff
@media (max-width $MQMobile)
  .pagination
    width calc(100% - 1.8rem)
    max-width 28rem
    justify-content space-between
    .pagination-list
      display none
    .mobile-page-state
      display block
    .pagination-nav
      min-width 4.75rem
      padding 0 0.65rem
@media (max-width 390px)
  .pagination
    .pagination-nav
      min-width 2.5rem
      width 2.5rem
      padding 0
      .nav-label
        display none
@media (prefers-reduced-motion: reduce)
  .pagination button
    transition none
</style>
