import Multiselect from 'vue-multiselect'
import axios from 'axios'

export default {
  components: {
    Multiselect
  },

  data () {
    return {
      isFetchingFlightInformation: false,
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
      flightInformation: null,
      weather: null
    }
  },

  methods: {
    getFlightInformation () {
      this.isFetchingFlightInformation = true
      axios.get(`https://api.skypicker.com/flights?fly_from=${this.selectedFrom.code}&fly_to=${this.selectedTo.code}&date_from=29/01/2021&date_to=29/01/2021&partner=picky`)
        .then(response => {
          this.flightInformation = response.data.data[0]
          this.getWeatherInformation()
        })
    },

    getWeatherInformation () {
      axios.get(`https://api.openweathermap.org/data/2.5/weather/?q=${this.selectedTo.name}&units=metric&APPID=${process.env.VUE_APP_WEATHER_API_KEY}`)
        .then(response => {
          this.weather = response.data
          this.isFetchingFlightInformation = false
        })
    }
  }
}
