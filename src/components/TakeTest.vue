<template>
  <div class="take-test-block">
    <div class="take-test-container">
      <div class="take-test-content">
        <div class="text">
          <p class="text-take">Пройдите точный и быстрый</p>
          <p class="text-test">Tест на определение IQ</p>
        </div>
        <div class="button-box">
          <router-link to="/tests"
            ><Button :isActive="true">Пройти тест</Button></router-link
          >
        </div>
        <div class="text-bottom">
          <span class="yellow"
            >И получите рекомендации по развитию своего интеллекта </span
          ><br />и улучшению финансового благосостояния и личной жизни
        </div>
      </div>
      <div class="arrow-button-box">
        <a href="#about" class="arrow-button">
          <img src="../assets/icon.svg" />
        </a>
        <p class="more">Подробнее</p>
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
.take-test-block {
  background-image: url("../assets/rain.png");
  background-repeat: no-repeat;
  min-height: calc(100vh - 55px);
  background-size: cover;
  background-position: center 15%;
  display: flex;
  flex-direction: column;
}

.take-test-container {
  padding: 27px 20px 11px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.take-test-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.text {
  flex-grow: 1;
}
.text-take {
  text-align: center;
  line-height: 24px;
  color: #ffffff;
  font-family: "PT Serif", sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}
.text-test {
  letter-spacing: 0.03em;
  font-family: "Yeseva One", cursive;
  color: #ffc700;
  font-size: 30px;
  line-height: 35px;
  text-transform: uppercase;
  padding: 0 5px;
  text-align: center;
}

.button-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-bottom {
  font-family: "PT Serif", sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  color: #ffffff;
  text-align: center;
  padding: 0 15px;
  letter-spacing: 0.2px;
  margin-top: 22px;
}

.arrow-button-box {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 11px;
}
.yellow {
  color: #ffc700;
}
.more {
  font-family: "PT Serif", sans-serif;
  font-size: 8px;
  line-height: 11px;
  color: #ffffff;
  padding-top: 5px;
}

.arrow-button {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 340px) {
  .take-test-block {
    background-position: center 20%;
  }
}

@media (min-width: 400px) {
  .take-test-block {
    background-position: center 35%;
  }
  .take-test-container {
    padding: 27px 30px 15px;
  }
}

@media (min-width: 580px) {
  .take-test-container {
    max-width: 500px;
  }
  .arrow-button {
    width: 30px;
    height: 30px;
  }

  .arrow-button img {
    width: 15px;
  }
  .more {
    padding-top: 10px;
    font-size: 12px;
  }
  .text-bottom {
    line-height: 1.2;
  }
}

@media (min-width: 1150px) {
  .text-take,
  .text-bottom {
    font-size: 25px;
  }
  .text-test {
    font-size: 35px;
  }
  .more {
    font-size: 15px;
  }
  .take-test-container {
    max-width: 900px;
  }
}
</style>
