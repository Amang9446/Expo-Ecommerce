const API_URL = process.env.EXPO_PUBLIC_API_URL;
export async function login(email: string, password: string) {
    const result = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });
    const response = await result.json();
    if (!result.ok) {
        console.log(response)
        throw Error('Failed to login')
    }

    return response;
}

export async function signup(email: string, password: string) {
    const result = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, user: 'user' })
    });
    const response = await result.json();

    if (!result.ok) {
        console.log(response)
        throw Error('Failed to login')
    }

    return response;
}