<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="list in this.lists"
        :key="list.id"
      >
        <v-card
          class="mx-auto"
          max-width="500"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">date</div>
              <v-list-item-title class="headline mb-1">Title</v-list-item-title>
              <v-list-item-subtitle>text: Greyhound divisely hello coldly fonwderfullyGreyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
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
// import axios from 'axios'

export default {
  data () {
    return {
      lists: [
        {
          id: 1,
          title: 'test',
          content: 'cont',
          cate: '2018.8.8'
        },
        {
          id: 2,
          title: 'test2',
          content: 'cont',
          cate: '2018.8.8'
        }
      ]
    }
  }
  // created () {
  //   axios.get('http://localhost:5000/posts')
  //     .then((res) => {
  //       console.log(res)
  //     })
  // }
}
</script>

<style>
</style>
