"use client"

import { useState } from "react"
import { calls } from "../mock/calls"
import SentimentBadge from "../components/UI/SentimentBadge"
import StatusBadge from "../components/UI/StatusBadge"
import Link from "next/link"

export default function CallsPage() {

  const [search, setSearch] = useState("")
  const [outcome, setOutcome] = useState("all")
  const [date, setDate] = useState("")

  const filteredCalls = calls.filter(call => {

    const matchesSearch =
      call.company.toLowerCase().includes(search.toLowerCase()) ||
      call.contact.toLowerCase().includes(search.toLowerCase())

    const matchesOutcome =
      outcome === "all" || call.outcome === outcome

    const matchesDate =
      !date || call.startTime.startsWith(date)

    return matchesSearch && matchesOutcome && matchesDate
  })

  const convertSeconds = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  }
  const customOutcome = (outcome?: string):string=>{
    switch(outcome){
      case "meeting_booked":
        return "Meeting Booked"
      case "not_interested":
        return "Not Interested"
      case "callback_requested":
        return "Call Back Requested"
      default:
        return "None"
    }
  }

  return (
    <div className="space-y-6 p-5">

      {/* Heading */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Call History</h1>
        <p className="text-sm text-gray-500">
          Track all inbound and outbound interactions
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-4 flex flex-col sm:flex-row gap-3">

        <input
          placeholder="Search company or contact..."
          className="border rounded-lg  text-gray-700 px-3 py-2 text-sm w-full sm:w-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border text-gray-700 rounded-lg px-3 py-2 text-sm w-full sm:w-auto"
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
        >
          <option value="all">All Outcomes</option>
          <option value="meeting_booked">Meeting Booked</option>
          <option value="not_interested">Not Interested</option>
          <option value="callback_requested">Call Back Request</option>
        </select>

        <input
          type="date"
          className="border text-gray-700 rounded-lg px-3 py-2 text-sm w-full sm:w-auto"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

      </div>

      {/* Call Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {filteredCalls.map(call => (
          <Link key={call.id} href={`/calls/${call.id}`}>
          <div
            
            className="bg-white rounded-xl shadow-sm border p-5 hover:shadow-md transition space-y-2"
          >

            <div className="flex justify-between items-start">

              <div>
                <h2 className="font-semibold text-lg text-gray-700">
                  {call.company}
                </h2>
                <p className="text-sm text-gray-500">
                  Contact: {call.contact}
                </p>
              </div>

              <StatusBadge status={call.status} />

            </div>

            <div className="flex justify-between text-sm mt-2">

              <p className="text-gray-600" >
                Outcome: <span className="text-gray-600">{customOutcome(call.outcome as string)}</span>
              </p>

              <p>
                Duration: <span className="text-gray-600">{convertSeconds(call.duration)}</span>
              </p>

            </div>

            <div className="flex justify-between mt-2">
              <SentimentBadge sentiment={call.sentiment} />
              <p className="text-xs text-gray-400">
                {new Date(call.startTime).toLocaleDateString()}
              </p>
            </div>

          </div>
          </Link>

        ))}

      </div>

    </div>
  )
}