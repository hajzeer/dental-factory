<template>
  <div>
    <div class="title__nav__div"><p>Przed i po</p></div>
    <div class="container__inner">
      <h2 class="page__title">Przed i po</h2>
      <p class="info__p">Zobacz efekty naszego leczenia</p>
    </div>
    <div>
      <h2></h2>
      <p></p>
      <p><span> </span></p>
      <img />
      <NuxtLink to="/">
        <button></button>
      </NuxtLink>
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
          slug: "",
          timing: "",
          src: "",
        },
        {
          name: "Wybielanie zębów",
          description:
            "Dzięki połączeniu bezpiecznego wybielania PrevDent w gabinecie z nakładkami do domowego wybielania udało nam się rozjaśnić zęby o 5 odcieni.",
          slug: "",
          timing: "",
          src: "",
        },
        {
          name: "Korony i mosty porcelanowe",
          description:
            "Pacjent przyszedł do nas w celu odbudowy brakujących bocznych zębów i poprawy estetyki przedniej części uśmiechu. Wypełniliśmy wszystkie braki zębowe za pomocą estetycznych koron i mostów porcelanowych.",
          slug: "",
          timing: "",
          src: "",
        },
        {
          name: "Mosty porcelanowe",
          description:
            "Pan Jarosław przyszedł do nas z zamiarem wymiany starych mostów wykonanych w dolnej szczęce i mocno zniszczonymi sąsiednimi zębami. Wykonaliśmy leczenie kanałowe części zębów, wyleczyliśmy ubytki próchnicowe, a w kolejnym etapie założyliśmy porcelanowy most. Odbudował on brakujące zęby, wzmocnił zęby po leczeniu kanałowym i poprawił estetykę uśmiechu:)",
          slug: "",
          timing: "",
          src: "",
        },
        {
          name: "Mosty cyrkonowe",
          description:
            "Pani Beata zgłosiła się do nas, ponieważ była niezadowolona z wyglądu swojego uśmiechu. Miała założone stare mosty na boczne zęby, które były nieszczelne i wymagały wymiany. Zależało jej też na tym, aby przywrócić wygląd zębów jak za dawnych lat. Wykonaliśmy mosty cyrkonowe, które idealnie naśladują własne zęby.",
          slug: "",
          timing: "",
          src: "",
        },
        {
          name: "Licówki porcelanowe",
          description:
            "Pani Marta miała wykonywane licówki kompozytowe wiele lat temu. Zależało jej na tym, aby nowy uśmiech był piękny i biały. Po wysłuchaniu oczekiwań i kompleksowej diagnostyce zdecydowaliśmy się na wykonanie licówek porcelanowych.",
          slug: "",
          timing: "",
          src: "",
        },
        {
          name: "Bonding kompozytowy",
          description:
            "Pani Asi zależało na poprawie wyglądu przednich zębów, ale nie chciała ich szlifować pod licówki porcelanowe. Zaproponowaliśmy bonding kompozytowy, dzięki któremu bez szlifowania szkliwa mogliśmy delikatnie rozjaśnić zęby, wyrównać je i poprawić ich kształt.",
          slug: "",
          timing: "",
          src: "",
        },
        {
          name: "Piaskowanie zębów",
          description:
            "Pan Bartosz zgłosił się do nas w celu usunięcia przebarwień po kawie i herbacie. Usunęliśmy kamień, wykonaliśmy piaskowanie delikatną metodą EMS AIR-FLOW, dobraliśmy zestaw do domowej pielęgnacji i zaplanowaliśmy terminy przyszłych wizyt kontrolnych i higienizacyjnych.",
          slug: "",
          timing: "",
          src: "",
        },
        {
          name: "Mosty cyrkonowe",
          description:
            "Pani Ania borykała się z problemem mocno startych zębów przednich i brakiem zębów bocznych, który utrudniał jej gryzienie. Nie podobał się jej też kolor i kształt zębów. Zdecydowaliśmy się na wykonanie mostu cyrkonowego. Ze względu na brak bocznych zębów wzmocniliśmy go szklanym popdarciem. Pozostałe zęby odbudowaliśmy bondingiem. Po zakończonym leczeniu Pani Ania w końcu mogła cieszyć się pięknym uśmiechem, który od zawsze był jej marzeniem.",
          slug: "",
          timing: "",
          src: "",
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
  @media (min-width: 1024px) {
    font-size: 25px;
    align-self: flex-start;
    margin-left: 50px;
  }
}

.container__inner {
  width: 100%;
  height: auto;
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

img {
  width: 90%;
}
</style>
