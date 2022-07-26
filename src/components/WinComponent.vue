<template>
  <div id="win">
    <h1 :class="getClassPlayer()">{{checkWinner()}}</h1>
    <h2>
      <span :class="getClassPlayer()">Player <br/> {{total}}</span>
      <span :class="getClassTable()">Table <br/> {{tableTotal}}</span>
    </h2>
    <button @click="onTryAgain(checkWinner())">
      <span>Try again!</span>
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
  const props = defineProps({
    total: Number,
    tableTotal: Number,
    onTryAgain: Function
  })

  const checkWinner = () => {
    const { total, tableTotal } = props;

    if(total > 21) return 'YOU LOSE'
    if(tableTotal > 21) return 'YOU WIN'
    if(total > tableTotal) return 'YOU WIN'
    if(total === tableTotal) return 'DRAW'

    return 'YOU LOSE'
  }

  const getClassPlayer = () => checkWinner() === 'YOU WIN' ? 'win' : (checkWinner() === 'YOU LOSE' ? 'lose' : '')
  const getClassTable = () => checkWinner() === 'YOU WIN' ? 'lose' : (checkWinner() === 'YOU LOSE' ? 'win' : '')
</script>

<style lang="scss" scoped>
    #win {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        color: white;
        background: rgba(0, 0, 0, .9);
    }

    h1 {
      font-size: 100px;
      font-weight: 300;
      color: white;

      @media screen and (max-width: 415px) {
        font-size: 70px;
      }
    }
    
    h2 {
      font-weight: 300;
      display: flex;

      @media screen and (max-width: 415px) {
        font-size: 40px;
      }

      @media (orientation: landscape) {
        font-size: 40px;
      }

      > span {
        display: block;
        width: calc(50% - 20px);

        &:first-child {
          margin-right: 20px;
        }
        &:last-child {
          margin-left: 20px;
        }
      }
    }
    .win {
        color: lightgreen;
      }

    .lose {
      color: lightcoral;
    }

    button {
      margin: 25px 30px;
      height: 120px;
      width: 120px;
      cursor: pointer;
      font-size: 25px;
      transition: 0.5s background;
      transform: rotate(45deg);

      > span {
        display: block;
        transform: rotate(-45deg);
      }

      @media (orientation: landscape) {
        margin: 0px 30px;
      }
    }
</style>