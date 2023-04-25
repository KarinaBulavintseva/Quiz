<template>
  <button
    :disabled="!isActive"
    class="btn"
    :class="{ active: isActive, transparent: hasNotBackground }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    hasNotBackground: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 25px;
  font-size: 14px;
  background: #dadada;
  box-shadow: 0px 4px 10px 0px #00000040 inset;
  color: #8e8e8e;
  line-height: 18px;
  padding: 13px 45px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-align: center;
  font-family: "Merriweather", serif;
  text-transform: uppercase;
}

.btn.active {
  background-color: #ffc700;
  box-shadow: none;
  color: #0d0c11;
}

.btn.transparent {
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
}
</style>
