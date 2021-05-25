<template>
  <div class="feed">
    <div class="feed__article" v-for="article in articles" :key="article._id">
      <router-link :to="{ name: 'Article', params: { id: article._id } }">
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
          auteur
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

export default {
  name: 'Feed',
  data() {
    return {
      articles: [],
    };
  },
  beforeMount() {
    if (this.$route.params.id) {
      axios.get(`http://localhost:3000/api/categories/${this.$route.params.id}/articles`)
        .then((response) => {
          console.log(response.data);
          response.data.map((data) => {
            this.articles = data.articles;
            return console.log('ok');
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios.get('http://localhost:3000/api/articles/')
        .then((response) => {
          this.articles = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
.feed {
  font-family: 'Raleway', sans-serif;

  @media (min-width: 1400px) {
      width: 50%;
  }

  &__article {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    color: black;
    padding-bottom: 2rem;
    border-bottom: 1px solid black;

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
      color: black;

      &:visited {
        color: black;
      }

      &:link {
        color: black;
      }
    }
  }
}

h1 {
  text-align: left;
  margin: 1rem;
  font-size: 1.5rem;
  color: black;

  &:visited {
    color: black;
  }

  &:link {
    color: black;
  }
}

img {
  width: 100%;
  height: 200px;
  margin: 1rem 0;
  object-fit: cover;
  transition-duration: .5s;

  @media (min-width: 1400px) {
    height: 400px;
  }

  &:hover {
    opacity: 0.5;
    transition-duration: .5s;
  }
}
</style>
