<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              @submit.prevent="onSubmit"
            >
              <v-text-field
                label="Login"
                name="login"
                type="text"
                v-model="id"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Password"
                name="password"
                type="password"
                v-model="pw"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { login } from '../api/index'

export default {
  data () {
    return {
      id: '',
      pw: ''
    }
  },
  methods: {
    async onSubmit () {
      try {
        const res = await login()

        console.log(res.data.message, res.data.token)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
