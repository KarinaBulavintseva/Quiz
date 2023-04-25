<template>
  <div class="wrapper">
    <Header /><router-view class="router-view"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./pages/Main";
import Tests from "./pages/Tests";
import Result from "./pages/Result.vue";

export default {
  components: {
    Header,
    Main,
    Tests,
    Result,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=PT+Serif:wght@400;700&family=Roboto:wght@300;400;500;900&family=Yeseva+One&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}
a,
button {
  cursor: pointer;
  background: none;
  border: none;
}
a {
  text-decoration: none;
}
button {
  flex: 0 0 auto;
}
ul,
li {
  list-style: none;
}

img {
  display: block;
}
label,
input {
  cursor: pointer;
}
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: clip;
}

[class*="-container"] {
  margin: 0 auto;
  padding: 0 15px;
}

.router-view {
  flex-grow: 1;
}
</style>
