<template>
  <div class="login-page">
    <div class="login-container">
      <el-form
        class="login-form"
        ref="loginForm"
        :model="formData"
        :rules="loginRules"
        size="medium"
        label-width="100px"
      >
        <el-card>
          <el-row class="login-header">
            <h2 v-if="!isLogin">登陆</h2>
            <h2 v-else>注册</h2>
          </el-row>
          <el-row style="margin-top: 16px">
            <el-form-item label-width="0" prop="username">
              <el-input
                v-model="formData.username"
                placeholder="请输入用户名"
                clearable
                prefix-icon="el-icon-user"
                style="width: 100%"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="0" prop="password">
              <el-input
                v-model="formData.password"
                placeholder="请输入密码"
                clearable
                prefix-icon="el-icon-lock"
                show-password
                style="width: 100%"
              ></el-input>
            </el-form-item>
            <el-form-item v-if="!isLogin" label-width="0" prop="password">
              <el-input
                v-model="formData.rePassword"
                placeholder="请再次确认密码"
                clearable
                prefix-icon="el-icon-lock"
                show-password
                style="width: 100%"
              ></el-input>
            </el-form-item>
          </el-row>
          <el-form-item label-width="0" size="medium">
            <el-button type="danger" @click="submitForm" style="width: 100%"
              >登录</el-button
            >
          </el-form-item>
          <el-form-item class="login-footer" label-width="0" size="medium">
            <a v-if="isLogin" class="regist-btn" @click="switchBtn"
              >没有账号？去注册</a
            >
            <a v-else class="login-btn" @click="switchBtn">已有账号？去登录</a>
          </el-form-item>
        </el-card>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      isLogin: true,
      formData: {
        username: "test",
        password: "test123",
        rePassword: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        rePassword: [
          {
            required: true,
            message: "请再次确认密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    switchBtn() {
      this.isLogin = !this.isLogin;
    },
    submitForm() {
      this.$refs["loginForm"].validate(valid => {
        if (!valid) return;
        this.$message.warning("登录中");
        this.login();
      });
    },
    login() {
      console.log(this.formData);
      this.loading = true;
      setTimeout(() => {
        this.$message.success("登录成功");
        this.loading = false;
        this.$router.push("/");
      }, 1000);
    },
    regist() {
      // TODO 注册请求
      console.log(this.formData);
    },
    resetForm() {
      this.$refs["loginForm"].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
