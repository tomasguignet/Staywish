import "../styles/globals.css";
import {ReduxProvider} from "../redux/provider"

export const metadata = {
    title: "Staywish",
}

function RootLayout({children}) {
  
  return (
    <html>
        <body>
            <ReduxProvider>{children}</ReduxProvider>
        </body>
    </html>
  )
}

export default RootLayout