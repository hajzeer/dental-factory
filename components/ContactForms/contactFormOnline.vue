<template>
  <div class="container">

    <form class="form__container">
      <input type="text" name="name" placeholder="Imię" v-model="name"/>
      <input type="text" name="surname" placeholder="Nazwisko" v-model="surname"/>
      <input type="text" name="phoneNumber" placeholder="Numer telefonu" v-model="phoneNumber"/>
      <input type="email" name="email" placeholder="Adres e-mail" v-model="email"/>
      <textarea placeholder="Preferowana data i cel" v-model="message"/>
      <input type="file" name="file" @change="createFile" placeholder="Wgraj plik"  accept="image/*"/>
      <button class="submit__button" @click.prevent="send">Wyślij formularz</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactFormOnline",
  data() {
    return {
      email: '',
      name: '',
      surname: '',
      phoneNumber: '',
      message: '',
      file: '',
      item:{
        image : null,
        imageUrl: null,
        imageSplited: '',
      }
    }
  },
  methods: {
    async createFile(e){
      const file = e.target.files[0]
      this.item.image = file
      const reader = new FileReader()
      reader.readAsDataURL(file);
      reader.onload = e => {this.item.imageUrl = e.target.result
      };
    },
    send() {
      this.item.imageSplited = this.item.imageUrl.split("base64,")[1]

      this.$axios.$post(`/mail/send`,{
        subject: 'Konsultacja online: ' + this.name + " " + this.surname + `(` + this.phoneNumber + ' ' + this.email + `)`,
        text: 'Imię Nazwisko: ' + this.name + " " + this.surname + `\nNumer telefonu: ` + this.phoneNumber + '\nemail ' + this.email + `\n\n` + 'Konsultacja online w sprawie: \n' + this.message,
        attachments: [{
          filename: this.item.image.name,
          path: this.item.imageUrl,
        }
        ]
      })
      this.email = ''
      this.name = ''
      this.surname = ''
      this.phoneNumber = ''
      this.message = ''
      this.item.imageUrl = null

    }
  }
}
</script>

<style scoped lang="scss">

.container {

  width: 100vw;
  background: transparent !important;
  border-radius:  0 0 12px 12px;


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
    transition: all .3s ease-out;

    &:focus {
      border: 3px solid #000000;
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
    border: 2px solid #000000;
    border-radius: 10px;
    color: #000000 !important;
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    resize: none;
    outline: none;
    transition: all .3s ease-out;

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
