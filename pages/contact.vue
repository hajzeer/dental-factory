<template>
  <div>
    <div class="title__nav__div"><p>Kontakt</p></div>
    <div class="head__text__contact">
      <h2 class="page__title">
        Kontakt
      </h2>
    </div>
    <div class="finisher__container" v-if="footerInfo">
      <div class="finisher__container-inner">
        <div class="info__div">
          <div>
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
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "contact",
  data() {
    return {
      footerInfo: null,
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
        }
      }
    }
  }
}
`,
    });

    this.footerInfo = data.data.catalogue.components;
  },
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
  margin: 30px 0 0 30px;
}

p {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 10px;
}

.head__text__contact {
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    align-self: flex-start;
    div {
      width: 100%;
    }
    h2 {
      text-align: left;
      margin-left: 80px;
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

.finisher__container-inner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.finisher__container-inner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
    font-family: termina, sans-serif;
    margin: 0 10px;
  }

  @media (min-width: 1024px) {
    margin: 0 75px;

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
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      li {
        width: 60%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
      }
    }
  }
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
      margin: 5px;
    }
  }
}

.contact__div {
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: 20px 20px 0 0;
  font-family: termina, sans-serif;

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
    margin: 50px 80px;

    a {
      font-size: 60px;
    }
  }
}

.hours {
  font-weight: 700;
  font-size: 20px;

  @media (min-width: 1024px) {
    font-size: 40px !important;
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
  line-height: 20px;
}
</style>
