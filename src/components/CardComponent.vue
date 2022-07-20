<template>
  <div class="card">
    <img :src="image" />
  </div>
</template>

<script>
import { getCard } from '../utils/cards'

export default {
    props: {
      number: String,
      seed: String
    },
    setup(props) {
      const card = getCard(props.number, props.seed)
      return {
        ...props,
        card,
        image: `/cards/${card}.svg`
      }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        
    }
</style>