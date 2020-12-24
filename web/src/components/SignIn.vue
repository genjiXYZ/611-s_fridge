<template>
  <div class="vForm  flex flex-column align-center justify-center" :class="[isFocus,{'isShadow':isShadow}]">

    <label class=" radius formLabel">

      <input @keyup.enter="submit" @focus="onFocus" v-model="Form.username" type="username" autocomplete="off" autofocus="autofocus" placeholder='username' onfocus="placeholder=''" onblur="placeholder='username'">
      <svg class="icon zhuce" aria-hidden="true">
        <use xlink:href="#icon-zhuce" />
      </svg>
    </label>
    <label class=" radius formLabel">

      <input @keyup.enter="submit" @focus="onFocus" v-model="Form.password" type="password" autocomplete="off" placeholder="password" onfocus="placeholder=''" onblur="placeholder='password'">
      <svg class="icon mima" aria-hidden="true">
        <use xlink:href="#icon-mima2" />
      </svg> </label>

    <div class="btn  radius" :class="isActive" @click="submit">Sign in</div>

  </div>
</template>


<script>
export default {
  props: ["isShadow"],

  data() {
    return {
      isFocus: "",
      Form: {
        username: "",
        password: "",
      },
      isActive: "",
    };
  },

  computed: {},

  methods: {
    submit() {
      this.isActive = "btn_active";

      setTimeout(() => {
        this.isActive = "";
      }, 200);

      let arg = Object.values(this.Form).filter((el) => {
        return /^([A-Za-z0-9@._]){5,18}$/.test(el) == true;
      });
      if (arg.length == 2) {
        this.login();
      } else {
        this.$toast.error("不太对");
      }
    },
    async login() {
      let res = await this.$store.dispatch("login", this.Form);
      console.log("res: ", res);
      if (res.status == 200) {
        const profile = { ...res.data };

        for (const key in profile) {
          if (Object.hasOwnProperty.call(profile, key)) {
            const element = profile[key];
            window.localStorage[key] = element;
          }
        }

        this.$router.push("/");
        this.$store.state.Overlay.restart();
        this.$store.state.profile = res.data;
      }
    },

    onFocus() {
      this.isFocus = "isFocus";
      this.$parent.isShadow = true;
    
    },
  },

  mounted() {
  
    this.$toast.info(`admin , 12345 `,{
       timeout: 5000
    });
  },
};
</script>


<style lang="scss" scoped>
$inputColor: #b5b5b6;

.icon {
  vertical-align: -0.15em;
  fill: rgb(77, 77, 77);
  overflow: hidden;
}
.vForm {
  width: 100%;
  height: 100%;
  box-shadow: none !important;
  font-size: 16px;
}

label {
  font-size: 24px;
  width: calc(100% - 2em);
  height: 60px;
  overflow: hidden;
  // box-shadow: 3px 3px 10px rgba($color: #000000, $alpha: 0.6) inset,
  //   -3px -3px 10px rgba($color: #fff, $alpha: 0.11) inset;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  margin-bottom: 10px;
  transition: all ease-in-out 0.6s;
  // &:focus-within{
  //   margin-bottom: 50px;
  // }
  > svg {
    width: 40px;
    height: 40px;
  }

  input:focus {
    color: $inputColor;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: transparent;
    text-align: center;
    caret-color: $inputColor;
    outline: none;
    color: rgb(77, 77, 77);
    font-size: 24px;
    border: none;
  }

  input:focus + svg {
    fill: $inputColor !important;
  }
}

.btn {
  width: 30%;
  height: 40px;
  text-align: center;

  line-height: 40px;
  color: #f3f2f0;
  cursor: pointer;
  user-select: none;

  transition: all 0.1s ease-in-out;
}

.isShadow {
  border: none !important;
  label {
    border: none !important;
    box-shadow: 3px 3px 10px rgba($color: #000000, $alpha: 0.6) inset,
      -3px -3px 10px rgba($color: #fff, $alpha: 0.11) inset;
    margin-bottom: 30px;
  }

  .btn {
    box-shadow: -6px -6px 8px #2f343e,
      6px 6px 8px darken($color: #22262d, $amount: 5%);
    &:active {
      box-shadow: -6px -6px 8px #2f343e inset,
        6px 6px 8px darken($color: #22262d, $amount: 5%) inset;
    }
  }

  .btn_active {
    box-shadow: -6px -6px 8px #2f343e inset,
      6px 6px 8px darken($color: #22262d, $amount: 5%) inset;
  }
}
</style>