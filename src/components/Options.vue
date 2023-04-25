<template>
  <div>
    <p class="test-title">{{ tests[currentTest].title }}</p>
    <div v-if="tests[currentTest].type === 'text'">
      <div class="image-box" v-if="tests[currentTest].imgUrl">
        <ImageDisplay
          :path="tests[currentTest].imgUrl"
          :name="tests[currentTest].title"
        ></ImageDisplay>
      </div>
      <div class="options-list">
        <div
          class="option-item"
          v-for="item in tests[currentTest].options"
          :key="item.id"
        >
          <input
            class="text-option-input"
            type="radio"
            :name="tests[currentTest].id"
            v-bind:id="item"
            :value="item"
            :checked="selectedOption === item"
            @change="$emit('selectedEvent', $event)"
          />
          <label v-bind:for="item" class="text-option-label">{{ item }} </label>
        </div>
      </div>
    </div>
    <div class="color-blocks" v-else-if="tests[currentTest].type === 'color'">
      <div class="blocks-box">
        <input
          class="block-item"
          :class="{ 'item-checked': selectedOption === item }"
          v-for="(item, index) in tests[currentTest].options"
          :key="item.id"
          :style="{ background: item }"
          type="radio"
          :name="`${tests[currentTest].id}-${index}`"
          :value="item"
          :checked="selectedOption === item"
          @change="$emit('selectedEvent', $event)"
        />
      </div>
    </div>
    <div v-else>
      <div class="image-box">
        <ImageDisplay
          :path="tests[currentTest].imgUrl"
          :name="tests[currentTest].title"
        />
      </div>
      <div class="number-options-box">
        <div v-for="item in tests[currentTest].options" :key="item.id">
          <input
            class="number-option-input"
            type="radio"
            :name="tests[currentTest].id"
            :id="item"
            :value="item"
            :checked="selectedOption === item"
            @change="$emit('selectedEvent', $event)"
          />
          <label :for="item" class="number-option-label">{{ item }} </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageDisplay from "./ImageDisplay.vue";

export default {
  components: { ImageDisplay },
  props: {
    tests: {
      type: Array,
      required: true,
    },
    currentTest: {
      type: [Number, String],
      required: true,
    },
    selectedOption: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
};
</script>

<style scoped>
.test-title {
  font-family: "PT Serif", sans-serif;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-align: center;
  padding: 25px 15px;
}
.image-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
}
.options-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.text-option-label {
  padding: 10px 15px 10px 35px;
  width: 100%;
  background: rgba(242, 243, 243, 0.1);
  color: rgba(255, 255, 255, 1);
  font-family: "PT Serif", sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
}
.text-option-label::before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin-right: 40px;
  flex-shrink: 0;
}

.text-option-input:checked + .text-option-label {
  background-color: #ffc700;
  color: rgba(39, 39, 39, 1);
}

.text-option-input:checked + .text-option-label::before {
  border: 1px solid #000000;
  background-color: rgba(41, 80, 194, 1);
}

.color-blocks {
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blocks-box {
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  justify-items: center;
  gap: 10px;
}

.block-item {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 75px;
  height: 75px;
}

.number-options-box {
  border-top: 4px solid rgba(242, 243, 243, 0.1);
  padding: 15px 15px;
  display: flex;
  justify-content: space-evenly;
}
.number-option-label {
  font-family: "PT Serif", sans-serif;
  color: rgba(13, 12, 17, 1);
  background-color: rgba(255, 255, 255, 1);
  height: 40px;
  width: 40px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-option-input,
.number-option-input {
  display: none;
}

.item-checked,
.number-option-input:checked + .number-option-label {
  border: 6px solid #ffc700;
}
</style>
