<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Leczenie próchnicy</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">LECZENIE PRÓCHNICY</h2>
        <div class="first__div">
          <img src="/offer-img/leczenie-prochnicy-1.jpg" />
          <p>
            Domeną stomatologii zachowawczej jest leczenie skutów próchnicy -
            najbardziej rozpowszechnionej choroby zębów. Ząb, w którym powstał
            ubytek próchnicowy, sam się nie zregeneruje. Jedynym sposobem
            powstrzymania rozwoju próchnicy jest leczenie. Jednak jeśli
            wykryjemy ją odpowiednio wcześnie, leczenie może być jak najmniej
            inwazyjne.
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
              KOMFORT & LECZENIE BEZ BÓLU
            </span>
          </p>
          <p>
            Ultrawygodne fotele, które pozwolą Ci się odprężyć. Pacjentom
            bojącym się tradycyjnych znieczuleń proponujemy znieczulenie
            komputerowe WAND.
          </p>
          <p>
            <span>
              BEZPIECZEŃSTWO PRZEDE WSZYSTKIM
            </span>
          </p>
          <p>
            Sterylny sprzęt, ulepszone środki ochrony osobistej, najlepsze
            materiały.
          </p>
          <p>
            <span>
              WIĘCEJ WIDZIEĆ - LEPIEJ LECZYĆ
            </span>
          </p>
          <p>
            Mikroskop, lupy i kamery powiększające pozwalają nam dostrzec
            najmniejsze szczegóły.
          </p>
          <p>
            <span>
              JASNA POLITYKA CENOWA
            </span>
          </p>
          <p>
            Pełen plan leczenia, dzięki czemu nie zaskoczą Cię żadne dodatkowe
            koszty. Różne rozwiązania w zależności od Twoich oczekiwań i
            możliwości finansowych.
          </p>
          <p>
            <span>
              DBAMY O TWÓJ CZAS
            </span>
          </p>
          <p>
            Możliwość leczenia kilku zębów na jednej wizycie.
          </p>
          <p>
            <span>
              GWARANCJA NA LECZENIE
            </span>
          </p>
          <p>
            Jesteśmy pewni wysokiej jakości naszych usług, dlatego na leczenie
            otrzymujesz gwarancję.
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
          <div class="info__div__inner flex__inner">
            <img
              class="dental__caries__image"
              src="/offer-img/leczneie-prochnicy-2.jpg"
            />
            <h2>Poznaj metody leczenia ubytków</h2>
          </div>
          <OfferInfo path="/specjalizacje/leczenie-pruchnicy" />
        </div>
      </div>
      <Experts path="/specjalizacje/leczenie-pruchnicy" />
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
