<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / RTG i Tomografia zębów</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">RTG I TOMOGRAFIA ZĘBÓW</h2>
        <div class="first__div">
          <img src="/offer-img/tomografia%20-%20do%20rtg.jpg"/>
          <p>
            Dobra diagnostyka jest podstawą dalszego leczenia. W Dental Factory
            wykorzystujemy wyłącznie cyfrowe aparaty RTG, które ograniczają
            promieniowanie rentgenowskie do minimum, a jednocześnie dają bardzo
            wyraźne i precyzyjne zdjęcia. Umożliwia nam to dokładną ocenę stanu
            Twojej jamy ustnej i dobór odpowiedniego leczenia.
            <br/>
            <br/>
            Wszystkie zdjęcia i badania niezbędne do zaplanowania i podczas
            leczenia wykonasz u nas na miejscu.
          </p>
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer border__top__div">
          <div class="info__div__inner">
            <h2>Tomograf komputerowy</h2>
          </div>
          <p>
            Za pomocą tomografu uzyskujemy trójwymiarowy obraz rentgenowski
            Twoich zębów. Badanie takie jest dużo dokładniejsze od klasycznych
            zdjęć RTG. Jest niezbędne do zaplanowania leczenia
            implantologicznego, skomplikowanych ekstrakcji zębów i podczas
            leczenia kanałowego.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Skaner wewnątrzustny</h2>
          </div>
          <img src="/offer-img/rtg.jpg"/>
          <p>
            Cyfrowy skan zębów pozwala nam stworzyć wirtualny model Twojego
            uśmiechu. Dzięki skanerowi obraz Twoich zębów pojawia się
            bezpośrednio na ekranie komputera. Nie jest już potrzebne pobieranie
            wycisku, co szczególnie doceniają pacjenci z odruchem wymiotnym.
            Uzyskany obraz jest dużo dokładniejszy i wyraźniejszy od
            tradycyjnego wycisku.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>RTG Panoramiczne</h2>
          </div>
          <img src="/offer-img/skaner1.jpg"/>
          <p>
            Podstawowe zdjęcie przy planowaniu leczenia. Wykonujemy je każdemu
            pacjentowi co dwa lata. Pozwala na ocenę stanu kości szczęki i
            żuchwy, stanu zdrowia wszystkich zębów i przyzębia oraz obecności
            stanów zapalnych.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>RTG Cefalometryczne</h2>
          </div>

          <p>
            Zdjęcie niezbędne w ortodoncji do zaplanowania leczenia
            ortodontycznego.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>RTG Punktowe</h2>
          </div>
          <img src="/offer-img/skaner2.jpg"/>
          <p>
            Zdjęcia wewnątrzustne są niezbędne podczas leczenia kanałowego, do
            oceny próchnicy i szczelności wypełnień. Gabinety wyposażyliśmy w
            RTG przy unitach, dzięki czemu niezbędne podczas leczenia zdjęcia
            możemy wykonać bez przerywania wizyty i wstawania z fotela.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Lupy i kamery wewnątrzustne</h2>
          </div>
          <p>
            Lepiej widzieć znaczy dokładniej leczyć! Dlatego wszystkie zabiegi i
            badania wykonujemy w powiększeniu. Dzięki temu uzyskujemy wyraźny
            obraz, niewidoczny gołym okiem. Taka praca jest dużo dokładniejsza i
            bardziej precyzyjna.
          </p>
        </div>
      </div>
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
      visibleFifth: true,
      visibleSixth: true,
    };
  },
  methods: {
    handleOpenFirst: function () {
      const tl = gsap.timeline();

      if (this.visibleFirst === false) {
        tl.to(this.$refs.main__text__first, {opacity: 0, duration: 0.1})
          .to(this.$refs.first__arrow, {rotate: "0", duration: 0.1})
          .to(this.$refs.info__div__outer__first, {
            height: "100px",
            duration: 0.1,
          })
          .to(this.$refs.main__text__first, {display: "none", duration: 0.1});
        this.visibleFirst = !this.visibleFirst;
      } else {
        tl.to(this.$refs.main__text__first, {display: "block", duration: 0.1})
          .to(this.$refs.first__arrow, {rotate: "180deg", duration: 0.1})
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
        tl.to(this.$refs.main__text__second, {opacity: 0, duration: 0.1})
          .to(this.$refs.second__arrow, {rotate: "0", duration: 0.2})
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
        tl.to(this.$refs.second__arrow, {rotate: "180deg", duration: 0.2})
          .to(this.$refs.main__text__second, {
            display: "block",
            duration: 0.1,
          })
          .to(this.$refs.info__div__outer__second, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__second, {opacity: 1, duration: 0.2});
        this.visibleSecond = !this.visibleSecond;
      }
    },
    handleOpenThird: function () {
      const tl = gsap.timeline();

      if (this.visibleThird === false) {
        tl.to(this.$refs.main__text__third, {opacity: 0, duration: 0.1})
          .to(this.$refs.third__arrow, {rotate: "0", duration: 0.2})
          .to(this.$refs.info__div__outer__third, {
            height: "100px",
            duration: 0.2,
          })
          .to(this.$refs.main__text__third, {display: "none", duration: 0.2});

        this.visibleThird = !this.visibleThird;
      } else {
        tl.to(this.$refs.third__arrow, {rotate: "180deg", duration: 0.2})
          .to(this.$refs.main__text__third, {display: "block", duration: 0.1})
          .to(this.$refs.info__div__outer__third, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__third, {opacity: 1, duration: 0.2});
        this.visibleThird = !this.visibleThird;
      }
    },
    handleOpenFourth: function () {
      const tl = gsap.timeline();

      if (this.visibleFourth === false) {
        tl.to(this.$refs.main__text__fourth, {opacity: 0, duration: 0.1})
          .to(this.$refs.fourth__arrow, {rotate: "0", duration: 0.2})
          .to(this.$refs.info__div__outer__fourth, {
            height: "100px",
            duration: 0.2,
          })
          .to(this.$refs.main__text__fourth, {
            display: "none",
            duration: 0.2,
          });

        this.visibleFourth = !this.visibleFourth;
      } else {
        tl.to(this.$refs.fourth__arrow, {rotate: "180deg", duration: 0.2})
          .to(this.$refs.main__text__fourth, {
            display: "block",
            duration: 0.1,
          })
          .to(this.$refs.info__div__outer__fourth, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__fourth, {opacity: 1, duration: 0.2});
        this.visibleFourth = !this.visibleFourth;
      }
    },
    handleOpenFifth: function () {
      const tl = gsap.timeline();

      if (this.visibleFifth === false) {
        tl.to(this.$refs.main__text__fifth, {opacity: 0, duration: 0.1})
          .to(this.$refs.fifth__arrow, {rotate: "0", duration: 0.2})
          .to(this.$refs.info__div__outer__fifth, {
            height: "100px",
            duration: 0.2,
          })
          .to(this.$refs.main__text__fifth, {display: "none", duration: 0.2});

        this.visibleFifth = !this.visibleFifth;
      } else {
        tl.to(this.$refs.fifth__arrow, {rotate: "180deg", duration: 0.2})
          .to(this.$refs.main__text__fifth, {display: "block", duration: 0.1})
          .to(this.$refs.info__div__outer__fifth, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__fifth, {opacity: 1, duration: 0.2});
        this.visibleFifth = !this.visibleFifth;
      }
    },
    handleOpenSixth: function () {
      const tl = gsap.timeline();

      if (this.visibleSixth === false) {
        tl.to(this.$refs.main__text__sixth, {opacity: 0, duration: 0.1})
          .to(this.$refs.sixth__arrow, {rotate: "0", duration: 0.2})
          .to(this.$refs.info__div__outer__sixth, {
            height: "100px",
            duration: 0.2,
          })
          .to(this.$refs.main__text__sixth, {display: "none", duration: 0.2});

        this.visibleSixth = !this.visibleSixth;
      } else {
        tl.to(this.$refs.sixth__arrow, {rotate: "180deg", duration: 0.2})
          .to(this.$refs.main__text__sixth, {display: "block", duration: 0.1})
          .to(this.$refs.info__div__outer__sixth, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__sixth, {opacity: 1, duration: 0.2});
        this.visibleSixth = !this.visibleSixth;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="../index.scss"></style>
