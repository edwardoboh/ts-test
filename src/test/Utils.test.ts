import { convertToUpper } from "../app/Utils"

describe('Set up test Suite', () => {
    test('Convert String to Uppercase', () => {
        const result = convertToUpper('abc')
        expect(result).toBe('ABC')
    })
})