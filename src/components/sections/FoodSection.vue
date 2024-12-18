<template>
  <section id="histamineFood" class="histamine-food-section">
    <div class="histamine-food-container">
      <h1 class="histamine-food-header">Vybrané potraviny</h1>
      <div class="histamine-food-buttons">
        <div v-for="button in buttons" :key="button.id" class="histamine-food-button-wrapper">
          <button :class="`histamine-food-button ${button.id}`" @click="handleClick(button.id)">
            {{ button.text }}
            <img
              v-if="chevrons[button.id]"
              src="@/assets/icons/chevron_down.svg"
              alt="chevronDown"
              class="chevron-icon-down"
            />
            <img
              v-else
              src="@/assets/icons/chevron_right.svg"
              alt="chevronLeft"
              class="chevron-icon-left"
            />
          </button>
          <div
            v-if="activeSections.includes(button.id)"
            :ref="(el) => setSectionRef(button.id, el)"
            class="histamine-food-section-content"
          >
            <ul class="histamine-food-list">
              <li
                v-for="(item, idx) in getSectionItems(button.id)"
                :key="idx"
                class="histamine-food-item"
              >
                <strong>{{ item.bold }}</strong
                >&nbsp;<span> {{ item.regular }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-container">
      <!-- Modální komponenta -->
      <Modal :isOpen="isModalOpen" :onClose="closeModal" />

      <!-- Tlačítko pro otevření modálu -->
      <div @click="openModal" class="image-container">
        <div :class="`recipe-image ${isZoomed ? 'zoom' : ''}`">
          <img src="@/assets/images/food.png" alt="Obrázek pokrmu" />
        </div>
        <div class="image-wraper">
          <span class="image-text">
            Nevíte&nbsp;si&nbsp;rady&nbsp;kde&nbsp;začít?
            <span class="image-text-highlight"> Vyzkoušejte&nbsp;tento&nbsp;recept. </span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useZoomEffect } from '@/composables/useZoomEffect'
import Modal from '@/components/sections/RecipeModal.vue'

// Data sekcí
const texts = [
  {
    id: 1,
    title: 'Vybrané potraviny bohaté na histamin',
    items: [
      { bold: 'Zrající sýry', regular: '(např. modré sýry, gouda)' },
      { bold: 'Pikantní a fermentované sýry', regular: '(např. parmezán)' },
      { bold: 'Uzeniny', regular: '(salámy, šunky, klobásy)' },
      { bold: 'Kvašené potraviny', regular: '(kyselé zelí, kimchi, sójové produkty)' },
      { bold: 'Ryby a mořské plody', regular: '(sardinky, makrely, tuňák)' },
      { bold: 'Ovoce', regular: '(avokádo, banány, citrusové plody)' },
      { bold: 'Zelenina', regular: '(rajčata, špenát)' },
    ],
  },
  {
    id: 2,
    title: 'Vybrané potraviny s nízkým obsahem histaminu',
    items: [
      { bold: 'Čerstvé maso a drůbež', regular: '' },
      { bold: 'Čerstvé ryby', regular: '' },
      { bold: 'Čerstvá zelenina', regular: '(okurky, mrkev, brambory)' },
      { bold: 'Čerstvé ovoce', regular: '(jablka, hrušky, melouny)' },
    ],
  },
  {
    id: 3,
    title: 'Potraviny, které mohou podporovat aktivitu enzymu DAO',
    items: [
      {
        bold: 'Vysoce kvalitní bílkoviny:',
        regular: 'Obsahují aminokyseliny, které jsou potřebné pro syntézu DAO.',
      },
      {
        bold: 'Minerály jako je měď a zinek:',
        regular:
          'Jsou kofaktory pro enzym DAO a mohou pomoci jeho aktivitě. Potraviny bohaté na vitamin C a B6.',
      },
    ],
  },
]

// Stav a reaktivita
const activeSections = ref([]) // Aktivní sekce
const chevrons = reactive({}) // Stav chevron ikon
const sectionRefs = ref({}) // Odkazy na sekce
const isModalOpen = ref(false) // Stav modálu
const isZoomed = useZoomEffect(3000, 1000) // Přiblížení obrázku

const openModal = () => {
  isModalOpen.value = true // Otevře modal
}

const closeModal = () => {
  isModalOpen.value = false // Zavře modal
}

// Správa kliknutí na sekci
const handleClick = (id) => {
  if (activeSections.value.includes(id)) {
    activeSections.value = activeSections.value.filter((sectionId) => sectionId !== id)
  } else {
    activeSections.value.push(id)
    setTimeout(() => {
      if (sectionRefs.value[id]) {
        sectionRefs.value[id].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        })

        setTimeout(() => {
          const stickyOffset = 109
          window.scrollBy({
            top: -stickyOffset,
            behavior: 'smooth',
          })
        }, 300)
      }
    }, 0)
  }

  chevrons[id] = !chevrons[id]
}

// Nastavení ref pro sekce
const setSectionRef = (id, el) => {
  if (el) {
    sectionRefs.value[id] = el // Přiřadí element k odpovídajícímu ID
  } else {
    delete sectionRefs.value[id] // Odstraní referenci, pokud je element odstraněn
  }
}

// Vrací texty dané sekce
const getSectionItems = (id) => {
  return texts.find((text) => text.id === id)?.items || []
}

// Tlačítka
const buttons = [
  { id: 1, text: 'Bohaté na histamin' },
  { id: 2, text: 'S nízkým obsahem histaminu' },
  { id: 3, text: 'Pro podporu enzymu DAO' },
]
</script>

<style>
.histamine-food-section {
  background-color: white;
}
.histamine-food-container {
  background-color: white;
  border-radius: 5px;
  margin: 0rem 3rem 0rem 3rem;
}

.histamine-food-header {
  color: #e56a54;
  margin-bottom: 2rem;
  text-align: left;
}

.histamine-food-buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.histamine-food-button-wrapper {
  width: 100%;
  margin-bottom: 1rem;
}

.histamine-food-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 1.2rem;
  background-color: #e56a54;
  color: white;
  border: none;
  border-radius: 5px;
  text-align: left;
  font-size: 1.5rem;
  font-family: 'Adelle', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.chevron-icon-left {
  width: 1.5rem;
}
.chevron-icon-down {
  width: 1.5rem;
}

.histamine-food-button:hover {
  background-color: #d45443;
}

.histamine-food-section-content {
  scroll-margin-top: 220px;
  background-color: rgb(227, 223, 223);
  padding: 1rem;
  margin: 1rem 0rem;
  border-radius: 8px;
}

.highlight-parentheses {
  font-family: 'Adelle', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.59);
}
.histamine-food-item {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

/* odkaz na recept*/

.image-container {
  display: flex;
  cursor: pointer;
  height: 100%;
  background-color: rgb(227, 223, 223);
  border-radius: 8px;
  margin: 3rem 3rem 0 4.5rem;
  padding: 0;
}

.recipe-image {
  width: 150px;
  min-width: 130px;
  margin: -2rem;
  transition: transform 2s ease-in-out;
  transform: scale(1);
}

.recipe-image.zoom {
  transform: scale(1.2);
}
.image-wraper {
  display: flex;
  justify-content: baseline;
  align-items: center;
}
.image-text {
  font-family: 'Gordita', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #000000;
  padding: 1rem 3rem;
}
.image-container:hover {
  background-color: rgb(192, 190, 190);
}
.image-text-highlight {
  font-family: 'Adelle', sans-serif;
  font-weight: 600;
  color: #e56a54;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .histamine-food-container {
    padding: 0rem;
    margin: 1rem;
  }

  .histamine-food-list {
    padding: 0;
    margin: 1rem 0.8rem;
  }
  .histamine-food-header {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }

  .histamine-food-button {
    font-size: 1rem;
    width: 70%;
  }

  .histamine-food-section-content {
    font-size: 0.9rem;
  }

  .image-container {
    margin: 3rem 1rem 0 3rem;
  }

  .recipe-image {
    width: 130px;
  }

  .image-text {
    font-family: 'Gordita', sans-serif;
    font-weight: 700;
    display: block;
    text-align: left;
    font-size: 0.8rem;
    border-radius: 0 5px 5px 0;
  }
  .image-text-highlight::before {
    content: '\A';
    white-space: pre;
  }
  .image-text-highlight {
    font-size: 0.8rem;
  }
}
</style>
