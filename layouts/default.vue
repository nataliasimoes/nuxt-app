<script lang="ts" setup>
import { useTheme } from "vuetify";
import AppBar from "~~/components/layout/AppBar.vue";
import NavigationDrawer from "~~/components/layout/NavigationDrawer.vue";
const theme = useTheme();
const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === "myCustomDarkTheme"
      ? "myCustomLightTheme"
      : "myCustomDarkTheme";
  console.log(theme.global.name.value);
};
const iconToggleTheme = computed(() => {
  return theme.global.name.value === "myCustomDarkTheme"
    ? "mdi-weather-sunny"
    : "mdi-weather-night";
});
const drawer = ref(true);
</script>

<template>
  <v-app>
    <v-layout>
      <navigation-drawer :drawer="drawer"></navigation-drawer>

      <app-bar
        :icon-toggle-theme="iconToggleTheme"
        @toggle-theme="toggleTheme"
        @toggle-drawer="drawer = !drawer"
      ></app-bar>

      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped></style>
