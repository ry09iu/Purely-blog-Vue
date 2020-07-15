<template>
  <div class="container">
    <div class="header">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="20" :lg="12">
          <div class="header-container">
            <div class="nav-logo" @click="goHome">
              <h3>Purely Blog</h3>
            </div>
            <div class="nav-menu">
              <router-link to="/">首页</router-link>
              <router-link to="/archives">归档</router-link>
              <router-link to="/tags">标签</router-link>
              <router-link to="/about">关于</router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="content">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="20" :lg="14">
          <router-view />
        </el-col>
      </el-row>
    </div>

    <div class="footer">
      <p>© Purely Blog 2020, Powered by Ry09iu.</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
}

.header {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
  width: 100%;
  color: #313131;

  .nav-logo {
    color: #515151;
    cursor: pointer;
  }

  .nav-menu a {
    margin: 0 14px;
    font-size: 14px;
    text-decoration: none;
    color: #616161;

    &:visited {
      color: #616161;
    }

    &:hover {
      color: #313131;
      font-weight: bolder;
    }
  }
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  height: 108px;
  width: 100%;
  font-size: 12px;
  color: #888;
}
</style>
