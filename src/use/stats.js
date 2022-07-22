import { ref } from "vue";

export default function useStats() {
    return ref((() => {
        let initialState = {
            player: 0,
            table: 0,
            draw: 0
        }
        if(!localStorage.getItem('stats')) {
            return initialState;
        }
        try {
          return JSON.parse(localStorage.getItem('stats'))
        } catch(e) {
          return initialState
        }
    })())
}