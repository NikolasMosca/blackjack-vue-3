<template>
  <div class="card">
    <img :src="image" />
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    card: String
  })
  const image = `/cards/${props.card}.${props.card !== 'cover' ? 'svg' : 'png'}`
</script>

<style lang="scss" scoped>
    .card {
      transition: all 500ms linear;
      flex: .00001;
      animation: flexGrow 500ms ease forwards;

      overflow: hidden;

      > img {
        animation: showup 0.5s;
        max-width: 230px;

        @media screen and (max-height: 1030px) {
          height: 220px;
        }
        @media screen and (max-height: 820px) {
          height: 180px;
        }
      }
    }

    @keyframes showup {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0)
      }
    }

    @keyframes flexGrow {
      to {
        flex: 1;
      }
    }
</style>