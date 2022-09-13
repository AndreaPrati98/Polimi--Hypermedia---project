<!-- This component works only if the background-color of his parents is not set -->

<template>
  <nuxt-link
    v-if="isNuxtLink"
    :to="btnDst"
    class="collision"
    :style="cssProps"
    :title="btnText"
  >
    <span class="span">{{ btnText }}</span>
  </nuxt-link>
  <a
    v-else
    :href="'//' + btnDst"
    target="_blank"
    class="collision"
    :style="cssProps"
    :title="btnText"
  >
    <span class="span">{{ btnText }}</span>
  </a>
</template>

<script>
export default {
  name: "ButtonStdAnimated",
  props: {
    btnText: {
      type: String,
      default: "Click me",
    },
    btnTextColor: {
      type: String,
      default: "var(--text-color-light)",
    },
    btnBkgdColor: {
      type: String,
      default: "var(--btn-background-color)",
    },
    btnBkgdHoverColor: {
      type: String,
      default: "var(--btn-background-hover-color)",
    },
    btnDst: {
      type: String,
      required: true,
    },
    isNuxtLink: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    cssProps() {
      return {
        "--local-bkgd": this.btnBkgdColor,
        "--local-hover-bkgd": this.btnBkgdHoverColor,
        "--local-text": this.btnTextColor,
      };
    },
  },
};
</script>

<style scoped>
.span {
  position: relative;
  z-index: 20;
}

.collision {
  text-decoration: none;
  color: var(--local-text, var(--text-color-light));
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  display: block;
  height: 70px;
  width: 100%;
  overflow: hidden;
  line-height: 70px;
  text-align: center;
  position: relative;
  background-color: var(--local-bkgd);

  display: flex;
  justify-content: center;
  align-items: center;
}

.collision::before,
.collision::after {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background-color: var(--local-hover-bkgd, var(--btn-background-hover-color));
  top: 50%;
  border-radius: 50%;
  z-index: 10;
}

.collision::before {
  transform: translate(-50%, -50%);
  left: -20px;
}

.collision::after {
  transform: translate(50%, -50%);
  right: -20px;
}

.collision:hover::before {
  animation: move-left 0.8s both;
  animation-direction: alternate;
}
.collision:hover::after {
  animation: move-right 0.8s both;
  animation-direction: alternate;
}

@keyframes move-left {
  0% {
    left: -20px;
  }
  50% {
    left: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    left: 50%;
    height: 400px;
    width: 400px;
  }
}

@keyframes move-right {
  0% {
    right: -20px;
  }
  50% {
    right: 50%;
    width: 20px;
    height: 20px;
  }
  100% {
    right: 50%;
    height: 400px;
    width: 400px;
  }
}
</style>
