<template>
  <div id="table">
    <h1>{{total}}</h1>
    <button class="pick-card" @click="pickNewCard">Pick a card</button>
    <div class="card-container">
      <CardComponent 
        v-for="(card, index) in cards" 
        :key="index" 
        :number="card[0]" 
        :seed="card[1]"
      />
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import CardComponent from '@/components/CardComponent.vue'
  import { getCard, getCardValue, pickCard } from '../utils/cards'

  const cards = ref([])
  const total = computed(() => getCardValue(cards.value.map(card => getCard(card[0], card[1]))))
  const pickNewCard = () => cards.value.push(pickCard())
</script>

<style lang="scss">
  #table {
    background: url(../../public/images/table-bg.webp);
    width: 100%;
    height: 100vh;
  }

  h1 {
    color: red;
  }
  
  .card-container {
    display: flex;

    > * {
      margin-left: -150px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .pick-card {
    background: green;
    padding: 10px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
</style>