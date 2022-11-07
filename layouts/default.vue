<template>
<div>
  <HeaderComponent/>
  <div class="children">
  <Nuxt/>
  </div>
  <FooterComponent/>
</div>
</template>

<script>
import HeaderComponent from "~/components/layoutComponents/HeaderComponent";
import FooterComponent from "~/components/layoutComponents/FooterComponent";
export default {
  name: "default",
  components: {FooterComponent, HeaderComponent}
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

p, h1, h2, a, li, span, input, textarea {
  &::selection {
    background: #B4F2CB;
  }
}

.children {
  padding-top: 50px;

  @media (min-width: 1024px) {
    padding-top: 100px;
  }
}
</style>
