<template>
  <div>
    <div class="hero__div">
      <div class="hero__image">
        <h2 class="hero__image__title">
          Twój uśmiech, <br />
          twoje story.
        </h2>
      </div>
      <div>
        <h2 class="hero__image__title-desktop">
          Twój uśmiech, <br />
          twoje story.
        </h2>
        <NuxtLink to="/online">
          <button class="active__button">
            <p>
              Umów się na konsultacje
            </p>
          </button>
        </NuxtLink>
      </div>
    </div>
    <div class="description__div">
      <h3 class="desc__title">
        Dlaczego zaufało nam już ponad 4 tysiące Pacjentów?
      </h3>
      <p class="paragraph__span">
        Cieszymy się, że jesteś! Leczymy tak, jak sami chcielibyśmy być leczeni.
        To sprawia, że Pacjenci do nas wracają.
      </p>
      <p class="paragraph__margin__bottom">
        <br />
        DENTAL FACTORY stworzyliśmy w samym centrum Wrocławia z myślą o
        Pacjentach szukających nowoczesnego i bezbolesnego leczenia
        stomatologicznego. Wykonujemy zabiegi z zakresu stomatologii estetycznej
        (wybielanie zębów, licówki i bondingi) i protetyki, leczenia kanałowego
        pod mikroskopem, implantów i chirurgii, stomatologii zachowawczej,
        profilaktyki. Naszym Pacjentom pomagamy też w nagłych sytuacjach, jak
        odklejona korona, ból zęba, złamana proteza.
        <br /><br />
        <span>
          Zapraszamy do miejsca, gdzie w centrum uwagi jesteś Ty i Twój uśmiech!
        </span>
      </p>

      <button class="scroll__btn" @click="toTop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 28.354 13.425"
        >
          <g id="first__arrow">
            <path
              id="Path_50"
              data-name="Path 50"
              d="M54.99,2025.125l-10.709,13.163,10.709,12.373"
              transform="translate(2052.073 -42.976) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="2"
            />
          </g>
          <g id="second__arrow">
            <path
              id="Path_50"
              data-name="Path 50"
              d="M54.99,2025.125l-10.709,13.163,10.709,12.373"
              transform="translate(2052.073 -42.976) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </button>
    </div>
    <div class="info__div">
      <div class="info__div__outer">
        <div class="info__div__inner">
          <h2>Co nas wyróżnia?</h2>
        </div>
        <p>
          Skupiamy się na tym, co dla Ciebie ważne! Proponujemy Ci wyłącznie te
          zabiegi, których potrzebujesz. Nigdy nie zaproponujemy Ci leczenia,
          które byłoby niepotrzebne, albo nieskuteczne.
          <br />
          <br />
          <span>#kompleksowość leczenia</span> Oferujemy pełną gamę usług
          stomatologicznych oraz pełną diagnostykę RTG i TK.
          <br />
          <br />
          <span>#bezbólu</span> Zamiast tradycyjnej strzykawki i igły
          znieczulamy komputerowo, za pomocą systemu The Wand.
          <br />
          <br />
          <span>#czas</span> Gwarantujemy optymalny czas leczenia. Zapraszamy,
          jeśli jesteś przejazdem na kilka dni lub możesz przeznaczyć na
          leczenie dłuższy czas.
          <br />
          <br />
          <span>#atmosfera</span> Nowoczesne, przytulne wnętrza, doskonała kawa
          i herbata, prasa, relaksująca muzyka w tle i aromatyzowane wnętrza
          pozwolą Ci zrelaksować się przed wizytą.
          <br />
          <br />
          <span>#gwarancja</span> Jesteśmy świadomi jakości naszych usług,
          dlatego dajemy Ci gwarancję na wykonywane przez nas leczenie.
          <br />
          <br />
          <span>#leczenie</span> na raty Wszystkie zabiegi możesz opłacić
          korzystając wygodnego z systemu ratalnego MediRaty.
        </p>
      </div>
      <div class="info__div__outer">
        <div class="info__div__inner">
          <h2>W czym możemy Ci pomóc?</h2>
        </div>
        <p>
          Leczymy w oparciu o standardy bezpieczństwa z wykorzystaniem
          najlepszych materiałów i technologii. Zobacz, w czym możemy Ci pomóc!
        </p>
        <div class="grid__outer">
          <p class="grid__inner">
            <span>Wybielanie zębów</span>
          </p>

          <p class="grid__inner">
            <span>Licówki</span>
          </p>
          <p class="grid__inner">
            <span>Protezy</span>
          </p>
          <p class="grid__inner">
            <span>Korony i mosty</span>
          </p>
          <p class="grid__inner">
            <span>Implanty i chirurgia</span>
          </p>
          <p class="grid__inner">
            <span>Ortodoncja</span>
          </p>
          <p class="grid__inner">
            <span>Leczenie kanałowe</span>
          </p>
          <p class="grid__inner">
            <span>Leczenie próchnicy</span>
          </p>
          <p class="grid__inner">
            <span>Higienizacja</span>
          </p>
          <p class="grid__inner">
            <span>Leczenie bruksizmu</span>
          </p>
          <p class="grid__inner">
            <span>RTG i tomografia</span>
          </p>
          <p class="grid__inner">
            <span>medycyna estetyczna</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  methods: {
    toTop: function () {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    },
  },
};
</script>

<style scoped lang="scss">
.hero__div {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000000;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    height: 80vh;
    border-bottom: none;
  }
}

.hero__image {
  position: relative;
  background-image: url("~assets/about_1.png");
  background-position: 0 20%;
  background-size: cover;
  width: 90%;
  height: 285px;
  margin: 15px;
  border-radius: 12px;
  z-index: -2;
  border: 1px solid #000000;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    height: 600px;
    top: 40px;
  }
}

.desc__title {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  color: #0b070d;
  font-size: 32px;
  line-height: 34px;
  position: relative;
  z-index: 1;

  margin: 20px;

  @media (min-width: 1024px) {
    margin-top: 100px;
    font-size: 70px;
    line-height: 72px;
  }
}

.scroll__btn {
  position: relative;
  top: -20px;
  left: 80%;
  width: 55px;
  height: 55px;
  border: 1px solid #000;
  border-radius: 100%;
  background: #b4f2cb;
  cursor: pointer;
  margin: 0 0 10px 0;

  &:active {
    transition: all 0.1s ease-out;

    transform: translateY(-5px);

    #second__arrow {
      transition: all 0.1s ease-out;

      transform: translateY(-5px);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
}

.paragraph__span {
  @media (min-width: 1024px) {
    width: 50% !important;
    font-weight: 600;
    margin-top: 60px;
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

.description__div {
  border-bottom: 1px solid #000000;

  @media (min-width: 1024px) {
    border-bottom: none;
    margin: 0 50px;
    p {
      font-size: 20px;
    }
  }
}

a {
  text-decoration: none;
  width: 100%;
}

.active__button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;
  height: 40px;
  background: #b4f2cb;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 16px;
  color: #000000;
  position: relative;
  transition: all 0.2s ease-out;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;

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
    height: 60px;
    font-size: 18px;
    justify-self: center;
    width: 85%;
    position: relative;
    left: 40px;
    top: 50px;
    text-decoration: none;
  }
}

.hero__image__title {
  font-family: iskra, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 35px;
  line-height: 35px;
  right: 15px;
  top: 25%;
  text-align: right;
  color: #ffffff;

  position: relative;

  @media (min-width: 1024px) {
    display: none;
  }
}

.hero__image__title-desktop {
  color: #000000;
  display: none;
  @media (min-width: 1024px) {
    display: block;
    font-family: iskra, sans-serif;

    font-style: normal;
    font-weight: 900;
    font-size: 90px;
  }
}

.info__div {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.info__div__inner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    padding: 5px 20px;
    margin-top: 80px;
    margin-bottom: 10px;

    color: #000000;
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 70px;
      line-height: 75px;
      width: 60%;
    }
  }
}

.info__div__outer {
  display: flex;
  flex-direction: column;

  &:hover {
  }

  p {
    span {
      font-size: 18px;
      color: #041b8d;
    }
  }

  @media (min-width: 1024px) {
    margin: 0 50px;
    p {
      font-size: 20px;

      span {
        font-size: 20px;
      }
    }
  }
}

.grid__outer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
}

.grid__inner {
  margin: 0;
  border: 1px solid #000000;
  border-radius: 20px;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;

  &:hover {
    background: #000000;

    span {
      color: #ffffff !important;
    }
  }

  span {
    padding: 10px;
    text-align: center;
    color: #000000 !important;
    font-weight: 600;
    font-size: 15px !important;
  }
}

.paragraph__margin__bottom {
  margin-bottom: 30px !important;

  @media (min-width: 1024px) {
    margin-bottom: 0 !important;
  }
}
</style>
