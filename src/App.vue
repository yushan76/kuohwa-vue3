<template>
  <div id="nav">
    <router-link to="/login">登入</router-link> |
    <router-link to="/list">人員列表</router-link> |
    <router-link to="/file">上傳檔案</router-link> | 
    <router-link to="/erp">ERP對應管理</router-link>
  </div>
  <router-view/>
</template>

 <script>
 export default {
 }
 </script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
