<template>
  <header>
    <div class="header-container" :class="{ open: isOpen }">
      <button @click="toggleMenu" class="icon-menu" type="button">
        <span></span>
      </button>
      <nav class="header-menu">
        <div class="menu-body">
          <div class="icon-box">
            <img
              class="icon-cross"
              @click="toggleMenu"
              src="../assets/icon-cross.svg"
            />
          </div>
          <ul class="menu-list">
            <li class="menu-item">
              <router-link to="/" @click="toggleMenu" class="menu-link"
                >Главная</router-link
              >
            </li>
            <li class="menu-item">
              <router-link to="/#about" class="menu-link" @click="toggleMenu"
                >Информация о тесте</router-link
              >
            </li>
            <li class="menu-item">
              <router-link class="menu-link" to="/tests" @click="toggleMenu"
                >Пройти тест</router-link
              >
            </li>
          </ul>
        </div>
        <div v-if="titleHeader" class="title-header">
          <div class="test-title">
            <img class="image-brain" src="../assets/brain-header.svg" />
            <span class="test-status">{{ titleHeader }}</span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Tests from "../pages/Tests";
export default {
  components: {
    Tests,
  },
  data() {
    return {
      isOpen: false,
      titleHeader: "",
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    $route(to) {
      if (to.path === "/tests") {
        this.titleHeader = "Тест на определение IQ";
      } else if (to.path === "/result") {
        this.titleHeader = "Готово!";
      } else {
        this.titleHeader = "";
      }
    },
  },
};
</script>

<style scoped>
header {
  background-color: #181818;
}
.header-container {
  display: flex;
  min-height: 55px;
  padding-top: 5px;
  padding-bottom: 5px;
  align-items: center;
}

.header-menu {
  flex: 1 1 auto;
}

.menu-body {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #181818;
  left: -100%;
  top: 0;
  padding: 15px 15px 0 25px;
  overflow: auto;
  transition: all 0.3s ease 0s;
  z-index: 70;
}

.menu-body::before {
  content: "";
  width: 100%;
  position: fixed;
  top: 0;
  left: -100%;
  height: 50px;
  background-color: #181818;
  z-index: 50;
  transition: all 0.3s ease 0s;
}

.icon-box {
  display: flex;
  justify-content: end;
  align-items: center;
}
.menu-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  row-gap: 27px;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  padding-top: 60px;
}

.menu-link {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-transform: uppercase;
  transition: color 0.8s ease;
}

.menu-link:hover {
  color: #ffc700;
}
.icon-cross {
  cursor: pointer;
  z-index: 50;
  position: relative;
  width: 28px;
  height: 28px;
}

.image-brain {
  width: 45px;
  height: 45px;
}

.test-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.test-status {
  color: #ffc700;
  font-family: "Yeseva One", cursive;
  font-weight: 400;
  font-size: 15px;
  line-height: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.icon-menu {
  display: block;
  flex: 0 0 30px;
  height: 18px;
  position: relative;
  z-index: 50;
}
.icon-menu span,
.icon-menu::before,
.icon-menu::after {
  content: "";
  right: 0;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #dadada;
}
.icon-menu::before {
  top: 0;
}
.icon-menu::after {
  bottom: 0;
}
.icon-menu span {
  top: calc(50% - 1px);
}
.open .menu-body,
.open .menu-body::before {
  left: 0;
}

@media (min-width: 430px) {
  .menu-body {
    width: 400px;
  }
}
</style>
