
export enum PasswordError {
    SHORT = 'Password is too short, must be at least 8 characters',
    NO_UPPER_CASE = 'Password must contain an uppercase letter',
    NO_LOWER_CASE = 'Password must contain a lowercase letter'
}

export interface IPasswordResponse {
    valid: boolean,
    reasons: PasswordError[]
}

export class PasswordChecker {

    public checkPassword(password: string): IPasswordResponse{
        const reasons: PasswordError[] = []
        if(password.length < 8) {
            reasons.push(PasswordError.SHORT)
        }

        if(password == password.toLowerCase()){
            reasons.push(PasswordError.NO_UPPER_CASE)
        }

        if(password == password.toUpperCase()){
            reasons.push(PasswordError.NO_LOWER_CASE)
        }
        
        return {
            valid: reasons.length ? false: true,
            reasons
        };
    }
}