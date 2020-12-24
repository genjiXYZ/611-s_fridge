<script>
import { Scatter } from "vue-chartjs";
import store from "../store/index";

import router from "../router/index";

export default {
  props: ["data1", "data2"],
  data() {
    return {
      tooltipItem: "",
      data: "",
      options: {
        title: {
            display: true,
            text: '点击 point 跳转到食物 !'
            
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              let foodName =
                data.datasets[tooltipItem.datasetIndex]["data"][
                  tooltipItem.index
                ].name;
              let foodStatus = data.datasets[tooltipItem.datasetIndex]["label"];
              let y = tooltipItem.yLabel;
              return `${foodName} : ${y} 个月`;
            },
          },
        },
        onClick: function (evt) {
          var activePoints = this.getElementAtEvent(evt);

          if (activePoints.length > 0) {
            var clickedDatasetIndex = activePoints[0]._datasetIndex;
            var clickedElementindex = activePoints[0]._index;
            var value = this.data.datasets[clickedDatasetIndex].data[
              clickedElementindex
            ];
 
            store.state.searchValues = value.name;

            router.push(`/foods/${value.position}`);
          }
        },
         onHover: function(e) {
         var point = this.getElementAtEvent(e);
         if (point.length) e.target.style.cursor = 'pointer';
         else e.target.style.cursor = 'default';
      }
        // onHover:function (params) {
        //   console.log(params)
        // }
      },
      
    };
  },

  watch: {
    data1() {
      this.render();
    },
    data2() {
      this.render();
    },
  },
  extends: Scatter,
  methods: {
    render() {
      this.renderChart(
        {
          datasets: [
            {
              label: "已经过期",
              fill: false,
              borderColor: "#f87979",
              backgroundColor: "#f87979",

              data: this.data2,
            },
            {
              label: "剩余保质期",
              fill: false,
              borderColor: "#7acbf9",
              backgroundColor: "#7acbf9",
              data: this.data1,
            },
          ],
        },

        this.options
      );
    },
  },
  mounted() {
    this.render();
  },
};
</script>
