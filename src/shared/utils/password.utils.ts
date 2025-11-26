export interface PasswordOptions {
    length?: number;
    numbers?: boolean;
    symbols?: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
}

export const generatePassword = ({
    length = 12,
    numbers = true,
    symbols = true,
    lowercase = true,
    uppercase = true,
}: PasswordOptions = {}): string => {

    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let charPool = "";
    if (numbers) charPool += numberChars;
    if (symbols) charPool += symbolChars;
    if (lowercase) charPool += lowerChars;
    if (uppercase) charPool += upperChars;

    if (!charPool) {
        throw new Error("At least one character type must be enabled.");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIdx];
    }

    return password;
};
