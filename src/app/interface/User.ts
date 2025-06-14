export interface User{
    uid: string,
    email: string | null,
    username: string | null,
    image?: string | null,
    role?: "user",
    provider: string,
}