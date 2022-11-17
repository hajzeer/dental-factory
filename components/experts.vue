<template>
  <div class="experts__container">
    <h2>Nasi eksperci</h2>
    <p>
      Najważniejsi są ludzie. To oni sprawiają, że wizyta u nas daje Ci powody
      do uśmiechu! Leczymy tak, jak sami chcielibyśmy być leczeni. To sprawia,
      że pacjenci do nas wracają.
    </p>
    <div v-if="loading">
      <div v-if="moreThan" class="many__md">
        <div v-for="item in specialist.components[0].content.items">
          <img :src="item.components[2].content.images[0].url" />
          <div>
            <h3>{{ item.name }}</h3>
            <p>
              {{ item.components[1].content.text }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="single__person"
        v-else
        v-for="item in specialist.components[0].content.items"
      >
        <div>
          <div class="inner__div">
            <img :src="item.components[2].content.images[0].url" />
            <div>
              <h3>{{ item.name }}</h3>
              <p v-if="item.components[1].content">
                {{ item.components[1].content.text }}
              </p>
              <div v-if="item.components[0].content">
                <p v-for="text in item.components[0].content.plainText">
                  {{ text }}
                </p>
              </div>
            </div>
          </div>

          <div class="property__class" v-if="item.components[3].content">
            <div
              v-for="property in item.components[3].content.sections[0]
                .properties"
            >
              <h2>{{ property.key }}</h2>
              <div>
                <p>{{ property.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>
        Nasi eksperci zaraz tu będą
      </p>
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "~/lib/graph";

export default {
  name: "experts",
  props: {
    path: {
      type: String,
    },
  },
  data() {
    return {
      loading: false,
      specialist: [],
      moreThan: false,
      specialize: [],
    };
  },
  async fetch() {
    const data = await simplyFetchFromGraph({
      query: `query GET_ALL_CATALOGUE_ITEMS($specPath: String!)  {
                catalogue(language: "en", path: $specPath) {
                name
            ...on Folder {
              components {
                content {
                  ...on ItemRelationsContent {
                    items {
                      name

                      components{
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
                    title
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
            }
  \t\t\t\t\t}
            }

`,
      variables: {
        specPath: this.path,
      },
    });
    this.specialist = data.data.catalogue;
    this.moreThan = this.specialist.components[0].content.items.length > 1;
    if (this.specialist !== null) {
      this.loading = true;
    }
  },
};
</script>

<style scoped lang="scss">
.experts__container {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 100%;
  }

  h2 {
    font-family: Termina;
    font-size: 40px;
    align-self: flex-start;

    @media (min-width: 1024px) {
      font-size: 80px;
      margin: 25px 0;
    }
  }

  h3 {
    font-family: Termina;
    font-size: 25px;
    align-self: flex-start;
  }

  p {
    font-family: Termina;
    font-weight: 600;

    @media (min-width: 1024px) {
      width: 60%;
      align-self: flex-start;
    }
  }
}

.many__md {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start !important;
    gap: 300px;
  }

  div {
    width: 100%;

    margin-top: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1024px) {
      width: 30%;
    }

    img {
      width: 100%;
      border-radius: 25px;
      border: 2px solid #000000;
    }

    div {
      margin: 0;
      @media (min-width: 1024px) {
        width: 100%;
      }

      h3 {
        width: 80%;
        align-self: flex-start;
        margin: 0 !important;
      }

      p {
        align-self: flex-start;
        margin: 0;
      }
    }
  }
}

.single__person {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    border-radius: 25px;
    border: 2px solid #000000;
  }
}

.property__class {
  color: #041b8d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 95%;
    font-size: 18px;
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      width: 95%;
      font-size: 65px;
      font-weight: 600;
      position: relative;
      text-align: left;
      left: 20px;
      top: 50px !important;
      margin: 0;
    }

    div {
      border: 2px solid #041b8d;
    }

    p {
      width: 100% !important;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    div {
      width: 50%;

      h2 {
        left: 170px;

        @media (min-width: 1480px) {
          margin-left: 100px;
        }
      }
    }
  }
}

.inner__div {
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: flex-end;

    img {
      width: 50%;
      margin-right: 80px !important;
    }

    p {
      width: 80%;
    }
    h3 {
      margin: 0;
      font-size: 50px;
    }
  }
}
</style>
