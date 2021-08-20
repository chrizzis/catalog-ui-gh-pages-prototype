<template>
  <v-card :tile="isTile" @click.stop="$emit('select-item', id)">
    <v-img
      :src="imageSrc"
      aspect-ratio="1"
      height="200px"
      class="white--text align-end"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
      <slot name="header"></slot>

      <v-card-title class="gradient" v-if="$slots.title">
        <div class="header-class">
          <slot name="title"></slot>
        </div>
      </v-card-title>
    </v-img>

    <v-card-text v-if="showMetadata">
      <slot name="metadata"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
// https://vuetifyjs.com/en/components/cards/#content-wrapping
export default {
  data: () => ({}),
  props: {
    isTile: Boolean,
    id: String,
    isEditing: {
      type: Boolean,
    },
    showMetadata: {
      type: Boolean,
    },
    imageSrc: {
      type: String,
    },
  },
  computed: {
    hasTitle() {
      return !!this.title;
    },
  },
};
</script>
<style scoped>
.bottom-left {
  position: absolute;
  bottom: -18px;
  left: -10px;
}
.gradient {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0),
    rgb(0, 0, 0)
  );
  text-overflow: ellipsis;
  overflow: hidden;
}
.header-class {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-actions {
  position: absolute;
  bottom: -18px;
  left: -10px;
}
</style>