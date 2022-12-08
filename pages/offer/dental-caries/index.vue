<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Leczenie próchnicy</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">LECZENIE PRÓCHNICY</h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
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
              v-if="loading && ImgArray.images[0] !== undefined"
              :src="ImgArray.images[1].url"
            />
            <h2>Poznaj metody leczenia ubytków</h2>
          </div>
          <OfferInfo path="/specjalizacje/leczenie-prochnicy" />
        </div>
      </div>
      <Experts path="/specjalizacje/leczenie-prochnicy" />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/leczenie-prochnicy",
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
