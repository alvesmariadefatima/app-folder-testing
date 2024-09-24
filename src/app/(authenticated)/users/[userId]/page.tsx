import OtherUsers from "../components/other-users";
import { User } from "../models/user";
import { getUsers } from "../services/get-user";
import { getUserById } from "../services/get-user-by-id";


export async function generateStaticParams() {
    const users: User[] = await getUsers(); // Certifique-se que getUsers retorna User[]
    const usersIds = users.map((user: User) => ({ userId: user.id.toString() }));

    return usersIds;
}

export default async function UserDetailsPage({
    params,
}: {
    params: { userId: string };
}) {
    const user = await getUserById(params.userId);
    return (
        <>
            <h2>Usuário: {user.first_name} {user.last_name}</h2>
            <span>{user.email}</span>
            <hr />
            <h2>Outros Usuários</h2>
            <OtherUsers currentUserId={params.userId} />
        </>
    );
}
