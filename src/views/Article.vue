<template>
  <div class="article">
    <img class="article__cover" :src="article.imageUrl" alt="">
    <div class="article__content">
      <h1>{{ article.title }}</h1>
      <div class="article__content-infos">
        <p class="article__content-infos-author">auteur</p>
        <p class="article__content-infos-category">catégorie</p>
        <p class="article__content-infos-date">Published on {{ article.updatedAt }}</p>
      </div>
      <div class="article__content-text" v-html="cleanContent" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Article',
  data() {
    return {
      article: [],
    };
  },
  beforeMount() {
    axios.get(`http://localhost:3000/api/articles/${this.$route.params.id}`)
      .then((response) => {
        this.article = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  computed: {
    cleanContent() {
      return this.$sanitize(this.article.content);
    },
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
