<template>
  <el-container>
    <div>
      <div class="detail-header">
        <h2>{{ archivesData.title }}</h2>
        <div class="detail-footer">
          <i class="el-icon-date"></i>
          <p>{{ archivesData.createTime }}</p>
          <i class="el-icon-price-tag"></i>
          <a class="category-link">{{ archivesData.category.name }}</a>
        </div>
      </div>

      <div class="detail-content">
        <p v-html="archivesData.content" />
      </div>
    </div>
  </el-container>
</template>
<script>
import mockData from "../../../data/archives.js";
export default {
  name: "Detail",
  components: {},
  props: [],
  data() {
    return {
      archivesData: ""
    };
  },
  created() {
    const { archivesList } = mockData;
    const post = archivesList.data.list.filter(
      v => v.id == this.$route.params.id
    );
    this.archivesData = post[0];
    console.log(this.archivesData);
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 80px;

  p {
    font-size: 14px;
    color: #616161;
  }
}
</style>
<style lang="scss" scoped>
@import "./style.scss";
</style>
