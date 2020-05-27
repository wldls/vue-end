<template>
  <div v-if="skeleton === 'index'">
    <v-sheet color="grey lighten-4" class="px-3 pt-3 pb-3">
      <v-container>
        <v-row>
          <v-col v-for="n in 10" :key="n" cols="12" md="4" sm="6">
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
  },
};
</script>
