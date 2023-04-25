<template>
  <div class="test">
    <div class="test-progress-box">
      <TestProgress :progress="currentWidth" />
    </div>
    <div class="test-content">
      <div class="questions-box" v-if="currentTest <= tests.length - 1">
        <div class="test-options">
          <Options
            :tests="tests"
            :currentTest="currentTest"
            :selectedOption="selectedOption"
            @selectedEvent="onOptionSelected"
          ></Options>
        </div>
        <div class="test-button">
          <Button @click="nextTest" :isActive="buttonNext">Далее</Button>
        </div>
      </div>
      <div v-else>
        <TestEnd />
      </div>
    </div>
  </div>
</template>

<script>
import TestProgress from "../components/TestProgress";
import Button from "../components/Button";
import Options from "../components/Options";
import TestEnd from "../components/TestEnd";
import databaseQuestions from "../db";

export default {
  components: {
    TestProgress,
    Button,
    Options,
    TestEnd,
  },

  data() {
    return {
      currentTest: 0,
      currentWidth: 0,
      selectedOption: "",
      buttonNext: false,
      tests: databaseQuestions,
    };
  },

  methods: {
    nextTest() {
      this.currentTest += 1;
      this.selectedOption = "";
      this.currentWidth =
        ((this.currentTest + 1) / (this.tests.length + 1)) * 100;
      this.buttonNext = false;
    },

    onOptionSelected(event) {
      this.selectedOption = event.target.value;
      this.buttonNext = true;
    },
  },
};
</script>

<style scoped>
.test {
  background: url("../assets/rain2.png");
  display: flex;
  flex-direction: column;
  padding: 15px 0;
}
.test-progress-box {
  padding: 0 15px;
}
.test-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.questions-box {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.test-options {
  padding-bottom: 15px;
  flex-grow: 1;
}
.test-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
