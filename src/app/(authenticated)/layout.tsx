import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Sistema Olá Mundo!</title>
      <body>
        <h1>Sistema: Olá Mundo!</h1>
        <nav>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/users'>Usuários</Link></li>
            <li><Link href='/login'>Login</Link></li>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
