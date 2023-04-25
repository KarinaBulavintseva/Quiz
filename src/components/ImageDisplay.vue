<template>
  <div>
    <img :src="path" :alt="name" :key="path" />
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

