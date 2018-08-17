<template>
  <div>
    <div class="index-goodRecommend-head">
      {{title}}
    </div>
    <good-grid :data="goods"></good-grid>
  </div>
</template>
<script>
import GoodList from 'components/GoodList.vue'
import GoodGrid from 'components/GoodGrid.vue'
import ArticleCard from 'components/ArticleCard.vue'
export default {
  props: ['type', 'title', 'goods'],
  components: {
    GoodList,
    GoodGrid,
    ArticleCard
  }
}
</script>
<style>
.grid-recommend-head,
.article-recommend-head,
.article-good-recommend-head {
  font-size: 14px;
  color: #868683;
  text-align: center;
  padding: 30px 0;
}
.index-goodRecommend-head {
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: #fff;
  text-align: center;
  border-top: 8px solid #efeff4;
}
.article-good-recommend-wrap {
  margin-left: 8px;
  margin-right: 8px;
  background-color: #fff;
}
.article-good-recommend-foot {
  display: block;
  height: 30px;
  margin-left: 8px;
  margin-right: 8px;
  background-color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: #404040;
  border-top: 1px solid #f8f8f8;
}
.grid-recommend-wrap {
  padding-left: 8px;
  padding-right: 8px;
}
</style>
