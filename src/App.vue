<template>
  <div id="app">
    <span>this is app page</span>
      <router-link to='/parent' tag='li'><a href="/parent">parent</a></router-link>
      <router-link to='/test' tag='li'><a href="/test">test</a></router-link>
      <!-- <router-link to="parent" tag='li'>parent</router-link>
      <router-link to="test" tag='li'>test</router-link> -->
      <router-view></router-view>  
  </div>
</template>
<script>


export default {
  name: 'app'

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
