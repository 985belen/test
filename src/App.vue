<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
.size{
  width: 100%;
  height: 100%;
}
html,body{
  .size;
  overflow: auto;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
.lessThan0IsRed{
  color: red
}
.longData{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
