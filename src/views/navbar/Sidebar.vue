<template>
  <div class="sidevar">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template slot="title"
            ><i class=""></i>通用模块</template
          >
          <router-link class="sidebar-link" to="/story">
            <el-menu-item index="1-1">故事背景生成</el-menu-item>
          </router-link>


        </el-submenu>

        
      </el-menu>
    </el-aside>
  </div>
</template>

<style scoped>
.sidebar-link {
  text-decoration: none;
}
.sidebar-menu {
  background-color: gray;
}
</style>

<script lang="ts">
import sidebar from "./sidebar";
export default sidebar;
</script>

