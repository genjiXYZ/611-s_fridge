<template>
  <div class="edit" v-if="visible" @click.self="dialogVisible">
    <div class="edit__box">
      <div class="edit__box__left">
        <div>
          <img class="editPic" :src="row.categoryID.icon" alt="" />
        </div>
        <p class="edit__box__left__name">
          <el-input class="inline-input" v-model.lazy="row.name" clearable></el-input>
        </p>
      </div>
      <div class="edit__box__right">
        <div>
          <span>Num</span>
          <p>
            <el-input-number v-model="row.num" :min="0" label="num"></el-input-number>
          </p>
        </div>
        <div>
          <span>Buy time</span>
          <p>
            <el-date-picker v-model="row.buyDate" type="date" placeholder="date"></el-date-picker>
          </p>
        </div>
        <div>
          <span>EXP</span>
          <p>
            <el-select v-model="row.freshTime" placeholder>
              <el-option v-for="item in $store.state.Options.freshTime" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </p>
        </div>

        <div>
          <span>Position</span>
          <p>
            <el-radio-group v-model="row.position" fill="#d2513b">
              <el-radio-button label="fresher"></el-radio-button>
              <el-radio-button label="changer"></el-radio-button>
              <el-radio-button label="freezer"></el-radio-button>
            </el-radio-group>
          </p>
        </div>
        <div class="neumorphism-buttom" v-if="row.num > 0" @click="putFoods">
          update
        </div>
        <div class="neumorphism-buttom" v-else @click="delFoods">del</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["row", "visible"],

  data() {
    return {
   
    };
  },


  methods: {
    querySearch() {},
    handleSelect() {},
    dialogVisible() {

    
      this.$emit("up");

      this.$emit("update:visible", false);
    },
    delFoods() {
      this.$store.dispatch("delFoods", { id: this.row._id }).then((res) => {
        this.$store.dispatch("fetchFoods", {
          position: this.$route.params.position,
        });
      });

      this.dialogVisible();
    },
    putFoods() {
      this.$store
        .dispatch("putFoods", {
          id: this.row._id,
          model: this.row,
        })
        .then((res) => {
      this.$store.dispatch("fetchFoods", {
          position: this.$route.params.position,
        });
          this.dialogVisible();
        });
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.editPic {
  width: 278px;
  height: 278px;
  object-fit: contain;
}
.edit {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d05240;
  font-size: 0.16rem;

  &__box {
    width: 750px;
    height: 380px;
    padding: 32px;
    border-radius: 30px;
    background-color: #f3f2f0;
    box-shadow: 2px 2px 2px #d7d3d0, 4px 4px 1px white inset,
      0px -3px 4px #dadada inset;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__left {
      height: 100%;
      width: 240px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    &__right {
      height: 100%;
      width: 384px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      & > div:not(.neumorphism-buttom) {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > span {
          display: inline-block;
          width: 110px;
          text-align: center;
        }
        & > p {
          width: 280px;
          text-align: center;
        }
      }
    }
  }
}

.neumorphism-buttom {
  align-self: flex-end;
  width: 114px;
  height: 39px;
  background-color: #d05240;
  border-radius: 4px;
  font-size: 14px;
  line-height: 39px;
  color: #f3f2f0;
  cursor: pointer;
  text-align: center;
}
</style>
