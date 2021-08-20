<template>
  <v-container>
    <v-item-group v-model="selected">
      <v-row>
        <v-col cols="12" md="6">
          <v-btn width="100%" height="150" @click="addDummy"
            ><v-icon left> mdi-plus </v-icon>Add</v-btn
          >
        </v-col>

        <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
          <v-item v-slot="{ active, toggle }">
            <v-img
              :src="getAvatar(item)"
              lazy-src="https://cdn.vuetifyjs.com/images/backgrounds/bg.jpg"
              height="150"
              class="text-right pa-2"
              @click="toggle"
              @click.stop="selectItem(item.id)"
            >
              <v-btn icon dark>
                <v-icon>
                  {{ active ? "mdi-heart" : "mdi-heart-outline" }}
                </v-icon>
              </v-btn>
            </v-img>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Test",
  components: {},
  data: () => ({
    selected: [],
  }),
  computed: {
    ...mapState({
      items: (state) => state.items,
    }),
  },

  methods: {
    selectItem(id) {
      console.log(`selectItem: ${id}`);
      // this.$router.push({ name: "item", params: { slug: id } });
    },
    getAvatar(item) {
      if (item.avatar) {
        return this.$store.getters.getAsset(item.avatar);
      }
      return null;
    },
    addDummy() {
      console.log(`addDummy`);
      // this.addItem({
      //   src: `backgrounds/bg.jpg`,
      // });
    },
  },
};
</script>
