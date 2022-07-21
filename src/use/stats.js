import { ref } from "vue";

export default function useStats() {
    return ref((() => {
        try {
          return JSON.parse(localStorage.getItem('stats'))
        } catch(e) {
          return {
            player: 0,
            table: 0,
            draw: 0
          }
        }
    })())
}