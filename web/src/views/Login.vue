<template>
  <div class="login enter darkBlue" ref="login" @click.self="hiddenShadow">

    <div class="container flex justify-center align-center" @click.self="hiddenShadow">
      <div class="login__box radius  flex flex-column  align-center" :class="{'isShadow':isShadow,'darkBlue':isShadow}">
        <p class="login__box-logo">

        </p>
        <p class="login__box-title">{{status == "IN"?'Sign in':'Sign up'}}</p>

        <div class="login__box-form radius ">

          <component :is='status' :isShadow="isShadow"></component>

        </div>

        <div class="turnTo" @click="to">
          <label class="flex justify-center align-center">
            <svg data-v-0d1da86b="" t="1588923500946" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14718" width="32" height="32" class="icon">
              <path data-v-0d1da86b="" d="M416 352c-38.4 0-64 25.6-64 64v192c0 38.4 25.6 64 64 64h192c38.4 0 64-25.6 64-64v-192c0-38.4-25.6-64-64-64h-192z m192 256h-192v-192h192v192zM928 704h-192c-19.2 0-32 12.8-32 32s12.8 32 32 32h140.8c-83.2 121.6-224 192-364.8 192s-275.2-64-358.4-179.2c-12.8-12.8-32-19.2-44.8-6.4-12.8 12.8-19.2 32-6.4 44.8C198.4 947.2 352 1024 512 1024c147.2 0 288-64 384-172.8v76.8c0 19.2 12.8 32 32 32s32-12.8 32-32v-192c0-19.2-12.8-32-32-32zM320 288c0-19.2-12.8-32-32-32H147.2C230.4 134.4 364.8 64 512 64c140.8 0 275.2 70.4 358.4 179.2 12.8 12.8 32 19.2 44.8 6.4 12.8-12.8 19.2-32 6.4-44.8C825.6 76.8 672 0 512 0 364.8 0 224 64 128 172.8V96C128 76.8 115.2 64 96 64s-32 12.8-32 32v192c0 19.2 12.8 32 32 32h192c19.2 0 32-12.8 32-32z" p-id="14719" fill="#d2513b"></path>
            </svg>
            <span>{{status == "IN"?'Sign up':'Sign in'}}</span>

          </label>
        </div>
        <div class="back" @click="back">
          <svg data-v-0d1da86b="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="64" height="64" class="loginToHome">
            <path data-v-0d1da86b="" d="M64.271816 746.039337 511.185448 247.433392 959.727161 746.039337 928.793638 776.566608 511.185448 312.150346 95.206362 776.566608Z" p-id="2479" fill="#d2513b"></path>
          </svg>
        </div>

        <!-- -------- -->

      </div>
      <div class="ball red1" :class="{'ballShow':isShadow}"></div>

      <div class="ball gray1 " :class="{'ballShow':isShadow}"></div>

      <div class="ball gray3 " :class="{'ballShow':isShadow}"></div>

    </div>
    <div class="ball red2" :class="{'ballShow':isShadow}"></div>
    <div class="ball gray2 " :class="{'ballShow':isShadow}"></div>

    <div class="login__svg">
      <svg preserveAspectRatio="none" viewBox="0 0 1920 500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="transparent" stroke-width="0" fill-rule="evenodd">
          <g>
            <path id="path" d="M0,0 L0,0.77935935 C54.7005208,2.07354688 150.50651,2.07354688 288.417969,1.77935935 C495.285156,1.33807805 368.601563,1.77500556 529.507813,1.9036417 C690.414063,2.03227785 814.570313,0.922658879 900.082031,1.4653268 C985.59375,2.00799473 1036.07422,1.93261588 1185.30859,1.93261588 C1334.54297,1.93261588 1356.80859,1.38927726 1423.94531,1.44463863 C1491.08203,1.5 1525.21484,2.12727942 1664.55859,1.93261588 C1757.45443,1.80284018 1842.76823,1.80284018 1920.5,1.93261588 L1920.5,1 L1,1 Z"></path>
          </g>
        </g>
      </svg>

    </div>

  </div>
</template>

<script>
import IN from "../components/SignIn";
import UP from "../components/SignUp";

export default {
  components: { UP, IN },
  data() {
    return {
      status: "",
      isShadow: false,
      Overlay: "",
    };
  },
  watch: {
    $route() {
      
      this.status = this.$route.params.status.toUpperCase();
    },
  },
  methods: {
    back() {
      this.$router.push("/");
 
      this.$store.state.Overlay.restart();
    },
    hiddenShadow() {
      this.isShadow = false;
  
    },

    to() {
      this.$route.params.status == "in"
        ? this.$router.push("/sign/up")
        : this.$router.push("/sign/in");
    },
  },

  created() {
  
  },

  beforeRouteLeave(to, from, next) {
    this.$refs.login.classList.replace("enter", "leave");

    setTimeout(() => {
      next();
    }, 2000);
  },

  mounted() {
    this.status = this.$route.params.status.toUpperCase();
    this.$store.commit("setAnimeOverlay");
    // this.$store.state.Overlay.restart()

    //  this.$store.state.Overlay.reverse
    this.$store.state.Overlay.restart();
  },

  beforeDestroy() {
  
  },
};
</script>

<style lang="scss" scoped>
$loginShadow: -7px -7px 10px 8px #2f343e, 7px 7px 13px 8px #22262d,
  5px 5px 13px 0px #23272f inset, -5px -5px 13px 0px #2b3039 inset;
$btnShadow: -6px -6px 8px #2f343e, 6px 6px 8px #22262d;
$btnActive: -6px -6px 8px #2f343e inset, 6px 6px 8px #22262d inset;

.login {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 100vh;
  height: 100%;
  .circle {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .container {
    padding: 0 100px;
    position: relative;
  }
  &__box {
    width: 100%;
    height: 700px;
    padding: 60px 0;

    position: relative;
    &-logo {
      position: relative;
      width: 135px;
      height: 90px;
      opacity: 0;
      z-index: 100;

      &:before {
        position: absolute;
        bottom: 0;
        left: 0px;
        z-index: 1;
        border-radius: 50%;
        content: "";
        width: 90px;
        height: 90px;
        background-image: radial-gradient(
          circle 80px at 26.11% 0.15%,
          #d2513b 0%,
          #282c34 96%,
          rgba(40, 44, 52, 0) 100%
        );
        color: black;
      }
      &::after {
        position: absolute;
        bottom: 0;
        left: 45px;
        z-index: 1;
        border-radius: 50%;
        content: "";
        width: 90px;
        height: 90px;
        opacity: 0.8;
        background-image: radial-gradient(
          circle 80px at 35.15% 14.76%,
          #e2e1e0 0%,
          #282c34 96%,
          #282c34 100%
        );
      }
      overflow: hidden;

      img {
        object-fit: cover;
        height: 120px;
        display: block;
        overflow: hidden;
      }
    }

    &-title {
      font-size: 56px;
      z-index: 100;
      font-weight: 200;
      color: #d2513b;
    }
    &-form {
      width: 400px;
      height: calc(700px - 290px);
    }
    &-button {
      padding: 5px 20px;
    }
  }
}

.enter {
  animation: enter cubic-bezier(0.83, 0, 0.17, 1) forwards 2s;
}
.leave {
  animation: leave cubic-bezier(0.83, 0, 0.17, 1) forwards 2s;
}
@keyframes leave {
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes enter {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100vh);
  }
}

.turnTo {
  font-size: 24px;
  padding: 0 50px 50px 0;
  position: absolute;
  right: 0;
  bottom: 0;
  color: #d2513b;
  user-select: none;

  label {
    padding: 20px;
    cursor: pointer;
  }
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
}
.back {
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
}
.isShadow {
  box-shadow: $loginShadow;
  transition: all ease-in-out 1s;
  .login__box-logo {
    opacity: 1;
    transition: all ease-in-out 1s;
  }
}

.ball {
  user-select: none;
  pointer-events: none;
  border-radius: 50%;
  position: absolute;
  transition: all 0.75s ease-in-out;
  z-index: -1;
  opacity: 1;
}
.ballShow {
  opacity: 0 !important;
}

.gray1 {
  left: 0;
  top: -350px;
  width: 700px;
  height: 700px;

  background-image: radial-gradient(
    circle at 10% 0%,
    #575e6b 0%,
    rgba($color: #4b505c, $alpha: 0.69) 5%,
    rgba($color: #30343c, $alpha: 0) 70%
  );
}
.gray2 {
  left: -127px;
  top: 234px;
  width: 320px;
  height: 320px;
  z-index: -1;
  background-image: radial-gradient(
    circle at 10% 0%,
    #575e6b 0%,
    rgba($color: #4e5561, $alpha: 0.6) 20%,
    rgba($color: #30343c, $alpha: 0) 60%
  );
}
.gray3 {
  right: 101px;
  bottom: 287px;
  width: 107px;
  height: 107px;

  background-image: radial-gradient(
    circle at 10% 0%,
    #575e6b 0%,
    rgba($color: #515764, $alpha: 0.85) 20%,
    rgba($color: #30343c, $alpha: 0) 80%
  );
}

.red1 {
  right: -51px;
  bottom: 45px;
  width: 275px;
  height: 275px;
  // background-image: linear-gradient(135deg,#575E6B , #515764,#30343C);

  background-image: radial-gradient(
    circle at 0% 0%,
    #b04939 0%,
    rgba($color: #b04939, $alpha: 1) 20%,
    rgba($color: #282c34, $alpha: 1) 80%
  );
}

.red2 {
  left: 75px;
  top: 365px;
  width: 134px;
  height: 134px;
  background-image: radial-gradient(
    circle at 0% 0%,
    #b04939 0%,
    rgba($color: #b04939, $alpha: 1) 20%,
    rgba($color: #282c34, $alpha: 1) 80%
  );
}

.login__svg {
  position: absolute;
  z-index: 1;
  top: calc(100% - 2px);
  svg {
    width: 100vw;
    height: 500px;
    fill: #24272e;
    pointer-events: none;
  }
}
</style>
