<template>
  <svg
    :height="size"
    :width="size"
    role="img"
    aria-labelledby="title desc"
    viewBox="0 0 32 32"
  >
    <circle
      role="presentation"
      cx="16"
      cy="16"
      fill="none"
      :r="circleR"
      :stroke="color"
      :stroke-width="thickness"
      :stroke-dasharray="strokeDasharray"
      stroke-linecap="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: [String, Number],
      default: "25px",
    },
    color: {
      type: String,
      default: "currentColor",
    },
    gap: {
      type: Number,
      default: 4,
    },
    thickness: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      circleR: 14 - this.thickness / 2,
      strokeDasharray: Math.PI * 2 * (11 - this.gap),
    };
  },
};
</script>

<style scoped>
@keyframes spinnerRotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

svg {
  transition-property: transform;
  animation-name: spinnerRotation;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 600ms;
}
</style>
