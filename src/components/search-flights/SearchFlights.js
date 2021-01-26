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
      selectedFrom: null,
      selectedTo: null,
      optionsFrom: [
        { name: 'New York', code: 'JFK' },
        { name: 'Paris', code: 'CDG' },
        { name: 'California', code: 'SMF' }
      ],
      optionsTo: [
        { name: 'Amsterdam', code: 'AMS' },
        { name: 'London', code: 'LHR' }
      ],
      flightsInformation: null,
      weather: null
    }
  },

  methods: {
    getFlightsInformation () {
      this.isFetchingFlightsInformation = true
      axios.get(`https://api.skypicker.com/flights?fly_from=${this.selectedFrom.code}&fly_to=${this.selectedTo.code}&date_from=29/01/2021&date_to=29/01/2021&limit=5&partner=picky`)
        .then(response => {
          this.flightsInformation = response.data.data
          this.getWeatherInformation()
        })
    },

    getWeatherInformation () {
      axios.get(`https://api.openweathermap.org/data/2.5/weather/?q=${this.selectedTo.name}&units=metric&APPID=${process.env.VUE_APP_WEATHER_API_KEY}`)
        .then(response => {
          this.weather = response.data
          this.isFetchingFlightsInformation = false
        })
    },

    formatUnixTime (time) {
      const date = new Date(time * 1000)
      const hours = date.getHours()
      const minutes = '0' + date.getMinutes()
      return hours + ':' + minutes.substr(-2)
    }
  }
}
