<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
img {
    width: 100%; /* or any custom size */
    height: 100%; 
    object-fit: contain;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: "ChenYuluoyan-Thin"; */
  font-family: "NaikaiFont";
  /* font-family: "Iansui094"; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body{
  margin: 0;
  padding: 0;
}
p {
  margin: 0 !important;
}
button {
  border: none;
}
</style>
