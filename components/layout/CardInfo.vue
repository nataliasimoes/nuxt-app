<script setup lang="ts">

const props = defineProps<{
    title: string;
    count: number;
}>()
</script>

<template>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-card-item>
      <v-card-title class="text-h6">{{props.title}}</v-card-title>

      <v-card-subtitle>
        Extreme Weather Alert
      </v-card-subtitle>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" hide-gutters no-gutters>
        <v-col
          class="text-h3"
          cols="6"
        >
          {{props.count}}
        </v-col>
        <v-spacer></v-spacer>
        <!-- <v-col>
            <v-icon
      x-large
      color="red"
    >
      mdi-domain
    </v-icon>
        </v-col> -->
      </v-row>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn>
        Full Report
      </v-btn>
    </v-card-actions>
  </v-card>
</template>