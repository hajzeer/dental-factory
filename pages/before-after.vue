<template>
  <div>
    <div class="title__nav__div"><p>Przed i po</p></div>
    <div class="container__inner">
      <h2 class="page__title">Przed i po</h2>
      <p class="info__p">Zobacz efekty naszego leczenia</p>
    </div>
    <div class="main__div" v-for="item in adsInfo">
      <h2>{{ item.name }}</h2>
      <div>
        <div>
          <p>{{ item.description }}</p>
          <p>
            <span>{{ item.timing }}</span>
          </p>

          <NuxtLink :to="item.slug">
            <button class="active__button">
              <p>Dowiedz się więcej <br />o {{ item.button }}</p>
            </button>
          </NuxtLink>
        </div>
        <img :src="item.src" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "before-after",
  data() {
    return {
      adsInfo: [
        {
          name: "Licówki porcelanowe",
          description:
            "Pan Damian zgłosił się do nas w celu poprawy uśmiechu i wykonania licówek porcelanowych na górne zęby. Zależało mu na naturalnym, estetycznym uśmiechu. Wykonaliśmy licówki porcelanowe na górne siekacze (jedynki i dwójki) i trójki.",
          slug: "/offer/veeners",
          timing: "Czas leczenia: 2 wizyty | 7 dni",
          src: `/przed-po/1.jpeg`,
          button: "licówkach porcelanowych",
        },
        {
          name: "Wybielanie zębów",
          description:
            "Dzięki połączeniu bezpiecznego wybielania PrevDent w gabinecie z nakładkami do domowego wybielania udało nam się rozjaśnić zęby o 5 odcieni.",
          slug: "/offer/whitening",
          timing:
            "Czas leczenia: Wybielanie w gabinecie - 1 wizyta, wybielanie nakładkowe na noc 7 dni\n",
          src: `/przed-po/2.jpg`,
          button: "wybielaniu zębów",
        },
        {
          name: "Korony i mosty porcelanowe",
          description:
            "Pacjent przyszedł do nas w celu odbudowy brakujących bocznych zębów i poprawy estetyki przedniej części uśmiechu. Wypełniliśmy wszystkie braki zębowe za pomocą estetycznych koron i mostów porcelanowych.",
          slug: "/offer/crown-and-bridges",
          timing: "Czas leczenia: 3 wizyty | 14 dni",
          src: `/przed-po/3.webp`,
          button: "koronach i mostach",
        },
        {
          name: "Mosty porcelanowe",
          description:
            "Pan Jarosław przyszedł do nas z zamiarem wymiany starych mostów wykonanych w dolnej szczęce i mocno zniszczonymi sąsiednimi zębami. Wykonaliśmy leczenie kanałowe części zębów, wyleczyliśmy ubytki próchnicowe, a w kolejnym etapie założyliśmy porcelanowy most. Odbudował on brakujące zęby, wzmocnił zęby po leczeniu kanałowym i poprawił estetykę uśmiechu:)",
          slug: "/offer/crown-and-bridges",
          timing: "Czas leczenia protetycznego: 10 dni | 2 wizyty",
          src: `/przed-po/4.webp`,
          button: "mostach porcelanowych",
        },
        {
          name: "Mosty cyrkonowe",
          description:
            "Pani Beata zgłosiła się do nas, ponieważ była niezadowolona z wyglądu swojego uśmiechu. Miała założone stare mosty na boczne zęby, które były nieszczelne i wymagały wymiany. Zależało jej też na tym, aby przywrócić wygląd zębów jak za dawnych lat. Wykonaliśmy mosty cyrkonowe, które idealnie naśladują własne zęby.",
          slug: "/offer/crown-and-bridges",
          timing: "Czas leczenia: 2 wizyty | 10 dni",
          src: `/przed-po/5.webp`,
          button: "mostach cyrkonowych",
        },
        {
          name: "Licówki porcelanowe",
          description:
            "Pani Marta miała wykonywane licówki kompozytowe wiele lat temu. Zależało jej na tym, aby nowy uśmiech był piękny i biały. Po wysłuchaniu oczekiwań i kompleksowej diagnostyce zdecydowaliśmy się na wykonanie licówek porcelanowych.",
          slug: "/offer/veeners",
          timing: "Czas leczenia protetycznego: 10 dni | 2 wizyty",
          src: `/przed-po/6.webp`,
          button: "licówkach porcelanowych",
        },
        {
          name: "Bonding kompozytowy",
          description:
            "Pani Asi zależało na poprawie wyglądu przednich zębów, ale nie chciała ich szlifować pod licówki porcelanowe. Zaproponowaliśmy bonding kompozytowy, dzięki któremu bez szlifowania szkliwa mogliśmy delikatnie rozjaśnić zęby, wyrównać je i poprawić ich kształt.",
          slug: "/offer/denture",
          timing: "Czas leczenia: 1 wizyta",
          src: `/przed-po/7.webp`,
          button: "bondingu kompozytowym",
        },
        {
          name: "Piaskowanie zębów",
          description:
            "Pan Bartosz zgłosił się do nas w celu usunięcia przebarwień po kawie i herbacie. Usunęliśmy kamień, wykonaliśmy piaskowanie delikatną metodą EMS AIR-FLOW, dobraliśmy zestaw do domowej pielęgnacji i zaplanowaliśmy terminy przyszłych wizyt kontrolnych i higienizacyjnych.",
          slug: "/offer/hygiene",
          timing: "Czas leczenia: 1 wizyta | 45 minut",
          src: `/przed-po/8.jpg`,
          button: "piaskowaniu zębów",
        },
        {
          name: "Mosty cyrkonowe",
          description:
            "Pani Ania borykała się z problemem mocno startych zębów przednich i brakiem zębów bocznych, który utrudniał jej gryzienie. Nie podobał się jej też kolor i kształt zębów. Zdecydowaliśmy się na wykonanie mostu cyrkonowego. Ze względu na brak bocznych zębów wzmocniliśmy go szklanym popdarciem. Pozostałe zęby odbudowaliśmy bondingiem. Po zakończonym leczeniu Pani Ania w końcu mogła cieszyć się pięknym uśmiechem, który od zawsze był jej marzeniem.",
          slug: "/offer/crown-and-bridges",
          timing: "Czas leczenia protetycznego: 3 wizyty",
          src: `/przed-po/9.jpg`,
          button: "mostach cyrkonowych",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.title__nav__div {
  border-bottom: 1px solid #000000;
  padding: 20px 0 0 0;
}

.page__title {
  @media (min-width: 1024px) {
    width: 60%;
    margin-top: 40px;
    font-size: 100px;
    line-height: 110px;
    margin-left: 50px;
  }
}

.info__p {
  align-self: flex-start;
  @media (min-width: 1024px) {
    font-size: 25px;
    margin-left: 50px;
  }
}

.container__inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1,
h2 {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  align-self: flex-start;
  margin: 20px 0 0 20px;
}

a {
  text-decoration: none;
}

p {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 20px;

  span {
    font-weight: 900;
  }

  a {
    font-weight: 900;
  }
}

.main__div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 90% !important;
    align-self: center !important;
    border-radius: 12px;
    border: 2px solid #000000;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      align-self: flex-start;
    }
  }

  @media (min-width: 1024px) {
    margin: 80px;

    h2 {
      font-size: 70px;
      width: 70%;
      margin-bottom: 50px;
    }

    p {
      margin-bottom: 10px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }

    img {
      width: 50% !important;
      margin-right: 120px;
      border-radius: 12px;
      border: 2px solid #000000;
    }
  }
}

a {
  width: 90%;
}

.active__button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;
  height: 55px;
  width: 100%;
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
  margin-bottom: 30px;

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
    align-self: center !important;
    text-decoration: none;
    margin: 0 !important;
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
    width: 300px;
    font-size: 15px;
    justify-self: center;
    margin-left: 20px;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      align-self: center !important;
    }
  }
}
</style>
