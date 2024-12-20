<template>
  <section id="results" class="content-section results">
    <div class="results-card">
      <div class="results_header-container">
        <!-- Použijeme v-html, abychom správně vykreslili &nbsp; -->
        <h1 class="results-title" v-html="results.title"></h1>
        <div class="rainbowdiv"></div>
      </div>
      <div class="results-header">
        <p class="results-description">
          {{ results.description }}
        </p>
        <div class="results-status" :class="results.color">
          <span class="status-label" >
            {{ results.label }}
          </span>
        </div>
      </div>
      <p class="results-info">
        {{ results.info }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  results: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.results-card {
  background-color: rgb(227, 223, 223);
  border-radius: 8px;
  padding: 2rem;
  margin: 8.5rem 3rem 0rem 3rem;
}

.results_header-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 5px;
}

.results-title {
  color: #e56a54;
  /* Oranžová barva */
  margin: 0;
}

.rainbowdiv {
  width: 300px;
  height: 50px;
  background: linear-gradient(to right, #9bce63, #eea941, #dc4f50);
  border-radius: 8px;
  margin-top: -50px;
}

.results-header {
  display: flex;
  align-items: center;
  /* Vertikální zarovnání */
  justify-content: space-between;
  /* Rovnoměrné rozložení */
  gap: 1rem;
  /* Mezera mezi prvky */
  flex-wrap: nowrap;
  /* Zabrání přepnutí na nový řádek */
}

.results-description {
  flex: 2;
  /* Zajišťuje, že zabere dostupný prostor vlevo */
  font-weight: 600;
  font-family: 'Adelle';
  color: #333;
  text-align: left;
  /* Zarovnání vlevo */
}

.results-status {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 300px;
  padding: 0.3rem 0;
  border-radius: 8px;
  font-weight: 600;
  font-family: 'Adelle';
  flex-shrink: 0;
  text-align: center;
  white-space: nowrap;
}
.positive1 {
  background-color: #dc4f50;
}
.positive2 {
  background-color: #EEA941;
}
.negative {
  background-color:#9BCE63;
}

.status-label {
  padding: 0.5rem 4rem;
  border-radius: 8px;
  color: white;
  font-family: 'Gordita';
  font-weight: 500;
}

@media (max-width: 1024px) {
  .rainbowdiv {
    width: 150px;
    height: 40px;
  }

  .results-header {
    flex-direction: column;
    /* Stane se sloupcem */
    justify-content: space-around;
    align-items: start;
    gap: 0;
  }

  .results-description {
    margin-bottom: 0;
  }

  .results-status {
    padding: 0;
  }

  .status-label {
    font-size: 1rem;
    font-family: 'Gordita';
    font-weight: 500;
    color: white;
    text-align: left;

  }
}

@media (max-width: 750px) {
  .results-card {
    border-radius: 8px;
    padding: 2rem;
    margin: 8rem 1rem 0 1rem;
  }

  .rainbowdiv {
    width: 150px;
    height: 40px;
  }

  .results-header {
    flex-direction: column;
    /* Stane se sloupcem */
    justify-content: space-around;
    align-items: start;
    gap: 0;
  }

  .results-description {
    margin-bottom: 0;
  }

  .results-status {
    padding: 0;
  }

  .status-label {
    font-size: 1rem;
    font-family: 'Gordita';
    font-weight: 500;
    color: white;
    text-align: left;
    padding: 0.5rem 3rem;
  }
}
</style>