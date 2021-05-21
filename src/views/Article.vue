<template>
  <div class="article">
    <img class="article__cover" :src="image" alt="">
    <div class="article__content">
      <h1>{{ title }}</h1>
      <div class="article__content-infos">
        <p class="article__content-infos-author">{{ author }}</p>
        <p class="article__content-infos-category">{{ category }}</p>
        <p class="article__content-infos-date">Published on {{ published }}</p>
      </div>
      <div class="article__content-text" v-html="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data() {
    return {
      title: 'Why you should learn Vue.js',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.',
      image: '/images/vuejs.jpg',
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.<br><br>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>',
      userId: '',
      category: 'Web',
      author: 'Olivier',
      published: '20 mai 2021',
      update: '',
      articleLink: '#',
    };
  },
};
</script>

<style lang="scss">
.article {
  text-align: left;
  animation: fadeIn .5s 1;
  margin: 2rem 0;

  @media (min-width: 1400px) {
    width: 50%;
  }

  &__cover {
    width: 100%;
  }

  &__content {
    margin: 0 1rem;

    h1 {
      margin: 1rem 0;
    }

    &-infos {
      display: inline-flex;

      p {
        margin-right: 1rem;
      }
    }

    &-text {
      margin: 2rem 0;
    }
  }
}

@keyframes fadeIn {
  from {
    transform: translateY(-2rem);
  }

  to {
    transform: translateY(0);
  }
}
</style>
