"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <div className="md:hidden flex justify-between items-center p-4 bg-gray-950 text-white shadow">

      <h1 className="text-lg font-semibold">Memox</h1>

      <div className="flex gap-4 text-sm">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/agents">Agents</Link>
        <Link href="/calls">Calls</Link>
      </div>

    </div>
  )
}
