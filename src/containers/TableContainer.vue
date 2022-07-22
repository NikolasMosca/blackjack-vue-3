<template>
  <div id="table">
    <div class="card-container">
      <CardComponent 
        v-for="(card, index) in tableCards" 
        :key="`${card}-${index}`" 
        :card="card" 
      />
    </div>
    <h1>TABLE: {{tableTotal}}</h1>

    <div class="button-container">
      <button class="pick-card" @click="pickNewCard">
        <span>Pick a card</span>
      </button>
      <button class="show-card" @click="showCard">
        <span>Finish</span>
      </button>
    </div>

    <h1>PLAYER: {{total}}</h1>
    <div class="card-container">
      <CardComponent 
        v-for="(card, index) in cards" 
        :key="`${card}-${index}`" 
        :card="card" 
      />
    </div>

    <WinComponent 
      v-if="finish || total > 21" 
      :total="total" 
      :table-total="tableTotal"
      :onTryAgain="onTryAgain"
    />
    <StatsComponent :stats="stats" />
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { getCard, getCardValue, pickCard } from '../utils/cards'
  import useStats from '../use/stats'
  import CardComponent from '../components/CardComponent.vue'
  import WinComponent from '../components/WinComponent.vue';
  import StatsComponent from '../components/StatsComponent.vue';

  //Use to improve the choice if pick another card or not
  //Based on the average values of the cards
  const CPU_TOLERANCE = 6

  const finish = ref(false) 
  const tableCards = ref(['cover', 'cover'])
  const cards = ref([])
  const stats = ref(useStats());
  const total = computed(() => getCardValue(cards.value))
  const tableTotal = computed(() => getCardValue(tableCards.value))  

  //Pick new card for the player
  const pickNewCard = () => {
    const [number, seed] = pickCard()
    cards.value.push(getCard(number, seed))
  }

  //Finish the game and CPU takes the cards and see who win
  const showCard = () => {
    tableCards.value = []
    do {
      const [number, seed] = pickCard()
      tableCards.value.push(getCard(number, seed))
    } while(tableTotal.value < total.value || tableTotal.value <= 21 - CPU_TOLERANCE)
    finish.value = true
  }

  //When player clicks try again button
  const onTryAgain = (message) => {
    if(message === 'YOU WIN') {
      stats.value.player++
    } else if(message === 'YOU LOSE') {
      stats.value.table++
    } else {
      stats.value.draw++
    }
    localStorage.setItem('stats', JSON.stringify(stats.value))
    init()
  }

  //Init the new game!
  const init = () => {
    finish.value = false;
    tableCards.value = ['cover', 'cover']
    cards.value = [];

    //Auto pick the first card for the player
    pickNewCard()
  }

  init()
</script>

<style lang="scss" scoped>
  $points-color: white;
  $pick-card-bg: lightgreen;
  $show-card-bg: rgb(209, 34, 34);

  #table {
    background: url(../../public/images/table-bg.webp);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-height: 1100px) {
      padding-top: 100px;
    }
  }

  h1 {
    color: $points-color;
    font-size: 40px;
    font-weight: 300;
  }
  
  .card-container {
    display: flex;

    > * {
      margin-left: -178px;

      @media screen and (max-height: 1030px) {
        margin-left: -121px;
      }
      @media screen and (max-height: 820px) {
        margin-left: -100px;
      }

      &:first-child {
        margin-left: 0;
      }
    }
  }

  .button-container {
    display: flex;
    
    > button {
      margin: 25px 30px;
      height: 120px;
      width: 120px;
      cursor: pointer;
      font-size: 25px;
      transition: 0.5s background;
      transform: rotate(45deg);
      border: 0;

      > span {
        display: block;
        transform: rotate(-45deg);
      }
    }

    .pick-card {
      background: $pick-card-bg;
      &:hover {
        background: lighten($pick-card-bg, 20%);
      }
    }

    .show-card {
      background: $show-card-bg;
      &:hover {
        background: lighten($show-card-bg, 20%);
      }
    }
  }
</style>