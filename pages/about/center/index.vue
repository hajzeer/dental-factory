<template>
  <div>
    <div class="title__nav__div">
      <p>O nas / O centrum</p>
    </div>
    <div>
      <h1 class="page__title">
        Witaj w Dental <br />
        Factory!
      </h1>
      <div class="container__inner">
        <div class="inner__info">
          <img
            class="about__image"
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />
          <p class="about__info__p">
            DENTAL FACTORY stworzyliśmy w samym centrum Wrocławia z myślą o
            Pacjentach szukających nowoczesnego i bezbolesnego leczenia
            stomatologicznego.
            <br /><br />
            Leczymy tak, jak sami chcielibyśmy być leczeni. Wykonujemy zabiegi z
            zakresu stomatologii estetycznej, protetyki, ortodoncji, leczenia
            kanałowego pod mikroskopem, implantów i chirurgii, stomatologii
            zachowawczej, profilaktyki. Naszym Pacjentom pomagamy też w nagłych
            sytuacjach, jak odklejona korona, ból zęba, złamana proteza.
            <br /><br />
            <span
              >Dbamy o Twój komfort. Stylowa poczekalnia, prasa, aromatyczna
              kawa i muzyka w tle pozwolą Ci zrelaksować się przed wizytą.</span
            >
          </p>
        </div>

        <div class="info__div__numbers" v-if="loading">
          <div v-for="(item, index) in infoNumbers">
            <h2 v-if="index === 2">
              {{ specialist.children.length }}
            </h2>
            <h2 v-else>{{ item.number }}</h2>
            <div>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <p>
            POCZEKAJ, LICZYMY PACJĘTÓW :)
          </p>
        </div>
        <h2 class="page__title__smaller">
          W trosce o Twój <br />
          komfort
        </h2>
        <div class="inner__info__second">
          <div>
            <img
              class="about__image__second"
              v-if="loading && ImgArray.images[1] !== undefined"
              :src="ImgArray.images[1].url"
            />
            <p class="last__about__p desktopView">
              Jesteśmy świadomi tego, jak leczymy, dlatego dajemy Ci gwarancję.
              Większość zabiegów objęta jest gwarancją o przedłużonym terminie.
            </p>
          </div>
          <div class="inner__info__div">
            <p>
              Robimy wszystko, aby leczenie przebiegło dla Ciebie sprawnie i
              komfortowo!
              <br /><br />
              Więcej widzieć znaczy lepiej leczyć! Niezbędne zdjęcia RTG
              wykonasz u nas na miejscu. Gabinety wyposażyliśmy w cyfrowe
              aparaty RTG, kamery wewnątrzustne, lupy i mikroskop, które
              pozwalają nam pracować dokładniej.
              <br /><br />
              Przed rozpoczęciem leczenia otrzymasz od nas pełen plan i
              kosztorys leczenia, dopasowany do Twoich potrzeb, oczekiwań i
              możliwości finansowych. Leczenie możesz sfinansować, korzystając z
              wygodnych MediRat.
            </p>

            <NuxtLink class="links" to="/about/start">
              <button>
                <p>
                  Dowiedz się jak wygląda <br />
                  pierwsza wizyta
                </p>
                <img src="/Path 25.svg" />
              </button>
            </NuxtLink>
            <NuxtLink class="links" to="/price/mediraty">
              <button>
                <p>
                  Poznaj szczegóły <br />
                  leczenia na raty!
                </p>
                <img src="/Path 25.svg" />
              </button>
            </NuxtLink>
            <p class="last__about__p mobileView">
              Jesteśmy świadomi tego, jak leczymy, dlatego dajemy Ci gwarancję.
              Większość zabiegów objęta jest gwarancją o przedłużonym terminie.
            </p>
          </div>
        </div>
      </div>

      <div class="carousel">
        <div class="carousel__content">
          <span class="outline"
            >Tu zaczyna się Twój zdrowy i piękny uśmiech!</span
          >
          <span class="outline"
            >Tu zaczyna się Twój zdrowy i piękny uśmiech!</span
          >
          <span class="outline desktop"
            >Tu zaczyna się Twój zdrowy i piękny uśmiech!</span
          >
          <span class="outline desktop"
            >Tu zaczyna się Twój zdrowy i piękny uśmiech!</span
          >
        </div>
      </div>
      <Team />
    </div>
  </div>
</template>

<script>
import { getData } from "~/lib/graph/get-data";
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      specialist: [],
      loading: false,
      infoNumbers: [
        { number: 4, text: "Nowoczesne gabinety" },
        { number: new Date().getFullYear() - 2015, text: "Lat na rynku" },
        { number: 5, text: "Doświadczonych lekarzy" },
        { number: "6000+", text: "Zadowolonych pacjentów" },
      ],
      path: "/o-nas/centrum",
      ImgArray: [],
    };
  },
  async fetch() {
    const data = await getData({
      query: `query GET_ALL_CATALOGUE_ITEMS {
        catalogue(language: "en", path: "/specialists") {
            children {
              name
            }
  }
}
`,
    });

    const dataImages = await simplyFetchFromGraph({
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

    this.specialist = data.data.catalogue;
    this.ImgArray = dataImages.data.catalogue.components[0].content;
    if (this.specialist !== null && this.ImgArray !== null) {
      this.loading = true;
    }
  },
  mounted() {
    if (this.loading) console.log(this.ImgArray);
  },
};
</script>

<style scoped lang="scss">
.inner__info__div {
  @media (min-width: 1024px) {
    width: 35%;
    margin-left: 100px;
  }
}

.title__nav__div {
  border-bottom: 1px solid #000000;
  padding: 20px 0 0 0;
}

.container__inner {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 20px;
    border: 2px solid #000000;
  }
}

.inner__info {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
  }
}

.inner__info__second {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;

    div {
      width: 50%;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}

h1,
h2 {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  margin: 0 20px;
  align-self: flex-start;
  justify-self: flex-start;
}

.about__image {
  width: 90%;

  @media (min-width: 1024px) {
    width: 30%;
    margin-bottom: 100px;
  }
}

.about__image__second {
  width: 90%;

  @media (min-width: 1024px) {
    width: 640px;
    margin-top: 20px;
    margin-right: 100px;
  }
}

.info__div__numbers {
  background: #041b8d;
  color: #ffffff !important;
  width: 100%;
  padding-bottom: 30px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  div {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      width: 95%;
      font-size: 65px;
      font-weight: 600;
      position: relative;
      top: 40px;

      @media (min-width: 1480px) {
        margin-left: 100px;
      }
    }

    div {
      border: 3px solid #ffffff;
      border-radius: 15px;
      text-align: center;
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 100px;
    padding-top: 0;
    margin-bottom: 50px;

    div {
      width: 50%;

      h2 {
        position: relative;
        left: 100px;
        top: 50px;
        font-size: 80px;
      }

      div {
        width: 600px;
        font-size: 25px;
      }
    }
  }
}

.about__info__p {
  @media (min-width: 1024px) {
    width: 40%;
  }
}

a {
  text-decoration: none;
}

.links {
  width: 100%;
}

button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  margin: 15px;
  width: 90%;
  height: 53px;
  background: #b4f2cb;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 16px;
  color: #000000;
  position: relative;
  transition: all 0.2s ease-out;
  overflow: hidden;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: all 0.2s ease-out;
    background: #000000;
    z-index: 1;
  }

  img {
    position: absolute;
    right: 15px;
    transition: all 0.2s ease-out;
    transition-delay: 0.05s;
    border: none !important;
  }

  p {
    transition: all 0.2s ease-out;
    z-index: 9;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover > img {
    transform: translateX(40px);
  }

  &:hover > p {
    color: #b4f2cb;
  }

  &:hover:after {
    transform: translateX(100%);
  }

  @media (min-width: 1024px) {
    height: 70px;
    margin-top: 40px;
    border-radius: 20px;
  }
}

p {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 20px;

  span {
    font-weight: 900;
  }
}

.carousel {
  width: 100%;
  height: 50px;
  overflow: hidden;

  @media (min-width: 1024px) {
    margin-bottom: 50px;
  }
}

.carousel__content {
  height: 100%;
  display: flex;
  animation: scrolling 10s linear infinite;

  @media (min-width: 1024px) {
    animation: scrollingDesktop 5s linear infinite;
  }
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-280vw);
  }
}

@keyframes scrollingDesktop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-72vw);
  }
}

.carousel__content span {
  flex-shrink: 0;
  white-space: nowrap;
}

.outline {
  color: transparent;
  width: 280vw;
  -webkit-text-stroke: 2px #000000;
  text-stroke: 2px #ffffff;
  text-shadow: none;
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    width: 72vw;
  }
}

.info__div {
  width: 100%;
  height: auto;
  background: #041b8d;

  font-family: termina, sans-serif;
  font-style: normal;
}

.page__title {
  @media (min-width: 1024px) {
    margin-top: 40px;
    font-size: 100px;
    line-height: 110px;
    margin-left: 120px;
  }
}

.page__title__smaller {
  @media (min-width: 1024px) {
    width: 60%;
    margin-top: 40px;
    font-size: 70px;
    line-height: 75px;
    margin-left: 120px;
  }
}

.last__about__p {
  @media (min-width: 1024px) {
    width: 80%;
    margin-bottom: 100px;
  }
}

.desktopView {
  display: none;

  @media (min-width: 1024px) {
    display: inline;
  }
}

.mobileView {
  @media (min-width: 1024px) {
    display: none;
  }
}

.desktop {
  @media (max-width: 1024px) {
    display: none;
  }
}
</style>
