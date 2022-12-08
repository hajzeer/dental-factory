<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Leczenie kanałowe</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">LECZENIE KANAŁOWE</h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
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
              UGRYZIEMY KAŻDY PROBLEM
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
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/leczenie-kanalowe",
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
