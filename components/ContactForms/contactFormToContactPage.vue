<template>
  <div class="container">
    <form class="form__container" @submit.prevent="send">
      <input type="text" name="name" placeholder="Imię" v-model="name" />
      <input
        type="text"
        name="surname"
        placeholder="Nazwisko"
        v-model="surname"
      />

      <div class="num__mail__div">
        <input
          type="text"
          name="phoneNumber"
          placeholder="Numer telefonu"
          v-model="phoneNumber"
        />
        <input
          type="email"
          name="email"
          placeholder="Adres e-mail"
          v-model="email"
        />
      </div>

      <textarea placeholder="Preferowana data i cel" v-model="message" />
      <input
        type="submit"
        class="submit__button"
        v-if="visible"
        placeholder="        Wyślij formularz
"
      />
      <p v-else>Wiadomość została wysłana</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactFormToCotactPage",
  data() {
    return {
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

.num__mail__div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    width: 71.4%;
    gap: 20px;
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
  }

  input {
    margin: 10px 0;
    padding: 5px 10px;
    width: 80%;
    height: 36px;
    background: transparent;
    border: 2px solid #000000;
    border-radius: 10px;
    color: #000000 !important;
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;

    &::placeholder {
      color: #000000 !important;
      font-family: termina, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
    }

    outline: none;
    transition: all 0.3s ease-out;

    &:focus {
      border: 3px solid #000000;
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
    border: 2px solid #000000;
    border-radius: 10px;
    color: #000000 !important;
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    resize: none;
    outline: none;
    transition: all 0.3s ease-out;

    &::placeholder {
      color: #000000 !important;
      font-family: termina, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
    }

    &:focus {
      border: 3px solid #000000;
      transform: scale(1.05);
    }

    @media (min-width: 1024px) {
      width: 70%;
    }
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
  border: 1px solid #000000;
  font-size: 18px;
  color: #000000;
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
