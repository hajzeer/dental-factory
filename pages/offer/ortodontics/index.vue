<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Ortodoncja</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">ORTODONCJA</h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
          <div>
            <ul>
              <li>
                ~ Leczymy dorosłych i dzieci
              </li>
              <li>
                ~ Aparaty stałe klasyczne i estetyczne
              </li>
              <li>
                ~ Aparaty ruchome dla dzieci
              </li>
              <li>
                ~ Leczenie nakładkami Invisalign
              </li>
            </ul>
            <p>
              Ortodoncja to dziedzina stomatologii zajmująca się leczeniem wad
              zgryzu. Aparat na zęby służy do przywracania właściwego ustawienia
              zębów w łuku oraz kontaktów między zębami górnymi i dolnymi.
              Leczenie ortodontyczne możemy przeprowadzić w każdym wieku.
              <br />
              <br />
              Czasami może być konieczne nawet w podeszłym wieku, aby móc
              wykonać protezy i mosty protetyczne. Jednym z najnowszych aparatów
              dostępnych na rynku jest Invisalign. Zęby są przesuwane za pomocą
              przezroczystych, praktycznie niewidocznych indywidualnych
              nakładek. Aparat taki można zdejmować do posiłków, mycia zębów i
              podczas ważnych spotkań.
            </p>
          </div>
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Co nas wyróżnia?</h2>
          </div>
          <p>
            <span>
              KOMFORT & LECZENIE BEZ BÓLU
            </span>
            <br />
            Ultrawygodne fotele, które pozwolą Ci się odprężyć. Pacjentom
            bojącym się tradycyjnych znieczuleń proponujemy znieczulenie
            komputerowe WAND.
          </p>
          <p>
            <span>
              ESTETYCZNE PODEJŚCIE
            </span>
            <br />
            Zdajemy sobie sprawę, że najważniejszy jest dla Ciebie ostateczny
            efekt, dlatego zawsze dbamy o to, żeby był on estetyczny i trwały.
          </p>
          <p>
            <span>
              UGRYZIEMY KAŻDY PROBLEM
            </span>
            <br />
            Nie boimy się trudnych przypadków. Nasze doświadczenie i liczne
            szkolenia dają Ci gwarancję satysfakcjonującego efektu. W DENTAL
            FACTORY zebraliśmy lekarzy wszystkich dziedzin stomatologii, dzięki
            czemu całe leczenie przeprowadzisz u nas na miejscu.
          </p>
          <p>
            <span>
              DAJEMY CI WYBÓR
            </span>
            <br />
            Przed rozpoczęciem leczenia otrzymasz od nas pełen plan leczenia w
            kilku wariantach, różniących się estetyką, czasem trwania leczenia i
            ceną.
          </p>
          <p>
            <span>
              JASNA POLITYKA CENOWA
            </span>
            <br />
            Przed rozpoczęciem leczenia otrzymasz od nas pełen kosztorys. Dzięki
            temu nie zaskoczą Cię w trakcie leczenia dodatkowe koszty. Poznasz
            też możliwości leczenia ratalnego.
          </p>
          <p>
            <span>
              CYFROWA ORTODONCJA
            </span>
            <br />
            Nie wykonujemy tradycyjnych wycisków, których pacjenci tak bardzo
            nie lubią. Dzięki skanerom 3D mamy możliwość wykonania skanu Twoich
            zębów i przygotowania wizualizacji Twojego przyszłego uśmiechu.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <div>
              <h2>
                Nakładki Invisalign <br />
                niewidoczny aparat ortodontyczny
              </h2>
            </div>

            <p>
              Marzą Ci się proste zęby, ale nie chcesz nosić stałego aparatu
              ortodontycznego? Najlepszym rozwiązaniem będą przezroczyste
              nakładki ortodontyczne Invisalign.
            </p>
            <img
              v-if="loading && ImgArray.images[1] !== undefined"
              :src="ImgArray.images[1].url"
            />

            <h3>
              Co zyskujesz?
            </h3>
            <ul>
              <li>
                ~ Niewidoczna korekta zgryzu
              </li>
              <li>
                ~ Bez zamków, drutów i pierścieni
              </li>
              <li>
                ~ Mniejsza ilość wizyt
              </li>
              <li>
                ~ Optymalny czas leczenia
              </li>
              <li>
                ~ Jasna polityka cenowa bez ukrytych kosztów
              </li>
            </ul>
            <p>
              Invisalign to jedna z najnowszych metod leczenia ortodontycznego.
              To przezroczyste nakładki, wykonywane indywidualnie na podstawie
              dokładnych skanów Twoich zębów. Aby leczenie było skuteczne,
              trzeba nosić je minimum 22 godziny na dobę. Możesz je zdejmować
              podczas posiłków, czy ważnych spotkań.
            </p>
            <h3>
              Czym różni się Invisalign od zwykłego aparatu?
            </h3>
            <p>
              <span>
                CZAS LECZENIA
              </span>
              <br />
              Leczenie jest krótsze, w przypadku małych wad zgryzu wystarczy
              tylko kilka miesięcy.
            </p>
            <p>
              <span>
                ESTETYKA
              </span>
              <br />
              Cienkie, niewidoczne, przezroczyste nakładki. Brak jakichkolwiek
              metalowych łuków, zamków, haczyków.
            </p>
            <p>
              <span>
                KOMFORT LECZENIA
              </span>
              <br />
              Nakładki możesz zdjąć podczas jedzenia, mycia zębów i ważnych
              spotkań.
            </p>
            <p>
              <span>
                MNIEJSZE RYZYKO PRÓCHNICY
              </span>
              <br />
              Dzięki łatwiejszej higienie ryzyko odkładania płytki nazębnej i
              próchnicy jest dużo mniejsze.
            </p>
            <p>
              <span>
                MNIEJ AWARII
              </span>
              <br />
              Nakładki możesz wymieniać samodzielnie co 2 tygodnie. Są
              praktycznie bezawaryjne.
            </p>
          </div>
        </div>
      </div>
      <Experts path="/specjalizacje/ortodoncja" />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/ortodoncja",
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

<style lang="scss" scoped src="../index.scss"></style>
