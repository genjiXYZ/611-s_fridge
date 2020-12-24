import {
  extend,
  ValidationObserver,
  ValidationProvider,

} from "vee-validate";
import { required, confirmed } from "vee-validate/dist/rules";

// import store from '../store/index'

const username = {
  message: "请输入5-18位英文,数字 @ _ .",
  validate: (value) => {
    console.log("dccccccccc")
    return /^([A-Za-z0-9@._]){5,18}$/.test(value);
  },
};

// const isUsed = {
//   message: "重复的账户名",
//   validate:  (value) => {
//   store.dispatch('testUsername',{'username':value})
//   return true

//   },
// };

  extend("required", { ...required, message: "添点东西" });

    extend("username", username);
    extend("confirmed", { ...confirmed, message: "好像写的不对" });


export default {
  install(Vue) {

  
    Vue.component("ValidationObserver", ValidationObserver);
    Vue.component("ValidationProvider", ValidationProvider);
   
    // extend("phone", {
    // 	message: "请输入11位的手机号码",
    // 	validate: (value) =>
    // 		value.length === 11 && /^1[3456789]\d{9}$/.test(value),
    // });
  },
};
