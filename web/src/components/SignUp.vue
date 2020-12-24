<template>
  <div class="vForm  flex flex-column align-center justify-center" :class="[isFocus, { 'isShadow':isShadow}]">

    <ValidationProvider rules="required|username" v-slot="{ errors, passed, validated }">
      <label class=" radius formLabel">
        <svg class="icon zhuce" aria-hidden="true">
          <use xlink:href="#icon-zhuce" />
        </svg>
        <input @blur="testUsername(passed)" @focus="onFocus" type="username" autocomplete="off" autofocus="autofocus" placeholder="username" onfocus="placeholder=''" onblur="placeholder='username'" v-model.lazy="Form.username" />

        <svg v-if="isLoading" class="icon flag validating" :class="{ validated: validated }" aria-hidden="true">
          <use xlink:href="#icon-loading" />
        </svg>

        <svg v-if="passed && canUse && !isLoading" class="icon flag" :class="{ validated: validated }" aria-hidden="true">
          <use xlink:href="#icon-duihao" />
        </svg>
        <svg v-else-if="!isLoading" class="icon flag" :class="{ validated: validated }" aria-hidden="true">
          <use xlink:href="#icon-cuohao" />
        </svg>

        <!-- <svg v-else-if="validated && !passed " class="icon cuohao" aria-hidden="true">
          <use xlink:href="#icon-cuohao" />
        </svg> -->
      </label>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <!-- <p class="tip">    {{$store.state.SignUp_tip.username}}</p> -->

    <ValidationProvider rules="required|username" vid="confirmation" v-slot="{ errors, passed, validated }">
      <label class=" radius formLabel">
        <svg class="icon mima" aria-hidden="true">
          <use xlink:href="#icon-mima2" />
        </svg>
        <input @focus="onFocus" type="password" autocomplete="off" placeholder="password" onfocus="placeholder=''" onblur="placeholder='password'" v-model="Form.password" />
        <svg v-if="passed" class="icon flag" :class="{ validated: validated }" aria-hidden="true">
          <use xlink:href="#icon-duihao" />
        </svg>
        <svg v-else class="icon flag" :class="{ validated: validated }" aria-hidden="true">
          <use xlink:href="#icon-cuohao" />
        </svg>
      </label>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <!-- <p class="tip">    {{$store.state.SignUp_tip.username}}</p> -->
    <ValidationProvider rules="required|confirmed:confirmation" v-slot="{ errors, passed, validated }">
      <label class=" radius formLabel">
        <svg class="icon mima" aria-hidden="true">
          <use xlink:href="#icon-mima2" />
        </svg>
        <input @focus="onFocus" type="confirm" autocomplete="off" placeholder="confirm" onfocus="placeholder=''" onblur="placeholder='confirm'" v-model="Form.confirmPassword" />

        <svg v-if="passed" class="icon flag" :class="{ validated: validated }" aria-hidden="true">
          <use xlink:href="#icon-duihao" />
        </svg>
        <svg v-else class="icon flag" :class="{ validated: validated }" aria-hidden="true">
          <use xlink:href="#icon-cuohao" />
        </svg>
      </label>
      <span>{{ errors[0] }}</span>
    </ValidationProvider>
    <!-- <p class="tip">    {{$store.state.SignUp_tip.username}}</p> -->

    <div class="btn  radius" @click="submit">Sign up</div>
  </div>
</template>

<script>
export default {
  props: ["isShadow"],

  data() {
    return {
      isFocus: "",
      Form: { username: "", password: "", confirmPassword: "" },
      isLoading: false,
      canUse: false,
    };
  },

  computed: {},
  watch: {
    "Form.username"(n) {
      this.$store.dispatch("validateUsed", n);
    },
  },

  methods: {
    submit() {
      let arg = Object.values(this.Form).filter((el) => {
        return /^([A-Za-z0-9@._]){5,18}$/.test(el) == true;
      });
      if (arg.length == 3 && this.canUse && arg[1] == arg[2]) {
        this.$toast.success("提交中...");
      } else {
        this.$toast.error("填得对么?");
      }
    },
    async testUsername(passed) {
      if (passed) {
        this.isLoading = true;
        let res = await this.$store.dispatch("testUsername", {
          username: this.Form.username,
        });
        setTimeout(() => {
          this.isLoading = false;
          this.canUse = res.data.flag;
      

         
        }, 500);
      }
    },
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }

      return "This is required";
    },
    onFocus() {
      this.isFocus = "isFocus";
      this.$parent.isShadow = true;

    
    },
  },

  mounted() {},
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
  & > span {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
}

label {
  font-size: 24px;
  width: calc(100% - 2em);
  height: 60px;
  overflow: hidden;
  // box-shadow: 3px 3px 10px rgba($color: #000000, $alpha: 0.6) inset,
  //   -3px -3px 10px rgba($color: #fff, $alpha: 0.11) inset;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0 1em;

  transition: all ease-in-out 0.6s;
  // &:focus-within{
  //   margin-bottom: 50px;
  // }
  & + span {
    color: #d2513b;
    display: inline-block;
    margin: 5px auto;
  }
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
  margin-top: 10px;
  transition: all 0.1s ease-in-out;
}

.isShadow {
  border: none !important;
  label {
    border: none !important;
    box-shadow: 3px 3px 10px rgba($color: #000000, $alpha: 0.6) inset,
      -3px -3px 10px rgba($color: #fff, $alpha: 0.11) inset;
  }

  .btn {
    box-shadow: -6px -6px 8px #2f343e,
      6px 6px 8px darken($color: #22262d, $amount: 5%);
    &:active {
      box-shadow: -6px -6px 8px #2f343e inset,
        6px 6px 8px darken($color: #22262d, $amount: 5%) inset;
    }
  }
}

.validated {
  opacity: 1 !important ;
}
.flag {
  opacity: 0;
}

.validating {
  animation: loading 1.25s ease-out infinite;
}

@keyframes loading {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
