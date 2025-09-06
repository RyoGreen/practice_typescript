interface User {
    id: number;
    name: string;
    email: string;
}

type ValidationError = {
    message: string;
    field: string;
}

type Result<T, E> =
    | { ok: true; value: T }
    | { ok: false; error: E };

export function isEmailValid(email: string): Result<boolean, ValidationError> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        return { ok: true, value: true };
    } else {
        return { ok: false, error: { message: "Invalid email format", field: "email" } };
    }
}

export function validateUser(user: User): Result<User, ValidationError> {
    if (user.name.trim() === "") {
        return { ok: false, error: { message: "Name cannot be empty", field: "name" } };
    }
    const emailValidation = isEmailValid(user.email);
    if (!emailValidation.ok) {
        return { ok: false, error: emailValidation.error };
    }
    return { ok: true, value: user };
}

const user1: User = { id: 1, name: "Alice", email: "test@test.com" };
const user2: User = { id: 2, name: "", email: "invalid-email" };

export function main() {
    console.log(validateUser(user1));
    console.log(validateUser(user2));
}
