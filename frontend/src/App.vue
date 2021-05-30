<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col md="4" cols="12" v-for="sensorData in sensors" :key="sensorData.type">
              <main-card
                v-if="sensorData.latest.time"
                :timestamp="sensorData.latest.time.toLocaleString()"
                :value="sensorData.latest.value"
                :sensor-type="sensorData.type"
              />
            </v-col>
          </v-row>

          <v-row justify="center" no-gutters>
            <v-col lg="6" cols="12" class="py-2">
              <v-card elevation="5">
                <chart
                  title="Inverter current"
                  symbol="mAh"
                  yTitle="Current"
                  :data="mapDataForChart(sensors[0].data)"
                />
              </v-card>
            </v-col>

            <v-col lg="6" cols="12" class="py-2">
              <v-card elevation="5">
                <chart
                  title="Solar current"
                  symbol="mAh"
                  yTitle="Current"
                  :data="mapDataForChart(sensors[1].data)"
                />
              </v-card>
            </v-col>

            <v-col lg="6" cols="12" class="py-2">
              <v-card elevation="5">
                <chart
                  title="Battery voltage"
                  symbol="V"
                  yTitle="Voltage"
                  :data="mapDataForChart(sensors[2].data)"
                />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Chart from "./components/Chart.vue";
import MainCard from "./components/MainCard.vue";
export default {
  components: { Chart, MainCard },
  name: "App",
  methods: {
    ...mapActions(["initEvents", "getSensorValues", "getLatestSensorValues"]),
    mapDataForChart(data) {
      return data.map(({ time, value }) => [
        time.toISOString(),
        value,
        `${value} mah`,
      ]);
    },
  },
  computed: {
    ...mapState(["sensors"]),
  },
  mounted() {
    this.initEvents();
    this.getSensorValues();
    this.getLatestSensorValues();
  },
};
</script>

<style>
</style>
