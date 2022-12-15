<template>
  <div class="container">
    <div class="container__inner">
      <div class="image__container">
        <img
          ref="image1"
          alt="cabinet__image"
          class="footer__image"
          v-if="footerInfo[5].content !== null"
          :src="footerInfo[5].content.images[0].url"
          @mouseenter="grownFirst"
          @mouseleave="smallerFirst"
        />
        <img
          ref="image3"
          alt="cabinet__image"
          class="footer__image"
          v-if="footerInfo[5].content !== null"
          :src="footerInfo[5].content.images[1].url"
          @mouseenter="grownThird"
          @mouseleave="smallerThird"
        />
      </div>
      <reviewsLoader
        :items="dataGoogle"
        reviewsName="w Google"
        href="https://g.page/dentalfactory?share"
      />
      <div>
        <div>
          <h2 class="social__title">Dołącz do nas na instagramie</h2>
        </div>
        <ImageGetter />
      </div>
      <contact-form />
      <div class="rastr__image">
        <img alt="rastr image" src="/rastrFooter.jpg" />
      </div>
    </div>
    <div class="finisher__container" v-if="footerInfo">
      <div class="finisher__container-inner">
        <div class="info__div">
          <div>
            <img alt="logo footer" class="logo__image" src="/logoFooter.png" />
            <p
              class="address__p"
              v-for="item in footerInfo[2].content.plainText"
            >
              {{ item }} <br />
            </p>
            <p class="paragraph">
              <span>
                {{ footerInfo[3].content.paragraphs[0].title.text }}
              </span>
            </p>
            <p
              class="paragraph"
              v-for="item in footerInfo[3].content.paragraphs[0].body.plainText"
            >
              {{ item }}
            </p>

            <a class="links" href="https://g.page/dentalfactory?share">
              <button class="active__button">
                <p><span>Dojazd</span></p>
              </button>
            </a>
          </div>
          <div>
            <p class="hours">{{ footerInfo[4].content.sections[0].title }}</p>
            <ul>
              <li v-for="item in footerInfo[4].content.sections[0].properties">
                <span>{{ item.key }}</span> {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contact__div">
        <a :href="`tel:` + footerInfo[0].content.text">{{
          footerInfo[0].content.text
        }}</a
        ><a :href="`mailto:` + footerInfo[1].content.text">{{
          footerInfo[1].content.text
        }}</a>
      </div>
      <div class="creator__div">
        <p>
          @{{ new Date().getFullYear() }} Wszelkie prawa zastrzeżone
          <a class="creator__link" href="https://www.instagram.com/breath.d.s/"
            >BREATH DESIGN STUDIO</a
          >
          by Krzysztof Hajder & Oliwia Dittrich
        </p>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ContactForm from "~/components/ContactForms/contactForm";
import reviewsLoader from "~/components/reviewsLoader";
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "FooterComponents",
  components: { reviewsLoader, ContactForm },
  data() {
    return {
      dataIg: [],
      loading: false,
      footerInfo: null,
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
    };
  },
  async fetch() {
    const data = await simplyFetchFromGraph({
      query: `query GET_FOOTER {
  catalogue(path: "/footer-and-contact") {
    ...on Folder {
      components {
        content {
          ...on SingleLineContent {
            text
          }
          ...on PropertiesTableContent {
            sections {
              title
              properties {
                key
                value
              }
            }
          }
          ...on RichTextContent {
            plainText
          }
          ...on ParagraphCollectionContent {
            paragraphs {
              title {
                text
              }
              body {
                plainText
              }
            }
          }
          ...on ImageContent {
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
    });

    this.footerInfo = data.data.catalogue.components;

    if (this.footerInfo !== null) {
      this.loading = true;
    }
  },
  mounted() {
    if (this.loading) console.log(this.footerInfo);
  },
  methods: {
    grownFirst: function () {
      this.grown(this.$refs.image1, this.$refs.image2, this.$refs.image3, 1);
    },
    grownThird: function () {
      this.grown(this.$refs.image3, this.$refs.image1, this.$refs.image2, 3);
    },
    smallerFirst: function () {
      this.smaller(this.$refs.image1, this.$refs.image2, this.$refs.image3);
    },
    smallerThird: function () {
      this.smaller(this.$refs.image3, this.$refs.image1, this.$refs.image2);
    },
    grown: function (ref1, ref2, ref3, node) {
      if (node === 1) {
        gsap.to(ref1, { scale: 1.3, x: "20%", duration: 0.3, zIndex: 1 });
      } else if (node === 3) {
        gsap.to(ref1, { scale: 1.3, x: "-20%", duration: 0.3, zIndex: 1 });
      } else {
        gsap.to(ref1, { scale: 1.3, duration: 0.3, zIndex: 1 });
      }
      gsap.to(ref2, { scale: 0.9, opacity: 0.8, duration: 0.3, zIndex: 0 });
      gsap.to(ref3, { scale: 0.9, opacity: 0.8, duration: 0.3, zIndex: 0 });
    },
    smaller: function (ref1, ref2, ref3) {
      gsap.to(ref1, { scale: 1, x: 0, opacity: 1, duration: 0.3 });
      gsap.to(ref2, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(ref3, { scale: 1, opacity: 1, duration: 0.3 });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin: 40px 0 0 0;
}

.container__inner {
  width: 100%;
  height: auto;
  background: #000000;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-family: "Termina", sans-serif;
  color: #ffffff;
  padding: 0 20px;
}

.finisher__container-inner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footer__image {
  border-radius: 20px;
  border: 2px solid #000000;
}

.links {
  text-decoration: none;

  .active__button {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    height: 40px;
    background: #000;
    border-radius: 8px;
    border: 1px solid #000000;
    font-size: 16px;
    color: #fff;
    position: relative;
    transition: all 0.2s ease-out;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
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
      background: #b4f2cb;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:hover > img {
      transform: translateX(40px);
    }

    &:hover > p {
      color: #000;
    }

    &:hover:after {
      transform: translateX(100%);
    }

    @media (min-width: 1024px) {
      width: 250px;
      margin: 0;
    }
  }
}

.image__container {
  margin: 70px 0 40px 0;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 0;

  img {
    width: 150px;
    height: auto;
  }

  @media (min-width: 1024px) {
    img {
      margin-top: 50px;
      width: 380px;
      height: auto;
    }
  }
}

.rastr__image {
  width: 100%;
  height: 80px;
  border-radius: 0 0 12px 12px;
  background: transparent;
  position: relative;

  img {
    border-radius: 0 0 12px 12px;
    z-index: -1;
    width: 100%;
    height: auto;
    position: relative;
    top: -80px;
  }

  @media (min-width: 1024px) {
    img {
      border-radius: 0 0 12px 12px;
      z-index: -1;
      width: 100%;
      position: absolute;
      top: -650px;
    }
  }
  @media (min-width: 1480px) {
    img {
      top: -950px;
    }
  }
}

.finisher__container {
  position: relative;
  top: 100px;
  width: 100%;
  height: 1110px;
  padding-bottom: 30px;

  font-family: termina, sans-serif;
  font-style: normal;

  @media (min-width: 1024px) {
    top: 250px;
    height: 970px;
    padding-bottom: 0;
  }
}

.logo__image {
  width: 300px;

  @media (min-width: 1024px) {
    width: 500px;
  }
}

.info__div {
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
  }

  @media (min-width: 1024px) {
    margin: 0 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    div {
      width: 60%;
    }
    p {
      font-size: 20px;
    }
    ul {
      list-style: none;
      padding: 0;
      font-size: 20px;

      li {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
      }
    }
  }
}

.contact__div {
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: 20px 30px 0 0;

  a {
    font-weight: 900;
    font-size: 20px;
    text-decoration: none;
    color: #041b8d;
    transition: all 0.2s ease-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (min-width: 1024px) {
    margin: 0 80px;

    a {
      font-size: 60px;
    }
  }
}

.creator__div {
  width: 90%;
  height: auto;
  margin: 0 0 250px 5%;
  font-weight: 600;
  font-size: 10px;
  border: 1px solid #000000;
  border-radius: 12px;

  p {
    padding: 10px;
  }
}

.social__title {
  @media (min-width: 1024px) {
    font-size: 60px;
    width: 60%;
    line-height: 65px;
    margin-left: 50px;
  }
}

.hours {
  font-weight: 700;
  font-size: 30px !important;
  text-align: left;

  @media (min-width: 1024px) {
    text-align: right;
  }
}

.paragraph {
  font-size: 15px !important;
  font-weight: 400;
  margin-bottom: 30px;

  span {
    font-weight: 600;
    font-size: 25px !important;
  }
}

.address__p {
  line-height: 15px;
}

.creator__link {
  color: #000000;
  text-decoration: none !important;
  cursor: pointer;
}
</style>
