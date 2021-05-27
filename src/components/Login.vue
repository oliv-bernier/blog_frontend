<template>
  <div class="login">
    <form class="login__form">
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
        <p>email {{ email }}</p>
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
          v-model="passowrd"
          placeholder="Mot de passe"
        />
      </div>
      <button class="login__form-button" type="submit">
        Se connecter
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  background: orange;

  @media (min-width: 1400px) {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  &__form {
    padding: 3rem;
    background: yellow;

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
