<template>
  <div class="container">
    <div class="carousel">
      <div class="carousel__content">
        <span class="outline">Umów wizytę</span>
        <span class="outline">Umów wizytę</span>
        <span class="outline">Umów wizytę</span>
        <span class="outline desktop">Umów wizytę</span>
        <span class="outline desktop">Umów wizytę</span>
        <span class="outline desktop">Umów wizytę</span>
      </div>
    </div>
    <form class="form__container" @submit.prevent="send">
      <input type="text" name="name" placeholder="Imię" v-model="name" />
      <input
        type="text"
        name="surname"
        placeholder="Nazwisko"
        v-model="surname"
        required
      />
      <div class="form__container num__mail__div">
        <input
          type="text"
          name="phoneNumber"
          placeholder="Numer telefonu"
          v-model="phoneNumber"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Adres e-mail"
          v-model="email"
          required
        />
      </div>
      <textarea placeholder="Preferowana data i cel" v-model="message" />
      <input
        type="submit"
        class="submit__button"
        v-if="visible"
        placeholder="        Wyślij formularz
"
        required
      />
      <p v-else>Wiadomość została wysłana</p>
    </form>

    <div class="icons__container">
      <h2 class="icons__title">Udogodnienia</h2>
      <div class="icons__container-inner">
        <div class="iconDiv" v-for="image in images">
          <img :src="image.icon" />
          <p>{{ image.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon1 from "@/static/icons/1.png";
import Icon2 from "@/static/icons/2.png";
import Icon3 from "@/static/icons/3.png";
import Icon4 from "@/static/icons/4.png";
import Icon5 from "@/static/icons/5.png";
import Icon6 from "@/static/icons/6.png";
import Icon7 from "@/static/icons/7.png";
import Icon8 from "@/static/icons/8.png";

export default {
  name: "contactForm",
  data() {
    return {
      images: [
        { text: "Sklep z artykułami do higieny", icon: Icon7 },
        { text: "Relaksująca muzyka", icon: Icon4 },
        { text: "Doskonała kawa i herbata", icon: Icon5 },
        { text: "Aromatyzowane wnętrza", icon: Icon6 },
        { text: "Klimatyzacja", icon: Icon8 },
        { text: "MediRaty", icon: Icon1 },
        { text: "Dogodne płatności", icon: Icon3 },
        { text: "Dostęp do WI-FI ", icon: Icon2 },
      ],
      email: "",
      name: "",
      surname: "",
      phoneNumber: "",
      message: "",
      visible: true,
    };
  },
  methods: {
    send() {
      this.$axios.$post(`/api/message`, {
        name: this.name,
        surname: this.surname,
        phoneNumber: this.phoneNumber,
        email: this.email,
        message: this.message,
      });
      this.email = "";
      this.name = "";
      this.surname = "";
      this.phoneNumber = "";
      this.message = "";
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  background: transparent !important;
  border-radius: 0 0 12px 12px;
}

.icons__container {
  width: 100%;

  h2 {
    font-size: 30px;
    color: #ffffff;
    font-family: "Termina", sans-serif;
    margin: 20px;
  }

  @media (min-width: 1024px) {
    h2 {
      margin-left: 50px;
      font-size: 60px;
    }
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
    color: #ffffff;
    font-family: "Termina", sans-serif;
    font-size: 8px;
    text-align: center;
  }

  @media (min-width: 1024px) {
    img {
      margin-top: 30px;

      width: 100px;
      height: 100px;
    }

    p {
      font-size: 15px;
    }
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

  @media (min-width: 1024px) {
    animation: scrollingDesktop 5s linear infinite;
  }
}

@keyframes scrolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-89.5vw);
  }
}

@keyframes scrollingDesktop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25vw);
  }
}

.carousel__content span {
  flex-shrink: 0;
  white-space: nowrap;
}

.outline {
  color: transparent;
  width: 90vw;
  -webkit-text-stroke: 2px #ffffff;
  text-stroke: 2px black;
  text-shadow: none;
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    width: 25vw;
  }
}

.desktop {
  @media (max-width: 1024px) {
    display: none;
  }
}

.form__container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: Termina;
    font-weight: 600;
    color: #ffffff;
  }

  input {
    margin: 10px 0;
    padding: 5px 10px;
    width: 80%;
    height: 36px;
    background: transparent;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: #ffffff;
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;

    &::placeholder {
      color: #ffffff !important;
      font-family: termina, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
    }

    outline: none;
    transition: all 0.3s ease-out;

    &:focus {
      border: 3px solid #ffffff;
      transform: scale(1.05);
    }

    @media (min-width: 1024px) {
      width: 70%;
    }
  }

  textarea {
    width: 80%;
    margin: 10px 0;
    padding: 5px 10px;
    min-height: 119px;
    height: auto;
    background: transparent;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: #ffffff !important;
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    resize: none;
    outline: none;
    transition: all 0.3s ease-out;

    &::placeholder {
      color: #ffffff !important;
      font-family: termina, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
    }

    &:focus {
      border: 3px solid #ffffff;
      transform: scale(1.05);
    }

    @media (min-width: 1024px) {
      width: 70%;
    }
  }
}

.num__mail__div {
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    width: 71.5%;
    gap: 20px;
  }
}

.submit__button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  width: 88% !important;
  height: 45px;
  background: #b4f2cb !important;
  border-radius: 8px;
  border: 1px solid #000000 !important;
  font-size: 18px;
  color: #000000 !important;
  transition: all 0.4s ease-out;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    width: 250px !important;
    align-self: flex-end;
    margin-top: 30px;
    position: relative;
    right: 14.5%;
  }
}
</style>
