<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / RTG i Tomografia zębów</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">RTG I TOMOGRAFIA ZĘBÓW</h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
          <p>
            Dobra diagnostyka jest podstawą dalszego leczenia. W Dental Factory
            wykorzystujemy wyłącznie cyfrowe aparaty RTG, które ograniczają
            promieniowanie rentgenowskie do minimum, a jednocześnie dają bardzo
            wyraźne i precyzyjne zdjęcia. Umożliwia nam to dokładną ocenę stanu
            Twojej jamy ustnej i dobór odpowiedniego leczenia.
            <br />
            <br />
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
          <img
            v-if="loading && ImgArray.images[1] !== undefined"
            :src="ImgArray.images[1].url"
          />
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
          <img
            v-if="loading && ImgArray.images[2] !== undefined"
            :src="ImgArray.images[2].url"
          />
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
          <img
            v-if="loading && ImgArray.images[3] !== undefined"
            :src="ImgArray.images[3].url"
          />

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
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/rtg-i-tomografia-zebow",
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
};
</script>

<style scoped lang="scss" src="../index.scss"></style>
