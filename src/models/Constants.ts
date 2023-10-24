export const BACK_HACK="https://api.hackmx.mx/hackMX";

export const PASSWORD_VALIDATORS = {
    hasUpperCase: (password: string) => /[A-Z]/.test(password),
    hasSpecialChar: (password: string) => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password),
    hasNumber: (password: string) => /[0-9]/.test(password),
};