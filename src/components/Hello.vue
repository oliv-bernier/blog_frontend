<script>
export default {
  name: 'Hello',
  data() {
    return {
      welcome: 'Hello ! My name is Olivier, I\'m a Frontend developer. I built this fictitious blog to manipulate Vue.js, with a backend using Node.js.',
      avatar: '/images/avatar.png',
    };
  },
};
</script>

<template>
  <div class="hello">
    <img :src="avatar" alt="Image de profil">
    <p>
      {{ welcome }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import '../_vars.scss';

.hello {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  text-align: left;
  animation: fadeIn 1s 1;

  @media (min-width: 768px) {
    width: 400px;
  }
  @media (min-width: 1400px) {
    align-self: flex-start;
    justify-self: flex-start;
    width: 25%;
    margin: 3rem 2rem;
  }
}

p {
    font-size: 1.2rem;
    font-family: 'Newsreader', serif;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}

img {
  height: 50px;
  width: 50px;
  margin: 0.5rem 1rem;

  @media (min-width: 768px) {
    margin: 1rem 2rem;
    height: 100px;
    width: 100px;
  }
}

@keyframes fadeIn {
  from {
    transform: translateY(-2rem);
  }
  to {
    transform: translateY(0);
  }
}
</style>
