import Link from "next/link";
import { getUsers } from "./services/get-user";

export default async function UsersPage() {

    interface User {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
    }
    const users = await getUsers();
    return (
        <>
            <title>Sistema Olá Mundo - Usuários</title>
            <h2>Usuários</h2>

            <ul>
            {users.map((user: User) => (
            <li key={user.id}>
            <Link href={`/users/${user.id}`}>
                {user.first_name} {user.last_name} ({user.email})
            </Link>
                </li>
                ))}
            </ul>
        </>
    );
}