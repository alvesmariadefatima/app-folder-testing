import { getUserById } from "../services/get-user-by-id";
import Head from "next/head";

export default async function UserDetailsHead({
    params,
}: {
    params: { userId: string };
}) {
    const user = await getUserById(params.userId);
    const title = `${user.first_name} - Usuários - Sistema Olá Mundo!`;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
        </>
    );
}