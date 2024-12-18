<template>
  <section id="information" class="content-section-information">
    <div class="information-container">
      <h1>
        <span class="information-highlight">Děkujeme,</span> <br />
        že se zajímáte o své zdraví.
      </h1>
      <h2 class="information-highlight">Jste v rukou odborníků</h2>
      <img
        class="information-biovendor_logo"
        src="@/assets/logo/SVG/logo_biovendor.svg"
        alt="biovendorlogo"
      />
      <p class="information-biovendor">
        Genetify je součástí biotechnologické skupiny BioVendor Group, která už
        30 let patří ke světové špičce biotechnologického výzkumu. Veškeré
        laboratorní analýzy, zpracování dat i následná interpretace výsledků
        probíhá výhradně ve vlastních certifikovaných laboratořích v České
        republice.
      </p>
      <h2 class="information-claim-font">
        Know your genes. <br />
        <span class="information-highlight line-under-text">
          Live better.
        </span>
      </h2>
      <p>
        V případě zájmu o informace týkající se konkrétní genetické varianty
        nalezené ve Vaší DNA nás prosím kontaktujte na e-mailové adrese
        info@genetify.me. Analyzováno metodou NGS - Next Generation Sequencing.
        Výsledky slouží k informativním účelům, nejedná se o diagnostiku, ani o
        poskytování zdravotní péče. Analýza nenahrazuje odborné lékařské
        vyšetření. Jakoukoliv změnu životního stylu, stravy, medikace nebo
        suplementace konzultujte se svým lékařem.
      </p>
    </div>
  </section>
</template>

<script setup>
// Tato komponenta je pouze šablona, není třeba JavaScript logiky.
</script>

<style>
.information-container {
    background-color: black;
    color: white;
    padding: 1.5rem 15rem 1.5rem 3rem;

}
.information-highlight {
    color: #E56A54;
}
.line-under-text {
  width: 100%;
  color: #E56A54;
  border-bottom: 1px solid #ff6243;
  padding-bottom: 10px;
  display: inline-block;
  font-family: 'gordita';
  font-weight: 500;
}

.information-biovendor {
    margin-bottom: 7rem;
}
.information-biovendor_logo {
    width: 150px;
}
@media (max-width: 768px) {

    .information-container {
        padding: 1.5rem 5rem 1.5rem 2.5rem;
    }
}

</style>
