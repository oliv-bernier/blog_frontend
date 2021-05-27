<template>
  <div class="post">
    <form class="post__form">
      <div class="post__form-title">
        <label for="title" class="post__form-title-label">
          Titre
        </label>
        <input type="text" name="title" id="title" class="post__form-title-input" />
      </div>
      <div class="post__form-description">
        <label for="description" class="post__form-description-label">
          Description
        </label>
        <input
          type="text" name="description" id="description"
          class="post__form-description-input"
        />
      </div>
      <div class="post__form-content">
        <label for="content" class="post__form-content-label">
          Contenu
        </label>
        <input
          type="text" name="content" id="content"
          class="post__form-content-input"
        />
      </div>
      <button class="post__form-button" type="submit">
        Envoyer !
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
};
</script>

<style scoped lang="scss">
.post {
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

    &-title, &-description, &-content {
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
