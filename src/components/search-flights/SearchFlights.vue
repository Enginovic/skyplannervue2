<template>
  <div>
    <div class="search-flight-form">
      <multiselect
        v-model="selectedFrom"
        :options="optionsFrom"
        placeholder="From"
        label="name">
      </multiselect>
      <multiselect
        v-model="selectedTo"
        :options="optionsTo"
        placeholder="To"
        label="name">
      </multiselect>

      <div class="btn" @click="getFlightInformation">Search</div>
    </div>
    <template v-if="isFetchingFlightInformation">
      <div class="loading">
        Fetching data
      </div>
    </template>
    <template v-if="!isFetchingFlightInformation && flightInformation">
      <div class="flight-information">
        <div class="flight-destination">
          {{ this.flightInformation.cityCodeFrom }}
          {{ this.flightInformation.cityFrom }} ->
          {{ this.flightInformation.cityCodeTo }}
          {{ this.flightInformation.cityTo }}
        </div>
        <div class="flight-duration">Duration: {{ this.flightInformation.fly_duration }}</div>
        <div class="flight-price">Price: {{ this.flightInformation.price }}</div>
      </div>
      <div class="weather-information">
        Temp. {{ Math.round(weather.main.temp) }}º
      </div>
    </template>
  </div>
</template>

<script lang="js" src="./SearchFlights.js"></script>
<style lang="scss" src="./search-flights.scss" scoped></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
