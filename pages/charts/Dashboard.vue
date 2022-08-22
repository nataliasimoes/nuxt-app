<script setup lang="ts">
/* imports */

import type { ApexOptions } from "apexcharts";
import { ComputedRef, Ref } from "vue";
import { useTheme } from "vuetify";
import moment from "moment-timezone";
import CardInfo from "../../components/layout/cardInfo.vue";

/* theme */

const theme = useTheme();

const themeChart: ComputedRef<"dark" | "light"> = computed(() => {
  return theme.global.name.value === "myCustomDarkTheme" ? "dark" : "light";
});

const background: ComputedRef<string> = computed(() => {
  return theme.global.name.value === "myCustomDarkTheme"
    ? "#27293D"
    : "transparant";
});

/* Dates */
let endDate = moment()
  .tz("America/Sao_Paulo")
  .subtract(7, "days")
  .format("YYYY-MM-DD");

function getLastSevenDays() {
  var dates = [];
  let currentDate = moment().tz("America/Sao_Paulo").format("DD-MM-YYYY");
  var lastDate = moment()
    .tz("America/Sao_Paulo")
    .subtract(7, "days")
    .format("DD-MM-YYYY");

  while (currentDate != lastDate) {
    dates.push({ x: currentDate, y: 0 });
    currentDate = moment(currentDate, "DD-MM-YYYY")
      .subtract(1, "days")
      .format("DD-MM-YYYY");
  }

  return dates.reverse();
}

const datesListResolved = getLastSevenDays();
const datesListOpeneds = getLastSevenDays();

/* Tickets Resolved */
const config = useRuntimeConfig();

const baseUrlSearch =  `search`
const paramsResolved = {
      status: "resolvido",
      doneDate: `>${endDate}`,
}

const {data: ticketsResolved} = await useOctadesk<any[]>(`${baseUrlSearch}?${new URLSearchParams(paramsResolved)}`)


const ticketResolvedByDay = computed(() => {
  return ticketsResolved.value.reduce((acc: any[], ticket) => {
    const date = moment(ticket.doneDate).format("DD-MM-YYYY");
    const el = acc.find((el) => el.x === date);
    if (el) {
      el.y += 1;
    }
    return acc;
  }, datesListResolved);
});

/* Tickets Opened */

const paramsOpeneds = {
      status: "novo",
      createdDate: `>${endDate}`,
}

const {data: ticketsOpened} = await useOctadesk<any[]>(`${baseUrlSearch}?${new URLSearchParams(paramsOpeneds)}`)

const ticketOpenedByDay = computed(() => {
  return ticketsOpened.value.reduce((acc: any[], ticket) => {
    const date = moment(ticket.openDate).format("DD-MM-YYYY");
    const el = acc.find((el) => el.x === date);
    if (el) {
      el.y += 1;
    }
    return acc;
  }, datesListOpeneds);
});

/* chart options */

const series: ApexAxisChartSeries | ApexNonAxisChartSeries = [
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
    data: [3, 12, 13, 11, 17, 13, 13],
  },
];

const resolved: ApexAxisChartSeries | ApexNonAxisChartSeries = [
  {
    name: "Ultimos 7 dias",
    data: ticketResolvedByDay.value,
  },
  {
    name: "Média dos últimos 3 meses",
    data: [],
  },
];

const opened: ApexAxisChartSeries | ApexNonAxisChartSeries = [
  {
    name: "Ultimos 8 dias",
    data: ticketOpenedByDay.value,
  },
  {
    name: "Média dos últimos 3 meses",
    data: [],
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
      enabled: false,
      autoScaleYaxis: false,
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Tickets Resolvidos",
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

const chartOptionsResolved: ComputedRef<ApexOptions> = computed(() => ({
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
      enabled: false,
      autoScaleYaxis: false,
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Tickets Resolvidos",
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

const chartOptionsOpened: ComputedRef<ApexOptions> = computed(() => ({
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
      enabled: false,
      autoScaleYaxis: false,
    },
  },
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: "smooth",
  },
  title: {
    text: "Tickets Abertos",
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

const items: Ref<string[]> = ref(["Benx", "Lavvi", "Patrimar", "Plano"]);

/* Cards */

const {data: ticketsByListCount} = await useOctadesk<any[]>(`default-lists`)


</script>

<template>
  <v-container>
    <v-row justify="end">
      <client-only>
        <v-col
          cols="12"
          sm="3"
          v-for="ticket in ticketsByListCount.slice(0, 4)"
          :key="ticket"
        >
          <CardInfo :title="ticket.name" :count="ticket.count"></CardInfo>
        </v-col>
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
          <ChartLine :series="resolved" :options="chartOptionsResolved" />
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <ChartLine :series="opened" :options="chartOptionsOpened" />
        </v-col>
      </client-only>
    </v-row>
  </v-container>
</template>

<style>
.height-select {
  height: 50px;
}
</style>
