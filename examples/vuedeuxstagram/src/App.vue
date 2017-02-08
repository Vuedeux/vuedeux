<template>
  <div id="app">
    <div id="header">
      <div id="logoHolder">
        <router-link to="/"><img id="logo" src="./assets/dollwhite.png"/></router-link>
        <router-link to="/" style="text-decoration:none"><p id="heading">Vuedeuxstagram</p></router-link>
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
  background-color: #42b983;
  height: 125px;
  width: 100%;
  position: fixed;
}

#logoHolder {
  width:52%;
  margin: 0 auto;
  position: relative;
}

#logo {
  width: 60px;
  float: left;
  margin-top: 15px;
  position: relative;
}

#heading {
  font-family: 'Norican', cursive;
  font-size: 5.5vw;
  color: white;
  vertical-align: center;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 120px;
}

#block {
  height: 120px;
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
   background-color: white;
   margin: 0;
}

</style>
