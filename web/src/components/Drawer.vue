<template>
  <el-drawer title="我是标题" :visible.sync="$store.state.drawer" :with-header="false" size="360px">

    <div class="drawer__box">
      <div class="drawer__box__avatar">
        <el-upload class="avatar-uploader" :action="
                `${$http.defaults.baseURL}/upload/${this.$store.state.profile.username || ''}`
              " :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="$store.state.profile.avatar" :src="$store.state.profile.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>

      <p class="drawer__box__name" v-if="$store.state.profile.nickname">{{ $store.state.profile.nickname }}</p>
      <div class="drawer__box__info">
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
              <path fill="#D2513B" d="M33.9432,0 L14.0568,0 L0,14.0568 L0,33.9432 L14.0568,48 L33.9432,48 L48,33.948 L48,14.052 L33.948,0 L33.9432,0 Z M22.7928,28.0224 L12.6516,17.9424 L15.2604,15.1284 L24.24,24.1116 L36.7308,23.7156 L36.7308,27.63 L22.7928,28.0224 Z" />
            </svg>

            <span>coming...</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
              <path fill="#D2513B" d="M0.0234375,2.0625 C0.0234375,0.9234375 0.946875,0 2.0859375,0 L16.8984375,0 C18.0375,0 18.9609375,0.9234375 18.9609375,2.0625 L18.9609375,16.875 C18.9609375,18.0140625 18.0375,18.9375 16.8984375,18.9375 L2.0859375,18.9375 C0.946875,18.9375 0.0234375,18.0140625 0.0234375,16.875 L0.0234375,2.0625 Z M4.1484375,4.125 L4.1484375,14.8125 L14.8359375,14.8125 L14.8359375,4.125 L4.1484375,4.125 Z M23.7421875,2.0625 C23.7421875,0.9234375 24.665625,0 25.8046875,0 L40.6171875,0 C41.75625,0 42.6796875,0.9234375 42.6796875,2.0625 L42.6796875,16.875 C42.6796875,18.0140625 41.75625,18.9375 40.6171875,18.9375 L25.8046875,18.9375 C24.665625,18.9375 23.7421875,18.0140625 23.7421875,16.875 L23.7421875,2.0625 Z M27.8671875,4.125 L27.8671875,14.8125 L38.5546875,14.8125 L38.5546875,4.125 L27.8671875,4.125 Z M0.0234375,25.6875 C0.0234375,24.5484375 0.946875,23.625 2.0859375,23.625 L16.8984375,23.625 C18.0375,23.625 18.9609375,24.5484375 18.9609375,25.6875 L18.9609375,40.5 C18.9609375,41.6390625 18.0375,42.5625 16.8984375,42.5625 L2.0859375,42.5625 C0.946875,42.5625 0.0234375,41.6390625 0.0234375,40.5 L0.0234375,25.6875 Z M4.1484375,27.75 L4.1484375,38.4375 L14.8359375,38.4375 L14.8359375,27.75 L4.1484375,27.75 Z M23.7421875,25.6875 C23.7421875,24.5484375 24.665625,23.625 25.8046875,23.625 L40.6171875,23.625 C41.75625,23.625 42.6796875,24.5484375 42.6796875,25.6875 L42.6796875,40.5 C42.6796875,41.6390625 41.75625,42.5625 40.6171875,42.5625 L25.8046875,42.5625 C24.665625,42.5625 23.7421875,41.6390625 23.7421875,40.5 L23.7421875,25.6875 Z M27.8671875,27.75 L27.8671875,38.4375 L38.5546875,38.4375 L38.5546875,27.75 L27.8671875,27.75 Z" />
            </svg>

            <span>coming...</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="26" viewBox="0 0 47 26">
              <g fill="#D2513B">
                <path d="M10.7110417,0.0437499844 L28.476375,18.44375 L44.0817083,4.31041669 L42.3537083,23.1904167 L10.188375,23.1904167 L12.556375,25.64375 L44.5830417,25.64375 L46.780375,1.86241669 L46.9510417,0.0437499844 L10.7110417,0.0437499844 Z M28.5937083,15.0304167 L16.492375,2.49708333 L42.4230417,2.49708333 L28.5937083,15.0304167 Z" />
                <path d="M12.5137083,6.05975002 L3.86837498,6.05975002 L6.23104167,8.51308331 L14.8870417,8.51308331 L12.5137083,6.05975002 L12.5137083,6.05975002 Z M17.964375,11.7024167 L0.0177083437,11.7024167 L2.38037498,14.15575 L20.332375,14.15575 L17.964375,11.7024167 L17.964375,11.7024167 Z M23.4097083,17.3450833 L4.66304166,17.3450833 L7.02570834,19.7930833 L25.7777083,19.7930833 L23.4097083,17.3450833 Z" />
              </g>
            </svg>

            <span>coming...</span>
          </li>
        </ul>
      </div>
      <p class="drawer__box__logOut">
        <label @click="logOut">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25">
            <path fill="#D2513B" d="M16.6995606,18.8818801 L15.6472065,17.9887239 L19.6328939,13.1935916 L6.18983051,13.1935916 L6.18983051,11.8036173 L11.68914,11.8036173 L11.68914,1.38997432 L1.37551789,1.38997432 L1.37551789,23.6100257 L11.68914,23.6100257 L11.68914,14.5835659 L13.0646579,14.5835659 L13.0646579,23.6100257 C13.0646579,24.3775818 12.4487131,25 11.68914,25 L1.37551789,25 C0.615944758,25 0,24.3775818 0,23.6100257 L0,1.38997432 C0,0.62241822 0.615944758,0 1.37551789,0 L11.68914,0 C12.4487131,0 13.0646579,0.62241822 13.0646579,1.38997432 L13.0646579,11.8064084 L19.6301318,11.8064084 L15.6444444,7.00848498 L16.6967985,6.11532879 L22,12.4986044 L16.6995606,18.8818801 Z" />
          </svg>
          <span>Log out</span>
        </label>
      </p>
    </div>
  </el-drawer>
</template>




<script>
export default {
  data() {
    return {
      drawer: this.$store.state.drawer,
    };
  },

  methods: {
    logOut() {
      this.$store.state.drawer = false;
      window.localStorage.clear();

      this.$store.state.profile = { username: "", avatar: "", token: "" };

      
      this.$router.push("/");
    },
    handleAvatarSuccess(res, file) {
      this.$toast.success("上传头像成功");
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$toast.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  font-size: 64px;
  line-height: 96px;
}
.drawer__box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 48px;
  color: #f3f2f0;
  font-size: 18px;
  &__avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    box-shadow: -5px -5px 10px #2f333d, 5px 5px 10px #21252b;
    img {
      width: 90%;
      height: 100%;
      border-radius: 50%;
      object-fit: contain;
    }
  }
  &__name {
    margin-top: 24px;

    font-size: 32px;
    color: white;
  }
  &__info {
    margin-top: 32px;
    width: 300px;
    height: 560px;
    border-radius: 32px;
    box-shadow: -7px -7px 6px #2d313a inset, 7px 7px 6px #23272e inset;
    box-sizing: border-box;
    padding: 20px;
    ul {
      width: 100%;
      height: 100%;

      border-radius: inherit;

      li {
        display: flex;

        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 80px;
        border-radius: 16px;
        box-shadow: -5px -5px 10px #2f333d, 5px 5px 10px #21252b;
        margin-bottom: 16px;
        svg {
          margin-left: 16px;
        }
        span {
          margin-left: 16px;
          text-align: start;
          height: 48px;
          width: 48px;
          line-height: 48px;
          font-size: 22px;
        }
      }
    }
  }
  &__logOut {
    text-align: start;

    width: 300px;

    margin-top: 32px;
    label {
      cursor: pointer;
      user-select: none;
    }
    svg {
      display: inline-block;
      vertical-align: middle;
    }
    span {
      margin-left: 16px;
    }
  }
}
</style>