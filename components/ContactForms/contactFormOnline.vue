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
      <div class="num__mail__div">
        <label class="attach__input">
          {{ fileName }}
          <input
            type="file"
            name="file"
            @change="createFile"
            accept="image/*"
          />
        </label>

        <label class="attach__input">
          {{ fileName }}

          <input
            type="file"
            name="file"
            @change="createFile"
            accept="image/*"
          />
        </label>

        <label class="attach__input">
          {{ fileName }}

          <input
            type="file"
            name="file"
            @change="createFile"
            accept="image/*"
          />
        </label>
      </div>

      <button class="submit__button" @click.prevent="send">
        Wyślij formularz
      </button>
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
      fileName: "Wgraj plik",
      item: {
        image: null,
        imageUrl: null,
      },
    };
  },
  methods: {
    async createFile(e) {
      const file = e.target.files[0];
      this.item.image = file;
      this.fileName = this.item.image.name;
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = (e) => {
        this.item.imageUrl = e.target.result;
      };
    },
    send() {
      this.$axios.$post(`/mail/send`, {
        subject:
          "Konsultacja online: " +
          this.name +
          " " +
          this.surname +
          `(` +
          this.phoneNumber +
          " " +
          this.email +
          `)`,
        text:
          "Imię Nazwisko: " +
          this.name +
          " " +
          this.surname +
          `\nNumer telefonu: ` +
          this.phoneNumber +
          "\nemail " +
          this.email +
          `\n\n` +
          "Konsultacja online w sprawie: \n" +
          this.message,
        attachments: [
          {
            filename: this.item.image.name,
            contents: Buffer.from(this.item.imageUrl, "base64"),
          },
        ],
      });
      this.email = "";
      this.name = "";
      this.surname = "";
      this.phoneNumber = "";
      this.message = "";
      this.item.imageUrl = "";
      this.fileName = "Wgraj plik";
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
  font-weight: 900;

  width: 88%;
  height: 45px;
  background: #b4f2cb;
  border-radius: 8px;
  border: 1px solid #000000;
  font-size: 18px;
  color: #000000;
  transition: all 0.4s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1024px) {
    width: 250px;
    align-self: flex-end;
    margin-top: 30px;
    position: relative;
    right: 14.5%;
  }
}
</style>
