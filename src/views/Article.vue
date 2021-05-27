<template>
  <div class="article">
    <img class="article__cover" :src="article.imageUrl" alt="">
    <div class="article__content">
      <h1>{{ article.title }}</h1>
      <div class="article__content-infos">
        <p class="article__content-infos-category">
          <i class="fas fa-scroll"></i>
          {{ article.category.name }}
        </p>
        <p class="article__content-infos-author">
          <i class="fas fa-pen-nib"></i>
          {{ article.user.name }}
        </p>
        <p class="article__content-infos-date">
          <i class="fas fa-clock"></i>
          {{ displayDate(article.updatedAt) }}
        </p>
      </div>
      <div class="article__content-text" v-html="cleanContent" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import baseUrl from '../api/url';

axios.defaults.baseURL = baseUrl;

export default {
  name: 'Article',
  data() {
    return {
      article: [],
    };
  },
  beforeMount() {
    axios.get(`/articles/${this.$route.params.id}`)
      .then((response) => {
        this.article = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    displayDate(date) {
      const published = new Date(date);
      return `Published on ${published.toDateString()}`;
    },
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
  font-family: 'Raleway', sans-serif;
  font-size: 1.2rem;
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

.fas {
  color: lightgray;
}
</style>
