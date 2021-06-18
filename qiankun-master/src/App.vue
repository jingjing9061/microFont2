<template>
  <div>
      <div id="nav">
          <el-menu class="el-menu-demo" :router="true" mode="horizontal">
              <!-- 主应用可以有自己的路由-->
              <el-menu-item index="1">home</el-menu-item>
              <!-- 可以引用其它子应用  -->
              <el-menu-item index="/react"><i class="el-icon-odometer" />react应用
              </el-menu-item>
              <el-menu-item index="/vue"><i class="el-icon-data-line" />vue应用</el-menu-item>
          </el-menu>
      </div>
      <div id="vue"></div>
      <div id="react"></div>
      <router-view />
  </div>
</template>
<style >
</style>