import "../styles/globals.css";

export const metadata = {
    title: "My next app",
}

function RootLayout({children}) {
  return (
    <html>
        <body>
            {children}
        </body>
    </html>
  )
}

export default RootLayout