<template>
  <div id="stats-container">
    <div>PLAYER: {{stats.player}}</div>
    <div>TABLE: {{stats.table}}</div>
    <div>DRAW: {{stats.draw}}</div>
  </div>
</template>

<script setup>
    import { defineProps } from 'vue';
    defineProps({
        stats: {
            player: Number | undefined,
            table: Number | undefined,
            draw: Number | undefined
        },
    })
</script>

<style lang="scss" scoped>
    #stats-container {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .7);
        color: white;
        font-size: 30px;
        font-weight: 300;

        display: flex;
        padding: 10px;
        
        > div {
            margin: 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>