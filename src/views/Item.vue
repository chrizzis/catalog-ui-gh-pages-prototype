<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col
        v-for="asset in item.assets"
        :key="asset.id"
        class="d-flex child-flex"
        cols="6"
      >
        <ItemCard
          :is-tile="true"
          :id="asset.id"
          :show-metadata="showMetadata"
          :image-src="asset.src"
          @select-item="selectAsset"
        >
          <template v-slot:metadata>
            <div>
              {{ asset.description }}
            </div>
          </template>
        </ItemCard>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ItemCard from "@/components/ItemCard.vue";
export default {
  components: {
    ItemCard,
  },
  data: () => ({
    itemSlug: "",
    item: null,
    showMetadata: false,
  }),
  mounted() {
    console.log(`Item:mounted`);
  },
  created() {
    console.log(`Item:created`);
    this.itemSlug = this.$route.params.slug;
    this.item = this.$store.getters.getItem(this.itemSlug);
  },
  props: {
    slug: { type: String, required: true },
  },
  methods: {
    selectAsset(id) {
      console.log(`selectAsset: ${id}`);
    },
  },
};
</script>