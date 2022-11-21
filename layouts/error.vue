<template>
  <div class="container">
    <div v-if="visible">
      <h2>
        {{ error.statusCode }}<br />
        {{ error.message }}
      </h2>
      <NuxtLink to="/">
        Wróć do strony głównej
      </NuxtLink>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";

export default {
  components: { Spinner },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.visible = true;
    }, 2000);
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: Termina;

  h2 {
    width: 100%;
  }

  a {
    width: 100%;
    text-decoration: none;
    color: #000000;
  }
}
</style>
