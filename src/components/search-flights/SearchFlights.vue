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
    <template class="flight-information" v-if="isFetchingFlightInformation">
      Fetching data
    </template>
    <template class="flight-information" v-if="!isFetchingFlightInformation && flightInformation">
      {{ this.flightInformation.price }}
    </template>
  </div>
</template>

<script lang="js" src="./SearchFlights.js"></script>
<style lang="scss" src="./search-flights.scss" scoped></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
