<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-switch
        inset
        v-model="showMetadata"
        :label="`showMetadata: ${showMetadata.toString()}`"
      ></v-switch>
      <v-checkbox
        v-model="altSortToggle"
        color="purple"
        off-color="blue"
        off-icon="mdi-sort-alphabetical-variant"
        on-icon="mdi-sort-numeric-variant"
      ></v-checkbox>
    </v-row>
    <v-row>
      <!-- TODO: list/grid cols based on collection size -->

      <v-col cols="6">
        <v-btn width="100%" height="100%" @click="addDummy"
          ><v-icon left> mdi-plus </v-icon>Add</v-btn
        >
      </v-col>

      <!-- TODO: make this list its own thing for search pane to share? -->
      <v-col
        v-for="item in sortedList"
        :key="item.id"
        class="d-flex child-flex"
        cols="6"
      >
        <v-btn @click="selectItem(item.id)" class="temp-btn">{{
          item.name
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      altSortToggle: false,
      showMetadata: false,
      altSortedList: [],
    };
  },

  mounted() {},

  // cant edit data in computeds, use watch instead
  computed: {
    ...mapState({
      items: (state) => state.items,
    }),
    sortedList() {
      return this.altSortToggle ? this.altSortedList : this.items;
    },
    // getAvatar
  },

  watch: {
    showMetadata(val) {
      console.log(`showMetadata: ${val}`);
    },
    altSortToggle(val) {
      console.log(`altSortToggle: ${val}`);
      if (!this.altSortedList.length) {
        this.altSortedList = [...this.items].sort((a, b) => {
          const dateA = a.dateCreated;
          const dateB = b.dateCreated;
          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
          return 0;
        });
      }
    },
  },

  methods: {
    addDummy() {
      console.log(`addDummy`);
    },
    selectItem(id) {
      console.log(`selectItem: ${id}`);
      this.$router.push({ name: "Item", params: { slug: id } });
    },
  },
};
</script>
<style scoped>
.temp-btn {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>