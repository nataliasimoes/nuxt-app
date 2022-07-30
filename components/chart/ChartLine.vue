<script setup lang="ts">
import type { ApexOptions } from 'apexcharts';

const props = defineProps<{
  options: ApexOptions;
  series: ApexOptions['series'];
}>();

const componentIsActive = ref(false);
const activatedComponent = (() => {
  componentIsActive.value = true;
})

setTimeout(activatedComponent, 100);

</script>

<template>
  <div id="chart" v-if="componentIsActive" >
    <apexchart
    class="pt-3"
      type="line"
      height="350"
      :options="props.options"
      :series="props.series"
    ></apexchart>
  </div>
</template>

<style scoped></style>
