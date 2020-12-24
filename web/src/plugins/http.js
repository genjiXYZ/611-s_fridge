import axios from "axios";
import Vue from "vue";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || `https://api.genji.xyz/admin/api`,
});

http.interceptors.request.use(
  function (config) {
    config.headers
    if (localStorage.token) {
      config.headers.Authorization = "Bearer " + (localStorage.token || "");
      
    }
  
    return config;
  },
function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    
    const message = res.data.message
    const flag = res.data.flag || "true"

    message && !flag && Vue.prototype.$toast.error(res.data.message);

    message && flag && Vue.prototype.$toast.info(res.data.message);

    return res;
  },
  (err) => {
    Vue.prototype.$toast.error(err.response.data.message);
    return Promise.reject(err);
  }
);

export default http;
