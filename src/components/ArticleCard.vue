<template>
	<div>
		<div class="article-list-card" v-for="item in articleList" :key="item.id">
			<router-link :to="{
					name: 'articleDetail',
					params: {id: item.id}
				}">
				<img :src="item.imgUrl" class="banner-img" alt="">
				<div class="footer">
					<div class="title z-ellipsisi">
						{{item.typeName}}
					</div>
					<div class="subtitle z-ellipsisi">
						{{item.description}}
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
  props: ['articleList'],
  mounted () {
    console.log('article')
    console.log(this.articleList)
  }
}
</script>
<style>
.article-list-card {
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 8px 8px 0 8px;
  background-color: #fff;
}
.article-list-card .footer {
  padding: 20px 0 35px;
  text-align: center;
  overflow: hidden;
}
.article-list-card .footer .title {
  margin: 0 20px;
  font-size: 18px;
  font-weight: 500;
  color: #404040;
}
.article-list-card .footer .subtitle {
  margin: 0 20px;
  padding-top: 8px;
  font-size: 15px;
  color: #868686;
}
.banner-img {
  width: 100%;
}
</style>
