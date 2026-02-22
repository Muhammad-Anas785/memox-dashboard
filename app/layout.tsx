import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
<Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 bg-gray-100 min-h-screen">
            {children}
          </main>
        </div>

      </body>
    </html>
  )
}