<template>
  <TakeTest />
  <About />
  <Opportunities />
</template>

<script>
import Button from "../components/Button";
import TakeTest from "../components/TakeTest";
import About from "../components/About";
import Opportunities from "../components/Opportunities";
export default {
  components: {
    Button,
    TakeTest,
    About,
    Opportunities,
  },
  mounted() {
    if (this.$route.hash) {
      let element = document.getElementById(this.$route.hash.slice(1));
      if (element) element.scrollIntoView();
    }
  },
};
</script>
