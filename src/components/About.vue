<template>
  <div class="about-block" id="about">
    <div class="about-container">
      <p class="text-about">
        Профессиональный IQ-тест позволяет не только определить коэффициент
        вашего интеллекта, но и выработать список рекомендаций для повышения
        этого показателя.
      </p>
    </div>
  </div>
  <div class="result-block">
    <div class="result-container">
      <div class="result-content">
        <p class="text-result">
          Также по результатам теста
          <span class="text-bold">вы получите</span> подробные
          <span class="text-bold">советы</span> по определению наиболее
          перспективной
          <span class="text-bold"
            >для вашего типа <span class="lower-case">интеллекта</span> сферы
            деятельности,</span
          >
          которая принесет вам скорейший финансовый результат.
        </p>
        <div class="brain-image"><img src="../assets/brain.jpg" /></div>
        <div>
          <router-link to="/tests"
            ><Button :isActive="true">Пройти тест</Button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.about-block {
  background: radial-gradient(
      circle at center,
      #2950c2 0%,
      rgba(38, 91, 199, 0.96) 40.63%,
      rgba(39, 98, 187, 0) 85.42%
    ),
    url("../assets/image.jpg") no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 70px 0px 60px;
}

.about-container {
  padding: 0 36px;
}

.text-about {
  position: relative;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  font-family: "Yeseva One", cursive;
  color: #ffffff;
}

.text-about::before {
  content: url("../assets/quotes-left.svg");
  display: block;
  color: #ffffff;
  position: absolute;
  width: 10px;
  height: 10px;
  left: -15px;
  top: -35px;
}

.text-about::after {
  content: url("../assets/quotes-right.svg");
  display: block;
  color: #ffffff;
  position: absolute;
  width: 10px;
  height: 10px;
  right: 2px;
}

.result-content {
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  justify-content: center;
  align-items: center;
}
.text-result {
  font-family: "PT Serif", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  padding-bottom: 38px;
}

.text-bold {
  text-transform: uppercase;
  font-weight: 700;
}
.lower-case {
  text-transform: lowercase;
}

@media (min-width: 430px) {
  [class*="-container"] {
    padding: 0 30px;
  }
}

@media (min-width: 580px) {
  [class*="-container"] {
    max-width: 450px;
  }

  .brain-image img {
    min-width: 300px;
  }
}

@media (min-width: 1150px) {
  [class*="-container"] {
    max-width: 800px;
  }
  .brain-image img {
    min-width: 500px;
  }
}
</style>
