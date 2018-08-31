<template>
  <div>
    <div class="index-goodRecommend-head">
      {{title}}
    </div>
    <div>
      <ul class="zlist-2-item">
        <li class="item" v-for="p in products" :key="p.id">
          <router-link :to="{
					name: 'good',
					params: {id: p.id}
				}">
            <div class="img_wrap">
              <img :src="p.img_list[0].url" />
            </div>

            <div class="info">
              <div class="title z-ellipsis-2">
                {{p.name}}
              </div>
              <div class="subtitle z-ellipsis-2">
                ￥{{p.salePrice}}
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title', 'products']
}
</script>
<style lang="stylus">
.grid-recommend-head, .article-recommend-head, .article-good-recommend-head {
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

li {
  list-style: none;
}

.zlist-2-item {
  width: 100%;
  overflow: hidden;

  .item {
    float: left;
    width: 50%;
    background: #efeff4;

    a {
      padding-top: 14px;
      margin-top: 1px;
      margin-left: 1px;
      display: block;
      background: #fff;

      .info {
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }

    .img_wrap {
      height: 148px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}

.zlist-2-item .item:nth-child(even) a {
  padding-left: 14px;
  padding-right: 14px;
}

.zlist-2-item .item:nth-child(odd) a {
  padding-left: 14px;
  padding-right: 14px;
}

.zlist-2-item .item a .info .title {
  font-size: 14px;
  line-height: 1.4;
  color: #404040;
  text-align: center;
}

.zlist-2-item .item a .info .subtitle {
  font-size: 20px;
  font-weight: 500;
  color: #404040;
  text-align: center;
  padding-top: 14px;
  font-family: 'heiti';
}
</style>
