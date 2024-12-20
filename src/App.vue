<template>
  <BaseLayout :analysisType="currentAnalysisType" :resultType="resultType" @updateType="updateType">
    <AnalysisView :analysisType="currentAnalysisType" :resultType="resultType" />
  </BaseLayout>
</template>
<script setup>
import { ref } from 'vue';
import BaseLayout from './components/layout/BaseLayout.vue';
import AnalysisView from './views/AnalysisView.vue';


const currentAnalysisType = ref('histamine'); 
const resultType = ref('positive1');

// Funkce pro aktualizaci typu a výsledku z menu
function updateType({ analysisType, resultType: newResultType }) {
  if (analysisType) currentAnalysisType.value = analysisType;
  if (newResultType) resultType.value = newResultType;
}
</script>
