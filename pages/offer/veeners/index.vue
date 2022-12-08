<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Licówki porcelanowe</p></div>
    <div class="inner">
      <h2 class="page__title">LICÓWKI PORCELANOWE WE WROCŁAWIU</h2>
      <div class="first__div">
        <img
          v-if="loading && ImgArray.images[0] !== undefined"
          :src="ImgArray.images[0].url"
        />
        <p>
          Chcesz poprawić estetykę swojego uśmiechu? Licówki porcelanowe,
          przyklejone na przednią powierzchnię zębów, nadają im zupełnie nowy
          kształt i kolor.
          <br />
          <br />
          Licówki porcelanowe to bardzo cienkie płatki porcelany. Dzięki nim
          możemy zapewnić Ci słynny "holywoodzki uśmiech". Są doskonałym
          rozwiązaniem dla pacjentów, którzy mają zdrowe zęby, ale są
          niezadowoleni z ich wyglądu.
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
      <img
        v-if="loading && ImgArray.images[1] !== undefined"
        :src="ImgArray.images[1].url"
      />
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
              STOMATOLOGIA CYFROWA - SKAN ZAMIAST WYCISKU
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
              DBAMY O TWÓJ KOMFORT
            </span>
            <br />
            Robimy wszystko, aby leczenie przebiegło dla Ciebie w sposób
            komfortowy!
          </p>
          <p>
            <span>
              DARMOWA KONSULTACJA ON-LINE
            </span>
            <br />
            Poznaj plan, harmonogram i całkowity koszt leczenia bez wychodzenia
            z domu!
          </p>
          <p>
            <span>
              PROJEKTOWANIE UŚMIECHU
            </span>
            <br />
            Zobacz swój uśmiech zanim wykonamy jakiekolwiek zabiegi!
          </p>
          <p>
            <span>
              LICÓWKI TYMCZASOWE
            </span>
            <br />
            Licówki tymczasowe pozwalają przetestować nowy uśmiech z
            przyjaciółmi i rodziną. Dopiero po Twojej akceptacji cementujemy na
            stałe licówki ostateczne.
          </p>
          <img
            v-if="loading && ImgArray.images[2] !== undefined"
            :src="ImgArray.images[2].url"
          />
        </div>
      </div>
      <Experts path="/specjalizacje/licowki-porcelanowe" />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/licowki-porcelanowe",
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
