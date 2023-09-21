
export enum PasswordError {
    SHORT = 'Password is too short, must be at least 8 characters',
    NO_UPPER_CASE = 'Password must contain an uppercase letter',
    NO_LOWER_CASE = 'Password must contain a lowercase letter',
    NO_NUMBER = 'Password must contain a number',
}

export interface IPasswordResponse {
    valid: boolean,
    reasons: PasswordError[]
}

export class PasswordChecker {

    public checkPassword(password: string): IPasswordResponse{
        const reasons: PasswordError[] = []
        
        this.checkLength(password, reasons)
        this.checkUpperCase(password, reasons)
        this.checkLowerCase(password, reasons)
        
        return {
            valid: reasons.length ? false: true,
            reasons
        };
    }

    public checkAdminPassword(password: string): IPasswordResponse{
        const baseCheck = this.checkPassword(password)
        this.checkNumber(password, baseCheck.reasons)

        return {
            valid: baseCheck.reasons.length ? false : true,
            reasons: baseCheck.reasons
        }
    }

    private checkNumber(password: string, reasons: PasswordError[]){
        const checker = /\d/
        if(!checker.test(password)){
            reasons.push(PasswordError.NO_NUMBER)
        }
    }

    private checkLength(password: string, reasons: PasswordError[]){
        if(password.length < 8) {
            reasons.push(PasswordError.SHORT)
        }
    }

    private checkUpperCase(password: string, reasons: PasswordError[]){
        if(password == password.toLowerCase()){
            reasons.push(PasswordError.NO_UPPER_CASE)
        }
    }

    private checkLowerCase(password: string, reasons: PasswordError[]){
        if(password == password.toUpperCase()){
            reasons.push(PasswordError.NO_LOWER_CASE)
        }
    }
}