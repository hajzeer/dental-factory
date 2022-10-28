<template>
<div>
  <div class="title__nav__div"> <p>O nas / Zespół</p></div>
  <div class="container__inner">
    <h2>Nasz zespół</h2>
    <p>
      Najważniejsi są ludzie. To oni sprawiają, że wizyta u nas daje Ci powody do uśmiechu! Sebastian Burdeński dentysta,
      założyciel Dental Factory Perfekcjonista. Absolwent Uniwersytetu Medycznego we Wrocławiu.
      Tworzy kompleksowe plany leczenia dla naszych Pacjentów i czuwa nad ich przebiegiem.
      Z pasją zajmuje się leczeniem protetycznym i stomatologią estetyczną.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped lang="scss">

.container__inner {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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
  align-self: flex-start;
  margin: 20px 0 0 20px;
}
a {
  text-decoration: none;
}

p {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 20px;

  span {
    font-weight: 900;
  }

  a {
    font-weight: 900;
  }
}
img {
  width: 90%;

}

</style>
