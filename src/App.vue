<template>
  <TableContainer />
</template>

<script>
import TableContainer from './containers/TableContainer.vue'

export default {
  name: 'App',
  components: {
    TableContainer
  }
}
</script>

<style lang="scss">
@use "sass:string";
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Luckiest Guy', cursive;
}

body::after{
  $numbers: 'ace', 2, 3, 4, 5, 6, 7, 8, 9, 'jack', 'queen', 'king';
  $seeds: 'clubs', 'diamonds', 'spades', 'hearts';
  $content: '';

  @each $number in $numbers {
    @each $seed in $seeds {
      $content: $content + ' url(../public/cards/' + $number + '_of_' + $seed + '.svg)';
    }
  }
  position:absolute; width:0; height:0; overflow:hidden; z-index:-1;
  content: string.unquote($content);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
