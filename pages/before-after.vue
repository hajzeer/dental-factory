<template>
  <div>
    <div class="title__nav__div"><p>Przed i po</p></div>
    <div class="container__inner">
      <h2 class="page__title">Przed i po</h2>
      <p class="info__p">Zobacz efekty naszego leczenia</p>
    </div>
    <div class="main__div" v-for="item in queryInfo">
      <h2>{{ item.name }}</h2>
      <div>
        <div>
          <p v-for="element in item.components[0].content.plainText">
            {{ element }}
          </p>
          <p>
            <span>{{ item.components[1].content.text }}</span>
          </p>

          <NuxtLink :to="item.components[4].content.text">
            <button class="active__button">
              <p>
                Dowiedz się więcej <br />o {{ item.components[3].content.text }}
              </p>
            </button>
          </NuxtLink>
        </div>
        <img :src="item.components[2].content.firstImage.url" />
      </div>
    </div>
  </div>
</template>

<script>
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "before-after",
  data() {
    return {
      queryInfo: null,
    };
  },
  async fetch() {
    const data = await simplyFetchFromGraph({
      query: `query GET_DATA_BEFORE_AFTER {
  catalogue(path: "/przed-i-po") {
    children {
    name
    ...on Document {
      components {
        content {
          ...on SingleLineContent {
            text
          }
          ...on ImageContent {
            firstImage {
              url
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

    this.queryInfo = data.data.catalogue.children;
  },
};
</script>

<style scoped lang="scss">
.title__nav__div {
  border-bottom: 1px solid #000000;
  padding: 20px 0 0 0;
}

.page__title {
  @media (min-width: 1024px) {
    width: 60%;
    margin-top: 40px;
    font-size: 100px;
    line-height: 110px;
    margin-left: 50px;
  }
}

.info__p {
  align-self: flex-start;
  @media (min-width: 1024px) {
    font-size: 25px;
    margin-left: 50px;
  }
}

.container__inner {
  width: 100%;
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

.main__div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 90% !important;
    align-self: center !important;
    border-radius: 12px;
    border: 2px solid #000000;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      align-self: flex-start;
    }
  }

  @media (min-width: 1024px) {
    margin: 80px;

    h2 {
      font-size: 70px;
      width: 70%;
      margin-bottom: 50px;
    }

    p {
      margin-bottom: 10px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }

    img {
      width: 50% !important;
      margin-right: 120px;
      border-radius: 12px;
      border: 2px solid #000000;
    }
  }
}

a {
  width: 90%;
}

.active__button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;
  height: 55px;
  width: 100%;
  background: #b4f2cb;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 16px;
  color: #000000;
  position: relative;
  transition: all 0.2s ease-out;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  margin-bottom: 30px;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: all 0.2s ease-out;
    background: #000000;
    z-index: 1;
  }

  p {
    transition: all 0.2s ease-out;
    z-index: 9;
    align-self: center !important;
    text-decoration: none;
    margin: 0 !important;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:hover > img {
    transform: translateX(40px);
  }

  &:hover > p {
    color: #b4f2cb;
  }

  &:hover:after {
    transform: translateX(100%);
  }

  @media (min-width: 1024px) {
    height: 60px;
    width: 300px;
    font-size: 15px;
    justify-self: center;
    margin-left: 20px;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      align-self: center !important;
    }
  }
}
</style>
