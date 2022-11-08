<template>
  <div>
    <div class="title__nav__div"><p>Kontakt</p></div>
    <div class="head__text__contact">
      <h2 class="page__title">
        Umów się <br />
        na wizytę
      </h2>
      <div>
        <p>
          Wypełnij formularz i umów się na wizytę!
        </p>
        <p>
          Skontaktujemy się z Tobą jak najszybciej w celu potwierdzenia terminu!
        </p>
      </div>
    </div>

    <div>
      <ContactFormToCotactPage />
    </div>
    <p>
      Pierwsza wizyta to czas, kiedy możemy porozmawiać o Twoich oczekiwaniach
      dotyczących leczenia i nowego uśmiechu.
    </p>
    <p>
      Podczas wizyty nasi eksperci przygotują dla Ciebie kompleksowy plan i
      kosztorys leczenia. Przedstawimy Ci efekty naszych zabiegów i możliwości
      finansowania leczenia.
    </p>
    <p>
      Jeśli zdecydujesz się na leczenie, otrzymasz harmonogram kolejnych wizyt.
      Jeśli wyrazisz taką chęć, podczas pierwszej wizyty możemy rozpocząć już
      leczenie. Jeśli na tym etapie nie chcesz podejmować decyzji o rozpoczęciu
      leczenia, nasi lekarze skontaktują się z Tobą w ustalonym terminie.
    </p>
  </div>
</template>

<script>
import ContactFormToCotactPage from "@/components/ContactForms/contactFormToContactPage";

export default {
  name: "contact",
  components: { ContactFormToCotactPage },
};
</script>

<style scoped lang="scss">
h1,
h2 {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  align-self: flex-start;
  margin: 20px 0 0 20px;
}

p {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 20px;

  @media (min-width: 1024px) {
    margin: 40px 130px;
  }
}

.head__text__contact {
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    div {
      width: 100%;
    }
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
}

.page__title {
  @media (min-width: 1024px) {
    width: 100%;
    font-size: 80px;
    line-height: 85px;
    text-transform: uppercase;
  }
}

.title__nav__div {
  border-bottom: 1px solid #000000;
  padding: 20px 0 0 0;

  p {
    margin: 20px;
  }
}
</style>
