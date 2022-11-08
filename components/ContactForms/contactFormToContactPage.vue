<template>
  <div class="container">
    <form class="form__container">
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
      <button class="submit__button" @click.prevent="send">
        Wyślij formularz
      </button>
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
    };
  },
  methods: {
    send() {
      this.$axios.$post(`/mail/send`, {
        subject:
          "Nowy kontakt od: " +
          this.name +
          " " +
          this.surname +
          `(` +
          this.phoneNumber +
          " " +
          this.email +
          `)`,
        text: "Proszę o kontakt w sprawie: \n" + this.message,
      });
      this.email = "";
      this.name = "";
      this.surname = "";
      this.phoneNumber = "";
      this.message = "";
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
    width: 72%;
    gap: 20px;
  }
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
  font-weight: 900;

  width: 88%;
  height: 45px;
  background: #b4f2cb;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 18px;
  color: #000000;

  @media (min-width: 1024px) {
    width: 250px;
    align-self: flex-end;
    margin-right: 200px;
    margin-top: 30px;
  }
}
</style>
