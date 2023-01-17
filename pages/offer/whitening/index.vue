<template>
  <div>
    <div class="title__nav__div"><p>Leczenie / Wybielanie zębów</p></div>
    <div class="container__inner">
      <div class="inner">
        <h2 class="page__title">
          Wybielanie zębów <br />
          WE WROCŁAWIU
        </h2>
        <div class="first__div">
          <img
            v-if="loading && ImgArray.images[0] !== undefined"
            :src="ImgArray.images[0].url"
          />

          <p>
            Poznaj nową markę na mapie Wrocławia! Zapraszamy do miejsca
            stworzonego z myślą o profesjonalnym, bezpiecznym wybielaniu zębów i
            profilaktyce.
            <br />
            <br />
            White by Dental Factory wyposażyliśmy w nowoczesny sprzęt -
            ultrawygodne fotele stomatologiczne, najbezpieczniejszą lampę do
            wybielania zębów PrevDent, piaskarkę EMS AIRFLOW i delikatne skalery
            do usuwania kamienia nazębnego w technologii NO-PAIN firmy EMS,
            lidera profilaktyki stomatologicznej.
          </p>
        </div>
      </div>
      <div class="info__div">
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Wszystko co musisz wiedzieć o wybielaniu</h2>
          </div>
          <p>
            Wybielanie zębów pozwala w szybki i bezpieczny sposób przywrócić ich
            biel. Gwarantujemy skuteczne rozjaśnienie zębów o kilka odcieni.
            Efekt utrzymuje się nawet do 3 lat. Wybielanie zębów to dzisiaj
            jeden z najpopularniejszych zabiegów stomatologii estetycznej.
            Pozwala przywrócić naturalną biel zębów, pozbyć się przebarwień po
            kawie, herbacie, czerwonym winie i nikotynie, a także po lekach -
            np. po tetracyklinie. Wybielanie polega na nałożeniu na zęby
            preparatów chemicznych, które wnikają wgłąb szkliwa i utleniają -
            rozpuszczają przebarwienia. Istnieją przebarwienia, które nie dają
            się skutecznie usunąć podczas zabiegu wybielania. Konieczne może być
            wtedy wykonanie bondingu albo licówek.
          </p>
        </div>
        <div class="info__div__outer">
          <div class="info__div__inner">
            <h2>Co nas wyróżnia?</h2>
          </div>
          <p>
            <span>
              BEZPIECZEŃSTWO
            </span>
            <br />
            Proponujemy Ci wyłącznie takie zabiegi, z których sami korzystamy, i
            z których korzystają nasi najbliżsi. Są sprawdzone i przede
            wszystkim bezpieczne.
          </p>
          <p>
            <span>
              DŁUGOTRWAŁY EFEKT
            </span>
            <br />
            Dzięki wieloletniemu doświadczeniu w wybielaniu zębów, skupiamy się
            na tym, aby efekty wybielania były widoczne przez kilka lat.
            Dysponujemy ośmioma metodami wybielania zębów żywych i martwych.
          </p>
          <p>
            <span>
              STOMATOLOGIA CYFROWA - SKAN ZAMIAST WYCISKU!
            </span>
            <br />
            Nie wykonujemy tradycyjnych wycisków. Cyfrowy skan zębów pozwala nam
            stworzyć model 3D Twojego uśmiechu. Laboratorium projektuje i
            frezuje - wycina Twoje szyny do wybielania. Dzięki temu ostateczne
            są perfekcyjnie dopasowane i idealnie szczelne.
          </p>
          <p>
            <span>
              DBAMY O TWÓJ KOMFORT
            </span>
            <br />
            Robimy wszystko, aby leczenie przebiegło dla Ciebie w sposób
            komfortowy!
          </p>
          <p>
            <span>
              DARMOWA KONSULTACJA ON-LINE
            </span>
            <br />
            poznaj plan, harmonogram i całkowity koszt leczenia
          </p>
          <p>
            <span>
              DIAGNOSTYKA RTG NA MIEJSCU
            </span>
            <br />
            Zdjęcia RTG niezbędne przed wybielaniem wykonasz u nas na miejscu
          </p>
          <p>
            <span>
              JEDNA WIZYTA W GABINECIE
            </span>
            <br />
            Najczęściej tylko jedna wizyta wystarczy, abyś mógł cieszyć się
            śnieżnobiałym uśmiechem!
          </p>
          <p>
            <span>
              BEZ UKRYTYCH KOSZTÓW
            </span>
            <br />
            Opłata za wybielanie jest jednorazowa. Nie ponosisz żadnych
            dodatkowych kosztów
          </p>
        </div>
        <div class="info__div__outer">
          <img
            v-if="loading && ImgArray.images[1] !== undefined"
            :src="ImgArray.images[1].url"
          />
          <div class="info__div__inner">
            <h2>Wybierz metodę wybielania</h2>
          </div>
          <OfferInfo path="/specjalizacje/wybielanie-zebow" />
          <img
            v-if="loading && ImgArray.images[2] !== undefined"
            :src="ImgArray.images[2].url"
          />
        </div>
      </div>
      <div class="info__div">
        <div class="asking__div__outer">
          <div
            v-for="(items, index) in questions"
            class="asking__div__inner"
            :class="{
              activetable: currentIndex === index,
              desactivetable: currentIndex !== index,
            }"
          >
            <div>
              <button
                class="asking__div"
                @click="handleClick(index)"
                :class="{
                  activ: currentIndex === index,
                  deactiv: currentIndex !== index,
                }"
              >
                {{ items.title }}
              </button>
              <button
                class="close__button"
                @click="handleUnmount"
                :class="{
                  activ: currentIndex === index,
                  deactiv: currentIndex !== index,
                }"
              ></button>
            </div>
            <div
              :class="{
                active: currentIndex === index,
                disactive: currentIndex !== index,
              }"
            >
              <p
                :class="{
                  display__active: currentIndex === index,
                  display__disactive: currentIndex !== index,
                }"
              >
                {{ items.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Experts path="/specjalizacje/wybielanie-zebow" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { simplyFetchFromGraph } from "@/lib/graph";

export default {
  name: "index",
  data() {
    return {
      visibleFirst: true,
      visibleSecond: true,
      visibleThird: true,
      isVisible: false,
      currentIndex: null,
      path: "/specjalizacje/wybielanie-zebow",
      loading: false,
      ImgArray: [],
      questions: [
        {
          title: "Czy wybielanie niszczy szkliwo?",
          desc:
            "Nie.\n" +
            "Wybielanie zębów to metoda bezpieczna, sprawdzona i skuteczna pod warunkiem, że jest wykonywana w gabinecie stomatologicznym, a zabiegi wykonuje wyłącznie zespół przeszkolonych lekarzy.",
        },
        {
          title: "Czy wszystkie zęby się wybielą?",
          desc:
            "Możemy wybielić wszystkie zęby.\n" +
            "Mamy dostępnych kilka metod - nawet przy silnych przebarwieniach i przy zębach martwych. Aby rozpocząć wybielanie, dziąsła i zęby muszą być zdrowe.",
        },
        {
          title: "Jak przebiega wybielanie?",
          desc:
            "1 KONSULTACJA I HIGIENIZACJA\n " +
            "Delikatne i dokładne czyszczenie zębów z kamienia i osadów. Dopiero po higienizacji możemy dostrzec wszystkie ubytki i nieszczelne wypełnienia, które trzeba wyleczyć przed wybielaniem.\n" +
            "2 RTG I PLAN LECZENIA\n " +
            "Cyfrowe, wykonywane w ciągu ułamka sekundy, z 80% mniejszym promieniowaniem. Otrzymasz od nas pełen plan i kosztorys. Nie zaskoczą Cię żadne dodatkowe koszty!\n" +
            "3 WYBIELANIE " +
            "Wybieramy metodę, która Ci najbardziej odpowiada i przystępujemy do zabiegu!:)",
        },
        {
          title: "Jak długo utrzymuje się efekt?",
          desc:
            "Nawet do 3 lat.\n" +
            "W zależności od diety i nawyków higienicznych efekt wybielania może utrzymać się nawet do trzech lat. Najlepsze rezultaty wybielania osiągniemy w tzw. metodzie łączonej.",
        },
        {
          title: "Czy można wybielić martwy ząb?",
          desc:
            "Tak.\n" +
            "Często zdarza się, że zęby po leczeniu kanałowym zmieniają barwę na sino-szarą. Takie przebarwienia tworzą się w wyniku pozostawienia w komorze zęba martwej miazgi, czy zbyt dużej ilości materiału wypełniającego kanał.\n" +
            "Aby wybielić martwy ząb, stosujemy technikę walking-bleach. Polega ona na założeniu preparatu wybielającego do wnętrza zęba. Proces wybielania wymaga zazwyczaj kilku wizyt (najczęściej 2-3) i trwa średnio dwa tygodnie.",
        },
      ],
    };
  },
  async fetch() {
    const data = await simplyFetchFromGraph({
      query: `query IMAGES__GETTER($specPath: String!) {
  catalogue(language: "en", path: $specPath) {
      name
      ...on Folder {
        components {
          content {
\t\t\t\t\t...on ImageContent {
            images {
              url
            }
          }
          }
        }
      }
    }
  }
`,
      variables: {
        specPath: this.path,
      },
    });

    this.ImgArray = data.data.catalogue.components[2].content;

    if (this.ImgArray !== null) {
      this.loading = true;
    }
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
    handleClick: function (el) {
      this.currentIndex = el;
    },
    handleUnmount: function () {
      this.currentIndex = 10;
    },
    handleOpenFirst: function () {
      const tl = gsap.timeline();

      if (this.visibleFirst === false) {
        tl.to(this.$refs.main__text__first, { opacity: 0, duration: 0.1 })
          .to(this.$refs.first__arrow, { rotate: "0", duration: 0.1 })
          .to(this.$refs.info__div__outer__first, {
            height: "100px",
            duration: 0.1,
          })
          .to(this.$refs.main__text__first, { display: "none", duration: 0.1 });
        this.visibleFirst = !this.visibleFirst;
      } else {
        tl.to(this.$refs.main__text__first, { display: "block", duration: 0.1 })
          .to(this.$refs.first__arrow, { rotate: "180deg", duration: 0.1 })
          .to(this.$refs.info__div__outer__first, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__first, {
            opacity: 1,
            delay: 0.2,
            duration: 0.2,
          });

        this.visibleFirst = !this.visibleFirst;
      }
    },
    handleOpenSecond: function () {
      const tl = gsap.timeline();

      if (this.visibleSecond === false) {
        tl.to(this.$refs.main__text__second, { opacity: 0, duration: 0.1 })
          .to(this.$refs.second__arrow, { rotate: "0", duration: 0.2 })
          .to(this.$refs.info__div__outer__second, {
            height: "100px",
            duration: 0.2,
          })
          .to(this.$refs.main__text__second, {
            display: "none",
            duration: 0.2,
          });

        this.visibleSecond = !this.visibleSecond;
      } else {
        tl.to(this.$refs.second__arrow, { rotate: "180deg", duration: 0.2 })
          .to(this.$refs.main__text__second, {
            display: "block",
            duration: 0.1,
          })
          .to(this.$refs.info__div__outer__second, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__second, { opacity: 1, duration: 0.2 });
        this.visibleSecond = !this.visibleSecond;
      }
    },
    handleOpenThird: function () {
      const tl = gsap.timeline();

      if (this.visibleThird === false) {
        tl.to(this.$refs.main__text__third, { opacity: 0, duration: 0.1 })
          .to(this.$refs.third__arrow, { rotate: "0", duration: 0.2 })
          .to(this.$refs.info__div__outer__third, {
            height: "100px",
            duration: 0.2,
          })
          .to(this.$refs.main__text__third, { display: "none", duration: 0.2 });

        this.visibleThird = !this.visibleThird;
      } else {
        tl.to(this.$refs.third__arrow, { rotate: "180deg", duration: 0.2 })
          .to(this.$refs.main__text__third, { display: "block", duration: 0.1 })
          .to(this.$refs.info__div__outer__third, {
            height: "auto",
            duration: 0.2,
          })
          .to(this.$refs.main__text__third, { opacity: 1, duration: 0.2 });
        this.visibleThird = !this.visibleThird;
      }
    },
  },
};
</script>

<style scoped lang="scss" src="../index.scss"></style>
