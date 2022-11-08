<template>
  <div class="container">
    <div class="container__inner">
      <div class="image__container">
        <img
          ref="image1"
          alt="cabinet__image"
          class="footer__image"
          src="/footerImg1.png"
          @mouseenter="grownFirst"
          @mouseleave="smallerFirst"
        />
        <img
          ref="image3"
          alt="cabinet__image"
          class="footer__image"
          src="/footerImg3.png"
          @mouseenter="grownThird"
          @mouseleave="smallerThird"
        />
      </div>
      <div>
        <div>
          <h2 class="social__title">Dołącz do nas na instagramie</h2>
        </div>
      </div>
      <contact-form />
      <div class="rastr__image">
        <img alt="rastr image" src="/rastrFooter.png" />
      </div>
    </div>
    <div class="finisher__container">
      <div class="finisher__container-inner">
        <div class="info__div">
          <div>
            <img alt="logo footer" class="logo__image" src="/logoFooter.png" />
            <p>
              Dental Factory Censtrum Stomatologiczne <br />
              Dąbrowskiego 34/U4 <br />
              50-457, Wrocław
            </p>
            <a class="links" href="https://g.page/dentalfactory?share">
              <button class="active__button">
                <p><span>Dojazd</span></p>
              </button>
            </a>
          </div>
          <div>
            <p>Godziny otwarcia:</p>
            <ul>
              <li><span>Pn</span> 9:00 - 20:00</li>
              <li><span>Wt</span> 9:00 - 20:00</li>
              <li><span>Śr</span> 9:00 - 20:00</li>
              <li><span>Czw</span> 9:00 - 20:00</li>
              <li><span>Pt</span> 9:00 - 20:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="contact__div">
        <a href="tel:+48-691-818-488">+48 691 81 84 88</a
        ><a href="mailto:kontakt@dental-factory.pl"
          >kontakt@dental-factory.pl</a
        >
      </div>
      <div class="creator__div">
        <p>
          @{{ new Date().getFullYear() }} Wszelkie prawa zastrzeżone BREATH
          DESIGN STUDIO by Krzysztof Hajder & Oliwia Dittrich
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ContactForm from "~/components/ContactForms/contactForm";

const url = ``;
export default {
  name: "FooterComponents",
  components: { ContactForm },
  data() {
    return {
      dataIg: [],
      dataGoogle: [],
    };
  },
  async fetch() {
    const resIg = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${process.env.IG_KEY}`
    );
    const dataIg = await resIg.json();

    const resGoogle = await fetch(
      `https://mybusiness.googleapis.com/v4/accounts/16766770178064265042/locations/ChIJY7o4ymTCD0cRcCJ4rEgtx0U/reviews`
    );
    const dataGoogle = await resGoogle.json();

    this.dataIg = dataIg;
    this.dataGoogle = dataGoogle;
    console.log(this.dataGoogle);
  },
  methods: {
    grownFirst: function () {
      this.grown(this.$refs.image1, this.$refs.image2, this.$refs.image3, 1);
    },
    grownThird: function () {
      this.grown(this.$refs.image3, this.$refs.image1, this.$refs.image2, 3);
    },
    smallerFirst: function () {
      this.smaller(this.$refs.image1, this.$refs.image2, this.$refs.image3);
    },
    smallerThird: function () {
      this.smaller(this.$refs.image3, this.$refs.image1, this.$refs.image2);
    },
    grown: function (ref1, ref2, ref3, node) {
      if (node === 1) {
        gsap.to(ref1, { scale: 1.3, x: "20%", duration: 0.3, zIndex: 1 });
      } else if (node === 3) {
        gsap.to(ref1, { scale: 1.3, x: "-20%", duration: 0.3, zIndex: 1 });
      } else {
        gsap.to(ref1, { scale: 1.3, duration: 0.3, zIndex: 1 });
      }
      gsap.to(ref2, { scale: 0.9, opacity: 0.8, duration: 0.3, zIndex: 0 });
      gsap.to(ref3, { scale: 0.9, opacity: 0.8, duration: 0.3, zIndex: 0 });
    },
    smaller: function (ref1, ref2, ref3) {
      gsap.to(ref1, { scale: 1, x: 0, opacity: 1, duration: 0.3 });
      gsap.to(ref2, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(ref3, { scale: 1, opacity: 1, duration: 0.3 });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin: 40px 0 0 0;
}

.container__inner {
  width: 100%;
  height: auto;
  background: #000000;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2 {
  font-family: "Termina", sans-serif;
  color: #ffffff;
  padding: 0 20px;
}

.finisher__container-inner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.links {
  text-decoration: none;

  .active__button {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 600;

    width: 100%;
    height: 40px;
    background: #000;
    border-radius: 8px;
    border: 1px solid #000000;
    font-size: 16px;
    color: #fff;
    position: relative;
    transition: all 0.2s ease-out;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      transition: all 0.2s ease-out;
      background: #b4f2cb;
      z-index: 1;
    }

    img {
      position: absolute;
      right: 15px;
      transition: all 0.2s ease-out;
      transition-delay: 0.05s;
    }

    p {
      transition: all 0.2s ease-out;
      z-index: 9;
      text-decoration: none;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:hover > img {
      transform: translateX(40px);
    }

    &:hover > p {
      color: #000;
    }

    &:hover:after {
      transform: translateX(100%);
    }

    @media (min-width: 1024px) {
      width: 250px;
      margin: 0;
    }
  }
}

.image__container {
  margin: 70px 0 40px 0;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 0;

  img {
    width: 150px;
    height: auto;
  }

  @media (min-width: 1024px) {
    img {
      margin-top: 50px;
      width: 380px;
      height: auto;
    }
  }
}

.rastr__image {
  width: 100%;
  height: 80px;
  border-radius: 0 0 12px 12px;
  background: transparent;

  img {
    border-radius: 0 0 12px 12px;
    z-index: -1;
    width: 100%;
    height: auto;
    position: relative;
    top: -80px;
  }

  @media (min-width: 1024px) {
    img {
      border-radius: 0 0 12px 12px;
      z-index: -1;
      width: 100%;
      height: 400px;
      position: relative;
      top: -100px;
    }
  }
}

.finisher__container {
  position: relative;
  top: 100px;
  width: 100%;
  height: 300px;
  padding-bottom: 40px;

  font-family: termina, sans-serif;
  font-style: normal;

  @media (min-width: 1024px) {
    top: 250px;
    height: 500px;
  }
}

.logo__image {
  width: 300px;

  @media (min-width: 1024px) {
    width: 500px;
  }
}

.info__div {
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    padding: 0;
  }

  @media (min-width: 1024px) {
    margin: 0 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    p {
      font-size: 20px;
    }
    ul {
      list-style: none;
      padding: 0;
      font-size: 20px;

      li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
      }
    }
  }
}

.contact__div {
  display: flex;
  flex-direction: column;
  text-align: right;
  margin: 20px 30px 0 0;

  a {
    font-weight: 900;
    font-size: 20px;
    text-decoration: none;
    color: #041b8d;
    transition: all 0.2s ease-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (min-width: 1024px) {
    margin: 0 80px;

    a {
      font-size: 60px;
    }
  }
}

.creator__div {
  width: 90%;
  height: auto;
  margin: 0 0 0 5%;
  font-weight: 600;
  font-size: 10px;
  border: 1px solid #000000;
  border-radius: 12px;

  p {
    padding: 10px;
  }
}

.social__title {
  @media (min-width: 1024px) {
    font-size: 60px;
    width: 60%;
    line-height: 65px;
    margin-left: 50px;
  }
}
</style>
