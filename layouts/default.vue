<script lang="ts" setup></script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        floating
        permanent
      >
        <v-list
          density="compact"
          nav
        >
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" to="/charts/lines"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about" to="/about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main><slot/></v-main>
      
    </v-layout>
  </v-card>
</template>

<style scoped></style>
