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
          <v-card-title class="banner-title">The best thing to hold onto in life is each other</v-card-title>
        </div>
      </v-flex>

      <!--time section-->
      <v-flex xs12 class="section-position">
        <Timer/>
      </v-flex>

      <!--music section-->
      <v-flex xs12 class="section-position ap-bg-color">
        <Aplayer
            theme="pic"
            shuffle
            repeat="list"
            :muted.sync="muted"
            :volume.sync="volume"
            :music='list3[0]'
            :list='list3'/> 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Timer from "./Timer.vue";
import Aplayer from "vue-aplayer";
export default {
  components: {
    Timer,
    Aplayer
  },
  data() {
    return {
      version: '1.0',
      volume: 1,
      muted: false,
      music3: null,
      list3: [
        {
          title: "星球坠落",
          artist: "艾热 李佳隆",
          src: "http://localhost:8081/music/xqzl.mp3",
          pic: "http://localhost:8081/musicPic/xqzl.jpg",
        },
        {
          title: "爱的鼓励",
          artist: "王力宏",
          src: "http://localhost:8081/music/aideguli.mp3",
          pic: "http://localhost:8081/musicPic/wlh.jpg",
        },
        {
          title: "最重要的决定",
          artist: "范玮琪",
          src: "http://localhost:8081/music/zzydjd.mp3",
          pic: "http://localhost:8081/musicPic/fwq.jpeg",
        },
      ]
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
  font-size: 30px;
  font-weight: 50px;
  font-family: "Pacifico", serif;
}

.ap-bg-color {
  background-color: #546e7a;
}
</style>
