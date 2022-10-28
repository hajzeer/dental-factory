<template>
  <div>
    <div class="title__nav__div"> <p>Konsultacje on-line</p></div>
    <div class="container__inner">
      <h2>KONSULTACJE ON-LINE</h2>

      <p>
        <span>
          Witaj w świecie Dental Factory!
        </span>
      </p>
      <p>
        Chcesz się dowiedzieć, jak możemy Ci pomóc? Skorzystaj z bezpłatnej konsultacji on-line!
      </p>
      <p>
        Wypełnij formularz znajdujący się poniżej. Opisz nam swój problem i oczekiwania, a nasi lekarze stworzą dla Ciebie plan leczenia. Dołącz zdjęcia uśmiechu i, jeśli posiadasz, zdjęcie RTG panoramiczne. Jeśli będziemy mieli pytania, w ciągu 2-3 dni skontaktujemy się z Tobą (mailowo lub telefonicznie), aby przeprowadzić dodatkowy wywiad. Na tej podstawie przygotujemy wstępny plan leczenia.
      </p>
      <p>
        Konsultacja on-line jest darmowa i do niczego Cię nie zobowiązuje, a jest bardzo dobrym sposobem na zweryfikowanie Twoich potrzeb.
      </p>
      <p>
        Konsultacja on-line to także świetne narzędzie dla Pacjentów, którzy przyjeżdżają do nas z daleka i chcą zaplanować leczenie. Otrzymasz od nas wstępny plan leczenia w kilku wariantach, przykładowy harmonogram wizyt, kosztorys i symulację płatności na raty.
      </p>
    </div>
    <ContactFormOnline/>
  </div>
</template>

<script>
import ContactFormOnline from "@/components/ContactForms/contactFormOnline";

export default {
  name: "online",
  components: {ContactFormOnline}
}
</script>

<style scoped lang="scss" src="./offer/index.scss">


</style>
