import Vue from "vue";
import Vuex from "vuex";
import http from "../plugins/http";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    SignUp_tip: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    HomeIsAnime: true,
    canUse: "",
    drawer: false,

    resFoods: [],
    resGroupMembers: "",
    resCategorys: '',
    selectedMemeberID: "",
    Options: {
      freshTime: ["1 month", "3 months", "6 months", "12 months", "24 months"],
    },
    profile: {
      username: window.localStorage.username || "",
      token: window.localStorage.token || "",
      avatar: window.localStorage.avatar || ""

    },
    Overlay: '',
    searchValues:''
  },
  mutations: {
    setData(state, payload) {
      if (payload) {
        state[payload.key] = payload.value;
      }
      // console.log("state[payload.key]: ", state[payload.key]);
    },
    setAnimeOverlay(state) {
      state.Overlay = Vue.prototype.$animejs(
        {
          targets: "#path",
       
          d: [
            {
              value: "M0,0 L0,0.77935935 C54.7005208,2.07354688 150.50651,2.07354688 288.417969,1.77935935 C495.285156,1.33807805 368.601563,1.77500556 529.507813,1.9036417 C690.414063,2.03227785 814.570313,0.922658879 900.082031,1.4653268 C985.59375,2.00799473 1036.07422,1.93261588 1185.30859,1.93261588 C1334.54297,1.93261588 1356.80859,1.38927726 1423.94531,1.44463863 C1491.08203,1.5 1525.21484,2.12727942 1664.55859,1.93261588 C1757.45443,1.80284018 1842.76823,1.80284018 1920.5,1.93261588 L1920.5,1 L1,1 Z"
            },
            {
              value: "M0,0 L0,214.823821 C54.2005208,295.725393 150.00651,295.725393 287.917969,214.823821 C494.785156,93.4714627 368.101563,213.626528 529.007813,249.001468 C689.914063,284.376408 814.070313,-20.7688083 899.582031,128.464871 C985.09375,277.69855 1035.57422,256.969366 1184.80859,256.969366 C1334.04297,256.969366 1356.30859,107.551245 1423.44531,122.775623 C1490.58203,138 1524.71484,310.50184 1664.05859,256.969366 C1756.95443,221.281051 1842.26823,221.281051 1920,256.969366 L1920,0.5 L0.5,0.5 Z"
            },
            {
              value: "M0,0 L0,214.823821 C54.2005208,295.725393 150.00651,295.725393 287.917969,214.823821 C494.785156,93.4714627 368.101563,213.626528 529.007813,249.001468 C689.914063,284.376408 814.070313,-20.7688083 899.582031,128.464871 C985.09375,277.69855 1035.57422,256.969366 1184.80859,256.969366 C1334.04297,256.969366 1356.30859,107.551245 1423.44531,122.775623 C1490.58203,138 1524.71484,310.50184 1664.05859,256.969366 C1756.95443,221.281051 1842.26823,221.281051 1920,256.969366 L1920,0.5 L0.5,0.5 Z"
            },
            
            {
              value: "M0,0 L0,0.77935935 C54.7005208,2.07354688 150.50651,2.07354688 288.417969,1.77935935 C495.285156,1.33807805 368.601563,1.77500556 529.507813,1.9036417 C690.414063,2.03227785 814.570313,0.922658879 900.082031,1.4653268 C985.59375,2.00799473 1036.07422,1.93261588 1185.30859,1.93261588 C1334.54297,1.93261588 1356.80859,1.38927726 1423.94531,1.44463863 C1491.08203,1.5 1525.21484,2.12727942 1664.55859,1.93261588 C1757.45443,1.80284018 1842.76823,1.80284018 1920.5,1.93261588 L1920.5,1 L1,1 Z"
            },
            
          ],
          easing: "easeOutBounce",
          duration: 1400,
          autoplay: false,
          loop:false
        }
      )
    }

  },
  actions: {
    validateUsed({ state }, payload) {
      let reg = /^([A-Za-z0-9@._]){5,18}$/;
      reg.test(payload)
        ? (state.SignUp_tip.username = "")
        : (state.SignUp_tip.username = "5-18位英文或者数字 可用@._");
    },
    async login({ commit, state }, payload) {
      let res = await http.post("/login", payload);
      return res;
    },
    async register({ commit, state }, payload) {
      let res = await http.post("/register", payload);
      return res;
    },
    async testUsername({ commit }, payload) {
      
      let res = await http.post("/testUsername", payload);
      return res;
    },
    async fetchFoods({ commit, state }, payload) {
      let res = await http.get(
        `/rest/foods/position/${payload.position}/${state.selectedMemeberID ||
        ""}`
      );
      commit("setData", {
        key: "resFoods",
        value: res.data,
      });
   
      return res;
    },
    async fetchMembers({ commit }) {
      let res = await http.get(`/groupMembers`);
      commit("setData", {
        key: "resGroupMembers",
        value: res.data,
      });
    },
    async fetchCategorys({ commit }) {
      let res = await http.get("/rest/categorys");
      commit("setData", {
        key: "resCategorys",
        value: res.data,
      });
  

      return res;
    },

    //post
    async addFoods({ commit, state }, payload) {
      let res = await http.post("/rest/foods", payload);
      return res;
    },

    // put
    async putFoods({ commit, state, actions }, payload) {
      let res = await http.put(`/rest/foods/${payload.id}`, payload.model);
      return res;
    },
    // del
    async delFoods({ commit, state }, payload) {
      let res = await http.delete(`/rest/foods/${payload.id}`);
    },
  },
  modules: {},
});
