<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Korony i mosty</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">KORONY I MOSTY</h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />

          <p>
            Chcesz uzupełnić brakujące zęby, albo wzmocnić i poprawić wygląd
            zębów osłabionych? Najlepszym rozwiązaniem będą korony i mosty
            protetyczne.
            <br />
            <br />
            Korona przypomina „czapeczkę” nakładaną na zęba. To odbudowa na
            stałe zacementowana na oszlifowanym zębie albo implancie. Odtwarza
            jego naturalny wygląd, wzmacnia go, poprawia jego wielkość, kształt
            i kolor.
            <br />
            <br />
            Mosty protetyczne to złożone - „połączone” ze sobą korony. Dzięki
            nim możemy uzupełnić brakujący ząb lub zęby. Składają się z przęsła,
            które odbudowuje brakujące zęby oraz filarów - oszlifowanych zębów,
            które służą do podtrzymania mostu.
          </p>
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer border__top__div">
          <div class="info__div__inner">
            <h2>Wszystko, co musisz wiedzieć o koronach i mostach</h2>
          </div>
          <p>
            <span>
              Kiedy wykonujemy korony protetyczne?
            </span>
          </p>
          <ul>
            <li>
              ~ jeśli chcesz wzmocnić zęby mocno zniszczone, z dużymi
              wypełnieniami (plombami), z rozległą próchnicą
            </li>
            <li>
              ~ odbudować starte zęby ~ poprawić wygląd Twoich zębów
            </li>
            <li>
              ~ wzmocnić zęby po leczeniu kanałowym
            </li>
          </ul>
          <p>
            <span>
              Kiedy wykonujemy mosty?
            </span>
          </p>
          <ul>
            <li>
              ~ gdy brakuje Ci jednego lub kilku zębów
            </li>
            <li>
              ~ jeśli nie chcesz nosić wyjmowanej protezy
            </li>
            <li>
              ~ kiedy nie ma warunków do wszczepienia implantów lub ich nie
              akceptujesz
            </li>
          </ul>
          <p>
            <span>
              Jak powstają Twoje korony i mosty?
            </span>
          </p>
          <p>
            Aby wykonać korony i mosty, musimy ząb oszlifować - zmniejszyć go z
            każdej strony. Jest to zabieg zupełnie bezbolesny, wykonywany w
            znieczuleniu. Następnie pobieramy skany Twoich zębów i wykonujemy
            korony tymczasowe. Nigdy nie opuścisz gabinetu „bez zębów”.
          </p>
          <p>
            Na wykonanie koron i mostów najczęściej potrzebujemy dwie wizyty. W
            przypadku złożonych prac konieczne są dodatkowe wizyty, aby
            przymierzyć poszczególne elementy.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Komputerowe projektowanie koron i mostów</h2>
          </div>
          <p>
            Nie pobieramy tradycyjnych wycisków. Wszystkie korony i mosty
            wykonujemy w technologii CAD-CAM - są projektowane w oprogramowaniu
            3D, a następnie wycinane w specjalnych frezarkach z ceramicznych
            bloczków i indywidualnie charakteryzowane.
          </p>
          <p>
            <span>
              Co daje nam skan i technologia CAD-CAM?
            </span>
          </p>
          <ul>
            <li>
              ~ precyzja
            </li>
            <li>
              ~ idealne dopasowanie
            </li>
            <li>
              ~ szczelność
            </li>
            <li>
              ~ krótszy czas wykonania koron i mostów
            </li>
            <li>
              ~ wizualizacja ostatecznego efektu zanim przystąpimy do
              jakichkolwiek prac
            </li>
          </ul>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Co nas wyróżnia?</h2>
          </div>
          <p>
            <span>
              GWARANCJA NA LECZENIE
            </span>
            <br />
            Porcelana jest równie piękna, co wytrzymała. Na wykonane korony i
            mosty dajemy Ci gwarancję. Mogą Ci służyć nawet przez 15 lat, jeśli
            będziesz o nie odpowiednio dbać. Udzielimy Ci wszelkich porad
            dotyczących pielęgnacji zębów.
          </p>
          <p>
            <span>
              STOMATOLOGIA CYFROWA ZAMIAST WYCISKU
            </span>
            <br />
            Nie wykonujemy tradycyjnych wycisków. Cyfrowy skan zębów pozwala nam
            stworzyć model 3D Twojego nowego uśmiechu. Laboratorium projektuje i
            frezuje - wycina Twoje korony. Następnie są ręcznie barwione, aby
            uzyskać naturalne detale. Dzięki temu ostateczne korony są
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
              KONSULTACJA ON-LINE
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
              KORONY TYMCZASOWE
            </span>
            <br />
            Korony tymczasowe pozwalają przetestować nowy uśmiech z przyjaciółmi
            i rodziną. Dopiero po Twojej akceptacji cementujemy na stałe korony
            ostateczne.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Wybierz najlepsze korony i mosty dla Ciebie!</h2>
          </div>
          <OfferInfo path="/specjalizacje/korony-i-mosty" />
        </div>
      </div>
      <Experts path="/specjalizacje/korony-i-mosty" />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/korony-i-mosty",
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
