export async function getUserById(userId: string) {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    const users = await response.json();

    return users?.data || [];
}