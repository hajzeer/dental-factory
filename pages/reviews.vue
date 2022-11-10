<template>
  <div>
    <div class="title__nav__div"><p>Opinie</p></div>
    <div class="container__inner">
      <h2 class="page__title">OPINIE</h2>
      <div class="inner">
        <p>
          Leczymy tak, jak sami chcielibyśmy być leczeni. Dokładamy wszelkich
          starań, aby wizyty były komfortowe i bezbolesne, a efekt leczenia
          estetyczny i trwały. Najlepszym dowodem na to są pozytywne opinie
          naszych pacjentów.
        </p>
        <p>
          Dziękujemy za zaufanie!
        </p>
      </div>

      <reviewsLoaderForPage
        href="https://g.page/dentalfactory?share"
        reviews-name="w Google"
        :items="data"
      ></reviewsLoaderForPage>
      <reviewsLoaderForPage
        href="https://www.facebook.com/100032449886945"
        reviews-name="na Facebooku"
        :items="data"
      ></reviewsLoaderForPage>
    </div>
  </div>
</template>

<script>
import reviewsLoaderForPage from "~/components/reviewsLoaderForPage";

export default {
  name: "reviews",
  components: { reviewsLoaderForPage },
  data() {
    return {
      data: [
        {
          name: "Kasia R.",
          stars: "*****",
          description:
            "“Fantastyczne miejsce :) Profesjonalizm, uśmiech i życzliwość na każdym kroku. Doceniam za piękne wnętrze i muzę w tle, ale przede wszystkim za mega wysoki poziom usług. Polecam każdemu. \n" +
            "Bez stresu i bólu, chce się tu wracać:)”",
        },
        {
          name: "Krysia R.",
          stars: "*****",
          description:
            "“Fantastyczne miejsce :) Profesjonalizm, uśmiech i życzliwość na każdym kroku. Doceniam za piękne wnętrze i muzę w tle, ale przede wszystkim za mega wysoki poziom usług. Polecam każdemu. \n" +
            "Bez stresu i bólu, chce się tu wracać:)”",
        },
        {
          name: "Misia R.",
          stars: "*****",
          description:
            "“Fantastyczne miejsce :) Profesjonalizm, uśmiech i życzliwość na każdym kroku. Doceniam za piękne wnętrze i muzę w tle, ale przede wszystkim za mega wysoki poziom usług. Polecam każdemu. \n" +
            "Bez stresu i bólu, chce się tu wracać:)”",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss" src="./offer/index.scss"></style>
