"use client"

import { useState } from "react"
import { agents } from "../mock/agents"
import StatusBadge from "../components/UI/StatusBadge"
import Link from "next/link"

export default function AgentsPage() {

  const [search, setSearch] = useState("")
  const [language, setLanguage] = useState("all")
  const [status, setStatus] = useState("all")

  const filteredAgents = agents.filter(agent => {

    const matchesSearch =
      agent.name.toLowerCase().includes(search.toLowerCase())

    const matchesLanguage =
      language === "all" || agent.language === language

    const matchesStatus =
      status === "all" || agent.status === status

    return matchesSearch && matchesLanguage && matchesStatus
  })

  return (
    <div className="space-y-6 px-5 py-5">

      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Agents</h1>
        <p className="text-sm text-gray-500">
          Monitor and manage your AI voice agents
        </p>
      </div>

      {/* Filters Card */}
      <div className="bg-white rounded-xl shadow-sm border p-4 flex flex-col sm:flex-row gap-3">

        <input
          placeholder="Search agent..."
          className="border rounded-lg text-gray-700 px-3 py-2 text-sm w-full sm:w-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg text-gray-700 px-3 py-2 text-sm w-full sm:w-auto"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="all">All Languages</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="French">French</option>
        </select>

        <select
          className="border text-gray-700 rounded-lg px-3 py-2 text-sm w-full sm:w-auto"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="idle">Idle</option>
          <option value="error">Error</option>
        </select>

      </div>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {filteredAgents.map(agent => (
          <Link href={`/agents/${agent.id}`} key={agent.id}>
          <div
           
            className="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-gray-700">
                {agent.name}
              </h2>

              <StatusBadge status={agent.status} />
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Language: {agent.language}
            </p>

          </div>
          </Link>

        ))}

      </div>

    </div>
  )
}