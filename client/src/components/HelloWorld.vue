<template>
  <v-container fluid pa-0>
    <v-layout
      text-xs-center
      wrap
    >
      <!--background image-->
      <v-flex xs12>
        <div class="section-position">
          <v-img
            :src="require('@/assets/main/baobao.jpeg')"
            class="grey lighten-2"
            height="800"
          ></v-img>
          <v-card-title class="banner-title pa-5">The best thing to hold onto in life is each other</v-card-title>
        </div>
      </v-flex>

      <!--time section-->
      <v-flex xs12 class="section-position">
        <Timer/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Timer from "./Timer.vue";
export default {
  components: {
    Timer,
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.section-position {
  position: relative;
  top: -60px;
}

.banner-title {
  position: absolute;
  color: white;
  top: 325px;
  font-size: 35px;
  font-weight: 400px;
  font-family: "Indie Flower";
}
</style>
