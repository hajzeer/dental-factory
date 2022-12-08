<template>
  <div>
    <div class="title__nav__div"><p>Ceny / Mediraty</p></div>
    <div class="container__inner">
      <h2>MEDIRATY</h2>
      <div class="first__div">
        <p>
          Prosty sposób na finansowanie leczenia stomatologicznego!
          <br />
          <br />
          Chcesz rozpocząć leczenie w Dental Factory, ale nie wiesz, ile będzie
          ono kosztowało? Umów się na konsultację w naszym Centrum, poznaj plan
          i całkowity koszt leczenia. Możesz też skorzystać z bezpłatnej
          konsultacji on-line. Zastanawiasz się nad kredytowaniem leczenia?
          Dalsze kroki pomożemy Ci zorganizować na miejscu. Wszystkie zabiegi w
          Dental Factory możesz opłacić korzystając wygodnego z systemu
          ratalnego MediRaty.
        </p>
        <img class="medi__image" src="/12.png" />
      </div>
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Czym są MediRaty?</h2>
          </div>
          <p>
            MediRaty to system finansowania usług medycznych w klinikach,
            szpitalach i gabinetach.
          </p>
          <ul>
            <li>
              ~ Niskie raty i długi okres spłaty (do 5 lat)
            </li>
            <li>
              ~ Minimum formalności (wystarczy formularz elektroniczny lub
              zgłoszenie telefoniczne)
            </li>
            <li>
              ~ Brak opłat wstępnych
            </li>
            <li>
              ~ Finansowanie do 50 tysięcy złotych
            </li>
          </ul>
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Jak to działa?</h2>
          </div>
          <ul>
            <li>
              1. Podczas wizyty ustalasz z naszymi ekspertami harmonogram i
              kosztorys leczenia.
            </li>
            <li>
              2. Kontaktuje się z Tobą telefonicznie konsultant MediRat w celu
              dobrania odpowiedniej oferty.
            </li>
            <li>
              3. Podpisujesz umowę, a kwota na leczenie zostaje przelana na
              nasze konto.
            </li>
            <li>
              4. Realizujesz zabiegi zgodnie z ustalonym planem.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index.vue",
  data() {
    return {
      path: "/cennik/images/mediraty",
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
  mounted() {
    if (this.loading) console.log(this.ImgArray);
  },
};
</script>

<style lang="scss" scoped src="../../offer/index.scss"></style>
