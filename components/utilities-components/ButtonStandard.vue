<template>
  <nuxt-link v-if="isNuxtLink" :to="btnDst" class="btn" :title="btnText">
    {{ btnText }}
  </nuxt-link>
  <a v-else :href="'//' + btnDst" target="_blank" class="btn" :title="btnText">
    {{ btnText }}
  </a>
</template>

<script>
export default {
  name: "ButtonStd",
  props: {
    btnText: {
      type: String,
      default: "Click me",
    },

    btnDst: {
      type: String,
      required: true,
      default: "/",
    },
    isNuxtLink: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  font-size: 13px;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  padding: 14px 30px;
  background-color: var(--palette-soft-blue);
  transition: box-shadow 0.3s ease-out, transform 0.3s ease-out,
    opacity 0.5s ease;
}

.btn:hover {
  box-shadow: 4px 4px 6px #454545;
  transform: translate3d(-1.7px, -1.7px, 2px);
}

.btn:active {
  box-shadow: 2px 2px 10px #454545;
  opacity: 0.6;
}
</style>
