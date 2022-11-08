<template>
  <div>
    <div class="title__nav__div"><p>Konsultacje on-line</p></div>
    <div class="container__inner">
      <h2 class="page__title">
        KONSULTACJE <br />
        ON-LINE
      </h2>
      <div class="info__div">
        <h3>
          Witaj w świecie Dental Factory!
        </h3>
        <p>
          <span>
            Chcesz się dowiedzieć, jak możemy Ci pomóc? Skorzystaj z bezpłatnej
            konsultacji on-line!
          </span>
        </p>
      </div>
      <p>
        Wypełnij formularz znajdujący się poniżej. Opisz nam swój problem i
        oczekiwania, a nasi lekarze stworzą dla Ciebie plan leczenia. Dołącz
        zdjęcia uśmiechu i, jeśli posiadasz, zdjęcie RTG panoramiczne. Jeśli
        będziemy mieli pytania, w ciągu 2-3 dni skontaktujemy się z Tobą
        (mailowo lub telefonicznie), aby przeprowadzić dodatkowy wywiad. Na tej
        podstawie przygotujemy wstępny plan leczenia.
      </p>
      <p>
        Konsultacja on-line jest darmowa i do niczego Cię nie zobowiązuje, a
        jest bardzo dobrym sposobem na zweryfikowanie Twoich potrzeb.
      </p>
      <p>
        Konsultacja on-line to także świetne narzędzie dla Pacjentów, którzy
        przyjeżdżają do nas z daleka i chcą zaplanować leczenie. Otrzymasz od
        nas wstępny plan leczenia w kilku wariantach, przykładowy harmonogram
        wizyt, kosztorys i symulację płatności na raty.
      </p>
    </div>
    <ContactFormOnline />
  </div>
</template>

<script>
import ContactFormOnline from "@/components/ContactForms/contactFormOnline";

export default {
  name: "online",
  components: { ContactFormOnline },
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

h3 {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;
}

p {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 20px;

  @media (min-width: 1024px) {
    margin: 40px 180px;
  }
}

.info__div {
  @media (min-width: 1024px) {
    width: 80%;
    position: relative;
    left: 20%;
    font-size: 30px;
    h3 {
      font-size: 35px;
      margin: 50px 0 0 80px !important;
    }
    p {
      margin: 25px 0 40px 80px !important;
    }
  }
}

.head__text__contact {
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;

    margin: 50px 50px 70px 80px;
  }
}

.page__title {
  @media (min-width: 1024px) {
    width: 80%;
    font-size: 80px;
    line-height: 85px;
    text-transform: uppercase;
    margin-left: 120px;
  }
}
</style>
