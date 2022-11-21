<template>
  <div>
    <HeaderComponent />
    <div class="children">
      <Nuxt />
      <button class="scroll__btn" @click="toTop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 28.354 13.425"
        >
          <g id="first__arrow">
            <path
              id="Path_50"
              data-name="Path 50"
              d="M54.99,2025.125l-10.709,13.163,10.709,12.373"
              transform="translate(2052.073 -42.976) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="2"
            />
          </g>
          <g id="second__arrow">
            <path
              id="Path_50"
              data-name="Path 50"
              d="M54.99,2025.125l-10.709,13.163,10.709,12.373"
              transform="translate(2052.073 -42.976) rotate(90)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-width="2"
            />
          </g>
        </svg>
      </button>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "~/components/layoutComponents/HeaderComponent";
import FooterComponent from "~/components/layoutComponents/FooterComponent";

export default {
  name: "default",
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      path: null,
    };
  },
  methods: {
    toTop: function () {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
    },
  },
  mounted() {
    this.path = this.$route.path.replace("https://www.dental-factory.pl/", "");
    if (this.path === "/dentysta-protetyk-wroclaw-leczenie.html") {
      this.$router.push("/");
    }
    if (this.path === "/dentysta-stomatolog-wroclaw-cennik.html") {
      this.$router.push("/price/prices");
    }
    if (this.path === "/dental-factory-konsultacja.html") {
      this.$router.push("/online");
    }
    if (
      this.path ===
      "/dentysta-protetyk-wroclaw-leczenie.html?wbraid=CjgKCAiAjs2bBhA-EigAZTS4teUbyTtLPOfT7Z6Yl6mpCR7tneU9hTqsiWRi45g0QpE-3z8QGgLsCA"
    ) {
      this.$router.push("/");
    }
    if (
      this.path ===
      "/dentysta-protetyk-wroclaw-leczenie.html?wbraid=CjkKCQiAyMKbBhDCARIoADLWtMcGc6Gbp81XI7n-qH64uHFxU_nlcBBy1BqqzeC1fFCBe1b0hxoCSe4"
    ) {
      this.$router.push("/");
    }
    if (this.path === "/dental-factory-kontakt.html") {
      this.$router.push("/contact");
    }
    if (
      this.path === "/dentysta-wroclaw-konsultacja-online-ekonsultacja.html"
    ) {
      this.$router.push("/appointment");
    }
    if (this.path === "/dental-factory-umow-wizyte.html") {
      this.$router.push("/appointment");
    }
    if (
      this.path ===
      "/dentysta-protetyk-wroclaw-leczenie.html?wbraid=CjgKCAiA68ebBhBpEigAfvzCyIpW4fPU2zsjGue1eX7x2a4CBu0uXaPaSkYeol4OT2ue0bduGgKXsQ"
    ) {
      this.$router.push("/");
    }
    if (this.path === "/gwarancja-na-leczenie-stomatologiczne.html") {
      this.$router.push("/");
    }
    if (this.path === "/dental-factory-dentysta-protetyk-wroclaw-opinie.html") {
      this.$router.push("/reviews");
    }
    if (this.path === "/dentysta-wroclaw-cennik.html") {
      this.$router.push("/price/prices");
    }
    if (this.path === "/dentysta-wroclaw-o-nas.html") {
      this.$router.push("/about/center");
    }
    if (this.path === "/promocja-2.html") {
      this.$router.push("/");
    }
  },
  head() {
    return {
      title:
        "DENTAL FACTORY Centrum stomatologiczne | Twój uśmiech, Twoje story",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "DENTAL FACTORY stworzyliśmy w samym centrum Wrocławia z myślą o\n" +
            "            Pacjentach szukających nowoczesnego i bezbolesnego leczenia\n" +
            "            stomatologicznego.\n" +
            "            \n" +
            "            Leczymy tak, jak sami chcielibyśmy być leczeni. Wykonujemy zabiegi z\n" +
            "            zakresu stomatologii estetycznej, protetyki, ortodoncji, leczenia\n" +
            "            kanałowego pod mikroskopem, implantów i chirurgii, stomatologii\n" +
            "            zachowawczej, profilaktyki. Naszym Pacjentom pomagamy też w nagłych\n" +
            "            sytuacjach, jak odklejona korona, ból zęba, złamana proteza.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

p,
h1,
h2,
a,
li,
span,
input,
textarea {
  &::selection {
    background: rgba(180, 242, 203, 0.5);
    opacity: 0.3;
  }
}

.children {
  padding-top: 50px;

  @media (min-width: 1024px) {
    padding-top: 100px;
  }
}

.scroll__btn {
  position: fixed;
  bottom: 5px;
  right: 10px;
  width: 55px;
  height: 55px;
  border: 1px solid #000;
  border-radius: 100%;
  background: #b4f2cb;
  cursor: pointer;
  margin: 0 0 10px 0;
  z-index: 99999;

  &:active {
    transition: all 0.1s ease-out;

    transform: translateY(-5px);

    #second__arrow {
      transition: all 0.1s ease-out;

      transform: translateY(-5px);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
}
</style>
