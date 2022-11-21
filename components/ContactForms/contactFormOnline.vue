<template>
  <div class="container">
    <form class="form__container" @submit.prevent="send">
      <input type="text" name="name" placeholder="Imię" v-model="name" />
      <input
        type="text"
        name="surname"
        placeholder="Nazwisko"
        v-model="surname"
        required
      />
      <div class="num__mail__div">
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
      <textarea
        placeholder="Tutaj krótko opisz swój problem i oczekiwania"
        v-model="message"
      />
      <div class="num__mail__div">
        <label class="attach__input">
          {{ fileName1 }}
          <input
            type="file"
            name="image"
            @change="createFile"
            accept="image/*"
          />
        </label>

        <label class="attach__input">
          {{ fileName2 }}

          <input
            type="file"
            name="file"
            accept="image/*"
            @change="createFile2"
          />
        </label>

        <label class="attach__input">
          {{ fileName3 }}

          <input
            type="file"
            name="file"
            accept="image/*"
            @change="createFile3"
          />
        </label>
      </div>

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
  name: "ContactFormOnline",
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      phoneNumber: "",
      message: "",
      file: "",
      fileName1: "Wgraj plik",
      fileName2: "Wgraj plik",
      fileName3: "Wgraj plik",
      visible: true,
      item: {
        image: null,
        imageUrl1: null,
        imageUrl2: null,
        imageUrl3: null,
      },
    };
  },
  methods: {
    async createFile(e) {
      const file = e.target.files[0];
      if (file.size > 8500000) {
        this.fileName1 = "Zbyt duży plik, załącz inny";
      } else {
        this.fileName1 = file.name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.item.imageUrl1 = e.target.result;
        };
      }
    },
    async createFile2(e) {
      const file = e.target.files[0];
      if (file.size > 8500000) {
        this.fileName2 = "Zbyt duży plik, załącz inny";
      } else {
        this.fileName2 = file.name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.item.imageUrl2 = e.target.result;
        };
      }
    },
    async createFile3(e) {
      const file = e.target.files[0];
      if (file.size > 8333333) {
        this.fileName3 = "Zbyt duży plik, załącz inny";
      } else {
        this.fileName3 = file.name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          this.item.imageUrl3 = e.target.result;
        };
      }
    },
    send() {
      this.$axios.$post(`/server-middleware/message-attach`, {
        name: this.name,
        surname: this.surname,
        phoneNumber: this.phoneNumber,
        email: this.email,
        message: this.message,
        path1: this.item.imageUrl1 || null,
        path2: this.item.imageUrl2 || null,
        path3: this.item.imageUrl3 || null,
      });
      this.email = "";
      this.name = "";
      this.surname = "";
      this.phoneNumber = "";
      this.message = "";
      this.fileName1 = "Wgraj plik";
      this.fileName2 = "Wgraj plik";
      this.fileName3 = "Wgraj plik";
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

  .attach__input {
    border: 2px solid #041b8d;
    border-radius: 10px;
    color: #041b8d !important;
    cursor: pointer;
    font-family: Termina;
    font-weight: 900;
    padding: 6px 10px;
    transition: all 0.3s ease-out;
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;

    &:hover {
      border: 3px solid #041b8d;
      transform: scale(1.05);
    }

    @media (min-width: 1024px) {
      width: 100% !important;
    }

    input {
      display: none;

      &::-webkit-file-upload-button {
        display: none;
      }
    }
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
