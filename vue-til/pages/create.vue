<template>
  <div>
    <v-form @submit.prevent="onSubmit">
      <v-container fluid>
        <v-alert v-if="msg" align="center" type="error" class="mx-auto">{{
          msg
        }}</v-alert>
        <v-text-field
          v-model="title"
          label="Title"
          name="title"
          type="text"
          :counter="50"
          :error-messages="titleErrors"
          required
          @input="$v.title.$touch()"
          @blur="$v.title.$touch()"
        />
        <v-textarea
          id="contents"
          v-model="contents"
          label="Contents"
          name="contents"
          type="text"
          :error-messages="contentsErrors"
          required
          @input="$v.contents.$touch()"
          @blur="$v.contents.$touch()"
        />
        <div class="float-right">
          <v-btn outlined color="primary" @click.stop="dialogCancel = true"
            >cancel</v-btn
          >
          <v-btn type="submit" depressed color="primary">confirm</v-btn>
        </div>
      </v-container>
    </v-form>
    <v-dialog v-model="dialogCancel" width="500">
      <v-card>
        <v-card-title class="headline">Warning</v-card-title>
        <v-card-text class="mt-5">글 작성을 취소하시겠습니까?</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogCancel = false">취소</v-btn>
          <v-btn color="primary" text @click="onCancelWrite">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  middleware: "auth",
  mixins: [validationMixin],
  data() {
    return {
      msg: "",
      title: "",
      contents: "",
      loading: false,
      dialogCancel: false,
      dialogSubmit: false,
    };
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.maxLength && errors.push("제목은 50자 이내로 해주세요.");
      !this.$v.title.required && errors.push("제목을 입력하세요.");
      return errors;
    },
    contentsErrors() {
      const errors = [];
      if (!this.$v.contents.$dirty) return errors;
      !this.$v.contents.required && errors.push("내용을 입력하세요.");
      return errors;
    },
  },
  validations: {
    title: { required, maxLength: maxLength(50) },
    contents: { required },
  },
  methods: {
    async onSubmit() {
      this.$v.$touch();
      this.$nuxt.$loading.start();

      if (this.$v.$invalid) return false;

      const createdData = { title: this.title, contents: this.contents };

      try {
        const res = await this.$api.post("/posts", createdData);

        if (res.status === 201) {
          this.$nuxt.$loading.finish();
          this.$router.push("/");
        }
      } catch (err) {
        this.msg = err.response.data.message;
      }
    },
    onCancelWrite() {
      this.dialogCancel = false;
      this.$router.push("/");
    },
  },
};
</script>
