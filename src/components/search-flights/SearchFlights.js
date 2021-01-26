import Multiselect from 'vue-multiselect'
import axios from 'axios'

import Loader from '../loader/Loader.vue'

export default {
  components: {
    Multiselect,
    appLoader: Loader
  },

  data () {
    return {
      isFetchingFlightsInformation: false,
      isErrorFetchingFlightInformation: false,
      isErrorFetchingWeatherInformation: false,

      selectedFrom: null,
      selectedTo: null,
      flightsInformation: null,
      weather: null,
      weatherIcon: null,

      optionsFrom: [
        { name: 'New York', code: 'JFK' },
        { name: 'Paris', code: 'CDG' },
        { name: 'California', code: 'SMF' }
      ],
      optionsTo: [
        { name: 'Amsterdam', code: 'AMS' },
        { name: 'London', code: 'LHR' }
      ]
    }
  },

  methods: {
    getFlightsInformation () {
      this.removeErrors()
      this.isFetchingFlightsInformation = true

      axios.get(`https://api.skypicker.com/flights?fly_from=${this.selectedFrom.code}&fly_to=${this.selectedTo.code}&date_from=29/01/2021&date_to=29/01/2021&limit=5&partner=picky`)
        .then(response => {
          this.flightsInformation = response.data.data
          this.getWeatherInformation()
        })
        .catch(() => {
          this.isErrorFetchingFlightInformation = true
        })
    },

    getWeatherInformation () {
      axios.get(`https://api.openweathermap.org/data/2.5/weather/?q=${this.selectedTo.name}&units=metric&APPID=${process.env.VUE_APP_WEATHER_API_KEY}`)
        .then(response => {
          this.weather = response.data
          this.weatherIcon = this.weather.weather[0].main === 'Clouds' ? 'sun-behind-cloud' : 'sun'
          this.isFetchingFlightsInformation = false
        })
        .catch(() => {
          this.isErrorFetchingWeatherInformation = true
        })
    },

    formatUnixTime (time) {
      const date = new Date(time * 1000)
      const hours = date.getHours()
      const minutes = '0' + date.getMinutes()
      return hours + ':' + minutes.substr(-2)
    },

    removeErrors () {
      this.isErrorFetchingFlightInformation = false
      this.isErrorFetchingWeatherInformation = false
    }
  }
}
