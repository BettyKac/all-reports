<template>
  <div v-if="isOpen" class="recipe-modal">
    <div class="recipe-modal-content">
      <button class="modal-close-button" @click="onClose">
        <img class="modal-close-icon" :src="closeButton" alt="closeButton" />
      </button>
      <div class="modal-content-wrapper">
        <div class="modal-header">
          <h1>Batátový salát s pečeným lososem</h1>
          <img class="modal-food-image" :src="foodPic" alt="Obrázek pokrmu" />
        </div>

        <h2>Ingredience:</h2>
        <ul class="recipe-modal-ingredients">
          <li>2 středně velké batáty</li>
          <li>2 čerstvé filety z lososa</li>
          <li>1 lžíce olivového oleje</li>
          <li>Špetka soli bez jódu</li>
          <li>Čerstvé bylinky (např. pažitka, kopr)</li>
          <li>1/2 salátové okurky</li>
          <li>Listy polníčku nebo hlávkového salátu</li>
          <li>1 lžíce dýňových semínek (volitelné)</li>
          <li>1 lžíce citrónové šťávy (pokud je tolerována)</li>
        </ul>

        <h2>Postup:</h2>
        <h3>Příprava batátů:</h3>
        <p>
          Batáty oloupejte a nakrájejte na menší kostičky. Vložte je do hrnce s vodou, přiveďte k varu a
          vařte, dokud nebudou měkké (cca 15 minut). Poté slijte vodu a nechte je vychladnout.
        </p>

        <h3>Příprava lososa:</h3>
        <p>
          Filety z lososa omyjte, osušte a jemně osolte. Na pánvi rozehřejte olivový olej a lososa opečte z
          obou stran, dokud nebude mít křupavou kůrku a vnitřek bude krásně růžový a šťavnatý (cca
          5-7 minut na každé straně). Po upečení nechte lososa trochu vychladnout a pak ho natrhejte na
          menší kousky.
        </p>

        <h3>Příprava salátu:</h3>
        <p>
          Nakrájejte salátovou okurku na malé kostičky a smíchejte s listy polníčku nebo hlávkového
          salátu. Přidejte vařené batáty a promíchejte. Pokud chcete, můžete do salátu přidat dýňová
          semínka pro extra křupavost.
        </p>

        <h3>Servírování:</h3>
        <p>
          Na talíř dejte vrstvu batátového salátu, přidejte natrhaného lososa a vše lehce zakápněte
          citrónovou šťávou (pokud je tolerována) nebo trochou olivového oleje. Nakonec posypte
          čerstvými bylinkami podle chuti, například pažitkou nebo koprem.
        </p>

        <h3>Tipy:</h3>
        <p>
          Salát můžete obměnit přidáním dalších druhů zeleniny, které vám vyhovují (např. vařená mrkev
          nebo brokolice). Tento recept je jednoduchý, lehký a přitom skvěle zasytí. Losos a batáty
          poskytují důležité živiny a jemné chutě, které ocení i osoby s histaminovou intolerancí.
          Při histaminové intoleranci je vždy důležité vybírat čerstvé potraviny.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import closeButton from '@/assets/icons/x.svg';
import foodPic from '@/assets/images/food.png';

// Definice props
defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
});
</script>

<style>
/* Modal hlavní obal */
.recipe-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

/* Obsah modálního okna */
.recipe-modal-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2.5rem 4rem;
  max-height: 90vh; /* Omezení výšky na 90 % výšky okna */
  border-radius: 10px;
  text-align: left;
  max-width: 700px;
  width: 90%;
  overflow-y: auto; /* Zajištění vertikálního scrollování */
  overflow-x: hidden;
  position: relative;
}

/* Kontejner pro obsah (vytvořeno podle JSX) */
.modal-content-wrapper {
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
}

.modal-close-button {
  position: absolute; /* Fixní pozice v rohu modálu */
  top: 1rem; /* Mírné odsazení od horního okraje */
  right: 1rem; /* Mírné odsazení od pravého okraje */
  background-color: #ff6243;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 0.5rem;
  width: 2.5rem; /* Trochu větší šířka a výška tlačítka */
  height: 2.5rem;
  z-index: 1000; /* Zajistí, že tlačítko bude nad obsahem */
  display: flex;
  justify-content: center; /* Vycentrování ikony horizontálně */
  align-items: center; /* Vycentrování ikony vertikálně */
}
/* Ikona pro zavření modálu */
.modal-close-icon {
  width: 1.5rem; /* Zmenšení ikony uvnitř tlačítka */
  height: 1.5rem;
}

/* Hover efekt na zavírací tlačítko */
.recipe-modal-content button:hover {
  background-color: #d45443;
}

/* Hlavička modálu */
.modal-header {
  display: flex;
}

.modal-food-image {
  max-width: 300px;
  margin-bottom: -150px;
  z-index: 2;
}

/* Ingredience v modálním okně */
.recipe-modal-ingredients {
  background-color: #e56a54;
  margin: 0 3rem 0 -70px;
  padding: 1rem 0rem 1rem 6rem;
  border-radius: 0 5px 5px 0;
}

/* Stylování pro menší obrazovky */
@media (max-width: 768px) {
  .recipe-modal-content {
    padding: 1.2rem 2.5rem 1.2rem 1rem;
    height: auto;
    max-height: 90vh;
    width: 95%;
  }
  .modal-content-wrapper {
    display: flex;
    flex-direction: column;
    padding-right: 0.8rem;
  }
  .recipe-modal-ingredients {
    width: 100%;
    padding: 2.2rem;
    margin: 0 0 0 -18px;
    border-radius: 0;
  }
  .recipe-modal-ingredients li {
    padding-right: 0.8rem;
  }
  .modal-food-image {
    max-width: 50%;
    height: auto;
    margin-bottom: 0.8rem;
    display: block;
    margin-left: auto;
    margin-top: 2rem;
  }

  .modal-header h1 {
    margin-top: 1rem;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  .modal-close-button {
    position: absolute;
    top: 2rem; /* Mírné odsazení od horního okraje */
    right: 1rem; /* Mírné odsazení od pravého okraje */
  }
  .modal-close-icon {
    width: 1.2rem;
    height: 1.7rem;
  }
}
</style>
