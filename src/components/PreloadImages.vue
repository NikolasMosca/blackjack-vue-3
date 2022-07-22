<template>
  <div id="preload-images">
    <img v-for="image in cardImages" :key="image" :src="image"/>
  </div>
</template>

<script setup>
    const numbers = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 'jack', 'queen', 'king'];
    const seeds = ['clubs', 'diamonds', 'spades', 'hearts'];

    const cardImages = numbers.reduce((cards, number) => {
        seeds.forEach(seed => cards.push(`/cards/${number}_of_${seed}.svg`))
        return cards
    }, [])
</script>

<style>
    #preload-images {
        display: none;
    }
</style>