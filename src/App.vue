<template>
  <div id="app">
    <Header size="4" class="header" />
    <Sidebar class="sidebar" />
    <Main class="main" />
    <footer class="footer">Footer</footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from "./components/Sidebar";
import Main from './components/Main'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Main
  }
}
</script>

<style>
#app {
  text-align: center;
  display: grid;
  height: 100vh;
  grid-template-columns: 15rem auto;
  grid-template-rows: 3rem minmax(10px, auto) 50px;
  grid-template-areas: "header header"
                         "sidebar main"
                         "footer footer";
}

.header {
  grid-area: header;
  background: rgba(230, 225, 222, 0.5);
}

.sidebar {
  grid-area: sidebar;
  background: rgba(197, 191, 191, 0.5);
}

.main {
  grid-area: main;
  background: rgba(159, 177, 159, 0.5);
}

.footer {
  grid-area: footer;
  background: rgba(140, 140, 156, 0.5);
}
</style>
