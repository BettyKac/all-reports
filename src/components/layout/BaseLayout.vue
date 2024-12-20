<template>
  <div class="main-container">
    <!-- Navigační menu -->
    <NavigationMenu
      :resultType="resultType"
      :analysisType="analysisType"
      @updateType="$emit('updateType', $event)"
    />

    <!-- Slot pro konkrétní obsah stránky -->
    <div class="content-container">
    <HeaderBar :analysisType="analysisType" />
    <slot></slot>
    <FooterSection />
  </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import NavigationMenu from './NavigationMenu.vue';
import FooterSection from './FooterSection.vue';
import HeaderBar from './HeaderBar.vue';

defineProps({
  analysisType: {
    type: String,
    required: true,
  },
  resultType: {
    type: String,
    required: true,
  },
});

defineEmits(['updateType']);
</script>

<style>
.main-container {
  display: flex;
  position: relative;
  height: 100vh;
  width: 100%;
}

.content-container {
  flex-grow: 1;
  overflow-y: auto;
  background-color: white;
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
    background-color: white;
    overflow-x: hidden;

  }

  .content-container {
    width: 100%;
    /* Zajistí, že obsah je vždy 100% šířky v mobilním zobrazení */
  }
}
</style>