<template>
  <v-container>
    {{ item }}
  </v-container>
</template>
<script>
export default {
  data: () => ({
    itemSlug: "",
    item: null,
  }),
  mounted() {
    console.log(`Item:mounted`);
  },
  created() {
    console.log(`Item:created`);
    this.itemSlug = this.$route.params.slug;
    this.item = this.$store.getters.getItem(this.itemSlug);
    console.log(`Item: ${this.item}`);
  },
  props: {
    slug: { type: String, required: true },
  },
  methods: {},
};
</script>