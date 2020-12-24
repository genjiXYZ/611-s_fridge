<template>
  <div class="about flex justify-center align-center flex-column">

  

    <p>
      没什么好说的,我自己都懒得用
    </p>
    <p>
      本来还想搞个: 食物临近过期 短信或者邮件推送提醒. 搬家了 散了 =-=!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Overlay: "",
    };
  },
  methods: {
  
   
  },
  mounted() {
   this.$store.commit("setAnimeOverlay");

    this.$store.state.Overlay.restart();
   

  
   
    
  },
};
</script>


<style lang="scss" scoped>
.about {
  width: 100%;
  height: calc(100% - 100px);
  font-size: 24px;
  color: #d05240;
}

.login__svg {
  width: 100%;
  position: absolute;
  top: 50%;
  z-index: 200;
  svg {
    fill: #24272e;
  }
}
</style>