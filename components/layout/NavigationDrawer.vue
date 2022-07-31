<script setup lang="ts">
const props = defineProps<{ drawer: boolean }>();
</script>

<template>
  <v-navigation-drawer floating bottom v-model="drawer" color="background">
    <v-list density="compact" bg-color="primary" nav class="height-100 pl-4">
      <v-list-item
        class="mb-4 mt-4"
        prepend-avatar="https://imagepng.org/wp-content/uploads/2017/10/simbolo-cominismo-martelo-foice-3.png"
        title="NOSSO PROJETO"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list-item
        prepend-icon="mdi-home-variant-outline"
        title="Dashboard"
        value="home"
        nuxt
        to="/charts/lines"
        custom
      >
      </v-list-item>
      <v-list-item
        theme="dark"
        prepend-icon="mdi-account-group-outline"
        title="Team"
        value="about"
        nuxt
        to="/about"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-calendar-multiselect-outline"
        title="Calendar"
        value="form"
        nuxt
        to="/form"
      ></v-list-item>
       <v-list-item
        prepend-icon="mdi-file-document-check-outline"
        title="Documents"
        value="form"
        nuxt
        to="/form"
      ></v-list-item>
      <v-divider></v-divider>
      <v-list-item
        prepend-icon="mdi-exit-to-app"
        title="Logout"
        value="exit"
        nuxt
        to="/form"
      ></v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<style>
.height-100 {
  height: 100%;
}
</style>
