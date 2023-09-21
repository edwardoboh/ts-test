import { PasswordChecker } from "../../app/pass_checker/PasswordChecker"

describe("All test for the password checker: ", () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker()
    })

    it.skip.each([
        {password: '12345678', out: true, pass: "Pass"},
        {password: '12345', out: false, pass: "Fail"},
    ])("$password should $pass", ({password, out, pass}) => {
        const actual = sut.checkPassword(password)
        expect(actual).toBe(out)
    })

    it("Should fail for password less than 8", () => {
        const actual = sut.checkPassword('123456')
        expect(actual).toBe(false)
    })

    it("Should pass for password up to 8 chars", () => {
        const actual = sut.checkPassword('12345678Aa')
        expect(actual).toBe(true)
    })

    it("Should fail if it doesn't contain an uppercase char", () => {
        const actual = sut.checkPassword('12345678a')
        expect(actual).toBe(false)
    })

    it("Should pass if it contains an uppercase char", () => {
        const actual = sut.checkPassword('12345678Aa')
        expect(actual).toBe(true)
    })

    it("Should fail for password with no lowercase", () => {
        const actual = sut.checkPassword('12345678A')
        expect(actual).toBe(false)
    })

    it("Should pass for password with lowercase char", () => {
        const actual = sut.checkPassword('12345678Aa')
        expect(actual).toBe(true)
    })
})