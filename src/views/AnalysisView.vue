<template>
  <div v-if="currentData" class="analysis-view content-container">
    <!-- Sekce výsledků -->
    <ResultsSection :results="currentData.results" />
    <GeneticAdviceSection :advice="currentData.geneticAdvice" />
    <DoctorAdvice :advice="currentData.doctorAdvice" />
    <NutritionAdviceSection :advice="currentData.nutritionAdvice" />

    <!-- Sekce, které se zobrazují pouze pro pozitivní a pozitivní omezenou verzi -->
    <FoodSection v-if="shouldShowSections" :foods="currentData.foods" />
    <FactsSection v-if="shouldShowSections" :facts="currentData.facts" />
  </div>

  <div v-else>
    <p>Data pro tento výsledek nejsou k dispozici.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ResultsSection from '../components/sections/ResultsSection.vue';
import GeneticAdviceSection from '../components/sections/GeneticAdviceSection.vue';
import DoctorAdvice from '../components/sections/DoctorAdvice.vue';
import NutritionAdviceSection from '../components/sections/NutritionAdviceSection.vue';
import FoodSection from '../components/sections/FoodSection.vue';
import FactsSection from '../components/sections/FactsSection.vue';

import { histamineData, lactoseData } from '../data/analysisData.js';

// Props definující typ analýzy a výsledek
const { resultType, analysisType } = defineProps({
  resultType: {
    type: String,
    required: true,
    validator: (value) => ['positive1', 'negative', 'positive2'].includes(value),
  },
  analysisType: {
    type: String,
    required: true,
    validator: (value) => ['histamine', 'latose'].includes(value),
  },
});

// Dynamický výběr dat na základě `analysisType`
const currentAnalysisData = computed(() => {
  return analysisType === 'histamine' ? histamineData : lactoseData;
});

// Dynamický výběr výsledků na základě `resultType`
const currentData = computed(() => currentAnalysisData.value[resultType] || null);

// Kontrola, zda zobrazit sekce FoodSection a FactsSection
const shouldShowSections = computed(() => {
  return resultType === 'positive1' || resultType === 'positive2';
});
</script>

<style scoped>

</style>
