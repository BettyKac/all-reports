<template>
  <section id="nutritionAdvice" class="content-section">
    <div class="nutritionAdvice-container">
      <div class="nutritionAdvice-textbox">
        <!-- Sekce hlavičky -->
        <div class="nutritionAdvice-textbox_structure">
          <h1 class="nutritionAdvice-header">{{ advice.title }}</h1>
          <img
            :src="betty"
            alt="nutritionSpecialist"
            ref="imageRef"
            :class="['betty-img', { zoom: isInView }]"
          />
        </div>

        <!-- Hlavní odstavce -->
        <p
          v-for="(paragraph, index) in advice.paragraphs"
          :key="'paragraph-' + index"
          class="nutritionAdvice-text"
        >
          {{ paragraph }}
        </p>

        <!-- Symptomy nebo Positive Reminder -->
        <div v-if="advice.symptomsList || advice.positiveReminder">
          <div v-if="advice.symptomsList" class="nutritionAdvice-symptoms_container">
            <h2>{{ advice.symptomsTitle }}</h2>
            <ul class="nutritionAdvice-symptoms">
              <li
                v-for="(symptom, sIndex) in advice.symptomsList"
                :key="'symptom-' + sIndex"
              >
                {{ symptom }}
              </li>
            </ul>
          </div>
          <p class="nutritionAdvice-symptoms_container" v-else>{{ advice.positiveReminder }}</p>
        </div>

        <!-- Výsledek: pozitivní/negativní -->
        <div v-if="advice.positiveTitle || advice.negativeTitle">
          <h2 v-if="advice.positiveTitle">{{ advice.positiveTitle }}</h2>
          <p v-if="advice.positiveInfo">{{ advice.positiveInfo }}</p>

          <h2 v-if="advice.negativeTitle">{{ advice.negativeTitle }}</h2>
          <p v-if="advice.negativeInfo">{{ advice.negativeInfo }}</p>
        </div>

        <!-- Kroky pro pozitivní/negativní výsledek -->
        <ol v-if="advice.stepsList" class="nutritionAdvice-symptoms_steps">
          <h3>{{ advice.stepsTitle }}</h3>
          <li
            v-for="(step, stIndex) in advice.stepsList"
            :key="'step-' + stIndex"
          >
            {{ step }}
          </li>
        </ol>

        <!-- Podpis -->
        <p class="nutritionAdvice-signature">Mgr. Alžběta Kačírková</p>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'
import betty from '@/assets/images/betty.jpg'

defineProps({
  advice: {
    type: Object,
    required: true
  }
})

const imageRef = ref(null)
const isInView = useInView(imageRef)
</script>

<style scoped>
.nutritionAdvice-container {
  padding: 3.5rem 3rem 0rem 3rem;
  background-color: white;
  position: relative;
}

.nutritionAdvice-textbox_structure {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.nutritionAdvice-textbox {
  background-color: rgb(227, 223, 223);
  border-radius: 8px;
  padding: 2rem;
}

.nutritionAdvice-text {
  margin-top: 0;
}

.nutritionAdvice-header {
  text-align: left;
  padding-right: 20px;
  color: #e56a54;
}

.betty-img {
  max-width: 22%;
  min-width: 200px;
  height: auto;
  margin: -140px 70px 0px 20px;
  border-radius: 50%;
  transition: transform 1.5s ease-in-out;
  transform: scale(0.85);
}

.betty-img.zoom {
  transform: scale(1);
}

.nutritionAdvice-symptoms_container {
  color: white;
  font-family: 'Gordita-Regular', sans-serif;
  padding: 20px 40px 30px 40px;
  background-color: #e56a54;
  margin-left: -32px;
  margin-right: 50px;
  border-radius: 0 5px 5px 0;
}

.nutritionAdvice-symptoms {
  margin: 0;
  padding-left: 1rem;
}

.nutritionAdvice-symptoms li {
  font-family: 'Gordita-Regular', sans-serif;
}

.nutritionAdvice-signature {
  text-align: end;
}

@media (max-width: 768px) {
  .nutritionAdvice-container {
    padding: 2rem 1rem 0 1rem;
  }
  .betty-img {
    min-width: 140px;
    margin: -140px 30px 0px 20px;
  }
  .nutritionAdvice-symptoms_container {
    width: 100%;
    margin-left: -2rem;
    padding: 2rem;
    border-radius: 0;
  }
}
</style>
