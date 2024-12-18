<template>
  <section id="geneticAdvice" class="content-section">
    <div class="geneticAdvice-container">
      <div class="geneticAdvice-textbox">
        <div class="geneticAdvice-textbox_structure">
          <h1 class="geneticAdvice-header">{{ advice.title }}</h1>
          <img
            :src="lucie"
            alt="geneticSpecialist"
            ref="imageRef"
            :class="['lucie-img', { zoom: isInView }]"
          />
        </div>

        <!-- Normální odstavce (paragraphs) -->
        <p
          v-for="(paragraph, index) in advice.paragraphs"
          :key="'paragraph-' + index"
          class="geneticAdvice-text"
          v-html="paragraph"
        ></p>

        <!-- Zvýrazněné odstavce (paragraphsHighlight) -->
        <p
          v-for="(highlight, index) in advice.paragraphsHighlight"
          :key="'highlight-' + index"
          class="geneticAdvice-highlite"
          v-html="highlight"
        ></p>

        <p class="geneticAdvice-signature">RNDr. Lucie Kulišťáková</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useInView } from '@/composables/useInView'; 
import lucie from '@/assets/images/lucka.jpg';

defineProps({
  advice: {
    type: Object,
    required: true
  }
});

const imageRef = ref(null);
const isInView = useInView(imageRef);
</script>


<style>
.geneticAdvice-container {
  padding: 4rem 3rem 0rem 3rem;
  background-color: white;

}

.geneticAdvice-textbox_structure {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.geneticAdvice-textbox {
  background-color: rgb(227, 223, 223);
  border-radius: 8px;
  padding: 2rem;
  flex: 1;
}
.geneticAdvice-header {
  color: #e56a54;
}

.geneticAdvice-text {
  margin-top: 0;
}
.lucie-img {
  max-width: 22%;
  min-width: 200px;
  height: auto;
  margin: -140px 70px 0px 20px;
  border-radius: 50%;
  transition: transform 1.5s ease-in-out;
  transform: scale(0.85);
}
.lucie-img.zoom {
  transform: scale(1); /* Přiblíží na 100% velikost */
}


.geneticAdvice-signature {
  text-align: right;
}

.geneticAdvice-highlite {
  background-color: #e56a54;
  color: white;
  margin: 10px 50px 10px -32px;
  padding: 20px 20px 20px 31px;
  border-radius: 0 5px 5px 0;
}

@media (max-width: 768px) {
  .geneticAdvice-container {
    padding: 3rem 1rem 0rem 1rem;
    background-color: white;
    border-radius: 8px;
  }
  .geneticAdvice-textbox_structure {
    display: flex;
  }

  .lucie-img {
    min-width: 140px;
    margin: -120px 30px 0px 20px;
  }
  .geneticAdvice-highlite {
    margin-right: -2rem;
    border-radius: 0;
    padding: 1rem 2rem;
  }
}
@media (max-width: 480px) {
  .lucka-img {

    margin: -140px -5px 0px -25px;
  }
  .geneticAdvice-header {
  flex: 1; /* Zajistí, že zabere zbývající prostor vedle obrázku */
  text-align: left; /* Zarovnání textu vlevo */
  color: #e56a54;
  margin-right: 1rem; /* Odstranění výchozích mezer */
}
}
</style>
