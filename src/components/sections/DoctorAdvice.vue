<template>
  <section id="doctorAdvice" class="content-section">
    <div class="doctorAdvice-container">
      <div class="doctorAdvice-textbox">
        <!-- Název sekce -->
        <div class="doctorAdvice-textbox_structure">
          <h1 class="doctorAdvice-header">{{ advice.title }}</h1>
          <img
            :src="profThon"
            alt="doctor"
            ref="imageRef"
            :class="['profThon', { zoom: isInView }]"
          />
        </div>

        <!-- Hlavní odstavce -->
        <div v-if="advice.paragraphs && advice.paragraphs.length > 0">
          <p  v-for="(paragraph, index) in advice.paragraphs" :key="`paragraph-${index}`" class="doctorAdvice-text">
            {{ paragraph }}
          </p>
        </div>

        <!-- Zvýrazněné odstavce -->
        <div v-if="advice.paragraphsHighlight && advice.paragraphsHighlight.length > 0">
          <p v-for="(highlight, index) in advice.paragraphsHighlight" :key="`highlight-${index}`" class="doctorAdvice-highlite">
            {{ highlight }}
          </p>
        </div>

        <!-- Třetí samostatný odstavec -->
        <p v-if="advice.additionalParagraph" class="doctorAdvice-text">
          {{ advice.additionalParagraph }}
        </p>

        <!-- Podpis -->
        <p class="doctorAdvice-signature">Prof. MUDr. Vojtěch Thon, Ph.D.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'
import profThon from '@/assets/images/prof-thon.png'

defineProps({
  advice: {
    type: Object,
    required: true
  }
})

const imageRef = ref(null)
const isInView = useInView(imageRef)
</script>
<style lang="scss" scoped>
.doctorAdvice-container {
  padding: 4rem 3rem 0 3rem;
  background-color: white;
}

.doctorAdvice-textbox_structure {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
}

.doctorAdvice-textbox {
  background-color: rgb(227, 223, 223);
  border-radius: 8px;
  padding: 2rem;
  flex: 1;
}

.doctorAdvice-text {
  margin-top: 0;
}

.doctorAdvice-header {
  flex: 1; 
  text-align: right;
  color: #e56a54;
}

.profThon {
  max-width: 22%;
  min-width: 200px;
  height: auto;
  border-radius: 50%;
  margin: -140px 30px 0px 20px;
  transition: transform 1.5s ease-in-out;
  transform: scale(0.85);
}
.profThon.zoom {
  transform: scale(1);
}

.doctorAdvice-signature {
  text-align: right;
}

.doctorAdvice-highlite {
  background-color: #e56a54;
  color: white;
  margin: 10px 50px 10px -32px;
  padding: 20px 20px 20px 31px;
  border-radius: 0 5px 5px 0;
}

@media (max-width: 768px) {
  .doctorAdvice-container {
    padding: 3rem 1rem 0rem 1rem;
    background-color: white;
    border-radius: 8px;
    margin: 3rem 0 2rem 0;
  }
  .doctorAdvice-textbox_structure {
    display: flex;
  }

  .profThon {
    min-width: 140px;
    margin: -120px 20px 0px 30px;
    border-radius: 50%;
  }
  .doctorAdvice-highlite {
    margin-right: -2rem;
    border-radius: 0;
    padding: 1rem 2rem;
  }
}

@media (max-width: 480px) {
  .profThon {
    margin: -140px 25px 0px 5px;
  }
  .doctorAdvice-header {
    text-align: left;
    margin-right: 1rem;
  }
}
</style>
