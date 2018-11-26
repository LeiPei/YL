<template>
  <v-app>
    <!--Header-->
    <v-toolbar app color="rgba(255,255,255,.65)" height="60">
      <v-toolbar-title class="headline text-uppercase">
        <span>yvonneleo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
        >
        <span>Gallery</span>
        </v-btn>
        <v-btn flat @click="navigateTo({name: 'Register'})">
          <span>Footprint</span>
        </v-btn>
     </v-toolbar-items>
     
    </v-toolbar>

    <!--Main content-->
    <v-content>
      <HelloWorld/>
    </v-content>

    <!--Footer-->
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

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
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
</style>
