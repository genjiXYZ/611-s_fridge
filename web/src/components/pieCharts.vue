<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    label: {
      type: String,
    },
    Name: {
      type: Array,
    },
    Num: {
      type: Array,
    },

    options: {
      type: Object,
    },
    chartColors: {
      type: Object,
    },
  },

  mounted() {

    const {
      borderColor,
      pointBorderColor,
      pointBackgroundColor,
      backgroundColor,
    } = this.chartColors;

    this.renderChart(
      {
        labels: this.Name,
        datasets: [
          {
            label: this.label,
            data: this.Num,
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor,
            borderWidth: 1,
          },
        ],
      },
      this.options
    );
  },
};
</script>
