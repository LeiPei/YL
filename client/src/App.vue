<template>
  <v-app>
    <!--Header-->
    <v-toolbar app color="rgba(255,255,255,.65)" height="60">
      <v-toolbar-title class="headline text-uppercase">
        <span class="home"
              @click="navigateTo({name: 'home'})">yvonneleo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          @click="navigateTo({name: 'timeline'})"
        >
          <span>Story</span>
        </v-btn>
        <v-btn
          flat
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
          <span>Gallery</span>
        </v-btn>
        <v-btn flat @click="navigateTo({name: 'map'})">
          <span>Footprint</span>
        </v-btn>
     </v-toolbar-items>
     
    </v-toolbar>

    <!--Main content-->
    <v-content>
      <router-view></router-view>
    </v-content>

    <!--Footer-->
    <v-container fluid pa-0>
      <v-layout text-xs-center
                wrap>
        <v-flex xs12 class="ap-bg-color section-position">
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
    <v-container fluid class="footer-position">
      <v-layout>
        <v-flex xs12>
          <div id="copyright" class="hoc clear text-center"> 
            <p>Copyright &copy; 2018 - All Rights Reserved - <a style="color: white" href="#">Yvonne-Leo</a></p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Aplayer from "vue-aplayer";

export default {
  name: "App",
  components: {
    HelloWorld,
    Aplayer
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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
          src: "http://backend.zrt7hfrsnw.us-west-2.elasticbeanstalk.com/music/xqzl.mp3",
          pic: "http://backend.zrt7hfrsnw.us-west-2.elasticbeanstalk.com/musicPic/xqzl.jpg",
        },
        {
          title: "爱的鼓励",
          artist: "王力宏",
          src: "http://backend.zrt7hfrsnw.us-west-2.elasticbeanstalk.com/music/aideguli.mp3",
          pic: "http://backend.zrt7hfrsnw.us-west-2.elasticbeanstalk.com/musicPic/wlh.jpg",
        },
        {
          title: "最重要的决定",
          artist: "范玮琪",
          src: "http://backend.zrt7hfrsnw.us-west-2.elasticbeanstalk.com/music/zzydjd.mp3",
          pic: "http://backend.zrt7hfrsnw.us-west-2.elasticbeanstalk.com/musicPic/fwq.jpeg",
        },
      ]
    };
  }
};
</script>

<style>
.shade {
  background-color: rgba(255,255,255,.65);
}
.footer-position {
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: #546E7A;
  height: 60px;
}
.text-center {
	text-align: center;
}
.ap-bg-color {
  background-color: #546e7a;
}

.home {
  font-weight: bold;
  font-size:30px;
  cursor: pointer;
  font-family: "Indie Flower";
}

.home:hover {
  color:indianred
}
</style>
