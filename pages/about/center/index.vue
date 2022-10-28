<template>
<div >
  <div class="title__nav__div">
    <p>O nas / O centrum</p>
  </div>
  <div >
    <div class="container__inner">

    <h1>Witaj w Dental Factory!</h1>
    <img class="about__image" src="/about_1.png"/>
    <p>
      DENTAL FACTORY stworzyliśmy w samym centrum Wrocławia z myślą o Pacjentach szukających nowoczesnego i bezbolesnego leczenia stomatologicznego.
      <br/><br/>
      Leczymy tak, jak sami chcielibyśmy być leczeni. Wykonujemy zabiegi z zakresu stomatologii estetycznej,
      protetyki, ortodoncji, leczenia kanałowego pod mikroskopem, implantów i chirurgii, stomatologii zachowawczej,
      profilaktyki. Naszym Pacjentom pomagamy też w nagłych sytuacjach, jak odklejona korona, ból zęba, złamana proteza.
      <br/><br/>
      <span>Dbamy o Twój komfort. Stylowa poczekalnia, prasa, aromatyczna kawa i muzyka w tle pozwolą Ci zrelaksować się przed wizytą.</span>
    </p>
    <div class="info__div">
      <div>

      </div>
    </div>
    <img class="about__image" src="/about_2.png"/>
      <h2>W trosce o Twój komfort</h2>
      <p>
        Robimy wszystko, aby leczenie przebiegło dla Ciebie sprawnie i komfortowo!
        <br/><br/>
        Więcej widzieć znaczy lepiej leczyć!
        Niezbędne zdjęcia RTG wykonasz u nas na miejscu. Gabinety wyposażyliśmy w cyfrowe aparaty RTG, kamery wewnątrzustne,
        lupy i mikroskop, które pozwalają nam pracować dokładniej.
        <br/><br/>
        Przed rozpoczęciem leczenia otrzymasz od nas pełen plan i kosztorys leczenia,
        dopasowany do Twoich potrzeb, oczekiwań i możliwości finansowych. Leczenie możesz sfinansować, korzystając z wygodnych MediRat.
      </p>
      <NuxtLink  class="links" to="/about/start"><button><p>Dowiedz się jak wygląda pierwsza wizyta</p><img src="/path 25.svg"/></button></NuxtLink>
      <NuxtLink  class="links" to="/price/mediraty"><button><p>Poznaj szczegóły <br/> leczenia na raty!</p><img src="/path 25.svg"/></button></NuxtLink>
      <NuxtLink  class="links" to="/"><button><p>Poznaj zasady gwarancji</p><img src="/path 25.svg"/></button></NuxtLink>
      <p>
        Jesteśmy świadomi tego, jak leczymy, dlatego dajemy Ci gwarancję. Większość zabiegów objęta jest gwarancją o przedłużonym terminie.
      </p>
    </div>

    <div class="carousel">
      <div class="carousel__content">
        <span class="outline">Tu zaczyna się Twój zdrowy i piękny uśmiech!</span>
        <span class="outline">Tu zaczyna się Twój zdrowy i piękny uśmiech!</span>
      </div>
    </div>
    <div>
      <h2>Nasz zespół</h2>
      <p>
        <span>Najważniejsi są ludzie. To oni sprawiają, że wizyta u nas daje Ci powody do uśmiechu!</span>
      </p>
      <div></div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "index",

}
</script>

<style scoped lang="scss">
.title__nav__div {
 border-bottom: 1px solid #000000;
  padding: 20px 0 0 0;
}

.container__inner {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1, h2 {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  margin: 0 20px;
  align-self: flex-start;
  justify-self: flex-start;
}

.about__image {
  width: 90%;
}

a {
  text-decoration: none;
}

.links {
  width: 100%;
}

button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 15px;
  width: 90%;
  height: 53px;
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


p {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 20px;

  span {
    font-weight: 900;
  }


}

.carousel {
  width: 100%;
  height: 50px;
  overflow: hidden;
}



.carousel__content {
  height: 100%;
  display: flex;
  animation: scrolling 10s linear infinite;
}
@keyframes scrolling {
  0%{transform: translateX(0)}
  100%{transform: translateX(-280vw)}
}
.carousel__content span {
  flex-shrink: 0;
  white-space: nowrap;
}



.outline {
  color: transparent;
  width: 280vw;
  -webkit-text-stroke: 2px #000000;
  text-stroke: 2px #FFFFFF;
  text-shadow: none;
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  text-transform: uppercase;
}

.info__div {
  width: 100%;
  height: auto;
  background: #041B8D;

  font-family: termina, sans-serif;
  font-style: normal;
}

</style>
