<template>
  <div class="main">
    <header>
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="20" :lg="16">
          <div class="header-container">
            <div class="nav-logo">
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
    </header>

    <div class="content">
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="20" :lg="16">
          <router-view />
        </el-col>
      </el-row>
    </div>

    <footer>
      <p>Powered by Ry09iu Copyright © 2018-2020 Ry09iu.</p>
    </footer>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.main {
  margin: 0 auto;
}

header {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
  width: 100%;
  color: #313131;

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

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 84px;
  width: 100%;
  font-size: 12px;
  color: #888;
  //   background: #f3f6ff;
}
</style>
