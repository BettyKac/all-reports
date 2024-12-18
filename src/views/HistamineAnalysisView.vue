<script setup>
import { defineProps, computed } from 'vue';
import ResultsSection from '../components/sections/ResultsSection.vue';
import GeneticAdviceSection from '../components/sections/GeneticAdviceSection.vue';
import DoctorAdvice from '../components/sections/DoctorAdvice.vue';
import NutritionAdviceSection from '../components/sections/NutritionAdviceSection.vue';
import FoodSection from '../components/sections/FoodSection.vue';
import FactsSection from '../components/sections/FactsSection.vue';

import { histaminData } from '../data/analysisData.js';

const props = defineProps({
  resultType: {
    type: String,
    required: true,
  },
});

// Bezpečný výběr dat na základě resultType
const currentData = computed(() => histaminData[props.resultType] || {});
</script>

<template>
  <div v-if="currentData && currentData.results" class="histamine-analysis-view content-container">
    <ResultsSection :results="currentData.results" />
    <GeneticAdviceSection :advice="currentData.geneticAdvice" />
    <DoctorAdvice :advice="currentData.doctorAdvice" />
    <NutritionAdviceSection :advice="currentData.nutritionAdvice" />
    <!-- Zobrazit pouze pro pozitivní výsledky -->
    <FoodSection v-if="props.resultType === 'positive'" :foods="currentData.foods" />
    <FactsSection v-if="props.resultType === 'positive'" :facts="currentData.facts" />
  </div>
  <div v-else>
    <p>Data pro aktuální výsledek nejsou k dispozici.</p>
  </div>
</template>
