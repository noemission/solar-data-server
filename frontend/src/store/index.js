import Vue from 'vue'
import Vuex from 'vuex'
import throttle from 'lodash.throttle'

Vue.use(Vuex)

const mapSensorData = (data) => {
  return {
    time: new Date(data.date),
    value: data.value,
    // id: data._id
  }
}

export default new Vuex.Store({
  state: {
    sensors: [
      {
        type: 'CURRENT_FROM_BATTERY_TO_INVERTER',
        data: [],
        latest: 0,
      },
      {
        type: 'CURRENT_FROM_SOLAR_TO_BATTERY',
        data: [],
        latest: 0,
      },
      {
        type: 'BATTERY_VOLTAGE',
        data: [],
        latest: 0,
      }
    ]
  },
  mutations: {
    setSensorValues: (state, payload) => {

      const target = state.sensors.find(sensor => sensor.type === payload.type);
      if (target) {
        target.data = payload.data
      }
    },
    setLatestSensorValue: (state, payload) => {

      const target = state.sensors.find(sensor => sensor.type === payload.type);
      if (target) {
        target.latest = payload.data
      }
    }
  },
  actions: {
    initEvents({ dispatch }) {
      console.log('init events')
      const getSensorValues = throttle(() => dispatch('getSensorValues'), 2000)
      const getLatestSensorValues = throttle(() => dispatch('getLatestSensorValues'), 2000)
      this._vm.$api.service('sensor-data')
        .on('created', () => {
          getSensorValues();
          getLatestSensorValues();
        });
    },
    getSensorValues({ commit, state }) {
      state.sensors.map(async ({ type }) => {

        const allData = [];
        const $limit = 500;
        let $skip = 0;
        let total;
        do {
          const response = await this._vm.$api.service('sensor-data-cleaned').find({
            query: {
              sensor: type,
              date: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }, // 7 days before
              $sort: { date: -1 },
              $select: ['date', 'sensor', 'value'],
              $limit,
              $skip,
            },
          });
          const { data } = response;
          total = response.total;
          data.forEach((item) => allData.push(item));
          $skip += $limit;
        } while (total > $skip);

        commit('setSensorValues', {
          type,
          data: allData.map(mapSensorData)
        })
      })
    },
    getLatestSensorValues({ commit, state }) {
      state.sensors.map(async ({ type }) => {

        const { data } = await this._vm.$api.service('sensor-data-cleaned').find({
          query: {
            sensor: type,
            $limit: 1,
            $sort: { date: -1 },
            $select: ['date', 'sensor', 'value']
          }
        });
        commit('setLatestSensorValue', {
          type,
          data: data.map(mapSensorData)[0]
        })
      })
    }
  },
  modules: {
  }
})
