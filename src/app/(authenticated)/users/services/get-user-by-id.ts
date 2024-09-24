import { User } from '../models/user';

export async function getUserById(userId: string): Promise<User | null> {
    try {
        const response = await fetch(`https://reqres.in/api/users/${userId}`);
        
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            console.error(`Erro ao buscar usuário: ${response.statusText}`);
            return null; // Retorna null ou trata o erro conforme necessário
        }

        const userData = await response.json();
        
        // Retorna apenas os dados do usuário
        return userData?.data || null; // Retorna null se não houver dados
    } catch (error) {
        console.error(`Erro inesperado: ${error}`);
        return null; // Retorna null em caso de erro inesperado
    }
}
