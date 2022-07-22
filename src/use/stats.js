import { ref } from "vue";

export default function useStats() {
    let initialState = {
        player: 0,
        table: 0,
        draw: 0
    }
    try {
        initialState = JSON.parse(localStorage.getItem('stats'))
    } catch(e) {
        console.log(e)
    }
    return ref(initialState)
}