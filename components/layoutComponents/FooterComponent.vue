<template>
<div class="container">
  <div class="container__inner">
    <div class="image__container">
      <img src="/footerImg1.png" alt="cabinet__image" ref="image1" @mouseenter="grownFirst" @mouseleave="smallerFirst"/>
      <img src="/footerImg3.png" alt="cabinet__image" ref="image3" @mouseenter="grownThird" @mouseleave="smallerThird"/>
    </div>
    <contact-form/>
   <div class="rastr__image">
     <img src="/rastrFooter.png" alt="rastr image"/>
   </div>
  </div>
  <div class="finisher__container">
    <img class="logo__image" src="/logoFooter.png" alt="logo footer"/>

    <div class="finisher__container-inner">
    <div class="info__div">
      <p>Dental Factory Censtrum Stomatologiczne <br/> Dąbrowskiego 34/U4 <br/> 50-457, Wrocław</p>
      <a class="links" href="https://g.page/dentalfactory?share">
        <button class="active__button"><p><span>Dojazd</span></p></button>
      </a>
    </div>
      <div class="info__div">
        <p>Godziny otwarcia:</p>
        <ul>
          <li>
            <span>Pn</span> 9:00 - 20:00
          </li>
          <li>
            <span>Wt</span> 9:00 - 20:00
          </li>
          <li>
            <span>Śr</span> 9:00 - 20:00
          </li>
          <li>
            <span>Czw</span> 9:00 - 20:00
          </li>
          <li>
            <span>Pt</span> 9:00 - 20:00
          </li>
        </ul>
      </div>
    </div>
    <div class="contact__div"><a href="tel:+48-691-818-488">+48 691 81 84 88</a><a href="mailto:kontakt@dental-factory.pl">kontakt@dental-factory.pl</a></div>
    <div class="creator__div"><p>@{{new Date().getFullYear()}} Wszelkie prawa zastrzeżone BREATH DESIGN STUDIO by Krzysztof Hajder & Oliwia Dittrich</p></div>
  </div>
</div>
</template>

<script>

import gsap from 'gsap'
import ContactForm from "~/components/ContactForms/contactForm";
export default {
  name: "FooterComponents",
  components: {ContactForm},
  methods: {
    grownFirst: function() {this.grown(this.$refs.image1, this.$refs.image2, this.$refs.image3, 1)},
    grownThird: function() {this.grown(this.$refs.image3, this.$refs.image1, this.$refs.image2, 3)},
    smallerFirst: function() {this.smaller(this.$refs.image1, this.$refs.image2, this.$refs.image3)},
    smallerThird: function() {this.smaller(this.$refs.image3, this.$refs.image1, this.$refs.image2)},
    grown: function (ref1, ref2, ref3, node) {
      if (node === 1) {
        gsap.to(ref1, ({scale: 1.4,x: '20%', duration: 0.3, zIndex: 1}))

      } else if(node === 3) {
        gsap.to(ref1, ({scale: 1.4, x: '-20%', duration: 0.3, zIndex: 1}))

      } else {
        gsap.to(ref1, ({scale: 1.4, duration: 0.3, zIndex: 1}))

      }
      gsap.to(ref2, ({scale: .9, opacity: 0.8, duration: 0.3, zIndex: 0}))
      gsap.to(ref3, ({scale: .9, opacity: 0.8, duration: 0.3, zIndex: 0}))

    },
    smaller: function (ref1, ref2, ref3) {
      gsap.to(ref1, ({scale: 1, x: 0,opacity: 1, duration: 0.3}))
      gsap.to(ref2, ({scale: 1,opacity: 1, duration: 0.3}))
      gsap.to(ref3, ({scale: 1,opacity: 1, duration: 0.3}))
    }
  },
}
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
  border-radius:  12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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

    margin: 15px;
    width: 100%;
    height: 40px;
    background: #B4F2CB;
    border-radius: 8px;
    border: 1px solid #000000;
    font-size: 16px;
    color: #000000;
    position: relative;
    transition: all 0.2s ease-out;
    overflow: hidden;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;



    &::after {
      position: absolute;
      content: '';
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      transition: all 0.2s ease-out;
      background: #000000;
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

    &:hover{
      transform: scale(1.05);
    }
    &:hover > img{
      transform: translateX(40px);
    }
    &:hover > p{
      color: #B4F2CB;
    }
    &:hover:after{
      transform: translateX(100%);
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
}

.rastr__image {
  width: 100%;
  height: 80px;
  border-radius:  0 0 12px 12px;
  background: transparent;

  img {
    border-radius:  0 0 12px 12px;
    z-index: -1;
    width: 100%;
    height: auto;
    position: relative;
    top: -80px;
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
}

.logo__image {
  width: 300px;
}

.info__div {
  width: 100%;
  font-weight: 600;
  font-size: 12px;
  margin: 0 20px;

  ul {
    list-style: none;
    padding: 0;
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
    color: #041B8D;
    transition: all .2s ease-out;

    &:hover {
      transform: scale(1.02);
    }
  }

}

.creator__div {
  width: 90%;
  height: auto;
  margin: 30px 30px 30px 5%;
  font-weight: 600;
  font-size: 10px;
  border: 1px solid #000000;
  border-radius: 12px;
  p {
    padding: 10px;
  }
}
</style>
