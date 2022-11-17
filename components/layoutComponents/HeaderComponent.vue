<template>
  <header class="container">
    <a href="tel:+48-691-81-84-88">
      <button class="active__button contact">
        <img class="contact__btn" src="/contactbtn.png" alt="contact button" />
      </button>
    </a>

    <div>
      <NuxtLink to="/">
        <img class="logo" src="/logo.png" alt="logo" />
      </NuxtLink>
    </div>
    <NavBarDesktop
      :visible="visible"
      :links="links"
      @indexCurrent="handleButton"
      @close="closeNav"
    />
    <div class="desktop__nav__div" ref="second__div">
      <div ref="inner__div" v-if="currentIndex !== null">
        <p>Nasza oferta:</p>
        <NuxtLink
          :to="item.slug"
          v-for="item in links[currentIndex].insideLinks"
        >
          <button @click="closeNav">{{ item.name }}</button>
        </NuxtLink>

        <button class="close__button" @click="closeNav"></button>
      </div>
    </div>
    <div class="desktop__buttons">
      <NuxtLink to="appointment">
        <button class="contact__button-inner">
          <img class="inner__image" src="/calender.svg" />
          <span>
            Umów się
          </span>
        </button>
      </NuxtLink>
      <a href="tel:+48-691-818-488">
        <button class="contact__button-inner">
          <img class="inner__image" src="/phone.svg" />
          <span>
            Zadzwoń
          </span>
        </button>
      </a>
    </div>
    <button
      class="active__button nav__button"
      @click="handleClick"
      ref="button__nav"
    >
      <span class="upper__line" ref="upper__line" />
      <span class="middle__line" ref="middle__line" />
      <span class="lower__line" ref="lower__line" />
    </button>
    <nav ref="nav">
      <NavBar :visible="visible" @close="closing" :links="links" />
    </nav>
  </header>
</template>

<script>
import gsap from "gsap";
import NavBar from "~/components/layoutComponents/NavBar";
import NavBarDesktop from "@/components/layoutComponents/NavBarDesktop";

export default {
  name: "HeaderComponent",
  components: { NavBarDesktop, NavBar },

  data() {
    return {
      visible: false,
      links: [
        {
          name: "O nas",
          insideLinks: [
            { name: "Centrum", slug: "/about/center" },
            { name: "Pierwsza wizyta", slug: "/about/start" },
            { name: "Nasz zespół", slug: "/about/team" },
          ],
          visibility: false,
          refer: "more1",
        },
        {
          name: "Leczenie",
          insideLinks: [
            { name: "Wybielanie zębów", slug: "/offer/whitening" },
            { name: "Licówki porcelanowe", slug: "/offer/veeners" },
            { name: "Bonding kompozytowy", slug: "/offer/bonding" },
            { name: "Protezy zębowe", slug: "/offer/denture" },
            { name: "Implanty i chirurgia", slug: "/offer/implants" },
            { name: "Korony i mosty", slug: "/offer/crown-and-bridges" },
            { name: "Ortodoncja", slug: "/offer/ortodontics" },
            { name: "Leczenie kanałowe", slug: "/offer/root-canal-therapy" },
            { name: "Leczenie próchnicy", slug: "/offer/dental-caries" },
            { name: "Higienizacja", slug: "/offer/hygiene" },
            { name: "Szyny relaksacyjne", slug: "/offer/dental-guard" },
            { name: "RTG i tomografia zębów", slug: "/offer/rtg-tomography" },
            { name: "Medycyna estetyczna", slug: "/offer/aesthetic-medicine" },
          ],
          visibility: false,
          refer: "more2",
        },
        {
          name: "Ceny",
          insideLinks: [
            { name: "Cennik", slug: "/price/prices" },
            { name: "Mediraty", slug: "/price/mediraty" },
          ],
          visibility: false,
          refer: "more3",
        },
        { name: "Opinie", slug: "/reviews" },
        { name: "Dental travel", slug: "/dental-travel" },
        { name: "Przed i po", slug: "/before-after" },
        { name: "Kontakt", slug: "/contact" },
        { name: "Konsultacja on-line", slug: "/online" },
      ],
      currentIndex: null,
      vis: false,
    };
  },
  methods: {
    closeNav() {
      const tl = gsap.timeline();
      setTimeout(() => {
        if (this.vis === true) {
          this.currentIndex = null;
          tl.to(this.$refs.second__div, { left: "100%", duration: 0.4 });
          this.vis = false;
        }
      }, 200);
    },
    handleButton({ index, slider }) {
      this.currentIndex = index;
      slider = this.openDiv(this.currentIndex);
    },
    openDiv(index) {
      const tl = gsap.timeline();
      if (this.vis === false) {
        tl.to(this.$refs.second__div, { left: "0", duration: 0.4 });

        this.vis = true;
        this.currentIndex = index;
      }
    },
    closing: function () {
      setTimeout(() => this.handleClick(), 200);
    },

    handleClick() {
      if (this.visible === false) {
        gsap.to(this.$refs.button__nav, { rotate: "180deg", duration: 0.5 });
        gsap.to(this.$refs.upper__line, {
          rotate: "45deg",
          y: "10px",
          duration: 0.2,
          background: "#ffffff",
        });
        gsap.to(this.$refs.lower__line, {
          rotate: "135deg",
          y: "-10px",
          duration: 0.2,
          background: "#ffffff",
        });
        gsap.to(this.$refs.middle__line, {
          x: "10px",
          opacity: 0,
          duration: 0.2,
          background: "#ffffff",
        });
        gsap.fromTo(
          this.$refs.nav,
          { x: "100%", y: "-100%", display: "block", opacity: 0 },
          {
            x: "0",
            y: "0",
            duration: 0.5,
            display: "block",
            opacity: 1,
          }
        );
        this.visible = true;
      } else if (this.visible === true) {
        gsap.to(this.$refs.button__nav, { rotate: "-180deg", duration: 0.5 });
        gsap.to(this.$refs.upper__line, {
          rotate: "0",
          y: "0",
          duration: 0.4,
          background: "#000000",
        });
        gsap.to(this.$refs.lower__line, {
          rotate: "0",
          y: "0",
          duration: 0.4,
          background: "#000000",
        });
        gsap.to(this.$refs.middle__line, {
          x: "0",
          opacity: 1,
          duration: 0.2,
          background: "#000000",
        });
        gsap.to(this.$refs.nav, {
          x: "100%",
          y: "-100%",
          duration: 0.5,
          display: "none",
          opacity: 0,
        });
        this.visible = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.desktop__nav__div {
  @media (max-width: 1024px) {
    display: none;
  }
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
  background: #b4f2cb;
  position: absolute;
  top: 120px;
  width: 100%;
  height: 560px;
  left: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  p {
    font-size: 23px;
    font-weight: 800;
    font-family: Termina;
    margin-bottom: 5px;
    margin-left: 100px;
    text-transform: uppercase;
  }

  button {
    font-size: 20px;
    border: none;
    background: transparent;
    font-weight: 600;
    font-family: Termina;
    margin-left: 100px;
    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.2) translateX(-10px);
      color: #1e1d1d;
    }
  }
}

.close__button {
  background: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 40px;
  top: 20px;

  &::after {
    background: #000000;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    rotate: 45deg;
  }

  &::before {
    background: #000000;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    rotate: -45deg;
  }
}

.active {
  transition: all 0.5s ease-out;
  transform: translateX(0);
}

.disactive {
  transition: all 0.5s ease-out;
  transform: translateX(0);
}

.contact {
  z-index: -1 !important;
  @media (min-width: 1024px) {
    display: none;
  }
}

.nav__button {
  @media (min-width: 1024px) {
    display: none;
  }
}

.desktop__buttons {
  display: none;

  a {
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    margin-right: 60px;
    flex-grow: 1;
  }
}

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
  background: #ffffff;

  @media (min-width: 1024px) {
    height: 120px;
    background: #b4f2cb;
    position: absolute;
  }
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
  width: 30px;
  height: 30px;
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
  width: 30px;
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

  @media (min-width: 1024px) {
    display: none;
  }
}

.contact__button-inner {
  display: none;

  @media (min-width: 1024px) {
    width: 230px;
    height: 45px;
    margin: 5px;
    background: #000000;
    border-radius: 12px;
    color: #ffffff;
    font-family: Termina;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    border: none;

    span {
      width: 100%;
      position: relative;
      right: 15px;
    }
  }
}

.inner__image {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.logo {
  width: 100px;

  @media (min-width: 1024px) {
    width: 180px;
    flex-grow: 1;
    margin-left: 40px;
  }
}
</style>
