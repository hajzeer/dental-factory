<template>
  <div>
    <div class="title__nav__div"><p>Ceny / Cennik</p></div>
    <div class="container__inner">
      <h1 class="page__title">CENNIK</h1>
      <p class="prices__paragraph__head">
        Poniżej znajdziesz ceny najczęstszych zabiegów w Dental Factory. Cennik
        ma charakter orientacyjny. Z pełnym cennikiem i kosztami leczenia
        zapoznamy Cię podczas konsultacji.
      </p>
      <p class="prices__paragraph__head">
        Dla Twojej wygody akceptujemy płatności kartami płatniczymi i przelewem
        oraz możliwość rozłożenia płatności na raty w systemie MediRaty.
      </p>
      <PricesInfo path="/cennik/stomatologia" />
      <h1 class="aestetic__title">
        MEDYCYNA ESTETYCZNA
      </h1>
      <PricesInfo path="/cennik/medycyna-estetyczna" />
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style scoped lang="scss" src="../../offer/index.scss"></style>
