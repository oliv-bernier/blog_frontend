<template>
  <div class="header">
    <router-link to="/"><h1>A dev's blog</h1></router-link>
    <div class="header__switch">
      <input class="header__switch--theme" type="checkbox" @click="switchTheme()" />
      <label class="header__switch--theme-label" for="">
        <span class="header__switch--theme-label-span"> Light </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    switchTheme() {
      this.$emit('switch-theme');
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/_vars.scss';

.header {
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--text);

  @media (min-width: 768px) {
    height: 200px;
  }
}

h1 {
  font-family: 'Newsreader', serif;
  margin: 0 1rem;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    margin: 0 5rem;
    font-size: 3rem;
  }
}

a:link,
a:visited {
  color: var(--links);
}

.header__switch {
  background: #e0e0e0;
  border: 2px solid white;
  border-radius: 30px;
  overflow: hidden;
  width: 50px;
  text-align: center;
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--button-light);
  position: relative;
  padding-right: 50px;
  margin-right: 1rem;

  @media (min-width: 1400px) {
    margin-right: 5rem;
  }

  &:before {
    content: 'Dark';
    color: var(--button-dark);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  &:after {
    color: purple;
  }

  &--theme {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + &-label:before {
      transform: translateX(50px);
      transition: transform 300ms linear;
    }

    &-label {
      position: relative;
      padding: 5px 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: '';
        background: #2c3e50;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 300ms;
      }

      &-span {
        position: relative;
      }
    }
  }
}
</style>
