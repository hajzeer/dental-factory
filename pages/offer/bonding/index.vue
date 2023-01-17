<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Bonding</p></div>
    <div class="inner">
      <h2 class="page__title">BONDING KOMPOZYTOWY WE WROCŁAWIU</h2>
      <div class="first__div">
        <img
          v-if="loading && ImgArray.images[0] !== undefined"
          :src="ImgArray.images[0].url"
        />
        <p>
          Metamorfoza uśmiechu bez ingerencji w zęby!
          <br />
          <br />
          Polega na pokryciu zęba cienką warstwą kompozytu w celu poprawy
          kształtu, koloru, wzmocnienia, zamaskowania pęknięć i przebarwień na
          szkliwie. Bonding to ostatnio najpopularniejszy zabieg stomatologii
          estetycznej. Polega na odbudowie zewnętrznej powierzchni zęba za
          pomocą żywic kompozytowych. Nazwa bonding pochodzi od słowa "bond" -
          materiału, który łączy kompozyt (materiał podobny do tego, z którego
          wykonywane są wypełnienia "plomby") z powierzchnią zęba. Pozwala na
          poprawę wyglądu zębów w ciągu jednej wizyty w gabinecie, bez
          konieczności szlifowania szkliwa. Daje bardzo dobry efekt estetyczny,
          jest bezpieczny i niedrogi, w porównaniu do licówek porcelanowych.
          Bonding jest idealnym rozwiązaniem dla osób, które chcą poprawić
          wygląd swoich zębów, ale obawiają się ingerencji w szkliwo.
        </p>
      </div>
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Wszystko, co musisz wiedzieć o bondingu kompozytowym</h2>
          </div>
          <ul>
            <li>
              <span>
                Co możemy poprawić za pomocą bondingu?
              </span>
            </li>
            <li>
              ~ kształt
            </li>
            <li>
              ~ kolor
            </li>
            <li>
              ~ ustawienie zębów
            </li>
            <li>
              ~ odbudować zęby starte, złamane, pokruszone
            </li>
            <li>
              ~ zamknąć przerwy - diastemy między zębami
            </li>
            <li>
              ~ wzmocnić cienkie szkliwo zębów
            </li>
            <li>
              ~ zakryć nieestetyczne wypełnienia (plomby) na zębach
            </li>
          </ul>
          <ul>
            <li>
              <span>
                Jakie są zalety bondingu?
              </span>
            </li>
            <li>
              ~ nie narusza szkliwa zębów, nie wymaga szlifowania
            </li>
            <li>
              ~ całkowicie odwracalny
            </li>
            <li>
              ~ krótki czas wykonania
            </li>
            <li>
              ~ trwałość nawet do 5 lat
            </li>
            <li>
              ~ dobry efetkt estetyczny przy mniejszych nakładach finansowych
            </li>
            <li>
              ~ idealny dla osób, które chcą poprawić wygląd uśmiechu, ale
              obawiają się ingerencji w zęby
            </li>
            <li>
              ~ bonding kompozytowy może być również wykonany jako metamorfoza
              na próbę przed założeniem ostatecznych licówek porcelanowych
            </li>
            <li>
              ~ często jest też alternatywą dla ortodoncji, gdy pacjent oczekuje
              poprawy uśmiechu, a nie chce zakładać aparatu ortodontycznego.
            </li>
          </ul>
          <img src="/offer-img/bonding-dental-factory.jpg" />
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Co nas wyróżnia?</h2>
          </div>
          <p>
            <span>GWARANCJA NA LECZENIE</span>
            <br />
            Na wykonane bondingi dajemy Ci gwarancję. Mogą służyć przez wiele
            lat, jeśli będziesz o nie odpowiednio dbać. Udzielimy Ci wszelkich
            porad dotyczących pielęgnacji zębów z bondingami, dzięki czemu
            będziesz się cieszyć swoim uśmiechem przez długi czas!
          </p>
          <p>
            <span>STOMATOLOGIA CYFROWA - SKAN ZAMIAST WYCISKU!</span>
            <br />
            Nie wykonujemy tradycyjnych wycisków. Cyfrowy skan zębów pozwala nam
            stworzyć model 3D Twojego nowego uśmiechu! Dzięki niemu możesz
            zobaczyć swój nowy uśmiech, zanim wykonamy jakiekolwiek zabiegi.
          </p>
          <p>
            <span>DBAMY O TWÓJ KOMFORT</span>
            <br />
            Robimy wszystko, aby leczenie przebiegło dla Ciebie w sposób
            komfortowy!
          </p>
          <p>
            <span>KONSULTACJA ON-LINE</span>
            <br />
            Poznaj plan, harmonogram i całkowity koszt leczenia bez wychodzenia
            z domu
          </p>
          <p>
            <span>PROJEKTOWANIE UŚMIECHU</span>
            <br />
            Zobacz swój uśmiech zanim wykonamy jakiekolwiek zabiegi
          </p>
        </div>
      </div>
      <Experts path="/specjalizacje/bonding" />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/specjalizacje/bonding",
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
