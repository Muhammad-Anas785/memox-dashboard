import { calls } from "../../mock/calls"
import { agents } from "../../mock/agents"
import StatusBadge from "../../components/UI/StatusBadge"
import SentimentBadge from "../../components/UI/SentimentBadge"

export default async function CallDetail({
  params
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const call = calls.find(c => c.id === id)

  if (!call) {
    return <div className="p-6">Call not found</div>
  }

  const convertSeconds = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  }

  const agent = agents.find(a => a.id === call.agentId)

  return (
    <div className="space-y-6 p-5">

      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

        <div>
          <h1 className="text-2xl text-gray-700 font-semibold">Call Detail</h1>
          <p className="text-sm text-gray-500 mt-1">
            Call ID: {call.id}
          </p>
        </div>

        <StatusBadge status={call.status} />

      </div>

      {/* Call Info */}
      <div className="bg-white rounded-xl shadow-sm border p-5 space-y-3">

        <h2 className="text-lg text-gray-700 font-semibold">Call Summary</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">

          <p className="text-gray-500">
            <span className="text-gray-500">Outcome:</span> {call.outcome || "None"}
          </p>

          <p className="text-gray-500"> 
            <span className="text-gray-500">Duration:</span> {convertSeconds(call.duration)}
          </p>

          <p className="text-gray-500">
            <span className="text-gray-500">Company:</span> {call.company}
          </p>

          <p className="text-gray-500">
            <span className="text-gray-500">Contact:</span> {call.contact}
          </p>

        </div>

        <SentimentBadge sentiment={call.sentiment} />

      </div>

      {/* Agent Info */}
      <div className="bg-white rounded-xl shadow-sm border p-5 space-y-3">

        <h2 className="text-lg text-gray-700 font-semibold">Agent Info</h2>

        {agent ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">

            <p className="text-gray-500">
              <span className="text-gray-500">Name:</span> {agent.name}
            </p>

            <p className="text-gray-500">
              <span className="text-gray-500">Language:</span> {agent.language}
            </p>

            <div>
              <span className="text-gray-500">Status:</span>
              <div className="mt-1">
                <StatusBadge status={agent.status} />
              </div>
            </div>

          </div>
        ) : (
          <p>Agent not found</p>
        )}

      </div>

    </div>
  )
}