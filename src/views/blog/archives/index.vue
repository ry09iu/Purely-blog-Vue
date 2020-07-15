<template>
  <el-container>
    <div class="archives-container" v-for="list in archivesList" :key="list.id">
      <p class="year">{{ list.year }}</p>
      <div class="archives" v-for="item in list.list" :key="item.id">
        <router-link :to="'/detail/' + item.id">{{ item.title }}</router-link>
        <p class="date">{{ item.createTime.split(" ")[0] }}</p>
      </div>
    </div>
  </el-container>
</template>
<script>
import mockData from "../../../data/archives.js";
export default {
  name: "Archives",
  components: {},
  props: [],
  data() {
    return {
      archivesList: []
    };
  },
  created() {
    const { archivesList } = mockData;
    let list = [
      {
        id: 1,
        year: "2020",
        list: archivesList.data.list
      }
    ];
    this.archivesList = list;
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
