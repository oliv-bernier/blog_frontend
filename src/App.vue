<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      id: '',
      isDark: false,
    };
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },
  },
};
</script>

<template>
  <div id="app" :class="{ app__dark: isDark }">
    <Header @switch-theme="toggleTheme" />
    <div id="main">
      <router-view name="hello" />
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view :key="this.$route.fullPath" />
        </keep-alive>
      </transition>
      <router-view name="nav" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import './styles/_vars.scss';
@import './styles/_general.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: var(--background);
  color: var(--text);
  transition: 0.5s;
  position: relative;
  min-height: 100vh;
  padding-bottom: 250px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
