<template>
  <div class="box flex align-center justify-center" v-if="$store.state.selectedCategory">
    <div class="back flex align-center justify-center " @click="$route.path != '/add' && $router.push('/add')">

      <svg t="1608491406912" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1735" width="48" height="48">
        <path d="M943.9 528.4H78.8c-6.2 0-11.9-3.8-14.3-9.5-2.4-5.8-1.1-12.4 3.3-16.8l378.9-378.9c6-6 15.8-6 21.8 0s6 15.8 0 21.8L116.1 497.5h827.8c8.5 0 15.4 6.9 15.4 15.4 0.1 8.6-6.8 15.5-15.4 15.5zM444.7 906.3c-4 0-7.9-1.5-10.9-4.5L155.7 623.7c-6-6-6-15.8 0-21.8s15.8-6 21.8 0L455.6 880c6 6 6 15.8 0 21.8-3 3-7 4.5-10.9 4.5z" p-id="1736"></path>
      </svg>
    </div>
    <div class="addFood">
      <p class="addFood__icon">
        <img  :src="$store.state.selectedCategory.icon" alt="" />
      </p>

      <div class="addFood__grid">
        <el-autocomplete class="inline-input" :fetch-suggestions="querySearchAsync" v-model="model.name" placeholder="name" style="width:100%"></el-autocomplete>

        <el-input-number v-model="model.num" :min="1" label="num" style="width:100%"></el-input-number>

        <el-date-picker v-model="model.buyDate" type="date" placeholder="date" style="width:100%"></el-date-picker>

        <el-select v-model="model.freshTime" placeholder="freshTime" style="width:100%">
          <el-option v-for="item in $store.state.Options.freshTime" :key="item" :label="item" :value="item"></el-option>
        </el-select>

        <el-radio-group v-model="model.position" fill="#d2513b" class="addFood__grid__position">
          <el-radio-button label="fresher"></el-radio-button>
          <el-radio-button label="changer"></el-radio-button>
          <el-radio-button label="freezer"></el-radio-button>
        </el-radio-group>

        <el-button class="addFood__grid__submit" @click="submit">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        categoryID:this.$store.state.selectedCategory? this.$store.state.selectedCategory["_id"]:'',
        num: 0,
        name: "",
        position: "fresher",
        buyDate: new Date(),
        freshTime: "",
      },
      timeout: "",

      options: {
        fruit: [
          { value: "苹果" },
          { value: "梨" },
          { value: "西瓜" },
          { value: "哈密瓜" },
          { value: "火龙果" },
          { value: "荔枝" },
          { value: "榴莲" },
        ],
        drink: [
          { value: "可乐" },
          { value: "雪碧" },
          { value: "牛奶" },
          { value: "酸奶" },
          { value: "啤酒" },
          { value: "红酒" },
          { value: "功能饮料" },
        ],
        season: [
          { value: "番茄酱" },
          { value: "芥末" },
          { value: "辣酱" },
          { value: "豆瓣酱" },
          { value: "沙拉酱" },
        ],
        snacks: [{ value: "薯片" }, { value: "巧克力" }, { value: "冰棍" }],
        fish: [
          { value: "沙丁鱼" },
          { value: "瑶柱" },
          { value: "虾仁" },
          { value: "带鱼" },
          { value: "鲳鱼" },
          { value: "鳕鱼" },
          { value: "贝类" },
        ],
        meat: [
          { value: "猪肉" },
          { value: "牛肉" },
          { value: "羊肉" },
          { value: "鸡肉" },
          { value: "排骨" },
          { value: "肉卷" },
          { value: "牛排" },
        ],
        can: [
          { value: "橄榄菜" },
          { value: "午餐肉" },
          { value: "金枪鱼" },
          { value: "鱼子酱" },
        ],
        wheaten: [
          { value: "面包" },
          { value: "蛋糕" },
          { value: "蛋挞" },
          { value: "剩饭" },
          { value: "水饺" },
          { value: "包子" },
          { value: "馒头" },
        ],
        egg: [{ value: "鸡蛋" }, { value: "咸鸭蛋" }, { value: "皮蛋" }],
        vegetable: [
          { value: "黄瓜" },
          { value: "西红柿" },
          { value: "白菜" },
          { value: "胡萝卜" },
          { value: "香菜" },
          { value: "葱" },
          { value: "蒜" },
          { value: "姜" },
        ],
        leftover: [{ value: "火腿" }, { value: "培根" }, { value: "火腿肠" }],
      },

      freshTimeOption: [
        "1 month",
        "3 months",
        "6 months",
        "12 months",
        "24 months",
      ],
    };
  },

  methods: {
    isCompletive(object) {
      var arr = Object.values(object).filter(function (item) {
        if (item == "") {
          return true; //过滤掉为空的项
        }
      });
      if (arr.length != 0) {
        // 如果过滤后的arr长度为0，表示对象的键值对的值都为空！
        return false;
      } else {
        return true;
      }
    },

    querySearchAsync(queryString, cb) {
      var results = this.options[this.$route.params.category];
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },

    submit() {
      let flag = this.isCompletive(this.model);
      if (this.isCompletive(this.model)) {
        this.$store.dispatch("addFoods", this.model).then((res) => {
          this.$router.push("/add");
        });
      } else {
        this.$toast.error("请填写完整");
      }
    },
  },

  beforeCreate() {
    !this.$store.state.selectedCategory && this.$router.push("/add");
  },

  mounted() {
    this.$store.dispatch("fetchCategorys");
  },
};
</script>

<style lang="scss" scoped>
.back {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: #d05240;
  margin-right: 50px;
  cursor: pointer;
  box-shadow: -3px -3px 10px rgba(255, 255, 255, 0.4),
    3px 3px 10px rgba(0, 0, 0, 0.2);
}
.icon {
  font-size: 42px;
  fill: #f3f2f0;
}
.box {
  width: 100%;
  height: calc(100vh - 100px);
}
.addFood {
  width: 600px;
  height: 600px;
  font-size: 18px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: inset 5px 5px 10px #cfcecc, inset -5px -5px 10px #ffffff;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    border-radius: 20px;
    margin-bottom: 56px;
    box-shadow: 5px 5px 3px #d8d7d6, -5px -5px 3px #ffffff;
    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
  }
  &__grid {
    width: 90%;
    box-sizing: border-box;
    padding: 20px 20px;
    border-radius: 20px;
    box-shadow: 5px 5px 3px #d8d7d6, -5px -5px 3px #ffffff;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-items: center;
    grid-gap: 20px;
    &__position {
      grid-column: 1 / span 2;
    }
    &__submit {
      grid-column: 2 / span 1;
      justify-self: right;
      width: 100px;
    }
  }
}
</style>
