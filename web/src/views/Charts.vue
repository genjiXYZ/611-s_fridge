<template>


    <div class="charts flex align-center justify-center flex-column">
      <div class="charts__pie flex justify-space-around align-center">
      
        <div class="charts__item">
          <Pie-chart v-if="nickname" :Name="nickname" :Num="own" :options="chartOptions" :chartColors="defaultColors" label="nihao">
          </Pie-chart>
        </div>
      </div>
      <div class="charts__line">
        <div class="charts__item">
          <ScatterChart :data1="scatterFresh" :data2="scatterOut" />
        </div>
      </div>

    
  </div>

</template>

<script>
import PieChart from "../components/pieCharts";
import ScatterChart from "../components/ScatterChart";



export default {
  components: {
    PieChart,
    ScatterChart,

  },
  data() {
    return {
      arrCategory: {},
      defaultColors: {
        borderColor: "#F3F2F0",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#402A2C",
        backgroundColor: [
          "#63b2ee",
          "#76da91",
          "#f8cb7f",
          "#f89588",
          "#7cd6cf",
          "#9192ab",
          "#7898e1",
          "#efa666",
          "#eddd86",
          "#9987ce",
          "#63b2ee",
          "#DBABFD",
        ],
      },
      memberColors: {
        borderColor: "#F3F2F0",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#402A2C",
        backgroundColor: ["#63b2ee", "#76da91", "#f8cb7f", "#f89588"],
      },
      chartOptions: {
        tooltips: {
          enabled: true,
          mode: "single",
        },
        legend: {
          position: "bottom",
          fontColor: "#23272E",
        },
        // categoryName:Object.key(this.arrCategory)
      },
      categoryName: "",
      categoryNum: "",
      scatterFresh: [],
      scatterOut: [],
      nickname: "",
      own: [],
    };
  },

  computed: {},

  async created() {
    const foods = await this.$http.get("/rest/food");

    const data = foods.data;

    ///line

    const lineX = Array.from({ length: 8 }, (_, i) => i + 5);

    let mapDate = data.map((e, index) => {
      e.now = this.$dayjs().format("YYYY/MM/DD");

      let real = this.$dayjs(e.buyDate)
        .add(e.freshTime.slice(0, 1) * 1, "month")
        .format("YYYY/MM/DD");
      // console.log('e.freshTime.slice(0,1)*0: ', e.freshTime.slice(0,1)*1);
      let fromNow = this.$dayjs(real).fromNow();

      fromNow.includes("前")
        ? (e.fromNow = fromNow.slice(0, 1) * -1)
        : (e.fromNow = fromNow.slice(0, 1) * 1);

      e.chart = { x: index, y: e.fromNow, name: e.name, position: e.position };

      e.real = real;
      // e.buyDate = this.$dayjs(e.buyDate).format("MM")
      return e;
    });
    mapDate.forEach((e) => {
      if (e.chart.y >= 0) {
        this.scatterFresh.push(e.chart);
      } else {
        this.scatterOut.push(e.chart);
      }
    });

    data.forEach((d) => {
      const name = d.categoryID.category;

      this.arrCategory[name]
        ? (this.arrCategory[name] += d.num)
        : (this.arrCategory[name] = d.num);
    });

    this.categoryName = Object.keys(this.arrCategory);
    this.categoryNum = Object.values(this.arrCategory);

    const memberFoods = await this.$http.get("/charts/member");

    const medata = memberFoods.data;

    this.nickname = medata.map((item) => item.nickname);
    this.own = medata.map((item) => item.own);
  },
};
</script>

<style lang="scss" scoped>
$itemW: 300px;

.charts {
  height: calc(100% - 100px);
  width: 100%;

  transform-style: preserve-3d;

  & > div {
    margin: 20px 0;
  }

  &__pie {

    
    > div {
      margin: 0 100px;
      width: $itemW;
      height: $itemW;
      box-shadow: 5px 5px 3px #d8d7d6, -5px -5px 3px #ffffff;
      padding: 20px;
      border-radius: 20px;
      position: relative;
    }
  }
  &__line {
    > div {
      width: calc(600px + 200px);

      box-shadow: 5px 5px 3px #d8d7d6, -5px -5px 3px #ffffff;
      padding: 20px;
      border-radius: 20px;
      position: relative;
    }
  }
}
</style>
