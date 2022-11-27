<template>
  <div class="info__div">
    <div class="info__div__outer" v-for="item in pricesInfo">
      <div class="info__div__inner">
        <h2>{{ item.name }}</h2>
      </div>
      <div v-if="item.components[0].content" class="info__div__outer">
        <p v-for="element in item.components[0].content.plainText">
          {{ element }}
        </p>
      </div>
      <p v-for="el in item.components[1].content.sections[0].properties">
        <span> {{ el.key }} | {{ el.value }} </span>
      </p>
      <div v-if="item.components[2].content" class="info__div__outer">
        <p>{{ item.components[2].content.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  props: {
    path: {
      type: String,
    },
  },
  data() {
    return {
      pricesInfo: null,
    };
  },
  async fetch() {
    const data = await simplyFetchFromGraph({
      query: `query PRICES__INFO($specPath: String!) {
  catalogue(language: "en", path: $specPath) {
    children {
      name
      ...on Document {
        components {
          content {
            ...on SingleLineContent {
              text
            }
            ...on RichTextContent {
              plainText
            }
            ...on PropertiesTableContent {
              sections {
                properties {
                  key
                  value
                }
              }
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

    this.pricesInfo = data.data.catalogue.children;
  },
  mounted() {
    if (this.pricesInfo) console.log(this.pricesInfo);
  },
};
</script>

<style scoped lang="scss" src="./../pages/offer/index.scss"></style>
