<script setup lang="ts">
</script>

<template>
    <v-app-bar class="appbar pl-6" color="transparent" flat>
        <template v-slot:prepend class="mr-3">
            <v-app-bar-nav-icon @click.stop="$emit('toggleDrawer')"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Dashboard</v-app-bar-title>

        <template v-slot:append>
            <v-btn icon="mdi-weather-sunny" @click="$emit('toggleTheme')"></v-btn>
        </template>
    </v-app-bar>
</template>

<style>
.appbar {
    border-top: 2px solid #42B782;
}
</style>