<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Szyny relaksacyjne</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">SZYNY RELAKSACYJNE I LECZENIE BRUKSIZMU</h2>
        <div class="first__div">
          <img src="/5.png" />
          <p>
            Cierpisz na przewlekłe bóle głowy, szczególnie poranne, albo bóle
            karku? Zaciskasz i ścierasz zęby, albo zgrzytasz zębami w nocy? Czy
            czujesz trzaski i przeskakiwania w stawach skroniowo-żuchwowych?
            <br />
            <br />
            Bruksizm określa patologiczne tarcie zębami żuchwy o zęby szczęki,
            występujący najczęściej w nocy (zgrzytanie zębami). Doprowadza do
            rozchwiania zębów w szczęce i żuchwie, starcia koron zębowych,
            pękania szkliwa, zmian – początkowo zapalnych, a następnie
            nieodwracalnych zniszczeń w stawach skroniowo-żuchwowych,
            prowadzących do ograniczenia ruchów w tych stawach. Bruksizm może
            doprowadzić do przewlekłego bólu głowy. Niezwykle ważne jest wczesne
            wykrycie tego zaburzenia i rozpoczęcie leczenia. Leczenie bruksizmu
            polega na odbudowie brakujących i zniszczonych zębów oraz leczeniu
            za pomocą szyn relaksacyjnych i botoksu.
          </p>
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer border__top__div">
          <div class="info__div__inner">
            <h2>Czym są szyny relaksacyjne?</h2>
          </div>
          <p>
            Szyny relaksacyjne to przezroczyste nakładki, wykonywane
            indywidualnie dla każdego pacjenta na podstawie wycisku zębów.
          </p>
          <p>
            Szyna taka zakładana jest najczęściej na noc, ale może być także
            noszona w ciągu dnia. Redukuje ona aktywność mięśni, relaksuje je i
            rozluźnia, przez co zmniejsza się napięcie, a tym samym znika
            zaciskanie zębów i zmniejszają się dolegliwości bólowe.
          </p>
        </div>
      </div>
      <Experts path="/specjalizacje/szyny-relaksacyjne" />
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
