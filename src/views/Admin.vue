<template>
  <BlogPost
    v-if="loggedIn"
    :logged="loggedIn"
    @user-logout="logout"
  />
  <Login
    v-else
    @user-logged="log"
  />
</template>

<script>
import axios from 'axios';
import Login from '../components/Login.vue';
import BlogPost from '../components/BlogPost.vue';

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
      token: '',
    };
  },
  methods: {
    log(payload) {
      this.loggedIn = payload.logged;
      this.name = payload.name;
      this.token = payload.token;
    },
    logout(payload) {
      delete axios.defaults.headers.common.Authorization;
      this.loggedIn = payload.logged;
      this.name = '';
      this.token = '';
    },
  },
};
</script>

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

    &-email, &-password {
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
