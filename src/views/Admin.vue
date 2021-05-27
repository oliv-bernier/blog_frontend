<template>
    <div v-if="loggedIn">
      This is the logged in one
    </div>
    <div v-else>
      <Login />
    </div>
</template>

<script>
import Login from '../components/Login.vue';

export default {
  name: 'Admin',
  components: {
    Login,
  },
  data() {
    return {
      loggedIn: false,
    };
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
