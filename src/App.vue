<template>
  <div class="container">
    <app-header></app-header>
    <app-search-flights></app-search-flights>
    <!-- <app-flight-information></app-flight-information> -->
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import SearchFlights from './components/search-flights/SearchFlights.vue'

export default {
  components: {
    appHeader: Header,
    appSearchFlights: SearchFlights
  }
}
</script>

<style lang="scss">
@import '/src/assets/scss/_fonts.scss';

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}

.container {
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
