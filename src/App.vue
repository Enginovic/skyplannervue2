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
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

.container {
  padding: 50px 0;
  max-width: 800px;
  margin: 0 auto;
}
</style>
