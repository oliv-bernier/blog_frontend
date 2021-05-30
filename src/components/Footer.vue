<template>
  <div class="footer">
    <div class="footer__links">
      <a class="footer__about" :href="aboutLink">
        <router-link to="/about">
          <p>
            About
          </p>
        </router-link>
      </a>
    </div>
    <div class="footer__copyright">
      <p>{{ copyright }}</p>
        <a class="footer__author" :href="authorLink">
        <p>
          Code by {{ author }}
        </p>
      </a>
      <a class="footer__git" :href="gitLink">
        <p>
          {{ git }}
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      name: 'A dev\'s blog',
      author: 'Olivier Bernier',
      authorLink: 'https://www.obernier.fr',
      git: 'GitHub',
      gitLink: '#',
      aboutLink: '#',
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `© Copyright ${this.name} ${currentYear}`;
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  font-family: 'Newsreader', serif;
  background:#383838;
  color: #FAFAFA;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 0 0;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  &__copyright {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }

  &__links {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
    }
  }
}

p {
  margin: 0.5rem;
}

a:link, a:visited {
  color:#F5F5F5;
}

a:hover {
  color:#D3D3D3;
}
</style>
