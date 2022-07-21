export const CardNumbers = [1,2,3,4,5,6,7,8,9,10,'J','Q','K']
export const CardNames = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king']
export const CardSeeds = ['clubs', 'diamonds', 'hearts', 'spades']

export const getCard = (number, seed) => {
    const cardIndex = CardNumbers.findIndex(card => card == number)
    if(cardIndex === -1) {
        throw new Error('Number is not valid')
    }
    if(!CardSeeds.includes(seed)) {
        throw new Error('Seed is not valid')
    }
    return `${CardNames[cardIndex]}_of_${seed}`
}

export const getCardObject = (card) => {
    const [name, seed] = card.split('_of_')
    const cardIndex = CardNames.findIndex(card => card == name)
    if(cardIndex === -1) {
        throw new Error('Number is not valid')
    }
    if(!CardSeeds.includes(seed)) {
        throw new Error('Seed is not valid')
    }
    return [
        CardNumbers[cardIndex],
        seed
    ]
}

export const getCardValue = (cards) => {
    let aces = 0
    let total = cards.reduce((total, card) => {
        if(card === 'cover') return total;
        let [number] = getCardObject(card)
        if(['J','Q','K'].includes(number)) number = 10
        if(number === 1) aces++
        return total + number
    }, 0)
    while(aces > 0) {
        if(total + 10 <= 21) {
            total += 10
        }
        aces--
    } 
    return total
}

export const pickCard = () => {
    const number = CardNumbers[Math.floor(Math.random() * CardNumbers.length)];
    const seed = CardSeeds[Math.floor(Math.random() * CardSeeds.length)];
    return [
        number,
        seed
    ]
}