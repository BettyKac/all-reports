<script setup>
import ResultsSection from '../components/sections/ResultsSection.vue'
import GeneticAdviceSection from '../components/sections/GeneticAdviceSection.vue'
import DoctorAdvice from '../components/sections/DoctorAdvice.vue'
import NutritionAdviceSection from '../components/sections/NutritionAdviceSection.vue'
import FoodSection from '../components/sections/FoodSection.vue'
import FactsSection from '../components/sections/FactsSection.vue'


import { lactoseData } from '../data/analysisData.js'

const resultType = 'positive'
const currentData = lactoseData[resultType]
</script>

<template>
  <div class="lactose-analysis-view content-container">
    <ResultsSection :results="currentData.results" />
    <GeneticAdviceSection :advice="currentData.geneticAdvice" />
    <DoctorAdvice :advice="currentData.doctorAdvice" />
    <NutritionAdviceSection :advice="currentData.nutritionAdvice" />
    <FoodSection :foods="currentData.foods" />
    <FactsSection :facts="currentData.facts" />
  </div>
</template>

<style scoped>

</style>
