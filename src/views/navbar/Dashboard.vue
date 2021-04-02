<template>
  <div class="home">
    <el-container >
      <Sidebar/>

      <el-container>
        <transition name="fade" mode="out-in" tag="div">
          <router-view />
          
        </transition>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.container-auto {
  height: 500px;
}

.el-aside {
  color: #333;
}
</style>

<script lang="ts">
import dashboard from "./dashboard";
export default dashboard;

</script>
