<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Protezy zębowe</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">Protezy zębowe</h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
          <p>
            Protezy uzupełniają brakujące zęby pacjenta. Mogą być wyjmowane i
            ponownie umieszczane w jamie ustnej. Poprawiają wygląd twarzy,
            mówienie, przywracają funkcję gryzienia pokarmów.
            <br />
            <br />
            Najczęściej służą do uzupełnienia rozległych braków zębów. Stosowane
            są także, kiedy wykonanie mostów jest niemożliwe (ze względu na
            zanik kości, rozchwianie zębów).
            <br />
            <br />
            Składają się z płyty, która znajduje się od wewnętrznej strony
            języka i na podniebieniu, umieszczonych w niej zębów i klamer, które
            trzymają protezę na sąsiednich zębach.
          </p>
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Wszystko co musisz wiedzieć o protezach</h2>
          </div>
          <p>
            <span>
              Kiedy wykonujemy protezy zębowe?
            </span>
            <br />
            Protezy będą najlepszym rozwiązaniem, jeśli brakuje Ci wielu zębów,
            a także kiedy:
          </p>
          <ul>
            <li>
              ~ nie chcesz szlifować własnych zębów pod mosty
            </li>
            <li>
              ~ nie ma możliwości wykonania implantów, albo ich nie akceptujesz
            </li>
            <li>
              ~ szukasz ekonomicznych rozwiązań
            </li>
          </ul>

          <ul>
            <li>
              <span>
                Jakie są korzyści ze stosowania protez zębowych?
              </span>
            </li>
            <li>
              ~ naśladują naturalne zęby
            </li>
            <li>
              ~ poprawiają estetykę uśmiechu
            </li>
            <li>
              ~ poprawiają rysy twarzy
            </li>
            <li>
              ~ zapobiegają zanikowi kości
            </li>
            <li>
              ~ pozwalają gryźć pokarmy
            </li>
            <li>
              ~ poprawiają wymowę
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
            Na wykonane protezy zębowe dajemy Ci gwarancję. Dobrze pielęgnowane
            mogą służyć wiele lat. Udzielimy Ci wszelkich porad dotyczących
            pielęgnacji zębów i protez. Artykuły niezbędne do pielęgnacji możesz
            kupić u nas na miejscu.
          </p>
          <br />
          <br />
          <p>
            <span>
              CZAS LECZENIA
            </span>
            <br />
            Do wykonania protez potrzebne są najczęściej cztery wizyty. Całość
            zajmuje około dwóch tygodni.
          </p>
          <br />
          <br />

          <p>
            <span>
              JASNA POLITYKA CENOWA
            </span>
            <br />
            Przed rozpoczęciem leczenia otrzymasz od nas pełen kosztorys.
            Wyciski, wizyty próbne i kontrolne wliczone są w cenę protezy. Nie
            ponosisz żadnych dodatkowych kosztów!
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Wybierz protezy najlepsze dla Ciebie</h2>
          </div>
          <OfferInfo path="/specjalizacje/protezy-zebowe" />
        </div>
      </div>
      <Experts path="/specjalizacje/protezy-zebowe" />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/protezy-zebowe",
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
