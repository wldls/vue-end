<template>
  <v-container class="fill-height" fluid>
    <v-alert v-if="msg" align="center" type="error" class="mx-auto">{{
      msg
    }}</v-alert>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="onSubmit">
              <v-text-field
                v-model="id"
                label="Login"
                name="login"
                :rules="rules"
                type="text"
              />
              <v-text-field
                id="password"
                v-model="pw"
                label="Password"
                name="password"
                :rules="rules"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="onSubmit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  data() {
    return {
      id: "",
      pw: "",
      msg: "",
      rules: [(value) => !!value || "Required."],
    };
  },
  computed: {
    ...mapState(["logged"]),
  },
  created() {
    if (this.$store.state.logged) {
      this.$router.go(-1);
    }
  },
  methods: {
    async onSubmit() {
      const loginData = { username: this.id, password: this.pw };
      try {
        const { data } = await this.$api.post("/login", loginData);

        await this.$store.commit("login", data.token);
        await Cookie.set("token", data.token);
        await this.$api.setToken(data.token);

        this.$router.push("/");
      } catch (err) {
        this.msg = err.response.data;
      }
    },
  },
  head: {
    title: "new Title",
    meta: [{ hid: "login", name: "login", content: "Home page login" }],
  },
};
</script>
