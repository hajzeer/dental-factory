<template>
  <div>
    <div class="title__nav__div"><p>O nas / Pierwsza wizyta</p></div>
    <div class="container__inner">
      <h2 class="page__title">Pierwsza wizyta</h2>
      <div class="inner__info">
        <p class="info__p">
          Robimy wszystko, aby wizyta u nas była dla Ciebie komfortowa i
          przyjemna!
        </p>
        <img
          class="about__img"
          v-if="loading && ImgArray.images[0] !== undefined"
          :src="ImgArray.images[0].url"
        />
      </div>
      <div class="inner__info">
        <h2 class="page__title__smaller">Umówienie wizyty</h2>
        <div class="inner__info__div">
          <p>
            Wizytę możesz umówić, dzwoniąc pod numer telefonu <br />
            <a>+48 69 18 18 388</a>, wysyłając maila na adres<br />
            <a>kontakt@dental-factory.pl</a>
            lub korzystając z formularza kontaktowego znajdującego się w linku
            poniżej.
            <br />
            <br />
            Aby zagwarantować Ci najwyższe bezpieczeństwo prosimy, aby wszyscy
            Pacjenci przychodzili na wizytę punktualnie i bez osób
            towarzyszących. Na pierwszą wizytę prosimy przyjść 15 minut
            wcześniej, aby wypełnić niezbędną dokumentację.
          </p>
          <NuxtLink to="/appointment" class="anchor">
            <button><p>Umów się na wizytę</p></button>
          </NuxtLink>
        </div>
      </div>

      <img
        class="about__img__second"
        v-if="loading && ImgArray.images[1] !== undefined"
        :src="ImgArray.images[1].url"
      />
      <p class="about__p">
        <span>U nas możesz czuć się bezpiecznie.</span>
        <br />
        <br />
        Twoje zdrowie i bezpieczeństwo od zawsze było dla nas priorytetem,
        dlatego gabinety wyposażyliśmy w niezbędne sprzęty i środki ochrony,
        dzięki którym możesz czuć się bezpiecznie.
        <br />
        <br />
        Nie pobieraliśmy, nie pobieramy i nie będziemy pobierać żadnych
        dodatkowych opłat za zabezpieczenia jakie wdrożyliśmy (tzw. opłat
        epidemiologicznych). Zgodnie z wytycznymi WHO, Naczelnej Izby Lekarskiej
        i Głównego Inspektora Sanitarnego wprowadziliśmy szereg procedur
        przyjmowania Pacjentów, które na bieżąco aktualizujemy.
      </p>
      <div class="inner__info__second">
        <h2 class="subject">Dokumentacja</h2>
        <p>
          Pacjentów, którzy będą u nas pierwszy raz prosimy, aby na wizytę
          przyszli 10-15 minut wcześniej. Dzięki temu wypełnisz niezbędną
          dokumentację - Kartę Pacjenta, Ankietę Stomatologiczną i Wywiad
          Lekarski.
        </p>
      </div>
      <div class="inner__info__second">
        <h2 class="subject">Diagnostyka</h2>
        <p>
          Przed konsultacją wykonamy Ci dokumentację fotograficzną. Pozwoli nam
          ona dokładniej zaplanować leczenie i porównać efekty przed i po
          leczeniu.
          <br />
          <br />
          Aby móc dokładnie zaplanowanować leczenie, konieczne będzie
          panoramiczne zdjęcie RTG. Jeśli masz aktualne (nie starsze niż 2
          miesiące), prosimy o zabranie go na wizytę. Jeśli nie, możesz wykonać
          je u nas na miejscu przed konsultacją.
        </p>
      </div>

      <img
        class="about__img__third"
        v-if="loading && ImgArray.images[2] !== undefined"
        :src="ImgArray.images[2].url"
      />
      <h2 class="page__title__smaller">Konsultacja i plan leczenia</h2>
      <p class="last__p">
        Konsultacja to czas, kiedy możemy porozmawiać o Twoich oczekiwaniach
        dotyczących leczenia i nowego uśmiechu. Podczas wizyty dowiesz się, w
        jakim stanie są Twoje zęby. Otrzymasz od nas indywidualny plan leczenia,
        który obejmuje kilka wariantów, różniących się między sobą trwałością i
        ceną. Daje Ci to pewność, że w trakcie leczenia nie zaskoczą Cię żadne
        dodatkowe koszty.
        <br />
        <br />
        Jeśli zdecydujesz się na leczenie, otrzymasz harmonogram kolejnych
        wizyt. Jeśli wyrazisz taką chęć, podczas pierwszej wizyty możemy
        rozpocząć już leczenie. Jeśli na tym etapie nie chcesz podejmować
        decyzji o rozpoczęciu leczenia, nasz zespół skontaktuje się z Tobą w
        ustalonym terminie.
      </p>
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      path: "/o-nas/pierwsza-wizyta",
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

    this.ImgArray = data.data.catalogue.components[0].content;

    if (this.ImgArray !== null) {
      this.loading = true;
    }
  },
};
</script>

<style scoped lang="scss">
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
}

img {
  width: 90%;
  border-radius: 20px;
  border: 2px solid #000000;
}

.subject {
  color: #041b8d;

  @media (min-width: 1024px) {
    width: 30%;
  }
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

.anchor {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
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

.page__title {
  @media (min-width: 1024px) {
    width: 60%;
    margin-top: 40px;
    font-size: 100px;
    line-height: 110px;
    margin-left: 50px;
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
    margin-top: 50px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
}

.inner__info__second {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    margin-top: 50px;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;

    p {
      width: 50%;
    }
  }
}

.about__img {
  @media (min-width: 1024px) {
    width: 50%;
  }
}

.info__p {
  @media (min-width: 1024px) {
    width: 30%;

    font-size: 25px;
  }
}

.inner__info__div {
  @media (min-width: 1024px) {
    width: 60%;
  }
}

.page__title__smaller {
  @media (min-width: 1024px) {
    width: 50%;
    margin-top: 40px;
    margin-left: 50px;
    font-size: 70px;
    line-height: 75px;
  }
}

.about__img__second {
  @media (min-width: 1024px) {
    width: 50%;
    align-self: flex-start;
    margin: 50px;
  }
}

.about__img__third {
  @media (min-width: 1024px) {
    width: 50%;
    align-self: flex-end;
    margin: 50px 80px;
  }
}

.about__p {
  @media (min-width: 1024px) {
    margin: 50px;

    span {
      font-size: 30px;
      font-weight: 700;
    }
  }
}

.last__p {
  @media (min-width: 1024px) {
    margin: 50px;
  }
}
</style>
