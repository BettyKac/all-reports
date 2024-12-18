<template>
  <section id="facts" class="content-section">
    <div class="facts-container">
      <h1 class="facts-header">Věděli jste, že ...</h1>
      <div class="facts-content">
        <p class="facts-text">
          Lze také zařadit <span class="facts-bold">doplněk stravy</span>, který obsahuje přímo
          enzym DAO. Je důležité poznamenat, že přestože tyto doplňky mohou
          některým lidem pomoci, měly by být užívány pod dohledem zdravotnického
          profesionála.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style >
.facts-container {
    padding: 0rem 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-right: 2rem;

}

.facts-header {
    margin-bottom: 2rem;
    color: #E56A54;
}
.facts-content {
    background-color: rgb(227, 223, 223);
    padding: 2rem;
    border-radius: 8px;
}
.facts-text{
    background-color: rgb(227, 223, 223);
}
.facts-bold {
    font-family: 'Gordita-Bold',sans-serif;
}
@media (max-width: 768px) {
  .facts-container {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 0;}
  .facts-header {
    margin-left: 0.5rem;
  }

}
</style>
