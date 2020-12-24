<template>
  <div class="nav  flex justify-between align-center">
    <transition name="fade">
      <SmallLogo v-if="!$store.state.HomeIsAnime" />

    </transition>
    <div></div>

    <div class="nav__tabs flex justify-center align-center">
      <ul :class="tabClass" class="nav__tabs-list flex justify-center align-center">
        <li v-for="(item, index) in NavList" :key="index" class="flex justify-center align-center" @click="tabClick(index)">
          <span>{{ item }}</span>
        </li>
      </ul>

    
      <div @click="showDrawer" class="nav__login" v-if="$store.state.profile.username">
        <span>profile</span>

      </div>

      <div class="nav__login" v-else @click="clickLogin">

        <span>login</span>
      </div>

    </div>
  </div>
</template>

<script>
import SmallLogo from "./SmallLogo";
export default {
  components: { SmallLogo },
  data() {
    return {
      // tab: this.$route.state.historyRouteName? `tab_${this.$route.state.historyRouteName}`:localStorage.historyRouteName,

      tabClass: "",
      NavList: ["Foods", "Add", "Charts", "About"],
      realList: ["/foods/fresher", "/add", "/charts", "/about"],
      RL: "",
      RR: "",
      runOpacity: "",
    };
  },

  methods: {
    tabClick(index) {
      this.tabIndex = index;
      if (this.$route.path !== this.realList[index]) {
        this.tabIndex = index;
        this.tab = `tab_${this.NavList[index]}`;
        this.$router.push({ path: `${this.realList[index]}` });
      }
    },
    clickLogin() {
      if (this.$route.name == "Login") {
        return;
      } else {
        this.$router.push("/sign/in");
        this.runOpacity = this.$animejs({
          targets: ".home",
          direction: "normal",
          opacity: [1, 0],
          duration: 0,
          easing: "easeInOutSine",
          autoplay: false,
        });
        this.runOpacity.restart();
      }
    },
    showDrawer() {
      this.$store.commit("setData", { key: "drawer", value: true });
    },
  },
  watch: {
    $route(newRoute, oldRoute) {
      if (newRoute.name === "Login") {
        return;
      }
      let nth = newRoute.meta.index;
      this.tabClass = `nth_${nth}`;
      let sub = newRoute.meta.index - oldRoute.meta.index;
      if (sub > 0) {
        this.RR.restart();
      } else if (sub < 0) {
        this.RL.restart();
      } else {
        return;
      }
    },
  },
  mounted() {
    this.RL = this.$animejs({
      targets: ".nav__tabs-list",
      direction: "alternate",
      perspective: [1000, 1000],

      rotateY: [0, -20],
      translateZ: [0, -20],
      duration: 300,
      easing: "easeInOutSine",
      autoplay: false,
    });
    this.RR = this.$animejs({
      targets: ".nav__tabs-list",
      direction: "alternate",
      perspective: [1000, 1000],
      rotateY: [0, 20],
      translateZ: [0, -20],

      duration: 300,
      easing: "easeInOutSine",
      autoplay: false,
    });
    this.$route.name;
  },
};
</script>

<style lang="scss" scoped>
$Navlist: ("Foods", "Add", "Charts", "Something");
@for $i from 1 through length($Navlist) {
  .nth_#{$i - 1}::before {
    transform: translate(#{($i - 1) * 100%}, -50%) !important;
  }
  .nth_#{$i - 1} li:nth-child(#{$i}) {
    color:#24272e !important;
  }
}
$ulPadding: 20px;
$tabW: 100px;
$sliderW: $tabW + $ulPadding;
$outShadow: 5px 5px 7px #e0dfdd, -5px -5px 7px #ffffff;
$insetShadow: inset 5px 5px 7px #e0dfdd, inset -5px -5px 7px #ffffff;
.nav {
  width: 100%;
  height: 100px;
  margin: 0 auto;
  transform-style: preserve-3d;
  position: relative;

  user-select: none;
  font-size: 16px;

  &__logo {
    img {
    }
  }

  &__tabs {
    &-list {
      overflow: hidden;
      border-radius: 10px;
      box-shadow: $outShadow;
      box-sizing: border-box;
      padding: 5px $ulPadding;
      height: 60px;
      position: relative;

      z-index: 10;

      &::before {
        content: "";
        position: absolute;
        z-index: 0;
        top: 50%;
        left: $ulPadding;
        height: 80%;
        width: $sliderW;
        border-radius: 10px;
        background: #f3f2f0;
        box-shadow: $insetShadow;
        transform: translateY(-50%) translateZ(0);
        transition: all 0.75s cubic-bezier(0.87, 0, 0.13, 1);
      }
      > li {
        width: $tabW;
        margin: 0 10px;
        cursor: pointer;
        height: 100%;
        color: rgb(144, 147, 153);
        z-index: 1;
      }
    }
  }
}

.nav__login {
  margin-left: 100px;
  height: 40px;
  width: 100px;
  text-align: center;
  line-height: 40px;
  display: inline-block;
  vertical-align: middle;

  color: #d05240;
  border-radius: 10px;

  box-shadow: $outShadow;
  cursor: pointer;
  user-select: none;
  &:active {
    box-shadow: $insetShadow;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
