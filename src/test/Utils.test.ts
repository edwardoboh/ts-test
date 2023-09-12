import { convertToUpper } from "../app/Utils"

describe('Utils test Suite', () => {
    it('Should convert string to Uppercase', () => {
        const sut = convertToUpper;
        const expected = 'ABC';

        const actual = sut('abc')

        expect(actual).toBe(expected)
    })
})