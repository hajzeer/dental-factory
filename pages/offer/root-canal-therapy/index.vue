<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Leczenie kanałowe</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">LECZENIE KANAŁOWE</h2>
        <div class="first__div">
          <img src="/offer-img/leczenie-kanalowe-1.jpg" />
          <p>
            Leczenie kanałowe pod mikroskopem jest ratunkiem dla zębów mocno
            zniszczonych i z głęboką próchnicą. Prawidłowo przeprowadzone może
            przedłużyć utrzymanie zębów na wiele lat.
            <br />
            <br />
            Leczenie kanałowe wykonujemy wtedy, gdy próchnica jest na tyle
            głęboka, że sięga wgłąb miazgi. Leczenie kanałowe jest szansą na
            uratowanie zębów, które dawniej skazane były na usunięcie. Polega
            ono na usunięciu zakażonej miazgi znajdującej się we wnętrzu zęba, a
            następnie odpowiednim poszerzeniu, odkażeniu kanałów i ich szczelnym
            wypełnieniu. Ząb leczony kanałowo może służyć jeszcze przez wiele
            lat, być filarem korony, albo mostu protetycznego.
            <br />
            <br />
            Leczenie kanałowe wykonujemy zawsze pod mikroskopem, który powiększa
            obraz zęba 25-krotnie. Zapewnia to precyzję niemożliwą do
            osiągnięcia innymi metodami. Dzięki niemu leczenie takie jest
            bardziej dokładne i skuteczniejsze. Zajmujemy się też powtórnym
            leczeniem kanałowym - tzw. reendo zębów, które dawniej były leczone
            kanałowo i które wymagają jego powtórzenia.
          </p>
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer border__top__div">
          <div class="info__div__inner">
            <h2>Co nas wyróżnia?</h2>
          </div>
          <p>
            <span>
              KOMFORT& LECZENIE BEZ BÓLU
            </span>
          </p>
          <p>
            Ultrawygodne fotele, które pozwolą Ci się odprężyć. Pacjentom
            bojącym się tradycyjnych znieczuleń proponujemy znieczulenie
            komputerowe WAND.
          </p>
          <p>
            <span>
              RTG NA MIEJSCU
            </span>
          </p>
          <p>
            Zdjęcia RTG i tomografię komputerową niezbędne do leczenia
            wykonujemy na miejscu, co znacznie skraca czas leczenia i
            konieczność dodatkowych wizyt.
          </p>
          <p>
            <span>
              ESTETYCZNE PODEJŚCIE
            </span>
          </p>
          <p>
            Zdajemy sobie sprawę, że najważniejszy jest dla Ciebie ostateczny
            efekt, dlatego zawsze dbamy o to, żeby był on estetyczny i trwały.
          </p>
          <p>
            <span>
              UGRYZIEMY KAŻDY PROBLEM!
            </span>
          </p>
          <p>
            Leczymy zęby bardzo zniszczone, które inni lekarze często oceniają
            jako zęby do usunięcia. Wzmacniamy je specjalnymi wkładami z włókien
            szklanych, co znacznie wydłuża ich żywotność.
          </p>
          <p>
            <span>
              DAJEMY CI WYBÓR
            </span>
          </p>
          <p>
            Po zakończeniu leczenia kanałowego masz dwie możliwości odbudowy
            zęba: wypełnienie kompozytowe (tzw. biała plomba), albo inlay
            (nakład) lub koronka na zęba.
          </p>
          <p>
            <span>
              JASNA POLITYKA CENOWA
            </span>
          </p>
          <p>
            Przed rozpoczęciem leczenia otrzymasz od nas pełen kosztorys. Dzięki
            temu nie zaskoczą Cię w trakcie leczenia dodatkowe koszty. Poznasz
            też możliwości leczenia ratalnego.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Nowoczesne znieczulenia</h2>
          </div>
          <p>
            Doskonale wiemy, że wizyta u dentysty wiąże się ze stresem. Nie
            musisz bać się zabiegu! Od początku naszego istnienia dokładamy
            wszelkich starań, aby leczenie przebiegało bezboleśnie. Nie używamy
            igieł. Tradycyjną strzykawkę z igłą zastąpiliśmy komputerowym
            znieczuleniem The Wand STA.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Leczenie kanałowe na jednej wizycie?</h2>
          </div>
          <p>
            Dzięki zastosowaniu urządzeń do poszerzania, odkażania i wypełniania
            kanałów, aparatu RTG przy fotelu, leczenie staramy się rozpoczynać i
            kończyć podczas jednej wizyty. Leczenie endodontyczne jest
            całkowicie bezbolesne - przeprowadzamy je w znieczuleniu miejscowym,
            albo w znieczuleniu komputerowym WAND.
          </p>
        </div>
      </div>
      <Experts path="/specjalizacje/leczenie-kanalowe" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "index",
  data() {
    return {
      visibleFirst: true,
      visibleSecond: true,
      visibleThird: true,
      visibleFourth: true,
    };
  },
  methods: {
    handleOpenFirst: function () {
      const tl = gsap.timeline();

      if (this.visibleFirst === false) {
        tl.to(this.$refs.main__text__first, { opacity: 0, duration: 0.1 })
          .to(this.$refs.first__arrow, { rotate: "0", duration: 0.1 })
          .to(this.$refs.info__div__outer__first, {
            height: "100px",
            duration: 0.1,
          })
          .to(this.$refs.main__text__first, { display: "none", duration: 0.1 });
        this.visibleFirst = !this.visibleFirst;
      } else {
        tl.to(this.$refs.main__text__first, { display: "block", duration: 0.1 })
          .to(this.$refs.first__arrow, { rotate: "180deg", duration: 0.1 })
          .to(this.$refs.info__div__outer__first, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__first, {
            opacity: 1,
            delay: 0.2,
            duration: 0.2,
          });

        this.visibleFirst = !this.visibleFirst;
      }
    },
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
    handleOpenThird: function () {
      const tl = gsap.timeline();

      if (this.visibleThird === false) {
        tl.to(this.$refs.main__text__third, { opacity: 0, duration: 0.1 })
          .to(this.$refs.third__arrow, { rotate: "0", duration: 0.2 })
          .to(this.$refs.info__div__outer__third, {
            height: "100px",
            duration: 0.2,
          })
          .to(this.$refs.main__text__third, { display: "none", duration: 0.2 });

        this.visibleThird = !this.visibleThird;
      } else {
        tl.to(this.$refs.third__arrow, { rotate: "180deg", duration: 0.2 })
          .to(this.$refs.main__text__third, { display: "block", duration: 0.1 })
          .to(this.$refs.info__div__outer__third, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__third, { opacity: 1, duration: 0.2 });
        this.visibleThird = !this.visibleThird;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="../index.scss"></style>
