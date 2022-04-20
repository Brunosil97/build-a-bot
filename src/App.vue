<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img alt="" class="logo" src="./assets/build-a-bot-logo.png"/>
          Build-a-Bot
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <HelloWorld />
  </main>
</template>

<script>
import HelloWorld from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>

body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
