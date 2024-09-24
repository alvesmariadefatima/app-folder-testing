export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Login - Sistema Olá Mundo!</title>
        <body>
            <h1>Login - Sistema Olá Mundo!</h1>
            <hr />
            {children}
        </body>
      </head>
    </html>
  )
}
