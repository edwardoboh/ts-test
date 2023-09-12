import { convertToUpper, getStringInfo } from "../app/Utils"

describe('Utils test Suite', () => {
    it('Should convert string to Uppercase', () => {
        const sut = convertToUpper;
        const expected = 'ABC';

        const actual = sut('abc')

        expect(actual).toBe(expected)
    })

    describe('getStringInfo for arg Test-me should', () => {
        test('Should have the right length', () => {
            const actual = getStringInfo('Test-Me')
            expect(actual.length).toBe(7)
        });
        test('metadata should equal {}', () => {
            const actual = getStringInfo('Test-Me')
            expect(actual.metedata).toEqual({})
        });
        test('character property array should contain M', () => {
            const actual = getStringInfo('Test-Me')
            expect(actual.characters).toContain<string>('M')
        });
        test('character property array to equal', () => {
            const actual = getStringInfo('Test-Me')
            expect(actual.characters).toEqual(['T', 'e', 's', 't', '-', 'M', 'e'])
            expect(actual.characters).toEqual(expect.arrayContaining(['-', 'M', 'e', 'T', 'e', 's', 't',]))
        });
        test('metadata property to be defined', () => {
            const actual = getStringInfo('Test-Me')

            expect(actual.metedata).not.toBe(undefined)
            expect(actual.metedata).not.toBeUndefined()
            expect(actual.metedata).toBeDefined()
            expect(actual.metedata).toBeTruthy()
        })

    })
})