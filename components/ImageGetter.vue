<template>
  <div class="container">
    <div>
      <a
        v-for="image in images"
        href="https://www.instagram.com/dentalfactorywroclaw/"
      >
        <img :src="image.src" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageGetter",
  data() {
    return {
      images: [
        {
          src: `/igImage/1.png`,
        },
        {
          src: `/igImage/2.png`,
        },
        {
          src: `/igImage/3.png`,
        },
        {
          src: `/igImage/4.png`,
        },
        {
          src: `/igImage/5.png`,
        },
        {
          src: `/igImage/6.png`,
        },
        {
          src: `/igImage/7.png`,
        },
        {
          src: `/igImage/8.png`,
        },
        {
          src: `/igImage/9.png`,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  overflow-x: scroll;
  overflow-y: hidden;
  height: 250px;
  width: 100%;

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  div {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    height: 300px;
    width: 100%;
    gap: 20px;

    @media (min-width: 1024px) {
      width: 100%;
    }

    img {
      margin-left: 20px;
      width: 250px;
      height: 250px;
      transition: all 0.3s ease-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
