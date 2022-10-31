<template>
  <div class="container">
    <div class="carousel">
      <div class="carousel__content">
        <span class="outline">Umów wizytę</span>
        <span class="outline">Umów wizytę</span>
        <span class="outline">Umów wizytę</span>
      </div>
    </div>
<form class="form__container">
  <input type="text" name="name" placeholder="Imię" v-model="name"/>
  <input type="text" name="surname" placeholder="Nazwisko" v-model="surname"/>
  <input type="text" name="phoneNumber" placeholder="Numer telefonu" v-model="phoneNumber"/>
  <input type="email" name="email" placeholder="Adres e-mail" v-model="email"/>
<textarea placeholder="Preferowana data i cel" v-model="message"/>
  <button class="submit__button" @click.prevent="send">Umów się na wizytę</button>
</form>

    <div class="icons__container">
      <h2>Udogodnienia</h2>
      <div class="icons__container-inner">
        <div class="iconDiv" v-for="image in images">
          <img  :src="image.icon"/>
          <p>{{image.text}}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Icon1 from "@/static/icons/1.png"
import Icon2 from "@/static/icons/2.png"
import Icon3 from "@/static/icons/3.png"
import Icon4 from "@/static/icons/4.png"
import Icon5 from "@/static/icons/5.png"
import Icon6 from "@/static/icons/6.png"
import Icon7 from "@/static/icons/7.png"
import Icon8 from "@/static/icons/8.png"

export default {
  name: "contactForm",
  data() {
    return {
     images: [
       {text: "Sklep z artykułami do higieny", icon: Icon7},
       {text: "Relaksująca muzyka", icon: Icon4},
       {text: "Doskonała kawa i herbata", icon: Icon5},
       {text: "Aromatyzowane wnętrza", icon: Icon6},
       {text: "Klimatyzacja", icon: Icon8},
       {text: "MediRaty", icon: Icon1},
       {text: "Płatność gotówką", icon: Icon3},
       {text: "Płatność kartą oraz przelewem", icon: Icon2},
     ],
      email: '',
      name: '',
      surname: '',
      phoneNumber: '',
      message: '',
    }
  },
  methods: {
    send() {
      this.$axios.$post(`/mail/send`,{
        subject: 'Nowy kontakt od: ' + this.name + " " + this.surname + `( ` + this.phoneNumber + ' ' + this.email + ` )`,
        text: 'Proszę o kontakt w sprawie: \n' + this.message,
      })
      this.email = ''
      this.name = ''
      this.surname = ''
      this.phoneNumber = ''
      this.message = ''
    }
  }
}
</script>

<style scoped lang="scss">

.container {

  width: 100vw;
  background: #000000 !important;
  border-radius:  0 0 12px 12px;


}

.icons__container {
  width: 100%;

  h2 {
    font-size: 30px;
    color: #ffffff;
    font-family: "Termina", sans-serif;
    margin: 20px;
  }
}

.icons__container-inner {
width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  img {
    width: 35px;
    height: 35px;
  }

  p {
    color: #FFFFFF;
    font-family: "Termina", sans-serif;
    font-size: 8px;
    text-align: center;
  }
}

.carousel {
  width: 100%;
  height: 50px;
  overflow: hidden;
}

.iconDiv {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.carousel__content {
  height: 100%;
  display: flex;
  animation: scrolling 5s linear infinite;
}
@keyframes scrolling {
  0%{transform: translateX(0)}
  100%{transform: translateX(-89.5vw)}
}
.carousel__content span {
  flex-shrink: 0;
  white-space: nowrap;
}

  .outline {
    color: transparent;
    width: 90vw;
    -webkit-text-stroke: 2px #FFFFFF;
    text-stroke: 2px black;
    text-shadow: none;
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    text-transform: uppercase;
  }

.form__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin: 10px 0;
    padding: 5px 10px;
    width: 80%;
    height: 36px;
    background: transparent;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    color: #FFFFFF !important;
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;

    &::placeholder {
      color: #FFFFFF !important;
      font-family: termina, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
    }

    outline: none;
    transition: all .3s ease-out;

    &:focus {
      border: 3px solid #FFFFFF;
      transform: scale(1.05);
    }
    }


  textarea {
    width: 80%;
    margin: 10px 0;
    padding: 5px 10px;
    min-height: 119px;
    height: auto;
    background: transparent;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    color: #FFFFFF !important;
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    resize: none;
    outline: none;
    transition: all .3s ease-out;

    &::placeholder {
      color: #FFFFFF !important;
      font-family: termina, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
    }

    &:focus {
      border: 3px solid #FFFFFF;
      transform: scale(1.05);
    }

  }
}

.submit__button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;

  width: 88%;
  height: 45px;
  background: #B4F2CB;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 18px;
  color: #000000;



}

</style>
