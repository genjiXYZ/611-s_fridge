<template>
  <div id="app" class="">
    <div class="container">
      <Nav />

      <router-view></router-view>
      <router-view name="Login"></router-view>

      <Drawer />
    </div>

  </div>
</template>

<script>
import Drawer from "./components/Drawer.vue";
import Nav from "./components/Nav";

export default {
  components: {
    Nav,
    Drawer,
  },
  //  methods: {
  //   rem() {
  //     var designWidth = 1920,
  //       rem2px = 100;
  //     document.documentElement.style.fontSize =
  //       (((window.innerWidth / designWidth) * rem2px) / 16) * 100 + "%";
  //   },
  // },
  // created() {
  //   this.rem(),
  //     window.addEventListener(
  //       "resize",
  //       () => {
  //         clearTimeout(timer);
  //         let timer = setTimeout(() => {
  //           this.rem();
  //         }, 200);
  //       },

  //       false
  //     );
  // },


};
</script>

<style lang="scss">
$white: #f3f2f0;
$red: #d05240;
$darkBlue: #24272e;

.darkBlue {
  background-color: $darkBlue;
}

#app {
  width: 100%;
  min-width: 1264px;

  height: 100%;
  position: relative;
  overflow: hidden;
}

.container {
  width: 1264px;
  height: 100vh;
  min-height: 870px;
  
  margin: 0 auto;
}

div {
  box-sizing: border-box;
}
html {
  background-color: $white;
  font-size: 100px;

  // @media screen and (max-width: 2560px) {
  //   font-size: 625%;
  // }
  // @media screen and (max-width: 1904) {
  //   font-size: 500%;
  // }
  // @media screen and (max-width: 2560px) {
  //   font-size: 625%;
  // }

 
}
html,
body {
  z-index: -10;
}
html,
body,
ul,
p {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.dashed {
  border: 1px dashed $red;
}

.radius {
  border-radius: 10px;
}

.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}
.justify-start {
  justify-content: start;
}
.jusitfy-around {
  justify-content: space-around;
}
.justify-between {
  justify-content: space-between;
}
.justify-end {
  justify-content: flex-end;
}

.justify-around {
  justify-content: space-around;
}
.align-center {
  align-items: center;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
