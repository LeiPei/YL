<template>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn flat slot="activator">Sign Up</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Register</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required v-model="firstName"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" v-model="middleName"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  required
                  v-model="lastName"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required v-model="email" hint="abc@abc.com"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required v-model="password"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
          <div class="err" v-html="error"></div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="register">Register</v-btn>
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
      firstName: '',
      lastName: '',
      middleName: '',
      error: null
    }
  },
  mounted: function() {
    let $btn = $('.v-dialog__activator')
    if($btn.length > 0) {
      $btn.addClass('fill');
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          middleName: this.middleName
        })
        this.dialog = false; // close the modal
      } catch (error) {
        this.error = error.response.data.error
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
