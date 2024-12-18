<template>
<BaseLayout :analysisType="currentAnalysisType" :resultType="resultType" @updateType="updateType">
  <component :is="currentView" :resultType="resultType" />
</BaseLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import BaseLayout from './components/layout/BaseLayout.vue';
import HistamineAnalysisView from './views/HistamineAnalysisView.vue';
import LactoseAnalysisView from './views/LactoseAnalysisView.vue';



// Reaktivní proměnné pro typ analýzy a výsledek
const currentAnalysisType = ref('histamine'); // 'histamine' nebo 'lactose'
const resultType = ref('positive'); // 'positive' nebo 'negative'

// Dynamické určení komponenty na základě aktuální analýzy
const currentView = computed(() =>
  currentAnalysisType.value === 'histamine'
    ? HistamineAnalysisView
    : LactoseAnalysisView
);

// Funkce pro aktualizaci typu a výsledku z menu
function updateType({ analysisType, resultType: newResultType }) {
  if (analysisType) currentAnalysisType.value = analysisType;
  if (newResultType) resultType.value = newResultType;
}
</script>



<style >

</style>
