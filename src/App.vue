<template>
  <div id="app">
    <div id="nav">
      <!--使用vue自带的组件keep-alive，缓存激活的组件的状态-->
     
        <!--
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
     
    </div>
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="less">

</style>
