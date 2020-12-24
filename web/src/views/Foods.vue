<template>
  <div class="foods flex align-center justify-between ">
    <transition name="fade" mode="out-in">

      <Logo v-if="$store.state.HomeIsAnime" />

      <FoodsList v-else />
    </transition>

    <transition name="fade">
      <Fridge v-show="!$store.state.HomeIsAnime" />

    </transition>

  </div>
</template>


<script>
import Fridge from "../components/Fridge";
import FoodsList from "../components/FoodsList";
import Logo from "../components/BigLogo";

export default {
  components: {
    Fridge,
    FoodsList,
    Logo,
  },
  data() {
    return {};
  },

  mounted() {
    if (this.$store.state.HomeIsAnime) {
      setTimeout(() => {
        this.$store.state.HomeIsAnime = false;
      }, 1000);
    }
  },
};
</script>

<style lang="scss" scoped>
.foods {
  width: 100%;
  height: calc(100% - 100px);


  // background-color: blueviolet;
}

.loading {
  width: 900px;
  height: 640px;
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
