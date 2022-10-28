<template>
<div class="navbar">
  <transition-group v-if="visible" appear tag="ul" name="links"  @before-enter="beforeEnter" @enter="enter">
    <li v-for="(link, index) in links" :key="link.name" :data-index="index" ><button v-if="!link.slug" class="navi"  @click="openDiv(link.visibility, link.refer)">{{link.name}}<span ref="span" class="more__span"/></button>
        <div v-if="!link.slug">
          <ul v-for="inside in link.insideLinks" class="more__div">
            <li ><NuxtLink :to="inside.slug"><button class="navi" @click="$emit('close')">{{inside.name}}</button></NuxtLink></li>
          </ul>
        </div>

      <NuxtLink v-if="link.slug" @click="$emit('handleClick')" :to="link.slug"><button class="navi" @click="$emit('close')">{{link.name}}</button></NuxtLink></li>
  </transition-group>
  <button class="contact__button">Umów się</button>
</div>
</template>

<script>
import gsap from 'gsap'
import {ref} from "vue";

export default {
  props: {
    visible: {
      type: Boolean,
    }
  },
  setup() {
    const links = ref([
      {name: "Home", slug: "/"},
      {name: "O nas", insideLinks: [
          {name: "Centrum", slug: "/about/center"},
          {name: "Pierwsza wizyta", slug: "/about/start"},
          {name: "Nasz zespół", slug: "/about/team"},
        ], visibility: false, refer: "more1"},
      {name: "Leczenie", insideLinks:  [
          {name: "Wybielanie zębów", slug: "/offer/whitening"},
          {name: "Licówki porcelanowe", slug: "/offer/veeners"},
          {name: "Protezy zębowe", slug: "/offer/denture"},
          {name: "Implanty i chirurgia", slug: "/offer/implants"},
          {name: "Korony i mosty", slug: "/offer/crown-and-bridges"},
          {name: "Ortodoncja", slug: "/offer/ortodontics"},
          {name: "Leczenie kanałowe", slug: "/offer/root-canal-therapy"},
          {name: "Leczenie próchnicy", slug: "/offer/dental-caries"},
          {name: "Higienizacja", slug: "/offer/hygiene"},
          {name: "Szyny relaksacyjne", slug: "/offer/dental-guard"},
          {name: "RTG o tomografia zębów", slug: "/offer/rtg-tomography"},
          {name: "Medycyna estetyczna", slug: "/offer/aesthetic-medicine"},
        ], visibility: false, refer: "more2"},
      {name: "Ceny", insideLinks: [
          {name: "Cennik", slug: "/price/prices"},
          {name: "Mediraty", slug: "/price/mediraty"},
        ], visibility: false, refer: "more3"},
      {name: "Opinie", slug: "/reviews"},
      {name: "Przed i po", slug: "/"},
      {name: "Dental travel", slug: "/dental-travel"},
      {name: "Kontakt", slug: "/contact"},
      {name: "Konsultacja on-line", slug: "/online"},

    ])

    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(-60px) translateX(-60px)'
    }
    const enter = (el, done) => {
      gsap.to(el, {opacity: 1, y: "0", x: "0", duration: .5, onComplete: done, delay: el.dataset.index*0.15})
    }


    return{links, beforeEnter, enter}
  },
  methods: {
    openDiv(el, obj) {
      const tl = gsap.timeline()
      if (el === false) {
          tl.to(this.$refs.span, {rotate: '135deg', duration: .5})
          tl.fromTo(obj, { height: 0},{ height: "100%", duration: .5})
          .to(obj, { display: 'flex', duration: .5})
          //.fromTo(this.$refs.open__more__text, { opacity: 0},{ opacity: 1, duration: .5})
        el = true
      } else {
        tl.to(this.$refs.span, {rotate: 0, duration: .5})
        tl.to(obj, { display: 'none'} )
        el = false

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
  flex-direction: column;
  padding: 20px;

  ul {
    position: relative;
    top: 15%;
    list-style: none;
    padding: 0;
  }

  .navi {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    text-decoration: none;
    color: #ffffff;
    border: none;
    background: none;

    button {
      position: relative;
    }
  }
}

.more__div {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  left: 40px;
  button {
    font-size: 22px !important;
  }
}

.more__span {
  position: absolute;
  width: 3px;
  height: 25px;
  right: 50%;
  background: #ffffff;

  &:after {
    content: '';
    position: absolute;
    width: 3px;
    height: 25px;
    right: 0;
    background: #ffffff;
    rotate: 90deg;
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
