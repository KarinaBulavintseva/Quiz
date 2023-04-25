<template>
  <div class="result-box">
    <div class="result-content">
      <img class="lightning-right" src="../assets/lightning_result.svg" />
      <img class="lightning-left" src="../assets/lightning_left.svg" />
      <div class="result-container">
        <p class="text-result">Ваш результат рассчитан:</p>
        <p class="text-details">
          Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на
          15 пунктов отличается от среднего в большую или меньшую сторону!
        </p>
        <p class="get-result">Скорее получите свой результат!</p>
        <div class="button-container">
          <p class="text-notice">
            В целях защиты персональных данных результат теста, их подробная
            интерпретация и рекомендации доступны в виде голосового сообщения по
            звонку с вашего мобильного телефона
          </p>
          <p class="text-call">
            Звоните скорее, запись доступна всего
            <span class="time">{{ formatTime }}</span> минут
          </p>
          <div @click="fetchData" class="button-call">
            <img src="../assets/phone.svg" />
            <p class="check-result">Позвонить и прослушать результат</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data" class="result-data-box">
      <div class="result-data">
        <p>Name: {{ data.name }}</p>
        <p>Height: {{ data.height }}</p>
        <p>Mass: {{ data.mass }}</p>
        <p>Hair color: {{ data.hair_color }}</p>
        <p>Skin color: {{ data.skin_color }}</p>
        <p>Eye color: {{ data.eye_color }}</p>
        <p>Birth year: {{ data.birth_year }}</p>
        <p>Gender: {{ data.gender }}</p>
        <p>Homeworld: {{ data.homeworld }}</p>
        <p>Films:</p>
        <ul>
          <li
            class="data-link"
            v-for="(item, index) in data.films"
            :key="index"
          >
            <a :href="item">{{ item }}</a>
          </li>
        </ul>
        <p>Vehicles:</p>
        <ul>
          <li
            class="data-link"
            v-for="(item, index) in data.vehicles"
            :key="index"
          >
            <a :href="item">{{ item }}</a>
          </li>
        </ul>
        <p>Starships:</p>
        <ul>
          <li
            class="data-link"
            v-for="(item, index) in data.starships"
            :key="index"
          >
            <a :href="item">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="bottom-text">
      TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN
      FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeRemaining: 600,
      intervalId: null,
      data: null,
    };
  },
  mounted() {
    this.startCountdown();
  },
  computed: {
    formatTime() {
      let minutes = Math.floor(this.timeRemaining / 60);
      let seconds = this.timeRemaining % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },
  methods: {
    startCountdown() {
      this.intervalId = setInterval(() => {
        this.timeRemaining--;
        if (this.timeRemaining <= 0) {
          clearInterval(this.intervalId);
          this.goToStartPage();
        }
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.intervalId);
    },
    goToStartPage() {
      this.$router.push({ name: "Main" });
    },

    async fetchData() {
      try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        this.data = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
  },
  beforeUnmount() {
    this.stopCountdown();
  },
};
</script>

<style scoped>
.result-box {
  background: url("../assets/rain2.png");
  /* min-height: calc(100vh - 50px); */
  display: flex;
  flex-direction: column;
  padding: 30px 0 5px;
}
.result-content {
  flex-grow: 1;
  position: relative;
}

.text-result {
  color: #ffffff;
  font-family: "PT Serif", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-align: center;
  padding-bottom: 13px;
}

.text-details {
  color: #ffffff;
  font-family: "PT Serif", sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-align: center;
  font-weight: 400;
}

.get-result {
  font-family: "PT Serif", sans-serif;
  color: #3bde7c;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
  padding: 22px 0 12px;
}

.text-notice {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 8px;
  line-height: 14px;
  letter-spacing: 0.2em;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  padding: 15px;
  background-color: #1c2741;
  border-radius: 6px;
  position: relative;
}

.text-call {
  color: #3bde7c;
  text-align: center;
  font-family: "PT Serif", sans-serif;
  font-size: 11px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.1em;
  padding: 5px 15px;
}

.button-call {
  padding: 30px 15px;
  background-color: #eb1b00;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 10;
}

.check-result {
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.05em;
}
.time {
  font-size: 2em;
}

.bottom-text {
  padding-top: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 7px;
  line-height: 9px;
  align-items: center;
  letter-spacing: 0.3em;
  color: #ffffff80;
  text-align: center;
  text-transform: uppercase;
}

.lightning-right {
  position: absolute;
  right: 0;
  top: 340px;
  width: 120px;
}

.lightning-left {
  position: absolute;
  left: 0;
  top: 320px;
  z-index: 1;
}
.result-data-box {
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-data p {
  color: #ffffff;
  font-family: "PT Serif", sans-serif;
  font-size: 15px;
  letter-spacing: 0.05em;
  overflow-wrap: break-word;
}
.data-link {
  font-size: 15px;
  overflow-wrap: anywhere;
}
@media (min-width: 340px) {
  .button-container {
    max-width: 300px;
  }
}
</style>
