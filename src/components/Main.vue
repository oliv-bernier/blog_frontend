<template>
  <div class="main">
    <Hello />
    <Article />
    <Categories />
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue';
import Article from '@/components/Article.vue';
import Categories from '@/components/Categories.vue';

export default {
  name: 'Main',
  components: {
    Article,
    Hello,
    Categories,
  },
};
</script>

<style lang="scss">
.main {
  // background: yellow;
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
