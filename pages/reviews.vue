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
        :items="dataGoogle"
      ></reviewsLoaderForPage>
      <reviewsLoaderForPage
        href="https://www.facebook.com/100032449886945"
        reviews-name="na Facebooku"
        :items="dataFacebook"
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
      dataGoogle: [
        {
          name: "Anna P.",
          stars: "*****",
          description:
            "“Jestem pod dużym wrażeniem profesjonalnego podejścia oraz ogromnej wiedzy fachowej Pana Doktora. Wszystko to sprawiło, że czułam się bardzo komfortowo. Polecam- 100% profesjonalizm.”",
        },
        {
          name: "Aleksander T.",
          stars: "*****",
          description:
            "“Do gabinetu Dental Factory trafiłem kierując się opiniami w Internecie.\n" +
            "Efekty uzyskane po poprawieniu „estetyki uśmiechu” przerosły moje najśmielsze oczekiwania.\n" +
            "Pełny profesjonalizm i nowoczesność.\n" +
            "Z czystym sumieniem mogę polecić fachowość i świetne oko pana doktora Burdeńskiego.”",
        },
        {
          name: "Monika K.",
          stars: "*****",
          description:
            "“Pan dr Sebastian to profesjonalny , zaangażowany i bardzo sympatyczny stomatolog. Wizyty zawsze przebiegają w miłej atmosferze. Za każdym razem czuje się spokojna i w pełni zaopiekowana:) Panie asystentki bardzo miłe i kulturalne. :)  Serdecznie dziękuję za dotychczasowe wizyty i do zobaczenia na kolejnych:)\n”",
        },
        {
          name: "Andrzej K.",
          stars: "*****",
          description: `"W Dental Factory przeszedłem pełne leczenie. Wizyt było sporo, plan leczenia precyzyjny, żadnych niespodzianek. Zarówno z leczenia jak i z nowego usmiechu jestem bardzo zadowolony. Pozdrowienia dla całego zespołu Doktora Sebastiana!"`,
        },
        {
          name: "Kajetan K.",
          stars: "*****",
          description: `"Na leczenie do Sebastiana dojeżdżałem ponad 100 km, ale zawsze warto było. Począwszy od pierwszej higienizacji, przez leczenie.  Aż do estetyki. Jesteście the best!
"`,
        },
      ],
      dataFacebook: [
        {
          name: "Katarzyna S.",
          stars: "*****",
          description: `"Polecam gorąco.Gabinet lśni czystością i pięknym wystrojem wnętrz.Piękny zapach świec unosi się wszędzie.A Pan Sebastian -profesjonalista w swoim fachu.Super sympatyczny i miły człowiek.Cały przebieg leczenia wyjaśniony ,omówiony i oczywiście wykonany bardzo dokładnie.Panie asystentki również bardzo miłe i uprzejme.W takiej atmosferze człowiek nie czuje stresu przed wizytą.Dziękujemy wraz z mężem ."`,
        },
        {
          name: "Łucja K.",
          stars: "*****",
          description: `"Jestem bardzo zadowolona z wizyt ! I z czystym sercem polecam Dental Factory ❤️Obsługa jest 10/10, dentysta który zajmuje się moimi ząbkami jest bardzo miły, dokładny i profesjonalny ☺️"`,
        },
        {
          name: "Małgosia M.",
          stars: "*****",
          description: `"Każdemu kto chce pokonać strach przed wizytą u stomatologa polecam Dental Factory. Profesjonalne podejście oraz ogromna wiedza fachowa Pana Sebastiana sprawiła, że czułam się komfortowo. Śmiało powiem, że jest to górna półka usług stomatologicznych. Polecam!
"`,
        },
        {
          name: "Sylwia S.",
          stars: "*****",
          description: `"Polecam z całego serca!Jestem po pierwszej wizycie i powiem Wam że jestem bardzo zadowolona:)Wcześniejsze przykre doświadczenia u innych specjalistów odeszły w niepamięć!!Wizyta od początku przebiegała w miłej atmosferze, podejście do pacjenta rewelacyjnie!:)Najważniejsze cała wizyta przebiegała bezboleśnie na czym najbardziej mi zależało!Wielkie podziękowania dla Pana Doktora i Pani Aystentki za świetne podejście,  delikatność i przede wszystkim za Profesjonalizm!:)"`,
        },
        {
          name: "Iwona L.",
          stars: "*****",
          description: `"Bardzo polecam , obsługa lekarska na bardzo wysokim poziomie, ze względu na profesjonalną  oraz przyjazną atmosferę, dziękuję bardzo Panie Sebastianie za piękny uśmiech 😊 pozdrawiam serdecznie 😊"`,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss" src="./offer/index.scss"></style>
