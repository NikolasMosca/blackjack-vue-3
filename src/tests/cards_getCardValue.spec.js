import { it, describe, expect } from 'vitest';
import { getCardValue } from "../utils/cards";

describe('test getCardObject function', () => {
    it('should return 2', () => {
        expect(getCardValue(['2_of_clubs'])).toEqual(2)
    })
    it('should return 5', () => {
        expect(getCardValue(['2_of_clubs', '3_of_diamonds'])).toEqual(5)
    })
    it('should return 13', () => {
        expect(getCardValue(['2_of_clubs', '3_of_diamonds', '8_of_hearts'])).toEqual(13)
    })
    it('should return 23', () => {
        expect(getCardValue(['2_of_clubs', '3_of_diamonds', '8_of_hearts', 'king_of_clubs'])).toEqual(23)
    })
    it('should return 14', () => {
        expect(getCardValue(['2_of_clubs', '3_of_diamonds', '8_of_hearts', 'ace_of_clubs'])).toEqual(14)
    })
    it('should return 16', () => {
        expect(getCardValue(['2_of_clubs', '3_of_diamonds', 'ace_of_clubs'])).toEqual(16)
    })
    it('should return 12', () => {
        expect(getCardValue(['ace_of_clubs', 'ace_of_diamonds'])).toEqual(12)
    })
    it('should return 13', () => {
        expect(getCardValue(['ace_of_clubs', 'ace_of_diamonds', 'ace_of_hearts'])).toEqual(13)
    })
    it('should return 14', () => {
        expect(getCardValue(['ace_of_clubs', 'ace_of_diamonds', 'ace_of_hearts', 'ace_of_spades'])).toEqual(14)
    })
    it('should return 21', () => {
        expect(getCardValue(['ace_of_clubs', '10_of_diamonds'])).toEqual(21)
    })
    it('should return 21', () => {
        expect(getCardValue(['ace_of_clubs', 'jack_of_diamonds'])).toEqual(21)
    })
    it('should return 15', () => {
        expect(getCardValue(['ace_of_clubs', '9_of_diamonds', '5_of_spades'])).toEqual(15)
    })
    it('should return 26', () => {
        expect(getCardValue(['ace_of_clubs', 'jack_of_diamonds', 'king_of_diamonds', '5_of_spades'])).toEqual(26)
    })
})