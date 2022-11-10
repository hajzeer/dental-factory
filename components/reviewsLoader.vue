<template>
  <div class="container">
    <h2 class="title">Opinie o nas</h2>
    <button class="prev__button" @click="changePrev">
      <img src="/Path%2052.svg" />
    </button>
    <div class="container__inner" :style="lengthList">
      <div
        class="reviews__div"
        v-for="(item, index) in items"
        ref="interact"
        :style="changePosition"
      >
        <div :active="index === currentIndexFunc">
          <p class="stars">{{ item.stars }}</p>
          <h2>~ {{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <button class="next__button" @click="changeNext">
      <img src="/Path%2053.svg" />
    </button>
    <p class="info__p">
      przesuń <br />
      aby zobaczyć kolejne
    </p>

    <a :href="href" target="_blank">
      <button class="anchor__button">
        <p>Sprawdź więcej opinii {{ reviewsName }}</p>
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: "reviewsLoader",
  props: {
    items: {
      type: Array,
      required: true,
    },
    reviewsName: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      autoSwiper: true,
      stackableContent: null,
      touch: {
        startX: 0,
        endX: 0,
      },
      slidePosition: {
        x: 0,
      },
      currentIndex: 0,
    };
  },
  computed: {
    changePosition() {
      return {
        transform: "translateX(-" + this.currentIndex * 100 + "%)",
      };
    },
    lengthList() {
      if (this.items === null) {
        return { width: 2 * 100 + "%" };
      } else {
        return { width: this.items.length * 100 + "%" };
      }
    },
    currentIndexFunc() {
      return this.currentIndex;
    },
  },
  mounted() {
    this.$el.addEventListener("touchstart", (event) => this.touchstart(event));
    this.$el.addEventListener("touchmove", (event) => this.touchmove(event));
    this.$el.addEventListener("touchend", () => this.touchend());
    const timeout = () => {
      if (this.autoSwiper === true) {
        setTimeout(() => {
          if (this.currentIndex >= this.items.length - 1) {
            this.currentIndex = 0;
          } else {
            this.currentIndex = this.currentIndex + 1;
          }
          timeout();
        }, 5000);
      }
    };
    timeout();
  },
  methods: {
    changeNext() {
      if (this.currentIndex >= this.items.length - 1) {
        this.currentIndex = 0;
        this.autoSwiper = false;
      } else {
        this.currentIndex = this.currentIndex + 1;
        this.autoSwiper = false;
      }
    },
    changePrev() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.items.length - 1;
        this.autoSwiper = false;
      } else {
        this.currentIndex = this.currentIndex - 1;
        this.autoSwiper = false;
      }
    },
    touchstart(event) {
      this.isAnimating = !this.isAnimating;
      this.touch.startX = event.touches[0].clientX;
      this.touch.endX = 0;
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX;
    },
    touchend() {
      if (
        !this.touch.endX ||
        Math.abs(this.touch.endX - this.touch.startX) < 20
      ) {
        return;
      }
      if (this.touch.endX < this.touch.startX) {
        if (this.currentIndex >= this.items.length - 1) {
          this.currentIndex = 0;
          this.autoSwiper = false;
        } else {
          this.currentIndex = this.currentIndex + 1;
          this.autoSwiper = false;
        }
      } else {
        if (this.currentIndex <= 0) {
          this.currentIndex = this.items.length - 1;
          this.autoSwiper = false;
        } else {
          this.currentIndex = this.currentIndex - 1;
          this.autoSwiper = false;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  height: auto;
  width: 95%;
  overflow: hidden;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}

.title {
  color: #ffffff;
  font-family: Termina;
  position: absolute;
  left: 40px;
  font-size: 30px;
  top: -35px;

  @media (min-width: 1024px) {
    font-size: 50px;
    top: 60px;
    left: 200px;
  }
}

.container__inner {
  overflow: hidden;
  display: flex;
  flex-direction: row;
  height: auto;
  width: 95%;
  color: #ffffff;
  font-family: Termina;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media (min-width: 1024px) {
    width: 100%;
  }

  .reviews__div {
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-out;
    padding: 20px;
    @media (min-width: 1024px) {
      padding: 150px;
    }

    div {
      border: 2px solid #ffffff;
      padding: 20px;
      border-radius: 20px;
    }

    .stars {
      position: relative;
      left: 55%;
      font-size: 45px;
      font-weight: 600;
      align-self: flex-end;
      justify-self: center;
      margin: 0;
    }

    @media (min-width: 1024px) {
      div {
        padding: 50px;
      }
      p {
        width: 60%;
      }
      .stars {
        position: relative;
        left: 80%;
        font-size: 70px;
        font-weight: 600;
        align-self: flex-end;
        justify-self: center;
        margin: 0;
      }
    }
  }
}

a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.anchor__button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  margin: 30px 0 0 0;
  width: 90%;
  height: 70px;
  background: #b4f2cb;
  border-radius: 20px;
  border: 1px solid #000000;
  font-size: 15px;
  color: #000000;
  cursor: pointer;
  transition: all 0.4s ease-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 1024px) {
    width: 300px;
    align-self: flex-end;
    position: absolute;
    right: 14.5%;
    bottom: 30px;
  }
}

.next__button {
  display: none;
  cursor: pointer;
  z-index: 999;
  transition: all 0.4s ease-out;

  &:hover {
    transform: translateX(10px);
  }

  &:active {
    transform: translateX(20px);
  }

  @media (min-width: 1024px) {
    display: inline;
    right: 30px;
    position: absolute;
    top: 48%;
    border: none;
    background: transparent;

    img {
      width: 30px;
    }
  }
}

.prev__button {
  display: none;
  cursor: pointer;
  z-index: 999;
  transition: all 0.4s ease-out;

  &:hover {
    transform: translateX(-10px);
  }

  &:active {
    transform: translateX(-20px);
  }

  @media (min-width: 1024px) {
    display: inline;
    left: 30px;
    position: absolute;
    top: 48%;
    border: none;
    background: transparent;

    img {
      width: 30px;
    }
  }
}

.info__p {
  color: #ffffff;
  text-align: center;
  font-family: Termina;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    display: none;
  }
}
</style>
