<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Higienizacja</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">Higienizacja</h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
          <p>
            Doskonale wiemy, że lepiej zapobiegać, niż leczyć. Szczególną rolę
            przykładamy do regularnie wykonywanych zabiegów profilaktycznych.
            Mają one na celu wzmocnienie zębów i dziąseł oraz ich ochronę przed
            próchnicą i chorobami przyzębia - paradontozą.
            <br />
            <br />
            Polecamy zabieg kompleksowego oczyszczania zębów z kamienia
            nazębnego (skaling metodą EMS NO-PAIN), osadów i przebarwień
            (piaskowanie AIR-FLOW) oraz remineralizacji. W Dental Factory
            dysponujemy całą gamą rozwiązań dostosowanych do Twoich potrzeb i
            oczekiwań.
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
            Sterylny sprzęt, ulepszone środki ochrony osobistej i dużo więcej.
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
              TYLKO TE ZABIEGI, KTÓRYCH POTRZEBUJESZ
            </span>
          </p>
          <p>
            I najważniejsze... Nigdy nie polecimy Ci zabiegów, których nie
            potrzebujesz.
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
        <div ref="info__div__outer__third" class="info__div__outer">
          <div class="info__div__inner">
            <h2>Poznaj najczęściej wykonywane zabiegi</h2>
          </div>
          <OfferInfo path="/specjalizacje/higienizacja" />
        </div>
      </div>
      <Experts path="/specjalizacje/higienizacja" />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/higienizacja",
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
