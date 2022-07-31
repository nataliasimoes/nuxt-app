<script setup lang="ts">
const props = defineProps<{
    iconToggleTheme: string;
}>()
</script>

<template>
  <v-app-bar class="appbar pl-6" color="transparent" flat>
    <template v-slot:prepend class="mr-3">
      <v-app-bar-nav-icon
        @click="$emit('toggleDrawer')"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Dashboard</v-app-bar-title>

    <template v-slot:append>
      <v-btn :icon="iconToggleTheme" @click="$emit('toggleTheme')"></v-btn>
    </template>
  </v-app-bar>
</template>

<style>
.appbar {
  border-top: 2px solid #42b782;
}
</style>
