<template>
  <div class="opportunities-block">
    <img
      class="lightning-top"
      src="../assets/lightning_top.svg
    "
    />
    <img class="lightning-bottom" src="../assets/lightning_bottom.svg" />
    <div class="block-container">
      <div class="block-content">
        <p class="text-time">
          Прохождение теста займет у вас не более
          <span class="text-time-bold yellow">12 минут</span>, а его результаты
          вы сможете
          <span class="text-time-bold yellow">использовать всю жизнь.</span>
        </p>
        <div class="white-block">
          Профессиональная интерпретация и детально
          <span class="white-block-bold">проработанные рекомендации</span>
          позволят вам качественно
          <span class="white-block-bold"
            >изменить все аспекты своей жизни:</span
          >
          от финансового до любовного.
        </div>
        <router-link to="/tests">
          <Button :hasNotBackground="true" :isActive="true">Пройти тест</Button></router-link
        >
      </div>
      <div class="year"><span class="text-year">2019</span></div>
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
.opportunities-block {
  background-image: url("../assets/rain2.png");
  position: relative;
}

.block-content {
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lightning-top {
  position: absolute;
  right: 0;
  top: 40px;
}

.lightning-bottom {
  position: absolute;
  bottom: 25px;
}

.text-time {
  font-family: "Merriweather", serif;
  color: #ffffff;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.05em;
  padding-right: 35px;
  padding-bottom: 14px;
}

.yellow {
  color: #ffc700;
}

.text-time-bold {
  font-weight: 900;
}

.white-block {
  font-family: "Merriweather", serif;
  background-color: rgba(243, 243, 242, 0.8);
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  padding: 29px 15px 31px;
  border-radius: 20px;
  margin-bottom: 33px;
  font-weight: 400;
  position: relative;
  z-index: 50;
}
.white-block-bold {
  font-weight: 700;
}

.year {
  margin-top: 50px;
  text-align: center;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-year {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
}
.text-year::before {
  content: "c";
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  font-size: 8px;
  position: absolute;
  left: -15px;
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
}

@media (min-width: 1150px) {
  [class*="-container"] {
    max-width: 800px;
  }
}
</style>
