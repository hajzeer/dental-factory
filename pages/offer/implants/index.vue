<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Implanty i chirurgia</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">IMPLANTY I CHIRURGIA</h2>
        <div class="first__div">
          <p>
            Dzięki implantom uzupełnisz braki zębowe. Implanty to elementy w
            kształcie stożka, które zastępują korzeń zęba. Po umieszczeniu w
            kości osadzamy na nich korony i mosty protetyczne.
            <br />
            <br />
            Oferujemy też pełen zakres zabiegów z zakresu chirurgii
            stomatologicznej, w tym usuwanie ósemek, zębów zatrzymanych,
            resekcje. Dzięki zastosowaniu znieczulenia wszystkie zabiegi
            odbywają się całkowicie bezboleśnie.
          </p>
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Wszystko co musisz wiedzieć o implantach</h2>
          </div>
          <p>
            <span>
              Czym są implanty?
            </span>
            <br />
            Implanty to kilkumilimetrowe „śrubki” - elementy w kształcie stożka,
            wykonane z tytanu, umieszczane w kości. Mają za zadanie zastąpić
            utracony korzeń zęba. Po umieszczeniu w kości zrastają się z nią, a
            na nich możemy osadzić koronę protetyczną, most, albo protezę.
          </p>
          <ul>
            <li>
              <span>
                Za pomocą implantów możemy odbudować wszystkie braki zębów:
              </span>
            </li>
            <li>
              ~ brak jednego zęba
            </li>
            <li>
              ~ brak dwóch i więcej zębów
            </li>
            <li>
              ~ braki wszystkich zębów
            </li>
          </ul>
          <p>
            Możemy wszczepić tyle implantów, ile zębów Ci brakuje. Można też
            wszczepić mniejszą ilość implantów i wykonać na nich most. Jeśli
            brakuje Ci wszystkich zębów, możemy wykonać most oparty na kilku
            implantach, albo ruchomą protezę, która będzie się na nich stabilnie
            i mocno trzymać.
          </p>

          <ul>
            <li>
              <span>
                Jakie są zalety implantów
              </span>
            </li>
            <li>
              ~ Trwałość - Jeśli będziesz o nie odpowiednio dbać, mogą służyć
              nawet całe życie.
            </li>
            <li>
              ~ Bezpieczeństwo - Nie wymagają ingerencji w sąsiednie zęby.
            </li>
            <li>
              ~ Komfort - Funkcjonują jak Twoje własne zęby.
            </li>
            <li>
              ~ Wygoda noszenia protez - Jeśli decydujesz się na protezę na
              implantach, możesz mieć pewność, że nie będzie się ona ruszać.
            </li>
            <li>
              ~ Najlepsza estetyka, wymowa, jedzenie i odczuwanie smaków.
            </li>
          </ul>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Czym jest chirurgia stomatologiczna?</h2>
          </div>

          <p>
            Chirurgia stomatologiczna to dział stomatologii zajmujący się
            leczeniem operacyjnym jamy ustnej. Jej celem jest eliminacja zakażeń
            w jamie ustnej, regeneracja kości przed leczeniem protetycznym,
            leczenie chorób przyzębia. Dotychczas zabiegi chirurgii
            stomatologicznej kojarzone były z bólem. Dziś, dzięki nowoczesnym
            znieczuleniom gwarantujemy całkowite zniesienie bólu, nawet w bardzo
            skomplikowanych zabiegach.
          </p>
          <p>
            <span
              >NAJCZĘŚCIEJ WYKONYWANE ZABIEGI CHIRURGII STOMATOLOGICZNEJ</span
            >
          </p>
          <ul>
            <li>
              ~ Ekstrakcje zębów (usunięcie zęba)
            </li>
            <li>
              ~ Usuwanie ósemek i zębów zatrzymanych
            </li>
            <li>
              ~ Resekcje wierzchołków korzeni zębów
            </li>
            <li>
              ~ Usuwanie torbieli
            </li>
            <li>
              ~ Usuwanie zmian w obrębie błony śluzowej jamy ustnej
            </li>
            <li>
              ~ Plastyka wędzidełek warg i języka
            </li>
          </ul>
          <p>
            <span>
              Nie widzisz zabiegu, którego potrzebujesz?
              <br />
              <br />
              Zadzwoń do nas. Są duże szanse, że go wykonujemy :)
            </span>
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
      </div>
      <Experts path="/specjalizacje/implany-i-chirurgia" />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/implany-i-chirurgia",
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
