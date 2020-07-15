<template>
  <div class="post-container">
    <div v-if="postList.length > 0">
      <div class="post" v-for="item in postList" :key="item.id">
        <div class="post-header">
          <router-link :to="'/detail/' + item.id">{{ item.title }}</router-link>
        </div>
        <div class="post-content">
          <p v-html="item.des" />
        </div>
        <div class="post-footer">
          <i class="el-icon-date"></i>
          <p>{{ item.createTime }}</p>
          <i class="el-icon-price-tag"></i>
          <a class="category-link">{{ item.category.name }}</a>
        </div>
      </div>
    </div>
    <div class="non-post" v-else>
      <p>暂未发布文章</p>
    </div>
  </div>
</template>
<script>
import mockData from "../../../data/archives.js";
export default {
  name: "Home",
  components: {},
  props: [],
  data() {
    return {
      postList: []
    };
  },
  created() {
    const { archivesList } = mockData;
    this.postList = archivesList.data.list;
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
