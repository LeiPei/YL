<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn flat slot="activator">Login</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email*" required v-model="email" hint="abc@abc.com"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <div class="err" v-html="error"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false, error = ''">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
import AuthenticationService from '@/service/authenticationService'
export default {
  data: function () {
    return {
      dialog: false,
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email: function () {
      this.error = '';
    },
    password: function () {
      this.error = '';
    }
  },
  mounted: function() {
    let $btn = $('.v-dialog__activator') //eslint-disable-line
    if($btn.length > 0) {
      $btn.addClass('fill');
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.dialog = false; // close the modal... success!
      } catch (error) {
        this.error = error.response.data.error // show error
      } finally {
        //
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.err {
  color: red
}
</style>
