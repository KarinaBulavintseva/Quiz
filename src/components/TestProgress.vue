<template>
  <div class="test-progress-bar">
    <div class="progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.test-progress-bar {
  height: 10px;
  opacity: 60%;
  border-radius: 10px;
  background: #f2f3f3;
}
.progress {
  height: 100%;
  border-radius: 10px;
  background: #3bde7c;
}
</style>
