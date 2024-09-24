'use client';

import React from "react";
import { getUsers } from "../../services/get-user";
import Link from "next/link";

type Props = {
    currentUserId: string;
}

export default function OtherUsers({ currentUserId }: Props) {
    const [otherUsers, setOtherUsers] = React.useState([]);

    React.useEffect(() => {
        // Função assíncrona para buscar os usuários
        const fetchUsers = async () => {
            const users = await getUsers();
            setOtherUsers(users.filter((user: any) => user.id != parseInt(currentUserId)));
        };

        fetchUsers(); // Chama a função
    }, [currentUserId, setOtherUsers]); // Dependências corretas

    if (otherUsers.length === 0) {
        return <>Carregando...</>;
    }

    return (
        <ul>
            {otherUsers.map((user: any) => {
                return (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.first_name} {user.last_name} ({user.email})
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}