<template>
  <div class="header">
    <router-link to="/"><h1>A Blog</h1></router-link>
    <h2>Lorem Ipsum</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped lang="scss">
.header {
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid black;

  @media (min-width: 768px) {
    height: 200px;
  }
}

h1, h2 {
  font-family: 'Newsreader', serif;
  margin: 0 1rem;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    margin: 0 5rem;
    font-size: 3rem;
  }
}

a:link, a:visited {
  color: black;
}
</style>
