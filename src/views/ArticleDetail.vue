<template>
  <div class="z-content" v-show="!loading">
    <view-box>
      <div class="article-detail-wrap">
        <div class="article-detail-head">
          <div class="title">{{article.title}}</div>
          <div class="info">
            <span>{{article.createAt}}</span>
            <span>{{article.author}}</span>
            <share-popup class="share" :shareCls="'zui-icon-SHARE2'" :share="shareInfo">
            </share-popup>
          </div>
        </div>

        <div class="article-detail-body" v-html="article.content">
        </div>

        <div class="article-detail-foot">

          <div class="like">
            <span class="zui-icon " :class="likeState ? likeCls.likedCls : likeCls.unlikeCls" @click="likeHandler">
            </span>
            <span>{{article.like}}</span>
          </div>
          <div class="read">
            阅读
            <span>{{article.read}}</span>
          </div>

          <div class="reprint">转载</div>
        </div>
      </div>

      <recommend :type="'ARTICLEGOODRECOMMEND'" :recommendTitle="'商品推荐'" :recommendData="recommendGoods">
      </recommend>

      <recommend :type="'ARTICLERECOMMEND'" :recommendTitle="'更多好文推荐'" :recommendData="recommendArticles">
      </recommend>
    </view-box>

    <router-link class="article-detail-bottombar" :to="{
				name: 'index'
			}">
      你就不去看看？
    </router-link>
  </div>
</template>
<script>
import { article, articleRecommend, articleGoods } from '../../data/data.js'

import SharePopup from 'components/sharePopup.vue'
import Recommend from 'components/Recommend.vue'
import { ViewBox } from 'vux'

export default {
  components: {
    Recommend,
    ViewBox,
    SharePopup
  },
  data () {
    return {
      likeState: false,
      likeCls: {
        unlikeCls: 'zui-icon-zan-before',
        likedCls: 'zui-icon-zan-after'
      },
      shareInfo: {
        qrcode: '/static/img/good-default.jpg',
        text: '长按二维码分享'
      }
    }
  },
  created () {
    this.initArticle()
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    article () {
      return this.$store.getters.article
    },
    recommendArticles () {
      return this.$store.getters.recArtArticles
    },
    recommendGoods () {
      return this.$store.getters.recArtGoods
    }
  },
  methods: {
    likeHandler () {
      if (this.likeState) {

      } else {
        this.likeState = true
        this.article.like++
      }
    },
    initArticle () {
      this.$store.dispatch('getArticle')
    }
  }
}
</script>

<style lang="less">
.article-detail-bottombar {
  height: 44px;
  line-height: 44px;
  display: table;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  background-color: #eee;
}
.article-detail-bottombar a {
  display: table-cell;
  color: #909090;
  text-align: center;
  vertical-align: middle;
}

.article-detail-wrap {
  background-color: #fff;
}
.article-detail-head {
  padding: 20px 14px 20px 14px;
}
.article-detail-head .title {
  color: #404040;
  letter-spacing: 1px;
  line-height: 30px;
  font-size: 20px;
}
.article-detail-head .info {
  color: #868683;
  font-size: 12px;
  padding-top: 8px;
  overflow: hidden;
}
.article-detail-head .info span {
  padding-right: 10px;
}
.article-detail-head .info .share {
  float: right;
}

.article-detail-body {
  padding: 0px 14px 25px 14px;
  line-height: 30px;
  font-size: 16px;
  letter-spacing: 1px;
}
.article-detail-foot {
  padding-bottom: 6px;
  padding-left: 14px;
  padding-right: 14px;
  overflow: hidden;
}
.article-detail-foot .reprint,
.article-detail-foot .read,
.article-detail-foot .like {
  float: right;
  display: inline-block;
  padding-right: 10px;
  font-size: 12px;
  color: #868683;
}
.article-detail-foot .like .zui-icon {
  font-size: 12px;
}
.article-detail-foot .like .zui-icon-zan-before,
.article-detail-foot .like .zui-icon-zan-after {
  color: #808080;
}

.article-detail-bottombar {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: #a9926d;
}
</style>
