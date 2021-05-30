<template>
  <div style="height: 40vh">
    <v-chart class="chart" :option="option" autoresize ref="chart" />
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  DataZoomComponent,
  MarkPointComponent,
  MarkLineComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import VChart, {} from "vue-echarts";

use([
  CanvasRenderer,
  GridComponent,
  LineChart,
  TitleComponent,
  TooltipComponent,
  DataZoomComponent,
  MarkLineComponent,
  MarkPointComponent,
]);

export default {
  components: {
    VChart,
  },
  props: {
    data: { required: true, type: Array },
    loading: { type: Boolean, default: false },
    title: { type: String, default: "" },
    yTitle: { type: String, default: "" },
    symbol: { type: String, default: "" },
  },
 
    // provide: {
    //   [THEME_KEY]: "dark",
    // },
  computed: {
    option() {
      return {
        dataZoom: {
          type: "inside",
        },
        title: {
          text: this.title,
          left: "center",
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "time",
          name: "Time",
        },
        grid: {
          left: '2%',
          right: '13%',
          bottom: '3%',
          containLabel: true,
        },
        yAxis: {
          name: this.yTitle,
          type: "value",
          axisLabel: {
            formatter: "{value} " + this.symbol,
          },
        },
        series: [
          {
            showSymbol: false,
            data: this.data,
            type: "line",
            smooth: true,
            markLine: {
              data: [{ type: "average", name: "Average" }],
            },
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.chart {
  height: 100%;
}
</style>