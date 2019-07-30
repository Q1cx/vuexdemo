<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="登录" />
    <!-- 表单 -->
    <form action="/">
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          label="手机号"
          placeholder="请输入用户名"
          required
          clearable
        />
        <van-field
          v-model="user.code"
          label="验证码"
          placeholder="请输入验证码"
          required
          type="password"
        />
      </van-cell-group>
      <!-- @事件名，修饰符 -->
      <van-button type="info" block @click.prevent="handleLogin"
        >登录</van-button
      >
    </form>
  </div>
</template>
<script>
import request from "@/utils/request.js";
import { login } from "@/api/user";
// import { request } from "http";
export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        mobile: "18801185985",
        code: "246810"
      }
    };
  },
  methods: {
    async handleLogin() {
      //1,   const res = await request({
      //     method: "post",
      //     url: `/app/v1_0/authorizations`,
      //     // 简化写法
      //     data: this.user
      //     // {
      //     //   mobile: this.user.mobile,
      //     //   code: this.user.code
      //     // }
      //   });
      //   console.log(res);
      // }

      try {
        const data = await login(this.user);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped lang="less">
.van-nav-bar {
  background-color: #1989fa;
  .van-nav-bar__title {
    color: #ffffff;
  }
}
</style>
