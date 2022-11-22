<template>
  <div>
    <div class="hero__div">
      <div class="hero__image">
        <img src="/about_1.webp" />
      </div>
      <div class="hero__image__inner">
        <h2 class="hero__image__title-desktop">
          Twój uśmiech, <br />
          Twoje story.
        </h2>
        <NuxtLink to="/online">
          <button class="active__button">
            <p>
              Umów się na konsultację
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
    </div>
    <div class="dental__travel__div">
      <div>
        <img src="/11.webp" />
      </div>
      <div class="hero__image__inner">
        <h2>
          Oferta dla osób spoza Wrocławia Zaplanój swój pobyt i wizytę
        </h2>
        <NuxtLink to="/dental-travel">
          <button class="active__button travel">
            <p>
              Dental Travel
            </p>
          </button>
        </NuxtLink>
      </div>
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
          <NuxtLink to="/offer/whitening">
            <button class="grid__inner">Wybielanie zębów</button>
          </NuxtLink>
          <NuxtLink to="/offer/veeners">
            <button class="grid__inner">Licówki</button>
          </NuxtLink>
          <NuxtLink to="/offer/denture">
            <button class="grid__inner">Protezy</button>
          </NuxtLink>
          <NuxtLink to="/offer/crown-and-bridges">
            <button class="grid__inner">Korony i mosty</button>
          </NuxtLink>
          <NuxtLink to="/offer/implants">
            <button class="grid__inner">Implanty i chirurgia</button>
          </NuxtLink>
          <NuxtLink to="/offer/ortodontics">
            <button class="grid__inner">Ortodoncja</button>
          </NuxtLink>
          <NuxtLink to="/offer/root-canal-therapy">
            <button class="grid__inner">Leczenie kanałowe</button>
          </NuxtLink>
          <NuxtLink to="/offer/dental-caries">
            <button class="grid__inner">Leczenie próchnicy</button>
          </NuxtLink>
          <NuxtLink to="/offer/hygiene">
            <button class="grid__inner">Higienizacja</button>
          </NuxtLink>
          <NuxtLink to="/offer/dental-guard">
            <button class="grid__inner">Leczenie bruksizmu</button>
          </NuxtLink>
          <NuxtLink to="/offer/rtg-tomography">
            <button class="grid__inner">RTG i tomografia</button>
          </NuxtLink>
          <NuxtLink to="/offer/aesthetic-medicine">
            <button class="grid__inner">Medycyna estetyczna</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style scoped lang="scss">
.hero__div {
  width: 100%;
  height: 560px;
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

.dental__travel__div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  h2 {
    font-family: Termina;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    margin: 20px 10px;

    @media (min-width: 1024px) {
      font-size: 75px;
      line-height: 80px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .travel {
    width: 100%;
    @media (min-width: 1024px) {
      width: 70%;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  img {
    width: 95%;
    border-radius: 20px;
    border: 1px solid #000000;
  }
}

.hero__image__inner {
  @media (min-width: 1024px) {
    align-self: center;
  }
}

.hero__image {
  position: relative;
  width: 90%;
  z-index: -2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    border: 1px solid #000000;
    border-radius: 12px;
  }

  @media (min-width: 1024px) {
    width: 550px;
    top: 100px;
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

.hero__image__title-desktop {
  font-family: iskra, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  line-height: 40px;
  margin: 0 0 20px 0 !important;
  @media (min-width: 1024px) {
    font-size: 90px;
    line-height: 95px;
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

a {
  text-decoration: none !important;
}

.grid__outer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;

  a {
    text-decoration: none !important;
    color: #000000;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
}

.grid__inner {
  margin: 0;
  border: 1px solid #000000;
  font-family: Termina;
  font-weight: 600;
  font-size: 15px;
  background: transparent;
  border-radius: 20px;
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  cursor: pointer;
  text-decoration: none;
  color: #000000;

  &:hover {
    background: #000000;

    color: #ffffff !important;
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
