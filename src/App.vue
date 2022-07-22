<template>
  <div>
<TableContainer />
  <PreloadImages />
  </div>
  
</template>

<script>
import TableContainer from './containers/TableContainer.vue'
import PreloadImages from './components/PreloadImages.vue'

export default {
  name: 'App',
  components: {
    TableContainer,
    PreloadImages
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Luckiest Guy', cursive;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
