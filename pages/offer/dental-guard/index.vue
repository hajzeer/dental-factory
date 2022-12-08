<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Szyny relaksacyjne</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">SZYNY RELAKSACYJNE I LECZENIE BRUKSIZMU</h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
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
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/szyny-relaksacyjne",
      loading: false,
      ImgArray: [],
    };
  },

  async fetch() {
    const data = await simplyFetchFromGraph({
      query: `query IMAGES__GETTER($specPath: String!) {
  catalogue(language: "en", path: $specPath) {
      name
      ...on Folder {
        components {
          content {
\t\t\t\t\t...on ImageContent {
            images {
              url
            }
          }
          }
        }
      }
    }
  }
`,
      variables: {
        specPath: this.path,
      },
    });

    this.ImgArray = data.data.catalogue.components[2].content;

    if (this.ImgArray !== null) {
      this.loading = true;
    }
  },
  mounted() {
    if (this.loading) console.log(this.ImgArray);
  },
};
</script>

<style scoped lang="scss" src="../index.scss"></style>
