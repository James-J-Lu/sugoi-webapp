<template>
  <div id="mainHeader">
  </div>
  <div id="mainBody">
    <router-view msg="Welcome to Hello World" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#mainHeader {
  background-color: #f9ecbe;
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 15%;
}
#mainBody {
  background-color: #ffffff;
  position: absolute;
  top: 15%;
  left: 0%;
  width: 100%;
  height: 85%;
}
</style>
