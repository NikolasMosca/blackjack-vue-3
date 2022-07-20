import { it, describe, expect } from 'vitest';
import { getCard } from "../utils/cards";

describe('test getCard function', () => {
    it('if I want 1 of clubs it should return ace_of_clubs', () => {
        expect(getCard(1, 'clubs')).toBe('ace_of_clubs')
    })
    it('if I want 2 of clubs it should return 2_of_clubs', () => {
        expect(getCard(2, 'clubs')).toBe('2_of_clubs')
    })
    it('if I want 4 of hearts it should return 4_of_hearts', () => {
        expect(getCard(4, 'hearts')).toBe('4_of_hearts')
    })
    it('if I want 10 of spades it should return 10_of_spades', () => {
        expect(getCard(10, 'spades')).toBe('10_of_spades')
    })
    it('if I want 8 of diamonds it should return 8_of_diamonds', () => {
        expect(getCard(8, 'diamonds')).toBe('8_of_diamonds')
    })
    it('if I want king of clubs it should return king_of_clubs', () => {
        expect(getCard('K', 'clubs')).toBe('king_of_clubs')
    })
    it('if I want queen of hearts it should return queen_of_hearts', () => {
        expect(getCard('Q', 'hearts')).toBe('queen_of_hearts')
    })
    it('if I want jack of diamonds it should return jack_of_diamonds', () => {
        expect(getCard('J', 'diamonds')).toBe('jack_of_diamonds')
    })
    it('if I pass an invalid number it should return error', () => {
        expect(() => {
            getCard('WRONG', 'diamonds')
        }).toThrowError(/^Number is not valid$/)
    })
    it('if I pass an invalid seed it should return error', () => {
        expect(() => {
            getCard('J', 'WRONG')
        }).toThrowError(/^Seed is not valid$/)
    })
})