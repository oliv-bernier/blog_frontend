<script>
import axios from 'axios';
import Login from '../components/admin/Login.vue';
import BlogPost from '../components/admin/BlogPost.vue';

export default {
  name: 'Admin',
  components: {
    Login,
    BlogPost,
  },
  data() {
    return {
      loggedIn: false,
      name: '',
      userId: '',
      token: '',
    };
  },
  methods: {
    log(payload) {
      this.loggedIn = payload.logged;
      this.name = payload.name;
      this.userId = payload.userId;
      this.token = payload.token;
    },
    logout(payload) {
      delete axios.defaults.headers.common.Authorization;
      this.loggedIn = payload.logged;
      this.name = '';
      this.userId = '';
      this.token = '';
    },
  },
};
</script>

<template>
  <BlogPost v-if="loggedIn" :logged="loggedIn" @user-logout="logout" :author="name" :user="userId" />
  <Login v-else @user-logged="log" />
</template>

<style scoped lang="scss">
.login {
  @media (min-width: 1400px) {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  &__form {
    padding: 3rem;

    @media (min-width: 1400px) {
      width: 500px;
    }

    &-email,
    &-password {
      display: flex;
      flex-direction: column;

      &-label {
        text-align: left;
      }

      &-input {
        border: 1px solid;
        padding: 0.5rem;
        border-radius: 5px;
      }

      &-label,
      &-input {
        margin: 0.3rem;
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
