<template>
  <div>
    <div class="title__nav__div"><p>O nas / Zespół</p></div>
    <div class="container__inner">
      <h2 class="page__title">Nasz zespół</h2>
      <p>
        Najważniejsi są ludzie. To oni sprawiają, że wizyta u nas daje Ci powody
        do uśmiechu!
        <br /><br />
        Sebastian Burdeński dentysta, założyciel Dental Factory Perfekcjonista.
        Absolwent Uniwersytetu Medycznego we Wrocławiu. Tworzy kompleksowe plany
        leczenia dla naszych Pacjentów i czuwa nad ich przebiegiem. Z pasją
        zajmuje się leczeniem protetycznym i stomatologią estetyczną.
      </p>
    </div>
    <div class="team__div" v-if="loading">
      <div v-for="item in specialist">
        <img :src="item.components[2].content.images[0].url" />
        <h2>{{ item.name }}</h2>
        <p v-if="item.components[1].content">
          {{ item.components[1].content.text }}
        </p>
      </div>
    </div>
    <div v-else><p>NASI SPECJALIŚCI JUŻ DO CIEBIE IDĄ :)</p></div>
  </div>
</template>

<script>
import { getData } from "~/lib/graph/get-data";

export default {
  name: "index",
  data() {
    return {
      specialist: [],
      loading: false,
    };
  },
  async fetch() {
    const data = await getData({
      query: `query GET_ALL_CATALOGUE_ITEMS {
                catalogue(language: "en", path: "/specialists") {
            children {
              name
              ...on Document {
                components {
                  content {
                  ...on SingleLineContent {
                    text
                  }
                  ...on ImageContent {
                    images {
                      url
                    }
                  }
                \t...on PropertiesTableContent {
                    sections {
                      properties {
                       value
                        key
                      }
                    }
                  }
                  ...on RichTextContent {
                    plainText
                  }
                }
                }
              }
            }
            }
}
`,
    });
    this.specialist = data.data.catalogue.children;
    if (this.specialist !== null) {
      this.loading = true;
    }
  },
};
</script>

<style scoped lang="scss">
.team__div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 1024px) {
      width: 30% !important;
    }
  }

  img {
    width: 90%;
    border-radius: 20px;
    border: 2px solid #000000;
    position: relative;
    z-index: -1;

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 12px;
    }

    @media (min-width: 1024px) {
    }
  }

  h2 {
    @media (min-width: 1024px) {
    }
  }

  p {
    width: 50%;
    font-size: 15px;
    position: relative;
    align-self: flex-start;
    color: #000000;

    @media (min-width: 1024px) {
    }
  }
}

.container__inner {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

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

  @media (min-width: 1024px) {
    width: 60%;
    align-self: flex-end;
  }
}

img {
  width: 90%;
}

.page__title {
  @media (min-width: 1024px) {
    width: 80%;
    margin-top: 40px;
    font-size: 80px;
    line-height: 85px;
    margin-left: 50px;
  }
}
</style>
