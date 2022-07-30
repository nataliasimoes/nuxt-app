<script setup lang="ts">
const props = defineProps<{drawer: boolean}>();
</script>

<template>
    <v-navigation-drawer floating bottom v-model="drawer" color="background">
        <v-list density="compact" bg-color="primary" nav class="hei">
          <v-list-item prepend-icon="mdi-chart-line" title="Home" value="home" nuxt to="/charts/lines" custom>
          </v-list-item>
          <v-list-item theme="dark" prepend-icon="mdi-forum" title="About" value="about" nuxt to="/about"></v-list-item>
          <v-list-item prepend-icon="mdi-form-select" title="Form" value="form" nuxt to="/form"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<style>
.hei{
  height: 100%;
}
</style>