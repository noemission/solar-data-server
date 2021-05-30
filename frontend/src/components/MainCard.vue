<template>
  <v-card dark elevation="4" raised rounded shaped>
    <v-card-title>
      <v-icon class="pr-2">{{ data.iconBefore }}</v-icon>
      <v-icon class="pr-2">mdi-arrow-right</v-icon>
      <v-icon>{{ data.iconAfter }}</v-icon>
    </v-card-title>
    <v-card-subtitle>
      {{ timestamp }}
      <span> - {{ data.title }}</span>
    </v-card-subtitle>
    <v-card-text>
      <span class="text-h3">{{value}}</span>
      <span class="text-h5">{{data.symbol}}</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    sensorType: { required: true, type: String },
    value: { type: Number },
    timestamp: { type: String },
  },
  computed: {
    data() {
      if(this.sensorType === "CURRENT_FROM_BATTERY_TO_INVERTER"){
        return {
          title: 'Inverter Current',
          iconBefore: 'mdi-battery-charging-70',
          iconAfter: 'mdi-power-plug',
          symbol: 'mAh',
        }
      }
      if(this.sensorType === "CURRENT_FROM_SOLAR_TO_BATTERY"){
        return {
          title: 'Solar Current',
          iconBefore: 'mdi-weather-sunny',
          iconAfter: 'mdi-battery-charging-70',
          symbol: 'mAh',
        }
      }
      if(this.sensorType === "BATTERY_VOLTAGE"){
        return {
          title: 'Battery Voltage',
          iconBefore: 'mdi-battery-charging-30',
          iconAfter:  'mdi-battery-charging-90',
          symbol: 'V',
        }
      }
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