<template>
  <div>
    <div class="title__nav__div"><p>Dental Travel</p></div>
    <div class="container__inner">
      <h2 class="page__title">DENTAL TRAVEL</h2>

      <p class="trvel__paragraph">
        Leczymy zarówno Pacjentów z Wrocławia, okolicznych miejscowości i
        Dolnego Śląska, ale także z całego kraju i zza granicy.
      </p>
      <ul>
        <li>
          ~ Wykonanie wszystkich niezbędnych zabiegów podczas Twojego pobytu.
        </li>
        <li>
          ~ Atrakcyjne ceny leczenia i możliwość płatności ratalnych.
        </li>
        <li>
          ~ Możliwość organizacji pobytu w okolicznych hotelach.
        </li>
        <li>
          ~ Pełna logistyka i opieka
        </li>
      </ul>
      <div class="first__div">
        <img class="travel__image" src="/11.png" />
        <div>
          <h2>
            Chcesz rozpocząć leczenie?
          </h2>
          <NuxtLink class="links" to="/about/start">
            <button class="active__button">
              <p>Dowiedz się jak wygląda pierwsza wizyta</p>
            </button>
          </NuxtLink>
          <NuxtLink class="links" to="/contact">
            <button class="active__button">
              <p>Umów się na termin pierwszej wizyty</p>
            </button>
          </NuxtLink>
        </div>
      </div>

      <div class="info__div">
        <div class="info__div__outer border__top__div">
          <div class="info__div__inner">
            <h2>Co nas wyróżnia?</h2>
          </div>
          <p>
            <span>
              DOGODNA LOKALIZACJA TUŻ PRZY DWORCU PKP I ŁATWY DOJAZD
            </span>
            <br />
            Znajdujemy się na spokojnym osiedlu w samym centrum Wrocławia, tuż
            obok Dworca Głównego PKP i PKS. Dotrzesz do nas bez problemu z
            każdego miejsca. Dental Factory dentysta we Wrocławiu centrum
            dworzec.
          </p>
          <p>
            <span>
              KONSULTACJA I PLAN LECZENIA
            </span>
            <br />
            Dbamy o Twój czas. Przed rozpoczęciem leczenia otrzymasz od nas
            pełen plan leczenia i harmonogram wizyt. Dzięki niemu nie zaskoczą
            Cię w trakcie leczenia dodatkowe koszty. Dla Twojego komfortu, całe
            leczenie i plan wizyt możemy zaplanować on-line, jeszcze przed Twoim
            przyjazdem.
          </p>
          <p>
            <span>
              KOMPLEKSOWA OFERTA
            </span>
            <br />
            W ciągu Twojego pobytu zorganizujemy całe niezbędne leczenie.
            Oferujemy kompleksowe leczenie stomatologiczne, diagnostykę RTG i
            opiekę na miejscu.
          </p>
          <p>
            <span>
              OPIEKA PO LECZENIU
            </span>
            <br />
            Chcemy mieć pewność, że wszystko przebiega zgodnie z planem. Zawsze
            masz z nami kontakt po zakończonym leczeniu, otrzymasz od nas plan
            wizyt kontrolnych. W razie potrzeby odpowiemy na wszystkie Twoje
            wątpliwości.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dental-travel",
};
</script>

<style scoped lang="scss" src="./offer/index.scss"></style>
