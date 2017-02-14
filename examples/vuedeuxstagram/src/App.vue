<template>
  <div id="app">
    <div id="header">
      <div id="logoHolder">
        <router-link to="/"><img id="logo" src="./assets/dollsmall.png"/></router-link>
        <router-link to="/" style="text-decoration:none"><p id="heading">Vuedeuxstagram</p></router-link>
        <p id="userName">David M.</p>
      </div>
    </div>
    <div id="block"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import Photogrid from './components/Photogrid';

export default {
  name: 'app',
  components: {
    Photogrid,

  },
};
</script>

<style>
#header {
  background-color: white;
  height: 60px;
  width: 100%;
  position: fixed;
}

#logoHolder {
  width:90%;
  margin: 0 auto;
  position: relative;
}

#logo {
  width: 25px;
  float: left;
  margin-top: 13px;
  position: relative;
}

#heading {
  font-family: 'Norican', cursive;
  font-size: 2.8vw;
  color: black;
  vertical-align: center;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 60px;
}

#userName {
  font-size: 1.5vw;
  color: black;
  float: right;
  /*vertical-align: center;
  margin-top: auto;
  margin-bottom: auto;*/
  line-height: 0px;
   margin-top: -20px;
}

#block {
  height: 50px;
  width:100%
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body {
   background-color: #F5F5F5;
   margin: 0;
}

</style>
