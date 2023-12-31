import { StringUtils, convertToUpper, getStringInfo } from "../app/Utils"

describe('Utils test Suite', () => {

    describe('String Util Class Test',  () => {
        let sut: StringUtils;

        beforeEach(() => {
            sut = new StringUtils()
            console.log('Set Up')
        })

        it('Check that invalid input throw an Error - Function', () => {
            function throwError(){
                const resp = sut.toUpper('')
            }
            expect(throwError).toThrow(new Error('Invalid Argument!'))
        })

        it('Check that invalid inputs throw an Error - Arrow', () => {
            expect(() => {sut.toUpper('')}).toThrow()
            expect(() => sut.toUpper('')).toThrowError(new Error('Invalid Argument!'));
        })

        it('Check that invalid inputs throw an Error', (done) => {
            try{
                sut.toUpper('');
                done('Should throw an error for invalid input')
            }catch(error){
                expect(error).toBeInstanceOf(Error)
                expect(error).toHaveProperty('message', 'Invalid Argument!')
                done()
            }
        })

        it.skip('Should return the correct upper case', () => {
            const actual = sut.toUpper('abc');
            expect(actual).toBe('ABC')
        })
    })

    it('Should convert string to Uppercase', () => {
        const sut = convertToUpper;
        const expected = 'ABC';

        const actual = sut('abc')

        expect(actual).toBe(expected)
    });

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

    });

    describe('parameterized test for convertToUpper', () => {
        it.each([
            {input: 'my-name', expected: 'MY-NAME'},
            {input: 'My-Name', expected: 'MY-NAME'},
            {input: 'my-nAmE', expected: 'MY-NAME'}
        ])('Should convert $input to $expected', ({input, expected}) => {
            const sut = convertToUpper;
    
            const actual = sut(input)
    
            expect(actual).toBe(expected)
        });
    });

})