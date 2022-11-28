<template>
  <div class="info__div" v-if="offerInfo">
    <div class="info__div__outer" v-for="item in offerInfo.chunks">
      <div v-if="item[3]" class="imgDiv">
        <img
          v-if="item[3].content !== null"
          :src="item[3].content.firstImage.url"
        />
      </div>

      <p>
        <span>
          {{ item[0].content.text }}
        </span>
      </p>

      <p v-for="element in item[1].content.plainText">
        {{ element }}
      </p>
      <div v-if="item[2].content !== null" class="info__div__outer sections">
        <p v-for="el in item[2].content.sections[0].properties">
          <span> {{ el.key }}: {{ el.value }} </span>
        </p>
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
      offerInfo: null,
    };
  },
  async fetch() {
    const data = await simplyFetchFromGraph({
      query: `query GET_DATA_BEFORE_AFTER($specPath: String!) {
  catalogue(language: "en", path: $specPath) {
      name
    ...on Folder {
      components {
        content {
\t\t\t\t...on ContentChunkContent {
          chunks {
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
              ...on ImageContent {
                firstImage {
                  url
                }
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

    this.offerInfo = data.data.catalogue.components[1].content;
  },
};
</script>

<style scoped lang="scss" src="./../pages/offer/index.scss"></style>
