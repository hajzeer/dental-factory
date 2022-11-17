<template>
  <div class="navbar">
    <ul>
      <li v-for="(link, index) in links" :key="link.name" :data-index="index">
        <button
          v-if="!link.slug"
          ref="butt"
          class="navi"
          @click="handleButton(index)"
        >
          {{ link.name }}
        </button>

        <NuxtLink
          v-if="link.slug"
          :to="link.slug"
          @click="$emit('handleClick')"
        >
          <button ref="butt" class="navi" @click="$emit('close')">
            {{ link.name }}
          </button>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import gsap from "gsap";
import { ref } from "vue";

export default {
  props: {
    visible: {
      type: Boolean,
    },
    links: {
      type: [],
    },
  },
  data() {
    return {
      currentIndex: null,
    };
  },
  methods: {
    handleButton(el) {
      this.currentIndex = el;
      this.$emit("indexCurrent", { index: this.currentIndex, slider: null });
    },
  },
};
</script>

<style scoped lang="scss">
.navbar {
  @media (max-width: 1024px) {
    display: none;
  }
  flex-grow: 10;

  width: 700px;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99999;

  ul {
    list-style: none;
    width: 70%;
    padding: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    li {
      width: 25%;
      text-align: center;
    }

    a {
      text-decoration: none;
    }
  }

  .navi {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 600;
    margin: 3px 0;
    font-size: 12px;
    text-decoration: none;
    color: #000000;
    border: none;
    background: none;
    cursor: pointer;

    button {
      cursor: pointer;

      position: relative;
    }
  }
}

.nav__inner {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-decoration: none;
  color: #000000;
  border: none;
  background: none;
  margin-bottom: 10px;
  cursor: pointer;

  button {
    cursor: pointer;
    position: relative;
  }
}

.more__div {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  position: absolute;
  left: 100%;
  bottom: 30px;
}

.close__button {
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;

  &::after {
    content: "";
    width: 100%;
    height: 4px;
    background: #ffffff;
    position: absolute;
    top: 2px;
    border-radius: 25px;
    left: 20px;
    rotate: 20deg;
  }

  &::before {
    content: "";
    width: 100%;
    height: 4px;
    background: #ffffff;
    position: absolute;
    left: 20px;
    border-radius: 25px;
    bottom: 0px;
    rotate: -20deg;
  }
}

.more__span {
  position: absolute;
  width: 3px;
  height: 25px;
  right: 50%;
  background: #ffffff;
  border-radius: 25px;

  &:after {
    content: "";
    position: absolute;
    width: 3px;
    height: 25px;
    right: 0;
    background: #ffffff;
    rotate: 90deg;
    border-radius: 25px;
  }
}

.isCurrent {
  z-index: 9999999999;
}

.contact__button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  position: absolute;
  bottom: 100px;
  left: 50%;
  margin-left: -44%;
  width: 88%;
  height: 65px;
  background: #b4f2cb;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 25px;
  color: #000000;
}
</style>
