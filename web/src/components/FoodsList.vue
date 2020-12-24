<template>
  <div class="FoodsList">
    <div class="FoodsList__menu">
      <span class="FoodsList__menu__title"> {{ $route.params.position }}</span>
      <ul class="FoodsList__menu__nickname" @click="switchMember" :class="switchMemberFlag">
        <li>all</li>
        <li v-for="(obj, index) in resGroupMembers" :key="obj.id" :data-index="index">
          {{ obj.nickname }}
        </li>
      </ul>
    </div>
    <el-input class="search" clearable v-model.lazy="searchValues" size="small"> <i slot="prefix" class="el-input__icon el-icon-search"></i></el-input>

    <div class="FoodsList__main">
      <el-table :data="resFoods" height="100%" :row-style="rowStyle" :cell-style="cellStyle" :header-row-style="headerStyle" :default-sort="{ prop: 'date' }" @row-click="handleList">
        <el-table-column prop="categoryID.icon" label="category" sortable align="center">
          <template slot-scope="scope">
            <img class="FoodsList__main__icon" :src="scope.row.categoryID.icon || ''" alt />
          </template>
        </el-table-column>

        <el-table-column prop="name" label="name" sortable align="center"></el-table-column>
        <el-table-column prop="num" label="num" sortable align="center"></el-table-column>
        <el-table-column prop="buyDate" label="buyDate" sortable align="center" :formatter="formatter"></el-table-column>
        <el-table-column prop="freshTime" label="fresh" sortable align="center"></el-table-column>

        <el-table-column prop="usernameID.nickname" label="owner" align="center" sortable>

        </el-table-column>

        <el-table-column label="status" align="center">
          <template slot-scope="scope">

            <span class="outDate" v-if="calcDate(scope.row)"> 已过期 </span>
            <span class="inDate" v-else> 未过期 </span>

          </template>
        </el-table-column>

      </el-table>

    </div>

    <Edit :row="editInfo" :visible.sync="visible" @up="up" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Edit from "../components/Edit";
export default {
  components: {
    Edit,
  },
  data() {
    return {
      switchMemberFlag: false,
      cellStyle: {
        fontSize: "0.14rem",
        height: "0.6rem",
        padding: 0,
      },
      rowStyle: {
        height: "0.6rem",
      },
      headerStyle: {
        fontSize: "0.14rem",
        height: "0.8rem",
      },
      editInfo: "",
      origin: "",
      visible: false,
    };
  },

  computed: {
    ...mapState(["resGroupMembers"]),
    resFoods() {
      if (this.searchValues) {
        let ary = this.$store.state.resFoods.filter((e) => {
          return e.name.includes(this.searchValues);
        });
        return ary;
      } else {
        return this.$store.state.resFoods;
      }
    },
    searchValues: {
      get: function () {
        return this.$store.state.searchValues;
      },
      set: function (newV) {
        this.$store.state.searchValues = newV;
      },
    },
  },
  watch: {
    $route() {
      this.fetchFoods({ position: this.$route.params.position });
     
    },
  },
  methods: {
    ...mapActions(["fetchFoods", "fetchMembers", "fetchCategorys"]),
    formatter(row, column) {
      return this.$dayjs(row.buyDate).format("YY/MM/DD");
    },
    switchMember(e) {
      let index = e.target.dataset.index;
      this.changeTab(index);
      index == undefined ? (index = "") : index;

      this.$store.commit("setData", {
        key: "selectedMemeberID",
        value: index ? this.resGroupMembers[index].id : "",
      });
      //
      this.fetchFoods({ position: this.$route.params.position });
    },
    calcDate(e) {
      let real = this.$dayjs(e.buyDate)
        .add(e.freshTime.slice(0, 1) * 1, "month")
        .format("YYYY/MM/DD");
      let fromNow = this.$dayjs(real).fromNow();
      return fromNow.includes("前") ? true : false;
    },
    changeTab(index) {
      index == undefined
        ? (this.switchMemberFlag = false)
        : (this.switchMemberFlag = `switchMember__${index}`);
    },
    handleList(row, column) {
 
 
      this.editInfo = JSON.parse(JSON.stringify(row))

      this.visible = true;
    },
    up() {
 

      this.$forceUpdate();
    },
  },
  created() {
    this.fetchFoods({ position: this.$route.params.position });
    this.fetchMembers();
  },
  beforeDestroy(){
    this.$store.state.searchValues = ""
  },

 

  mounted() {
   

  },
};
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  bottom: calc(100% + 20px);
  right: 20px;
  z-index: 100;
  width: 1rem !important;
}
.FoodsList {
  width: 9rem;

  height: 6.4rem;
  position: relative;
  margin-right: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &__menu {
    height: 100%;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 1rem 0;

    &__title {
      font-size: 56px;
      transform-origin: center;
      transform: rotateZ(-90deg);
      text-transform: capitalize;
      text-shadow: -5px -5px 10px rgba(255, 255, 255, 0.4),
        5px 5px 10px rgba(0, 0, 0, 0.2);
      caret-color: #262626;
      outline: none;
      color: #d05240;
    }
    &__nickname {
      user-select: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      li {
        font-size: 16px;
        width: 50px;
        border-radius: 10px;
        height: 40px;
        line-height: 40px;
        color: #909399;
        text-align: center;
        cursor: pointer;
      }
    }
  }
  &__main {
    width: 800px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 30px;

    box-shadow: 7px 7px 12px #cccbca, -7px -7px 12px #ffffff;
    background-color: #f3f2f0;
    padding: 20px 10px;
    &__icon {
      width: 36px;
      height: 36px;
      box-shadow: 0 2px 5px #7f8183, inset 0 2px 5px #ffffff;
      border: 2px solid rgba(243, 242, 240, 0.68);
      background-color: #f3f2f0;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}

@for $i from 1 through 4 {
  .switchMember__#{$i - 1 } {
    li:nth-child(#{$i + 1}) {
      // background: linear-gradient(145deg, #dbdad8, #ffffff);
      // box-shadow: 5px 5px 6px #c5c4c2, -5px -5px 6px #ffffff;

      background: #f3f2f0;
      box-shadow: 5px 5px 10px #c7c6c5, -5px -5px 10px #ffffff;
      width: 64px;
      transition: width 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
      animation: all 0.25s ease-in-out 1 forwards;
    }
  }
}
[class="FoodsList__menu__nickname"] {
  li:nth-child(1) {
    background-color: #d05240;
    width: 64px;

    background: #f3f2f0;
    box-shadow: inset 5px 5px 5px #cac9c7, inset -5px -5px 5px #ffffff;

    transition: width 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }
}

.outDate,
.inDate {
  width: 10px;
  height: 10px;
  border-radius: 4px;
  color: #f3f2f0;
  padding: 4px 4px;
  overflow: hidden;
}
$white: #f3f2f0;
$red: #d05240;
$darkBlue: #24272e;
.outDate {
  background-color: #d05240;
}
.inDate {
  background-color: #3894ff;
}
</style>
