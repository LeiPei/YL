<template>
  <v-container fluid pa-0 class="celar-offset">
    <v-layout
      text-xs-center
      wrap
    >
     <v-flex xs12>
      <div id="map" class="mapStyle"></div>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
  mounted() {
    this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 49.246292, lng: -123.116226},
            zoom: 8
          });
  }
};
</script>

<style>
.mapStyle {
  height: 600px;
}
.celar-offset {
  margin-bottom: 60px;
}
</style>
