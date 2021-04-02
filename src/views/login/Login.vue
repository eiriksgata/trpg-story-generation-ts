<template>
  <div id="login">
    <el-container>
      <el-main>
        <el-card class="card-style">
          <el-tabs>
            <el-tab-pane label="本地验证">
              <form>
                <el-input
                  v-model="form.username"
                  placeholder="email"
                  autofocus
                  clearable
                ></el-input>

                <el-input
                  v-model="form.password"
                  show-password
                  placeholder="password"
                  clearabele
                  class="line-heigth-spacing"
                  autofocus
                  @keyup.enter="doLogin()"
                ></el-input>
                
              </form>
              <el-row class="line-heigth-spacing">
                <el-button @click="doLogin()" type="primary">登录</el-button>
                <el-button>注册</el-button>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="联网验证"> </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import Login from "./Login";
export default Login;
</script>

<style scoped>
.card-style {
  max-width: 400px;
  min-width: 200px;
  width: 100%;
  margin: 0 auto;
}

.line-heigth-spacing {
  margin-top: 20px;
}
</style>