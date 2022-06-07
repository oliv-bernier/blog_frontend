<template>
  <div class="error">
    <p class="error__404">404</p>
    <p class="error__text">Page Not Found</p>
  </div>
</template>

<script>
export default {
  name: '404',
};
</script>

<style scoped lang="scss">
.error {
  margin: 5rem 0;
  @media (min-width: 1400px) {
    width: 50%;

    &__404 {
      font-size: 10rem;
    }
  }

  &__404 {
    font-size: 5rem;

    @media (min-width: 1400px) {
      font-size: 20rem;
    }
  }

  &__text {
    font-size: 2rem;

    @media (min-width: 1400px) {
      font-size: 3rem;
    }
  }
}
</style>
