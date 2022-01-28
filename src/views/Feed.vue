<template>
  <div class="feed">
    <div v-if="postLoading" class="feed__loading">Loading posts...</div>
    <div class="feed__article" v-for="(article) in articles" :key="article._id">
      <router-link
        :to="{ name: 'Article', params: { id: article._id } }"
      >
        <h1>
          {{ article.title }}
        </h1>
      </router-link>
      <div class="feed__article--infos">
        <p class="feed__article--date">
          {{ displayDate(article.updatedAt) }}
        </p>
        <p class="feed__article--category">
          {{ article.category.name }}
        </p>
        <p class="feed__article--author">
          by {{ article.author }}
        </p>
      </div>
      <router-link :to="{ name: 'Article', params: { id: article._id } }">
        <img :src="article.imageUrl" alt="Image illustrant l'article">
      </router-link>
      <p class="feed__article--description">{{ article.description }}</p>
      <router-link :to="{ name: 'Article', params: { id: article._id } }">
        <p class="feed__article--read">
          Read more
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import baseUrl from '../api/url';

axios.defaults.baseURL = baseUrl;

export default {
  name: 'Feed',
  data() {
    return {
      articles: [],
      postLoading: true,
    };
  },
  beforeMount() {
    axios.get('/articles/')
      .then((response) => {
        if (this.$route.params.name) {
          const fileteredArticles = response.data.filter((article) => (
            article.category.name === this.$route.params.name
          ));
          this.articles = fileteredArticles;
        } else {
          this.articles = response.data;
        }
      })
      .then(() => {
        this.articles.reverse();
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.postLoading = false;
      });
  },
  methods: {
    displayDate(date) {
      const published = new Date(date);
      return published.toDateString();
    },
  },
};
</script>

<style scoped lang="scss">
@import '../_vars.scss';

.feed {
  font-family: 'Raleway', sans-serif;

  @media (min-width: 1400px) {
      width: 50%;
  }

  &__loading {
    margin: 3rem 1rem;
    font-size: 2rem;
    font-style: italic;
    animation: loadIn 1s infinite ease-out;

    @media (min-width: 1400px) {
      font-size: 3rem;
      animation: loadIn 1.5s infinite ease-out;
    }
  }

  &__article {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    color: var(--text);
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--text);

    &:last-child {
      border-bottom: none;
    }

    &--infos {
      display: flex;
      flex-direction: row;

      p {
        margin: 0 1rem;
      }
    }

    &--description {
      text-align: justify;
      margin: 0 1rem;
    }

    &--read {
      text-align: justify;
      margin: 1rem;
      color: var(--links);

      &:visited {
        color: var(--links);
      }

      &:link {
        color: var(--links);
      }
    }
  }
}

h1 {
  text-align: left;
  margin: 1rem;
  font-size: 1.5rem;
  color: var(--text);

  &:visited {
    color: var(--text);
  }

  &:link {
    color: var(--test);
  }
}

img {
  width: 100%;
  height: 200px;
  margin: 1rem 0;
  object-fit: cover;
  transition-duration: .5s;

  @media (min-width: 1400px) {
    height: 300px;
  }

  &:hover {
    opacity: 0.5;
    transition-duration: .5s;
  }

  @keyframes loadIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
