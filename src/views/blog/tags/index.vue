<template>
  <el-container>
    <div class="tags-wrap" v-for="item in tagsList" :key="item.id">
      <a class="tags">{{ item.name }}</a>
    </div>
  </el-container>
</template>
<script>
export default {
  name: "Tags",
  components: {},
  props: [],
  data() {
    return {
      tagsList: [
        {
          id: 1,
          name: "前端"
        },
        {
          id: 2,
          name: "Java"
        },
        {
          id: 3,
          name: "计算机"
        },
        {
          id: 4,
          name: "Vue"
        },
        {
          id: 5,
          name: "React"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "./style.scss";
</style>
