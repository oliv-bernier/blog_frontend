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

<template>
  <div id="app">
    <Header />
    <div id="main">
      <Hello />
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view :key="this.$route.params.id" />
        </keep-alive>
      </transition>
      <Categories :key="this.$route.params.id" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

*:link, *:visited {
  text-decoration: none;
  color: black;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
