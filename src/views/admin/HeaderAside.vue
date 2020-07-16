<template>
  <div class="container">
    <div class="header">
      <div class="header-container">
        <div class="nav-logo">
          <i
            v-if="collapse"
            class="el-icon-s-unfold"
            @click="handleCollapse"
          ></i>
          <i v-else class="el-icon-s-fold" @click="handleCollapse"></i>
          <h4 @click="goHome">Purely 博客管理</h4>
        </div>

        <el-dropdown>
          <div class="user-profile-body">
            <img class="user-avatar" src="../../assets/admin/logo.png" alt="" />
            <span class="user-name">
              Ry09iu
            </span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人资料</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="sidebar">
      <el-menu
        class="sidebar-el-menu"
        default-active="1-4-1"
        :collapse="collapse"
        mode="vertical"
        :show-timeout="200"
        background-color="#333a51"
        text-color="#f6f7f9"
        active-text-color="#409EFF"
      >
        <template v-for="item in asideMenu">
          <router-link v-if="!item.children" :to="item.path" :key="item.name">
            <el-menu-item :index="item.path">
              <i v-if="item.icon" :class="item.icon"></i>
              <span v-if="item.name" slot="title">{{ item.name }}</span>
            </el-menu-item>
          </router-link>

          <el-submenu v-else :index="item.name || item.path" :key="item.name">
            <template slot="title">
              <i v-if="item && item.icon" :class="item.icon"></i>
              <span v-if="item && item.name" slot="title">{{ item.name }}</span>
            </template>
            <template v-for="child in item.children">
              <router-link
                v-if="!child.hidden"
                :to="item.path + child.path"
                :key="child.name"
              >
                <el-menu-item :index="item.path + child.path">
                  <span v-if="child && child.name" slot="title">{{
                    child.name
                  }}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>

    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import bus from "./bus";
import { asideMenu } from "./menu";
export default {
  components: {},
  props: [],
  data() {
    return {
      collapse: false,
      asideMenu
    };
  },
  methods: {
    handleCollapse() {
      this.collapse = !this.collapse;
    },
    goHome() {
      this.$router.push("/admin");
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  background: #f3f3f3;
}

.header {
  //   padding: 0 32px;
  //   background: rgba(103, 195, 58, 0.9);
  background: #212844;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  width: 100%;
  color: #fff;

  .nav-logo {
    display: flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    font-size: 20px;

    h4 {
      margin-left: 10px;
      font-size: 18px;
    }
  }

  .user-profile-body {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-right: 30px;
    cursor: pointer;
  }

  .user-avatar {
    width: 32px;
    height: 32px;
    margin: 0 12px;
    border-radius: 16px;
  }
  .user-name {
    font-size: 12px;
    color: #fff;
  }
}

.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 68px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 220px;
}
.sidebar > ul {
  height: 100%;
}

.content-box {
  position: absolute;
  left: 220px;
  right: 0;
  top: 68px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f5f5fb;
}

.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}

.content-collapse {
  left: 65px;
}

.el-menu {
  border-right: solid 1px #f3f3f3;
}
</style>
