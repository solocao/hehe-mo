<template>
  <div class="category">
    <ul class="category-menu vux-1px-r">
      <li v-for="(item,index) in menu" :key="index" class="menu-item" :class="[currentIndex === index?'active':'']" @touchstart="switchCategory(index,item.id)">
        {{item.name}}
      </li>
    </ul>
    <div class="category-main">
      <div class="category-detail-box">
        <div class="category-top" v-if="menu.length>0">
          <div class="category-header">
            <img :src="menuBanner" alt="small-banner">
          </div>
          <div class="category-title">
            <h2 class="text">{{categoryTitle}}</h2>
          </div>
        </div>
        <div class="category-list">
          <div class="category-goods-items" v-for="(item,index) in products" @click="linktoDetail(item.id)" :key="index">
            <div class="goods-image">
              <img :src="item.img_list[0].url" alt="">

            </div>

            <div class="goods-name">{{item.name}}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ProductWrap from 'components/ProductWrap.vue'
export default {
  name: 'category',
  components: {
    ProductWrap
  },
  data() {
    return {
      menu: [{ 'id': 2, 'name': '爱玛', 'topic_img_id': 6, 'description': null, 'img': { 'url': 'http://p2mvs0o8r.bkt.clouddn.com/blog/pretty-vendor/category-dryfruit.png' } }, { 'id': 3, 'name': '绿源', 'topic_img_id': 5, 'description': null, 'img': { 'url': 'http://p2mvs0o8r.bkt.clouddn.com/blog/pretty-vendor/category-vg.png' } }, { 'id': 4, 'name': '宝岛', 'topic_img_id': 7, 'description': null, 'img': { 'url': 'http://p2mvs0o8r.bkt.clouddn.com/blog/pretty-vendor/category-fry-a.png' } }, { 'id': 5, 'name': '点心', 'topic_img_id': 4, 'description': null, 'img': { 'url': 'http://p2mvs0o8r.bkt.clouddn.com/blog/pretty-vendor/category-cake.png' } }, { 'id': 6, 'name': '比德文', 'topic_img_id': 8, 'description': null, 'img': { 'url': 'http://p2mvs0o8r.bkt.clouddn.com/blog/pretty-vendor/category-tea.png' } }, { 'id': 7, 'name': '小牛', 'topic_img_id': 9, 'description': null, 'img': { 'url': 'http://p2mvs0o8r.bkt.clouddn.com/blog/pretty-vendor/category-rice.png' } }],
      list: [],
      currentIndex: 0,
      products: [{ 'meta': { 'views': 3, 'likes': 0, 'comments': 0 }, 'keywords': [], 'state': 1, 'public': 1, 'password': '', 'count': 12, 'img_list': [{ 'name': '20180306140759703026362.png', 'url': 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/20180306140759703026362.png', 'cover': 0 }], 'tag': [], 'category': [], '_id': '5b703daa49cd5892bfc749f0', 'name': '爱玛电动车 - 18可酷', 'official_price': 1300, 'sale_price': 100, 'create_user': '5b388dd281a1a55c0588c78f', 'create_at': '2018-08-12T14:01:14.728Z', 'extends': [], '__v': 0 }, { 'meta': { 'views': 0, 'likes': 0, 'comments': 0 }, 'keywords': [], 'state': 1, 'public': 1, 'password': '', 'count': 12, 'img_list': [{ 'name': '20160617163627882877616.jpg', 'url': 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/20160617163627882877616.jpg', 'cover': 0 }], 'tag': [], 'category': [], '_id': '5b703d9849cd5892bfc749ef', 'name': '  新蕾电动车 - DM25二代', 'official_price': 1300, 'sale_price': 100, 'create_user': '5b388dd281a1a55c0588c78f', 'create_at': '2018-08-12T14:00:56.177Z', 'extends': [], '__v': 0 }, { 'meta': { 'views': 0, 'likes': 0, 'comments': 0 }, 'keywords': [], 'state': 1, 'public': 1, 'password': '', 'count': 12, 'img_list': [{ 'name': '20160617112403388568432.jpg', 'url': 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/20160617112403388568432.jpg', 'cover': 0 }], 'tag': [], 'category': [], '_id': '5b703d7f49cd5892bfc749ee', 'name': '新蕾电动车 - Q7九代', 'official_price': 1300, 'sale_price': 100, 'create_user': '5b388dd281a1a55c0588c78f', 'create_at': '2018-08-12T14:00:31.118Z', 'extends': [], '__v': 0 }, { 'meta': { 'views': 0, 'likes': 0, 'comments': 0 }, 'keywords': [], 'state': 1, 'public': 1, 'password': '', 'count': 12, 'img_list': [{ 'name': '20160617111020252050821.jpg', 'url': 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/20160617111020252050821.jpg', 'cover': 0 }], 'tag': [], 'category': [], '_id': '5b703d6549cd5892bfc749ed', 'name': '新蕾电动车 - 米月', 'official_price': 1300, 'sale_price': 100, 'create_user': '5b388dd281a1a55c0588c78f', 'create_at': '2018-08-12T14:00:05.069Z', 'extends': [], '__v': 0 }, { 'meta': { 'views': 0, 'likes': 0, 'comments': 0 }, 'keywords': [], 'state': 1, 'public': 1, 'password': '', 'count': 12, 'img_list': [{ 'name': '20160617164142462847657.jpg', 'url': 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/20160617164142462847657.jpg', 'cover': 0 }], 'tag': [], 'category': [], '_id': '5b703c7c49cd5892bfc749ec', 'name': '新蕾电动车 - 水晶', 'official_price': 1300, 'sale_price': 100, 'create_user': '5b388dd281a1a55c0588c78f', 'create_at': '2018-08-12T13:56:12.598Z', 'extends': [], '__v': 0 }, { 'meta': { 'views': 0, 'likes': 0, 'comments': 0 }, 'keywords': [], 'state': 1, 'public': 1, 'password': '', 'count': 12, 'img_list': [{ 'name': '20160622161410721365432.jpg', 'url': 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/20160622161410721365432.jpg', 'cover': 0 }], 'tag': [], 'category': [], '_id': '5b703bae49cd5892bfc749eb', 'name': '新蕾电动车 - 直通4号', 'official_price': 1300, 'sale_price': 100, 'create_user': '5b388dd281a1a55c0588c78f', 'create_at': '2018-08-12T13:52:46.824Z', 'extends': [], '__v': 0 }, { 'meta': { 'views': 0, 'likes': 0, 'comments': 0 }, 'keywords': [], 'state': 1, 'public': 1, 'password': '', 'count': 12, 'img_list': [{ 'name': '20160810172416827813885.png', 'url': 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/20160810172416827813885.png', 'cover': 0 }], 'tag': [], 'category': [], '_id': '5b703afc49cd5892bfc749ea', 'name': '极车', 'official_price': 1300, 'sale_price': 100, 'create_user': '5b388dd281a1a55c0588c78f', 'create_at': '2018-08-12T13:49:48.572Z', 'extends': [], '__v': 0 }, { 'meta': { 'views': 0, 'likes': 0, 'comments': 0 }, 'keywords': [], 'state': 1, 'public': 1, 'password': '', 'count': 12, 'img_list': [{ 'name': '20170518162006401751238.jpg', 'url': 'http://hehecms.oss-cn-hangzhou.aliyuncs.com/20170518162006401751238.jpg', 'cover': 0 }], 'tag': [], 'category': [], '_id': '5b703ade49cd5892bfc749e9', 'name': '测试商品', 'official_price': 1300, 'sale_price': 100, 'create_user': '5b388dd281a1a55c0588c78f', 'create_at': '2018-08-12T13:49:18.749Z', 'extends': [], '__v': 0 }]

    }
  },
  created() {

  },
  computed: {
    menuBanner() {
      return this.menu[this.currentIndex].img.url
    },
    categoryTitle() {
      return this.menu[this.currentIndex].name
    }
  },
  methods: {
    switchCategory(index, id) {
      this.currentIndex = index
      this.getProduct(id)
    },
    linktoDetail(id) {
      this.$router.push({ path: '/page/detail', query: { id: id } })
    },
    async getProduct(id) {
      const params = {
        url: 'https://www.easy-mock.com/mock/5a4896ba62de717d44f2406e/api/v1/product/by_category',
        payload: {
          id: id
        }
      }
      const result = await this.get(params)
      this.list = result.data.list
    }
  }
}
</script>

<style scoped lang="less">
.category {
  height: 100%;
  display: flex;
  overflow: hidden;
  .category-menu {
    width: 75px;
    flex: 0 0 75px;
    height: 100%;
    .menu-item {
      height: 25px;
      padding: 10px 0;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 3px solid #fff;
      &.active {
        color: #0fc37c;
        border-color: #0fc37c;
        font-size: 15px;
        // transform: scale(1.125);
        transition: all linear 0.3s;
      }
    }
  }
  .category-main {
    flex: 1;
    height: 100%;
    transition: all 500ms ease-in-out;
    .category-detail-box {
      overflow-y: auto;
      padding: 20px;
      height: 100%;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      .category-top {
        .category-header {
          img {
            width: 100%;
            vertical-align: top;
            border-radius: 2px;
          }
        }
        .category-title {
          margin: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          .text {
            font-size: 12px;
            color: #0fc37c;
            font-weight: normal;
            &::before,
            &::after {
              content: "";
              display: inline-block;
              position: relative;
              top: -3px;
              width: 35px;
              height: 1px;
              margin: 0 10px;
              background-color: #979797;
              transform: scaleY(0.5);
            }
          }
        }
      }
      .category-list {
        display: flex;
        flex-wrap: wrap;
        .category-goods-items {
          width: 50%;
          text-align: center;
          height: 140px;
          &:nth-child(2n) {
            margin-right: 0;
          }
          .goods-image {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              max-width: 100%;
              max-height: 100%;
            }
          }
          .goods-name {
            color: #444452;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
