<template>
  <div class="result-processing-box">
    <p class="processing">Обработка результатов</p>
    <div class="spinner">
      <span class="loader"></span>
    </div>
    <p class="thinking-style">
      Определение стиля мышления.........................
      ...................................................
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "Result" });
    }, 2000);
  },
};
</script>

<style>
.result-processing-box {
  background: url("../assets/rain2.png");
  display: flex;
  flex-direction: column;
  padding: 15px 0;
}

.test-progress-box {
  padding: 0 15px;
}

.processing {
  font-family: "PT Serif", sans-serif;
  font-weight: 400;
  color: #ffffff;
  font-size: 23px;
  line-height: 30px;
  letter-spacing: 0.1em;
  text-align: center;
  padding: 50px 60px 40px;
}

.thinking-style {
  font-family: "PT Serif", sans-serif;
  font-weight: 400;
  color: #ffffff;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.05em;
  padding: 45px 22px 0;
  text-align: center;
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  color: #3bde7c;
  font-size: 9px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.3s infinite linear;
  transform: translateZ(0);
}

@keyframes mulShdSpin {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
</style>
