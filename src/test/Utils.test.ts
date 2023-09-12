import { convertToUpper, getStringInfo } from "../app/Utils"

describe('Utils test Suite', () => {
    it('Should convert string to Uppercase', () => {
        const sut = convertToUpper;
        const expected = 'ABC';

        const actual = sut('abc')

        expect(actual).toBe(expected)
    })

    it.only('Return information about a string', () => {
        const sut = getStringInfo;
        
        const actual = sut('Test-Me')

        expect(actual.length).toBe(7)
        expect(actual.metedata).toEqual({})

        expect(actual.characters).toHaveLength(7)
        expect(actual.characters).toContain<string>('M')

        expect(actual.characters).toEqual(['T', 'e', 's', 't', '-', 'M', 'e'])
        expect(actual.characters).toEqual(expect.arrayContaining(['-', 'M', 'e', 'T', 'e', 's', 't',]))
    })
})