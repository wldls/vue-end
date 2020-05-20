<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="list in lists" :key="list._id">
        <v-card class="mx-auto" max-width="500" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ list.createdAt }}</div>
              <v-list-item-title class="headline mb-1">
                {{
                list.title
                }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ list.contents }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-spacer />
            <v-btn icon to="/create">
              <v-icon color="blue">mdi-plus</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: "auth",
  async asyncData({ app, req }) {
    const { data } = await app.$api.get("/posts");

    return { lists: data.posts };
  },
};
</script>

<style></style>
