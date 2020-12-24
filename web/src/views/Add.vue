<template>
  <div>
    <transition :name="slide" mode="out-in">
      <router-view>

      </router-view>
    </transition>

  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: "right",
    };
  },
  watch: {
    $route(to, from) {
      to.meta.depth - from.meta.depth > 0
        ? (this.slide = "left")
        : (this.slide = "right");
    },
  },
};
</script>


<style lang="scss" scoped>
.right-enter-active,
.right-leave-active ,
.left-enter-active,
.left-leave-active {
  transition: all cubic-bezier(0.65, 0, 0.35, 1) .4s;
}

.left-enter
/* .list-leave-active for below version 2.1.8 */ {
  transform: translateX(80vw);
}
.left-leave-to{
  transform: translateX(-80vw);

}


.right-enter 
 {
  transform: translateX(-80vw);
}

.right-leave-to
 {
  transform: translateX(80vw);
}
</style>
