<script>
import axios from 'axios';
import baseUrl from '../api/url';

axios.defaults.baseURL = baseUrl;
export default {
  name: 'BlogPost',
  props: {
    author: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      categories: [],
      postSent: false,
      title: '',
      description: '',
      content: '',
      category: '',
      file: '',
    };
  },
  created() {
    axios.get('/categories')
      .then((response) => {
        this.categories = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    logout() {
      localStorage.removeItem('user');
      this.$emit('user-logout', {
        logged: false,
      });
    },
    selectFile(e) {
      /* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
      this.file = e.target.files[0];
    },
    sendArticle() {
      const {
        title,
        description,
        content,
        category,
      } = this.$data;
      const formData = new FormData();
      // console.log(this.file);
      formData.append('image', this.file);
      formData.append('article', JSON.stringify({
        title,
        description,
        content,
        author: this.$props.author,
        user: this.$props.user,
        category,
      }));
      // console.log(formData);
      axios.post('/articles/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(() => {
        this.postSent = true;
      }).then(() => {
        setTimeout(() => {
          this.postSent = false;
        }, 3000);
      }).catch((error) => (console.error(error)));
    },
  },
};
</script>

<template>
  <div class="post">
    <button
      class="logout"
      type="submit"
      @click.prevent="logout()"
    >
      Se déconnecter
    </button>
    <p class="post__title">Ajouter un nouvel article</p>
    <form
      class="post__form"
      @submit.prevent="sendArticle"
    >
      <div class="post__form-title">
        <label for="title" class="post__form-title-label">
          Titre
        </label>
        <input v-model="title" type="text" name="title" id="title" class="post__form-title-input" />
      </div>
      <div class="post__form-description">
        <label for="description" class="post__form-description-label">
          Description
        </label>
        <textarea
          v-model="description"
          type="text" name="description" id="description"
          class="post__form-description-input"
        />
      </div>
      <div class="post__form-content">
        <label for="content" class="post__form-content-label">
          Contenu
        </label>
        <textarea
          v-model="content"
          type="text" name="content" id="content"
          class="post__form-content-input"
        />
      </div>
      <div class="post__form-image">
        <label for="image" class="post__form-image-label">
          Image de couverture
        </label>
        <input
          @change="selectFile($event)"
          type="file" name="image" id="image"
          class="post__form-image-input"
        />
      </div>
      <div class="post__form-category">
        <label for="category" class="post__form-category-label">
          Catégorie
        </label>
        <select
          v-model="category"
          name="category" id="category"
          class="post__form-category-input"
        >
          <option value="">--Please choose the category--</option>
          <option
            v-for="(category) in categories"
            :key="category._id"
            :value="category._id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <button class="post__form-button" type="submit">
        Envoyer !
      </button>
      <div v-if="postSent" class="post__sent">
        Votre article a bien été envoyé !
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.logout {
  margin: 1rem 0 0 0;
  padding: .7rem;
  border: 1px solid;
  border-radius: 5px;
}

.post {
  &__sent {
    margin: 2rem 0 0 0;
    background: lightgreen;
    padding: 1rem;
    font-size: 1.5rem;
  }

  &__title {
    font-size: 1.8rem;
    text-align: left;
    margin: 3rem 0 0 0;
  }

  &__form {
    padding: 3rem;

  @media (min-width: 1400px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

    @media (min-width: 1400px) {
      width: 500px;
    }

    &-title, &-description, &-content, &-image, &-category {
      display: flex;
      flex-direction: column;

      &-label {
        text-align: left;
      }

      &-input {
        border: 1px solid;
        padding: .5rem;
        border-radius: 5px;
      }

      &-label, &-input {
        margin: .3rem;
      }
    }

    &-button {
      margin: 1rem 0 0 0;
      padding: 0.5rem;
      border: 1px solid;
      border-radius: 5px;
    }
  }
}
</style>
