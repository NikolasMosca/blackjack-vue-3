import { it, describe, expect } from 'vitest';
import { getCardObject } from "../utils/cards";

describe('test getCardObject function', () => {
    it('if I want 2_of_clubs it should return an array', () => {
        expect(getCardObject('2_of_clubs')).toStrictEqual([2, 'clubs'])
    })
    it('if I want 4_of_hearts it should return an array', () => {
        expect(getCardObject('4_of_hearts')).toStrictEqual([4, 'hearts'])
    })
    it('if I want 8_of_diamonds it should return an array', () => {
        expect(getCardObject('8_of_diamonds')).toStrictEqual([8, 'diamonds'])
    })
    it('if I want queen_of_hearts it should return an array', () => {
        expect(getCardObject('queen_of_hearts')).toStrictEqual(['Q', 'hearts'])
    })
    it('if I want jack_of_diamonds it should return an array', () => {
        expect(getCardObject('jack_of_diamonds')).toStrictEqual(['J', 'diamonds'])
    })
    it('if I want king_of_clubs it should return an array', () => {
        expect(getCardObject('king_of_clubs')).toStrictEqual(['K', 'clubs'])
    })
    it('if I pass an invalid number it should return error', () => {
        expect(() => {
            getCardObject('WRONG_of_clubs')
        }).toThrowError(/^Number is not valid$/)
    })
    it('if I pass an invalid seed it should return error', () => {
        expect(() => {
            getCardObject('king_of_WRONG')
        }).toThrowError(/^Seed is not valid$/)
    })
})