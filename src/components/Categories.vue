<template>
  <div class="categories">
    <div class="categories__content">
      <h3>Categories</h3>
      <router-link
        v-for="(category, index) in categories"
        :key="category._id"
        :to="{ name: 'FeedByCategory', params: { id: category._id }}"
      >
        <div
          class="categories__content--category"
          @mouseover="$set(hover, index, true)"
          @mouseleave="$set(hover, index, false)"
        >
          <p
            class="categories__content--category-select"
            :class="{ selected: hover[index] }"
          >
            >
          </p>
          <p
            class="categories__content--category-name"
          >
            {{ category.name }}
          </p>
        </div>
      </router-link>
      <router-link to="/">
        <p>Show all</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Categories',
  data() {
    return {
      categories: [],
      hover: [],
    };
  },
  created() {
    axios.get('http://localhost:3000/api/categories')
      .then((response) => {
        this.categories = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped lang="scss">
.categories {

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

    &--category {
        margin: .5rem 0;
        transition-duration: .3s;

      &-select, &-name {
        display: inline-block;
        transition-duration: .3s;
      }
    }
  }
}

.selected {
  transform: translateX(.7rem);
  transition-duration: .3s;
}
</style>
