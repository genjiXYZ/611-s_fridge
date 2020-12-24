<template>
  <div class="box flex justify-center align-center">
    <div class="catergoryList flex justify-center">
      <ul>
        <li v-for="(item, index) in resCategorys" :key="index" @click="clickCatergory(item)">
          <img :src="item.icon" alt />
          <span>{{ item.category }}</span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["resCategorys"]),
  },
  methods: {
    clickCatergory(item) {
      this.$store.commit("setData", { key: "selectedCategory", value: item });
      this.$router.push(`/add/${item.category}`);
    },
  },

  created() {
    !this.$store.resCategorys && this.$store.dispatch("fetchCategorys");
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: calc(100vh - 100px);

}
.catergoryList {
  width: 800px;
  height: 600px;
  //   border: 2px solid black;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  box-shadow: inset 5px 5px 10px #dddcda, inset -5px -5px 10px #ffffff;
  user-select: none;

  ul {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(1, 33.3%);
    // box-shadow: 6px 6px 13px #cfcecc, -6px -6px 13px #ffffff;
    border-radius: 30px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 20px;
      box-shadow: 5px 5px 10px #cfcecc, -5px -5px 10px #ffffff;
      border-radius: 30px;
      margin: 10px;
      cursor: pointer;
      &:active {
        box-shadow: inset 5px 5px 10px #dddcda, inset -5px -5px 10px #ffffff;
      }
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>
