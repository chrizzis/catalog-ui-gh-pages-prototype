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
      <v-col cols="6">
        <v-btn width="100%" height="100%" @click="addDummy"
          ><v-icon left> mdi-plus </v-icon>Add</v-btn
        >
      </v-col>

      <v-col
        v-for="item in sortedList"
        :key="item.id"
        class="d-flex child-flex"
        cols="6"
      >
        <ItemCard
          :is-tile="true"
          :id="item.id"
          :show-metadata="showMetadata"
          :image-src="item.avatar"
          @select-item="selectItem"
        >
          <template v-slot:title>
            {{ item.name }}
          </template>

          <template v-slot:metadata>
            <div>
              {{ item.description }}
            </div>
          </template>
        </ItemCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ItemCard from "@/components/ItemCard.vue";

export default {
  components: {
    ItemCard,
  },
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
    ...mapGetters({
      catalog: "getCatalog",
    }),
    sortedList() {
      return this.altSortToggle ? this.altSortedList : this.catalog;
    },
  },

  watch: {
    showMetadata(val) {
      console.log(`showMetadata: ${val}`);
    },
    altSortToggle(val) {
      console.log(`altSortToggle: ${val}`);
      if (!this.altSortedList.length) {
        this.altSortedList = [...this.catalog].sort((a, b) => {
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