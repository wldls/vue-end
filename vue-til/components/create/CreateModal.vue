<template>
  <v-dialog v-model="dialogCancel" width="500">
    <v-card>
      <v-card-title class="headline">Warning</v-card-title>
      <v-card-text class="mt-5">글 작성을 취소하시겠습니까?</v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="onCancel">취소</v-btn>
        <v-btn color="primary" text @click="onConfirm">확인</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialogCancel"],
  methods: {
    onCancel() {
      this.$emit("hideModal");
    },
    onConfirm() {
      this.$emit("cancelWrite");
    },
  },
};
</script>

<style></style>
