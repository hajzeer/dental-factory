<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Implanty i chirurgia</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">IMPLANTY I CHIRURGIA</h2>
        <div class="first__div">
          <p>
            Dzięki implantom uzupełnisz braki zębowe. Implanty to elementy w
            kształcie stożka, które zastępują korzeń zęba. Po umieszczeniu w
            kości osadzamy na nich korony i mosty protetyczne.
            <br />
            <br />
            Oferujemy też pełen zakres zabiegów z zakresu chirurgii
            stomatologicznej, w tym usuwanie ósemek, zębów zatrzymanych,
            resekcje. Dzięki zastosowaniu znieczulenia wszystkie zabiegi
            odbywają się całkowicie bezboleśnie.
          </p>
          <img src="/offer-img/implanty-zebowe-wroclaw.jpg" />
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Wszystko co musisz wiedzieć o implantach</h2>
          </div>
          <p>
            <span>
              Czym są implanty?
            </span>
            <br />
            Implanty to kilkumilimetrowe „śrubki” - elementy w kształcie stożka,
            wykonane z tytanu, umieszczane w kości. Mają za zadanie zastąpić
            utracony korzeń zęba. Po umieszczeniu w kości zrastają się z nią, a
            na nich możemy osadzić koronę protetyczną, most, albo protezę.
          </p>
          <ul>
            <li>
              <span>
                Za pomocą implantów możemy odbudować wszystkie braki zębów:
              </span>
            </li>
            <li>
              ~ brak jednego zęba
            </li>
            <li>
              ~ brak dwóch i więcej zębów
            </li>
            <li>
              ~ braki wszystkich zębów
            </li>
          </ul>
          <p>
            Możemy wszczepić tyle implantów, ile zębów Ci brakuje. Można też
            wszczepić mniejszą ilość implantów i wykonać na nich most. Jeśli
            brakuje Ci wszystkich zębów, możemy wykonać most oparty na kilku
            implantach, albo ruchomą protezę, która będzie się na nich stabilnie
            i mocno trzymać.
          </p>
          <p>
            <span>
              Jakie są zalety implantów
            </span>
            <br />
            Trwałość. Jeśli będziesz o nie odpowiednio dbać, mogą służyć nawet
            całe życie. Bezpieczeństwo. Nie wymagają ingerencji w sąsiednie
            zęby. Komfort. Funkcjonują jak Twoje własne zęby. Wygoda noszenia
            protez. Jeśli decydujesz się na protezę na implantach, możesz mieć
            pewność, że nie będzie się ona ruszać. Najlepsza estetyka, wymowa,
            jedzenie i odczuwanie smaków.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Czym jest chirurgia stomatologiczna?</h2>
          </div>

          <p>
            Chirurgia stomatologiczna to dział stomatologii zajmujący się
            leczeniem operacyjnym jamy ustnej. Jej celem jest eliminacja zakażeń
            w jamie ustnej, regeneracja kości przed leczeniem protetycznym,
            leczenie chorób przyzębia. Dotychczas zabiegi chirurgii
            stomatologicznej kojarzone były z bólem. Dziś, dzięki nowoczesnym
            znieczuleniom gwarantujemy całkowite zniesienie bólu, nawet w bardzo
            skomplikowanych zabiegach.
          </p>
          <p>
            <span
              >NAJCZĘŚCIEJ WYKONYWANE ZABIEGI CHIRURGII STOMATOLOGICZNEJ</span
            >
          </p>
          <ul>
            <li>
              ~ Ekstrakcje zębów (usunięcie zęba)
            </li>
            <li>
              ~ Usuwanie ósemek i zębów zatrzymanych
            </li>
            <li>
              ~ Resekcje wierzchołków korzeni zębów
            </li>
            <li>
              ~ Usuwanie torbieli
            </li>
            <li>
              ~ Usuwanie zmian w obrębie błony śluzowej jamy ustnej
            </li>
            <li>
              ~ Plastyka wędzidełek warg i języka
            </li>
          </ul>
          <p>
            <span>
              Nie widzisz zabiegu, którego potrzebujesz?
              <br />
              <br />
              Zadzwoń do nas. Są duże szanse, że go wykonujemy :)
            </span>
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
      </div>
      <Experts path="/specjalizacje/implany-i-chirurgia" />
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
    };
  },
  methods: {
    toTop: function () {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    },
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
