<template>
<header class="container">
  <button class="active__button">
    <img class="contact__btn" src="contactbtn.png" alt="contact button">
  </button>
  <div>
    <NuxtLink to="/">
      <img class="logo" src="logo.png" alt="logo">
    </NuxtLink>
  </div>

  <button class="active__button" @click="handleClick" ref="button__nav">
    <span class="upper__line"  ref="upper__line"/>
    <span class="middle__line" ref="middle__line"/>
    <span class="lower__line"  ref="lower__line"/>
  </button>
  <nav ref="nav">
    <NavBar :visible="visible" @close="closing"/>
  </nav>
</header>
</template>

<script>

import gsap from 'gsap'
import NavBar from "~/components/layoutComponents/NavBar";
export default {
  name: "HeaderComponent",
  components: {NavBar},
  data() {
    return {
      visible: false
    }
},
  methods: {
    closing: function() {
      setTimeout(() => (this.handleClick()), 200)
    },
    handleClick(){
      if(this.visible === false) {
        gsap.to(this.$refs.button__nav, ({rotate: "180deg", duration: 0.5}))
        gsap.to(this.$refs.upper__line, ({rotate: "45deg",y: "10px", duration: 0.2, background: "#ffffff"}))
        gsap.to(this.$refs.lower__line, ({rotate: "135deg",y: "-10px", duration: 0.2, background: "#ffffff"}))
        gsap.to(this.$refs.middle__line, ({x: "10px", opacity: 0, duration: 0.2, background: "#ffffff"}))
        gsap.fromTo(this.$refs.nav, ({x: "100%", y:"-100%", display: 'block', opacity: 0}),({x: "0", y: "0", duration: 0.5, display:'block', opacity: 1}))
        this.visible = true;
      }
      else if (this.visible === true) {
        gsap.to(this.$refs.button__nav, ({rotate: "-180deg", duration: 0.5}))
        gsap.to(this.$refs.upper__line, ({rotate: "0", y: "0", duration: 0.4, background: "#000000"}))
        gsap.to(this.$refs.lower__line, ({rotate: "0", y: "0", duration: 0.4, background: "#000000"}))
        gsap.to(this.$refs.middle__line, ({x: "0", opacity: 1,duration: 0.2, background: "#000000"}))
        gsap.to(this.$refs.nav, ({x: "100%", y: "-100%", duration: 0.5, display: "none", opacity: 0}))
        this.visible = false;
      }
    }

  }
}
</script>

<style scoped lang="scss">

.container {
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #000000;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  background: #FFFFFF;
}

nav {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: black;
  display: none;
  top: 0;
  left: 0;
}

button {
  cursor: pointer;
  margin: 0 20px;
}

.contact__btn {
  width: 40px;
  height: 40px;
  position: relative;
  top: 0;
  left: 0;
}

.logo__button {
  background: transparent;
  border: none;
}

.active__button {
  position: relative;
  top: 5px;
  width: 40px;
  height: 60px;
  padding: 0;
  background: transparent;
  border: none;
  z-index: 9999;

  span {
  position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #000000;
    z-index: 9999;

  }

  .upper__line {
    top: 20px;
  }

  .lower__line {
    top: 40px;
  }
}
.logo {
width: 100px;
}
</style>
