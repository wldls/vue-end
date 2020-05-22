<template>
  <div v-if="skeleton === 'index'">
    <v-sheet color="grey lighten-4" class="px-3 pt-3 pb-3">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <VBoilerplate class="mb-6" type="article, actions"></VBoilerplate>
          </v-col>
          <v-col cols="12" md="4">
            <VBoilerplate class="mb-6" type="article, actions"></VBoilerplate>
          </v-col>
          <v-col cols="12" md="4">
            <VBoilerplate class="mb-6" type="article, actions"></VBoilerplate>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  components: {
    // Create a new component that
    // extends v-skeleton-loader
    VBoilerplate: {
      functional: true,

      render(h, { data, props, children }) {
        return h(
          "v-skeleton-loader",
          {
            ...data,
            props: {
              boilerplate: true,
              elevation: 2,
              ...props,
            },
          },
          children,
        );
      },
    },
  },
  computed: {
    skeleton() {
      return this.$store.state.skeleton;
    },
    // pageLoading(){
    //   return this.$store.state.pageLoading;
    // }
  },
};
</script>
