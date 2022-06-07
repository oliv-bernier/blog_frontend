<template>
  <div class="about">
    <div class="about__content">
      <h1>Browse my work</h1>
      <a href="https://www.obernier.fr">
        <p>https://www.obernier.fr</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped lang="scss">
@import '../styles/_vars.scss';

.about {
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about__content {
  font-family: 'Raleway', sans-serif;
  margin: 5rem 0;
  width: 100%;

  @media (min-width: 1400px) {
    width: 50%;
  }

  & h1 {
    font-size: 2rem;
    width: 100%;
  }

  & a {
    font-size: 1.5rem;
    color: var(--links);
  }
}
</style>
