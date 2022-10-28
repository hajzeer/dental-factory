<template>
<div>
<div class="title__nav__div"> <p>O nas / Pierwsza wizyta</p></div>
<div class="container__inner">
  <h2>Pierwsza wizyta</h2>
  <p>Robimy wszystko, aby wizyta u nas była dla Ciebie komfortowa i przyjemna!</p>
  <img src="/start1.png"/>
  <h2>Umówienie wizyty</h2>
  <p>
    Wizytę możesz umówić, dzwoniąc pod numer telefonu <br/> <a>+48 69 18 18 388</a>, wysyłając maila na adres<br/> <a>kontakt@dental-factory.pl</a>
    lub korzystając z formularza kontaktowego znajdującego się w linku poniżej.
    <br/>
    <br/>
    Aby zagwarantować Ci najwyższe bezpieczeństwo prosimy, aby wszyscy Pacjenci przychodzili na wizytę punktualnie i bez osób towarzyszących.
    Na pierwszą wizytę prosimy przyjść 15 minut wcześniej, aby wypełnić niezbędną dokumentację.
  </p>
  <button><p>Umów się na wizytę</p></button>
  <img src="/start2.png">
  <p>
    <span>U nas możesz czuć się bezpiecznie.</span>
    <br/>
    <br/>
    Twoje zdrowie i bezpieczeństwo od zawsze było dla nas priorytetem, dlatego gabinety wyposażyliśmy w niezbędne sprzęty i środki ochrony, dzięki którym możesz czuć się bezpiecznie.
    <br/>
    <br/>
    Nie pobieraliśmy, nie pobieramy i nie będziemy pobierać żadnych dodatkowych opłat za zabezpieczenia jakie wdrożyliśmy (tzw. opłat epidemiologicznych).
    Zgodnie z wytycznymi WHO, Naczelnej Izby Lekarskiej i Głównego Inspektora Sanitarnego wprowadziliśmy szereg procedur przyjmowania Pacjentów, które na bieżąco aktualizujemy.
  </p>
  <h2 class="subject">Dokumentacja</h2>
  <p>
    Pacjentów, którzy będą u nas pierwszy raz prosimy, aby na wizytę przyszli 10-15 minut wcześniej.
    Dzięki temu wypełnisz niezbędną dokumentację - Kartę Pacjenta, Ankietę Stomatologiczną i Wywiad Lekarski.
  </p>
  <h2 class="subject">Diagnostyka</h2>
  <p>
    Przed konsultacją wykonamy Ci dokumentację fotograficzną. Pozwoli nam ona dokładniej zaplanować leczenie i porównać efekty przed i po leczeniu.
    <br/>
    <br/>
    Aby móc dokładnie zaplanowanować leczenie, konieczne będzie panoramiczne zdjęcie RTG. Jeśli masz aktualne (nie starsze niż 2 miesiące),
    prosimy o zabranie go na wizytę. Jeśli nie, możesz wykonać je u nas na miejscu przed konsultacją.
  </p>
  <img src="/start3.png">
  <h2>Konsultacja i plan leczenia</h2>
  <p>
    Konsultacja to czas, kiedy możemy porozmawiać o Twoich oczekiwaniach dotyczących leczenia i nowego uśmiechu.
    Podczas wizyty dowiesz się, w jakim stanie są Twoje zęby. Otrzymasz od nas indywidualny plan leczenia, który obejmuje kilka wariantów,
    różniących się między sobą trwałością i ceną. Daje Ci to pewność, że w trakcie leczenia nie zaskoczą Cię żadne dodatkowe koszty.
    <br/>
    <br/>
    Jeśli zdecydujesz się na leczenie, otrzymasz harmonogram kolejnych wizyt. Jeśli wyrazisz taką chęć,
    podczas pierwszej wizyty możemy rozpocząć już leczenie. Jeśli na tym etapie nie chcesz podejmować decyzji o rozpoczęciu leczenia,
    nasz zespół skontaktuje się z Tobą w ustalonym terminie.
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

img {
  width: 90%;

}

.subject {
  color: #041B8D;
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

button {
  font-family: termina, sans-serif;
  font-style: normal;
  font-weight: 600;

  margin: 15px;
  width: 88%;
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

  a {
    font-weight: 900;
  }
}
</style>
