<script setup lang="ts">
import type { ApexOptions } from "apexcharts";
import { ComputedRef, Ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();

const themeChart: ComputedRef<"dark" | "light"> = computed(() => {
  return theme.global.name.value === "myCustomDarkTheme" ? "dark" : "light";
});

const background: ComputedRef<string> = computed(() => {
  return theme.global.name.value === "myCustomDarkTheme"
    ? "#27293D"
    : "transparant";
});

const series: ApexOptions["series"] = [
  {
    name: "High - 2012",
    data: [28, 29, 33, 34, 32, 32, 33],
  },
  {
    name: "Low - 2013",
    data: [12, 11, 14, 18, 17, 13, 13],
  },
  {
    name: "Low - 2013",
    data: [17, 25, 9, 6, 23, 18, 10],
  },
];

const series2: ApexOptions["series"] = [
  {
    name: "High - 2012",
    data: [10, 11, 14, 18, 17, 20, 24],
  },
  {
    name: "Low - 2013",
    data: [12, 13, 14, 26, 17, 25, 22],
  },
];

const series3: ApexOptions["series"] = [
  {
    name: "High - 2012",
    data: [20, 17, 14, 15, 17, 20, 13],
  },
  {
    name: "Low - 2013",
    data: [24, 20, 18, 15, 17, 12, 11],
  },
];

const chartOptions: ComputedRef<ApexOptions> = computed(() => ({
  chart: {
    height: 350,
    type: "line",
    background: background.value,
    dropShadow: {
      enabled: false,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: false,
      },
    },
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Média de Tickets Resolvidos",
    align: "left",
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["transparent"],
      opacity: 0,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    size: 1,
  },
  xaxis: {
    categories: ["Seg", "ter", "qua", "qui", "sex", "sab", "dom"],
  },
  yaxis: {
    min: 1,
    max: 40,
  },
  theme: {
    mode: themeChart.value,
    palette: "palette1",
  },
  legend: {
    position: "top",
    horizontalAlign: "right",
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
}));

const items: Ref<string[]> = ref(
  ["Benx", "Lavvi", "Patrimar", "Plano"]
)
</script>

<template>
  <v-container>
    <v-row justify="end">
      <client-only>
        <v-col cols="12" sm="6" md="3">
          <v-select
          class="height-select"
            :items="items"
            variant="plain"
            label="Empreendimento"
             prepend-icon="mdi-office-building"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12" md="12">
          <ChartLine :series="series" :options="chartOptions" />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <ChartLine :series="series2" :options="chartOptions" />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <ChartLine :series="series3" :options="chartOptions" />
        </v-col>
      </client-only>
    </v-row>
  </v-container>
</template>

<style>
.height-select{
  height: 60px;
}
</style>
