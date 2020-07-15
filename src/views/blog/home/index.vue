<template>
  <el-container>
    <el-main>
      <div class="archives" v-for="item in archivesList" :key="item.id">
        <div class="archives-header">
          <a href="#">{{ item.title }}</a>
        </div>
        <div class="archives-content">
          <p v-html="item.des" />
        </div>
        <div class="archives-footer">
          <i class="el-icon-date"></i>
          <p>{{ item.createTime }}</p>
          <i class="el-icon-price-tag"></i>
          <p>{{ item.category.name }}</p>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import mockData from "../../../data/archives.js";
export default {
  name: "Home",
  components: {},
  props: [],
  data() {
    return {
      archivesList: []
    };
  },
  created() {
    const { archivesList } = mockData;
    this.archivesList = archivesList.data.list;
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
