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
          src: `/igImage/1.webp`,
        },
        {
          src: `/igImage/2.webp`,
        },
        {
          src: `/igImage/3.webp`,
        },
        {
          src: `/igImage/4.webp`,
        },
        {
          src: `/igImage/5.webp`,
        },
        {
          src: `/igImage/6.webp`,
        },
        {
          src: `/igImage/7.webp`,
        },
        {
          src: `/igImage/8.webp`,
        },
        {
          src: `/igImage/9.webp`,
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
      border-radius: 20px;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
