  <template>
    <div>
      <div class="title__nav__div"> <p>Dental Travel</p></div>
      <div class="container__inner">
        <h2>DENTAL TRAVEL</h2>
        <img src="/11.png"/>

        <p>Leczymy zarówno Pacjentów z Wrocławia, okolicznych miejscowości i Dolnego Śląska, ale także z całego kraju i zza granicy. </p>
        <h2>
            Co zyskujesz?
        </h2>
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
        <h2>
          Chcesz rozpocząć leczenie?
        </h2>
        <NuxtLink class="links" to="/about/start">
          <button class="active__button"><p>Dowiedz się jak wygląda pierwsza wizyta</p></button>
        </NuxtLink>
        <NuxtLink class="links" to="/contact">
          <button class="active__button"><p>Umów się na termin pierwszej wizyty</p></button>
        </NuxtLink>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Co nas wyróźnia?</h2>
          </div>

        </div>

      </div>
    </div>
  </template>

  <script>
    export default {
      name: "dental-travel"
    }
  </script>

  <style scoped lang="scss" src="./offer/index.scss">


  </style>
