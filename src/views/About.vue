<template>
  <div class="about">
    <h1>Browse my work</h1>
    <a href="https://www.obernier.fr">
      <p>
        https://www.obernier.fr
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped lang="scss">
@import '../_vars.scss';

.about {
  font-family: 'Raleway', sans-serif;
  margin: 5rem 0;

  @media (min-width: 1400px) {
      width: 50%;
  }

  & h1 {
    font-size: 2rem;
  }

  & a {
    font-size: 1.5rem;
    color: var(--links);
  }
}
</style>
