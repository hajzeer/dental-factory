<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Licówki porcelanowe</p></div>
    <div class="inner">
      <h2 class="page__title">LICÓWKI PORCELANOWE WE WROCŁAWIU</h2>
      <div class="first__div">
        <img src="/veener1.png" />
        <p>
          Poznaj nową markę na mapie Wrocławia! Zapraszamy do miejsca
          stworzonego z myślą o profesjonalnym, bezpiecznym wybielaniu zębów i
          profilaktyce.
          <br />
          <br />
          White by Dental Factory wyposażyliśmy w nowoczesny sprzęt -
          ultrawygodne fotele stomatologiczne, najbezpieczniejszą lampę do
          wybielania zębów PrevDent, piaskarkę EMS AIRFLOW i delikatne skalery
          do usuwania kamienia nazębnego w technologii NO-PAIN firmy EMS, lidera
          profilaktyki stomatologicznej.
        </p>
      </div>

      <h2 class="page__title__smaller">
        Jak powstają Twoje licówki?
      </h2>
      <p>
        Na wykonanie licówek porcelanowych najczęściej potrzebujemy dwie wizyty.
        Aby wykonać licówki, musimy ząb nieznacznie oszlifować - zmniejszyć go z
        zewnętrznej strony. Jest to zabieg zupełnie bezbolesny, wykonywany w
        znieczuleniu. Następnie pobieramy wyciski i wykonujemy licówki
        tymczasowe. Nigdy nie opuścisz gabinetu „bez zębów”.
      </p>
      <img src="/veener2.png" />
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Co nas wyróżnia?</h2>
          </div>
          <p>
            <span>
              GWARANCJA NA LECZENIE
            </span>
            <br />
            Porcelana jest równie piękna, co wytrzymała. Na wykonane licówki
            dajemy Ci nawet 5 lat gwarancji. Licówki mogą służyć nawet przez 15
            lat, jeśli będziesz o nie odpowiednio dbać. Udzielimy Ci wszelkich
            porad dotyczących pielęgnacji zębów z licówkami, dzięki czemu
            będziesz się cieszyć swoim uśmiechem przez długi czas!
          </p>
          <p>
            <span>
              STOMATOLOGIA CYFROWA - SKAN ZAMIAST WYCISKU!
            </span>
            <br />
            Nie wykonujemy tradycyjnych wycisków. Cyfrowy skan zębów pozwala nam
            stworzyć model 3D Twojego nowego uśmiechu. Laboratorium projektuje i
            frezuje - wycina Twoje licówki. Następnie są ręcznie barwione, aby
            uzyskać naturalne detale. Dzięki temu ostateczne licówki są
            perfekcyjne i idealnie szczelne.
          </p>
          <p>
            <span>
              DBAMY O TWÓJ KOMFORT!
            </span>
            <br />
            Robimy wszystko, aby leczenie przebiegło dla Ciebie w sposób
            komfortowy! KONSULTACJA ON-LINE - Poznaj plan, harmonogram i
            całkowity koszt leczenia bez wychodzenia z domu!
          </p>
          <p>
            <span>
              PROJEKTOWANIE UŚMIECHU
            </span>
            <br />
            Zobacz swój uśmiech zanim wykonamy jakiekolwiek zabiegi! LICÓWKI
            TYMCZASOWE Licówki tymczasowe pozwalają przetestować nowy uśmiech z
            przyjaciółmi i rodziną. Dopiero po Twojej akceptacji cementujemy na
            stałe licówki ostateczne.
          </p>
        </div>
      </div>
      <Experts path="/specjalizacje/licowki-porcelanowe" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "index",
  data() {
    return {
      visibleSecond: true,
    };
  },
  methods: {
    handleOpenSecond: function () {
      const tl = gsap.timeline();

      if (this.visibleSecond === false) {
        tl.to(this.$refs.main__text__second, { opacity: 0, duration: 0.1 })
          .to(this.$refs.second__arrow, { rotate: "0", duration: 0.2 })
          .to(this.$refs.info__div__outer__second, {
            height: "100px",
            duration: 0.2,
          })
          .to(this.$refs.main__text__second, {
            display: "none",
            duration: 0.2,
          });

        this.visibleSecond = !this.visibleSecond;
      } else {
        tl.to(this.$refs.second__arrow, { rotate: "180deg", duration: 0.2 })
          .to(this.$refs.main__text__second, {
            display: "block",
            duration: 0.1,
          })
          .to(this.$refs.info__div__outer__second, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__second, { opacity: 1, duration: 0.2 });
        this.visibleSecond = !this.visibleSecond;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="../index.scss"></style>
