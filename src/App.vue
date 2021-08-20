<template>
  <v-app id="app">
    <v-app-bar hide-on-scroll :input-value.sync="showNavs" app>
      <v-app-bar-nav-icon
        @click.stop="toggleNavDrawer = !toggleNavDrawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-capitalize">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="toggleNavDrawer" fixed temporary>
      <v-list dense nav>
        <v-list-item
          v-for="action in navDrawerActions"
          :key="action.title"
          :to="action.route"
        >
          <v-list-item-icon>
            <v-icon>mdi-{{ action.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-capitalize">
              {{ action.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-bottom-navigation hide-on-scroll :input-value.sync="showNavs" grow app>
      <v-btn
        v-for="action in navDrawerActions"
        :key="action.title"
        :to="action.route"
        :input-value="isActiveNav(action.title)"
      >
        <span class="text-capitalize">{{ action.title }}</span>
        <v-icon>mdi-{{ action.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    title: "welcome to the demo",
    toggleNavDrawer: false,
    showNavs: true,
    navDrawerActions: [
      {
        title: "home",
        icon: "home",
        route: "/",
      },
      {
        title: "about",
        icon: "information",
        route: "/about",
      },
      {
        title: "test",
        icon: "cog",
        route: "/test",
      },
    ],
  }),

  computed: {},

  methods: {
    isActiveNav(key) {
      return key === this.$route.name?.toLowerCase() || false;
    },
  },

  watch: {
    $route(to) {
      // react to route changes...
      this.title = to.name;
      this.showNavs = true;
    },
  },
};
</script>
