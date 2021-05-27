<template>
  <div class="login">
    <form
      class="login__form"
      @submit.prevent="submitLogin"
    >
      <div class="login__form-email">
        <label for="email" class="login__form-email-label">
          Votre adresse email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          class="login__form-email-input"
          v-model="email"
          placeholder="E-mail"
        />
      </div>
      <div class="login__form-password">
        <label for="password" class="login__form-password-label">
          Votre mot de passe
        </label>
        <input
          type="password"
          name="password"
          id="password"
          class="login__form-password-input"
          v-model="password"
          placeholder="Mot de passe"
        />
      </div>
      <button
        class="login__form-button"
        type="submit"
      >
        Se connecter
      </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import baseUrl from '../api/url';

axios.defaults.baseURL = baseUrl;

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitLogin() {
      const { email, password } = this.$data;
      axios.post('/auth/login', {
        email,
        password,
      })
        .then((response) => {
          const { token } = response.data;
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          localStorage.setItem('user', JSON.stringify(token));
          this.$emit('user-logged', {
            logged: true,
            name: response.data.name,
            token,
          });
        }).catch((error) => (console.error(error)));
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
