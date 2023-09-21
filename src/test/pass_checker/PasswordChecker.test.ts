import { PasswordChecker, PasswordError } from "../../app/pass_checker/PasswordChecker"

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

    it("Should fail for password less than 8 chars", () => {
        const actual = sut.checkPassword('123456')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordError.SHORT)
    })

    it("Should pass for password up to 8 chars", () => {
        const actual = sut.checkPassword('12345678')
        expect(actual.reasons).not.toContain(PasswordError.SHORT)
    })

    it("Should fail if it doesn't contain an uppercase char", () => {
        const actual = sut.checkPassword('45678a')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordError.NO_UPPER_CASE)
    })

    it("Should pass if it contains an uppercase char", () => {
        const actual = sut.checkPassword('45678Aa')
        expect(actual.reasons).not.toContain(PasswordError.NO_UPPER_CASE)
    })

    it("Should fail for password with no lowercase", () => {
        const actual = sut.checkPassword('12678A')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordError.NO_LOWER_CASE)
    })

    it("Should pass for password with lowercase char", () => {
        const actual = sut.checkPassword('45678Aa')
        expect(actual.reasons).not.toContain(PasswordError.NO_LOWER_CASE)
    })

    it("Should pass if password is complex and complete", () => {
        const actual = sut.checkPassword('123456ADaa')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).toHaveLength(0)
    })
})