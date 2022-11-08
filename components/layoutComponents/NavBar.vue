<template>
  <div class="navbar">
    <transition-group v-if="visible" appear tag="ul" name="links" @before-enter="beforeEnter" @enter="enter">
      <li v-for="(link, index) in links" :key="link.name" :data-index="index">
        <button v-if="!link.slug" ref="butt" class="navi" @click="openDiv(index)">{{ link.name }}<span ref="span"
                                                                                                       class="more__span"/>
        </button>
        <div v-if="!link.slug" class="more__div" ref="second__div">
          <button @click="openDiv(index)" class="close__button" v-if="index === currentIndex"/>
          <ul>
            <li v-for="inside in link.insideLinks" v-if="index === currentIndex">
              <NuxtLink :to="inside.slug">
                <button class="navi" @click="$emit('close')">{{ inside.name }}</button>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <NuxtLink v-if="link.slug" @click="$emit('handleClick')" :to="link.slug">
          <button class="navi" ref="butt" @click="$emit('close')">{{ link.name }}</button>
        </NuxtLink>
      </li>
    </transition-group>
    <NuxtLink to="contact">
      <button class="contact__button">Umów się</button>
    </NuxtLink>
  </div>
</template>

<script>
import gsap from 'gsap'
import {ref} from "vue";

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
      vis: false,

      currentIndex: null,
    }
  },
  setup() {


    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-60px) translateX(-60px)'
    }
    const enter = (el, done) => {
      gsap.to(el, {opacity: 1, y: "0", x: "0", duration: .5, onComplete: done, delay: el.dataset.index * 0.15})
    }


    return {beforeEnter, enter}
  },
  methods: {
    openDiv(el) {
      const tl = gsap.timeline()
      if (this.vis === false) {
        tl.to(this.$refs.butt, {opacity: 0, duration: .2})
        tl.to(this.$refs.butt, {display: "none", duration: .2})
        tl.to(this.$refs.second__div, {left: 0, duration: .4})

        //.fromTo(this.$refs.open__more__text, { opacity: 0},{ opacity: 1, duration: .5})
        this.vis = true
        this.currentIndex = el

      } else {
        tl.to(this.$refs.second__div, {left: "100%", duration: .4})
        tl.to(this.$refs.butt, {display: "flex", duration: .2})
        tl.to(this.$refs.butt, {opacity: 1, duration: .2})


        this.vis = false


      }
    }
  }
}
</script>

<style scoped lang="scss">

.navbar {
  width: 100%;
  height: 68vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 1024px) {
    display: none;
  }

  ul {
    list-style: none;
    padding: 0;
    z-index: 1;

    a {
      text-decoration: none;
    }
  }

  .navi {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff;
    border: none;
    background: none;
    margin-bottom: 10px;

    button {
      position: relative;
    }
  }
}

.more__div {
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: 100%;
  bottom: 180px;
  z-index: 9999999;
  background: #000000;


}

.close__button {
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  position: relative;
  margin-bottom: 30px;

  &::after {
    content: '';
    width: 100%;
    height: 4px;
    background: #FFFFFF;
    position: absolute;
    top: 2px;
    border-radius: 25px;
    left: 20px;
    rotate: 20deg;
  }

  &::before {
    content: '';
    width: 100%;
    height: 4px;
    background: #FFFFFF;
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
    content: '';
    position: absolute;
    width: 3px;
    height: 25px;
    right: 0;
    background: #ffffff;
    rotate: 90deg;
    border-radius: 25px;
  }
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
  background: #B4F2CB;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 25px;
  color: #000000;


}

</style>
