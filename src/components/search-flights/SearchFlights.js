import Multiselect from 'vue-multiselect'

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
      flightInformation: null
    }
  },

  methods: {
    getFlightInformation () {
      this.isFetchingFlightInformation = true
      fetch(`https://api.skypicker.com/flights?fly_from=${this.selectedFrom.code}&fly_to=${this.selectedTo.code}&date_from=29/01/2021&date_to=29/01/2021&partner=picky`)
        .then(response => {
          return response.json()
        })
        .then(flights => {
          this.flightInformation = flights.data[0]
          this.isFetchingFlightInformation = false
        })
    }
  }
}
