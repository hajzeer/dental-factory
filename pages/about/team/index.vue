<template>
  <div>
    <div class="title__nav__div"><p>O nas / Zespół</p></div>
    <div class="container__inner">
      <h2>Nasz zespół</h2>
      <p>
        Najważniejsi są ludzie. To oni sprawiają, że wizyta u nas daje Ci powody
        do uśmiechu! Sebastian Burdeński dentysta, założyciel Dental Factory
        Perfekcjonista. Absolwent Uniwersytetu Medycznego we Wrocławiu. Tworzy
        kompleksowe plany leczenia dla naszych Pacjentów i czuwa nad ich
        przebiegiem. Z pasją zajmuje się leczeniem protetycznym i stomatologią
        estetyczną.
      </p>
    </div>
    <div v-for="item in specialist.data.catalogue.children" class="team__div">
      <div>
        <img :src="item.components[2].content.images[0].url" />
        <p>{{ item.name }}</p>
      </div>
    </div>
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
    this.specialist = await getData({
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
    if (this.specialist) {
      this.loading = true;
    }
  },
  mounted() {
    console.log(this.specialist);
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

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }

  p {
    width: 50%;
    font-size: 25px;
    position: relative;
    align-self: flex-start;
    bottom: 150px;
    left: 20px;
    color: #b4f2cb;
  }
}

.container__inner {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
}

img {
  width: 90%;
}
</style>
