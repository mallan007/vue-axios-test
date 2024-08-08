<template>
  <div class="container">
    <Icon icon="line-md:buy-me-a-coffee-twotone" width="75" height="75"/> 
    
    <router-view />
  </div>

</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'App',
  components: {
    Icon
  },
}
</script>

<style>
.container {
  margin-top: 10px;
  margin-bottom: 1px;
  margin-left: 10px;
  margin-right: 10px; 
  align-items: center;
}
.register input,
.login input,
.addNew input {
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 25px;
  margin-right: 25px; 
  padding-left: 20px;
  border: 1px solid skyblue;
  width: 300px;
  height: 40px;
  display: block;
}
.register button,
.login button,
.addNew button {
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 25px;
  margin-right: 25px; 
  padding-left: 20px;
  border: 1px solid skyblue;
  width: 320px;
  height: 40px;
  display: block;
  cursor: pointer;
}
.register button:hover,
.login button:hover,
.addNew button:hover{
    background-color: purple;
    color: skyblue;
}
</style>
