<template>
  <div class="menu-container" :class="{ scrolled: hasScrolled }">
    <div class="menu_icons">
      <img class="logotyp" :src="logotyp" alt="Logo" />
      <img class="menuIcon" :src="menuIcon" alt="menuIcon" @click="toggleMenu" />
    </div>

    <!-- Typ analýzy -->
    <div class="menu_analysis-type">
      <h3 class="menu_analysis-header">Analýza histaminové intolerance</h3>
    </div>

    <!-- Mobilní menu -->
    <ul :class="['mobile-menu-list', { open: isOpen }]" v-if="isOpen">
      <li v-for="(item, index) in filteredMenuItems" :key="index">
        <a :href="'#' + item.id" @click="isOpen = false">{{ item.name }}</a>
      </li>
    </ul>

    <!-- Desktopové menu -->
    <ul class="desktop-menu-list">
      <li v-for="(item, index) in filteredMenuItems" :key="index">
        <a :href="'#' + item.id">{{ item.name }}</a>
      </li>
    </ul>

    <!-- Tlačítko pro přepínání -->
    <div class="menu-toggle-version">
      <button @click="toggleVersion">{{ currentVersionLabel }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import logotyp from '@/assets/logo/SVG/GENETIFY_RGB_genetify-logotyp-bila-rgb.svg';
import menuIcon from '@/assets/icons/menu_icon2.png';

const props = defineProps({
  resultType: {
    type: String,
    required: true,
  },
  analysisType: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['updateType']);

const isOpen = ref(false);
const hasScrolled = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  hasScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// Položky menu
const menuItems = [
  { name: 'Vaše výsledky', id: 'results' },
  { name: 'Genetička vysvětluje', id: 'geneticAdvice' },
  { name: 'Lékař vysvětluje', id: 'doctorAdvice' },
  { name: 'Nutriční terapeutka vysvětluje', id: 'nutritionAdvice' },
  { name: 'Vybrané potraviny', id: 'histamineFood', hideIfNegative: true },
  { name: 'Zajímavosti', id: 'facts', hideIfNegative: true },
  { name: 'Dodatečné informace', id: 'information' },
];

const filteredMenuItems = computed(() => {
  return menuItems.filter((item) => {
    return !(props.resultType === 'negative' && item.hideIfNegative);
  });
});

const toggleVersion = () => {
  const newResultType = props.resultType === 'positive' ? 'negative' : 'positive';
  emits('updateType', { resultType: newResultType });
};

const currentVersionLabel = computed(() => {
  return props.resultType === 'positive' ? 'Zobrazit negativní verzi' : 'Zobrazit pozitivní verzi';
});
</script>
<style scoped>
.menu-container {
  background-color: black;
  padding: 25px 25px 25px 40px;
  color: white;
  position: sticky;
  display: flex;
  top: 0;
  flex-direction: column;
  z-index: 100;
}

.menu_analysis-type {
  display: none;
}

.logotyp {
  width: 150px;
}

.menuIcon {
  display: none;
}

.desktop-menu-list {
  list-style-type: none;
  margin: 1rem 0 1rem 0;
  padding-left: 0;
  width: 200px;
  align-items: flex-start;
}

.desktop-menu-list li {
  margin-bottom: 15px;
  padding-left: 9px;
  font-size: 1rem;
  transition: opacity 1s ease, transform 0.3s ease, color 0.3s ease;
}

.desktop-menu-list li a {
  text-decoration: none;
  color: white;
}

.desktop-menu-list li a:hover {
  color: #e56a54;
}

.mobile-menu-list {
  display: none;
}

 /* Vývojové tlačítko pro změnu verze */
.menu-toggle-version {
  margin-top: 1rem;
  text-align: center;
}

.menu-toggle-version button {
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #e56a54;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-toggle-version button:hover {
  background-color: #c05043;
}


@media (max-width: 768px) {
  .menu-container {
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: #000000;
    z-index: 1000;
    box-sizing: border-box;
    padding: 0.5rem 2rem 0rem 1rem;
  }

  .menuIcon {
    width: 30px;
    height: 15px;
    cursor: pointer;
    display: block;
    margin-bottom: 0;
  }

  .menu_icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .desktop-menu-list {
    display: none;
  }

  .mobile-menu-list {
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 1rem;
    margin: 0;
    list-style: none;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .mobile-menu-list li {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  .mobile-menu-list li a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }

  .mobile-menu-list li a:hover {
    color: #e56a54;
  }

  .menu_analysis-type {
    display: block;
    align-self: flex-start;
    margin-left: 0;
    color: white;
    padding-left: 10px;
  }

  .menu_analysis-header {
    margin: 0 0 0.5rem 0;
  }
}
</style>
