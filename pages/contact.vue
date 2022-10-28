<template>
<div>
  <h2>
    Umów się na pierwszą wizytę
  </h2>
  <p>
    Wypełnij formularz i umów się na wizytę!
  </p>
  <p>
    Skontaktujemy się z Tobą jak najszybciej w celu potwierdzenia terminu!
  </p>
  <div>
    <ContactFormToCotactPage/>
  </div>
  <p>
    Pierwsza wizyta to czas, kiedy możemy porozmawiać o Twoich oczekiwaniach dotyczących leczenia i nowego uśmiechu.
  </p>
  <p>
    Podczas wizyty nasi eksperci przygotują dla Ciebie kompleksowy plan i kosztorys leczenia. Przedstawimy Ci efekty naszych zabiegów i możliwości finansowania leczenia.
  </p>
  <p>
    Jeśli zdecydujesz się na leczenie, otrzymasz harmonogram kolejnych wizyt. Jeśli wyrazisz taką chęć, podczas pierwszej wizyty możemy rozpocząć już leczenie. Jeśli na tym etapie nie chcesz podejmować decyzji o rozpoczęciu leczenia, nasi lekarze skontaktują się z Tobą w ustalonym terminie.
  </p>
</div>
</template>

<script>
import ContactFormToCotactPage from "@/components/ContactForms/contactFormToContactPage";
export default {
  name: "contact",
  components: {ContactFormToCotactPage}
}
</script>

<style scoped lang="scss">
h1, h2 {
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

}

</style>
