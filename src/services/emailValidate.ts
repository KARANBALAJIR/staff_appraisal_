// emailValidation.ts

export function validateStudentEmail(email: string): boolean {
    const pattern: RegExp = /^[^\s@]+@sece\.ac\.in$/; // regexp regex expression !
    return pattern.test(email);
}
