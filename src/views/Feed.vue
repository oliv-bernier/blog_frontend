<template>
    <div class="article">
      <h1>{{ title }}</h1>
      <div class="article__infos">
        <p class="article__date">
          {{ published }}
        </p>
        <p class="article__category">
          {{ category }}
        </p>
        <p class="article__author">
          {{ author }}
        </p>
      </div>
      <img :src="image" alt="Image illustrant l'article">
      <p class="article__description">{{ description }}</p>
      <a :href="articleLink">
        <p class="article__read">
          Read more
        </p>
      </a>
    </div>
</template>
<script>
export default {
  name: 'Feed',
  data() {
    return {
      title: 'Why you should learn Vue.js',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.',
      image: '/images/vuejs.jpg',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.Lorem ipsum dolor sit amet consectetur adipisicing elit. At veritatis cumque alias est dolorem obcaecati unde, tenetur inventore ducimus hic, modi sint accusantium praesentium. Quasi saepe error quod inventore reprehenderit.',
      userId: '',
      category: 'Web',
      author: 'Olivier',
      published: '20 mai 2021',
      update: '',
      articleLink: '#',
    };
  },
};
</script>

<style scoped lang="scss">
.article {
  display: flex;
  flex-direction: column;
  // background: orange;

  @media (min-width: 1400px) {
      width: 50%;
  }

  &__infos {
    display: flex;
    flex-direction: row;

    p {
      margin: 0 1rem;
    }
  }

  &__description {
    text-align: justify;
    margin: 0 1rem;
  }

  &__read {
    text-align: justify;
    margin: 1rem;
  }

  &:hover {
    background: orange;
  }
}

h1 {
  text-align: left;
  margin: 1rem;
  font-size: 1.5rem;
}

img {
  width: 100%;
  margin: 1rem 0;
}
</style>
