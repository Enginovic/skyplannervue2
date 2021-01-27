<template>
  <div>
    <div class="search-flight-form">
      <label class="label">From</label>
      <multiselect
        class="multi-select"
        v-model="selectedFrom"
        :options="optionsFrom"
        placeholder="Where are you flying from?"
        :searchable="false"
        label="name">
      </multiselect>

      <label class="label">To</label>
      <multiselect
        v-model="selectedTo"
        :options="optionsTo"
        placeholder="Where do you want to go?"
        :searchable="false"
        label="name">
      </multiselect>
      <div class="btn btn--secondair" :class="{disabled: !selectedFrom || !selectedTo}" @click="getFlightsInformation">Search</div>
    </div>

    <template v-if="isFetchingFlightsInformation">
      <app-loader></app-loader>
    </template>

    <template v-if="isErrorFetchingFlightInformation || isErrorFetchingWeatherInformation">
      <div class="error">
        Oops, something went wrong. Try again.
      </div>
    </template>

    <template v-if="!isFetchingFlightsInformation && flightsInformation">
      <div class="flights">
        <div class="flight-header">
          <span class="iconify" data-icon="mdi:airplane-takeoff" data-inline="false"></span>
          {{ flightsInformation[0].cityFrom }} - {{ flightsInformation[0].cityTo }}
        </div>

        <div class="flight" v-for="flightInformation in flightsInformation" :key="`flight-${flightInformation.id}`">
          <div class="airlines">{{ flightInformation.airlines[0] }}</div>
          <div class="departure">
            <div class="top-block">{{ formatUnixTime(flightInformation.dTime) }}</div>
            <div class="city-code">{{ flightInformation.cityCodeFrom }}</div>
          </div>
          <div class="duration">
            <span class="top-block iconify" data-icon="bi:arrow-right" data-inline="false"></span>
            <div class="duration-time">{{ flightInformation.fly_duration }}</div>
          </div>
          <div class="arrival">
            <div class="top-block">{{ formatUnixTime(flightInformation.aTime) }}</div>
            <div class="city-code">{{ flightInformation.cityCodeTo }}</div>
          </div>
          <div class="price">
            <div class="top-block">€ {{ flightInformation.price }}</div>
            <div class="btn btn--secondair">Choose flight<span class="iconify" data-icon="bi:arrow-right-short" data-inline="false"></span></div>
            </div>
        </div>
      </div>
    </template>

    <template v-if="!isFetchingFlightsInformation && weather">
      <div class="weather">
        <div class="weather-icon">
          <span
            class="iconify"
            :data-icon="`noto-v1:${weatherIcon}`"
            data-inline="false">
          </span>
        </div>
        <div class="tempature">
          {{ Math.round(weather.main.temp) }}
          <span class="degree">ºC</span>
        </div>
        <div class="other">
          <div>Humidity: {{ weather.main.humidity }}%</div>
          <div>Windspeed: {{ weather.wind.speed }} km/h</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="js" src="./SearchFlights.js"></script>
<style lang="scss" src="./search-flights.scss" scoped></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
