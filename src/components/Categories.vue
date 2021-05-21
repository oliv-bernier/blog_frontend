<template>
  <div class="categories">
    <div class="categories__content">
      <h3>Categories</h3>
      <p>> Web</p>
      <p>> Design</p>
      <p>> Other</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
};
</script>

<style scoped lang="scss">
.categories {
  width: 100%;

  @media (min-width: 1400px) {
      width: 25%;
    align-self: flex-start;
    margin: 3rem 2rem;
  }

  &__content {
    font-family: 'Newsreader', serif;
    font-size: 1.5rem;
    text-align: left;
    margin: 1rem;

    h3 {
      margin: 1rem;
    }

    p {
      margin: 0.5rem;
    }
  }
}
</style>
