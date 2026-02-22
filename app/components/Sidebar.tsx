import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 h-max-screen bg-gray-950 text-white p-6 shadow-lg space-y-4">

      <h2 className="text-xl font-bold mb-6">Memox Dashboard</h2>

      <nav className="space-y-2">
        <Link href="/dashboard" className="block hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>

        <Link href="/agents" className="block hover:bg-gray-700 p-2 rounded">
          Agents
        </Link>

        <Link href="/calls" className="block hover:bg-gray-700 p-2 rounded">
          Calls
        </Link>
      </nav>

    </div>
  )
}