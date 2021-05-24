<template>
  <div id="app">
    <Header />
    <div id="main">
      <Hello />
      <router-view :key="this.$route.params.id" />
      <Categories />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Hello from '@/components/Hello.vue';
import Categories from '@/components/Categories.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Hello,
    Categories,
  },
  data() {
    return {
      id: '',
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

*:link, *:visited {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1400px) {
    flex-direction: row;
  }
}
</style>
