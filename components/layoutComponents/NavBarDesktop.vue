<template>
  <div class="navbar">
    <ul>
      <li v-for="(link, index) in links" :key="link.name" :data-index="index" ><button v-if="!link.slug" ref="butt" class="navi" @click="openDiv(index)">{{link.name}}</button>
        <div v-if="!link.slug" class="more__div" ref="second__div">
          <button @click="openDiv(index)" class="close__button" v-if="index === currentIndex" :class="{isCurrent: index === currentIndex}"/>
          <ul>
            <li v-for="inside in link.insideLinks" v-if="index === currentIndex" :class="{isCurrent: index === currentIndex}"><NuxtLink :to="inside.slug"><button class="nav__inner" @click="$emit('close')">{{inside.name}}</button></NuxtLink></li>
          </ul>
        </div>

        <NuxtLink v-if="link.slug" @click="$emit('handleClick')" :to="link.slug"><button class="navi" ref="butt"  @click="$emit('close')">{{link.name}}</button></NuxtLink></li>
    </ul>
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
  data() {
    return {
      vis: false,

      currentIndex: null,
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
      {name: "Dental travel", slug: "/dental-travel"},
      {name: "Przed i po", slug: "/"},
      {name: "Kontakt", slug: "/contact"},
      {name: "Konsultacja on-line", slug: "/online"},

    ])




    return{links}
  },
  methods: {
    openDiv(el) {
      const tl = gsap.timeline()
      if (this.vis === false) {
        tl.to(this.$refs.butt, {opacity: 0, duration: .2})
        tl.to(this.$refs.butt, {display: "none", duration: .2})
        tl.to(this.$refs.second__div, {left:"-50%", duration: .4})

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

  @media (max-width: 1024px) {
    display: none;
  }

  width: 600px;
  height: 120px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 20px;
  z-index: 99999;



  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    li {
      width: 20%;
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
  background: #B4F2CB;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 25px;
  color: #000000;



}

</style>
