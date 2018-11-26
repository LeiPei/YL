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
         <Aplayer  autoplay
            theme="pic"
            shuffle
            repeat="list"
            show-lrc
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
      volume: 1,
      muted: false,
      music3: null,
      list3: [
        {
          title: "前前前世",
          artist: "RADWIMPS",
          src: "http://0.0.0.0:3000/aplayer/yourname.mp3",
          pic: "http://0.0.0.0:3000/aplayer/yourname.jpg",
          lrc: "http://0.0.0.0:3000/aplayer/yourname.lrc"
        },
        {
          title: "光るなら.m3u8",
          artist: "Goose house",
          src: "http://0.0.0.0:3000/aplayer/hls/hikarunara.m3u8",
          pic: "http://0.0.0.0:3000/aplayer/hikarunara.jpg",
          lrc: "http://0.0.0.0:3000/aplayer/hikarunara.lrc"
        },
        {
          title: "回レ！雪月花",
          artist: "小倉唯",
          src: "http://0.0.0.0:3000/aplayer/snowmoonflowers.mp3",
          pic: "http://0.0.0.0:3000/aplayer/snowmoonflowers.jpg",
          lrc: "http://0.0.0.0:3000/aplayer/snowmoonflowers.lrc"
        },
        {
          title: "あっちゅ～ま青春!",
          artist: "七森中☆ごらく部",
          src: "http://0.0.0.0:3000/aplayer/yuruyuri.mp3",
          pic: "http://0.0.0.0:3000/aplayer/yuruyuri.jpg",
          lrc: "http://0.0.0.0:3000/aplayer/yuruyuri.lrc"
        }
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
