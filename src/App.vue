<template>
  <div class="container">
    <app-header></app-header>
    <app-search-flights></app-search-flights>
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
  @import '/src/assets/scss/_colors.scss';

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

  .btn {
    display: flex;
    cursor: pointer;
    margin-top: 14px;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    color: $primary;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background-color: lighten($secondair, 10);
    }
  }

  .btn--secondair {
    background-color: $secondair;
    border-bottom: 3px solid darken($secondair, 10);
  }

  .disabled {
    cursor: not-allowed;
    opacity: .8;
    background-color: lighten($gray, 30) !important;
    border: 1px solid lighten($gray, 30) !important;
    color: $gray !important;
  }

  .error {
    background-color: #e33b3b;
    color: $white;
    padding: 14px;
    margin: 10px 0;
    text-align: center;
    border-radius: 5px;
  }
</style>
