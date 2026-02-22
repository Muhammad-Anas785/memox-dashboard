import { agents } from "../../mock/agents"
import { calls } from "../../mock/calls"
import StatusBadge from "../../components/UI/StatusBadge"
import KpiCard from "../../components/UI/KpiCard"

export default async function AgentDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const agent = agents.find(a => a.id === id)

  if (!agent) {
    return <div className="p-6">Agent not found</div>
  }

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

  const agentCalls = calls.filter(c => c.agentId === agent.id)

  return (
    <div className="space-y-6 p-5">

      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-2xl  text-gray-800 font-semibold">{agent.name}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Language: {agent.language}
          </p>
        </div>

        <StatusBadge status={agent.status} />

      </div>

      {/* Performance KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <KpiCard
          title="Success Rate"
          value={`${agent.metrics.successRate}%`}
        />

        <KpiCard
          title="Avg Call Duration"
          value={convertSeconds(agent.metrics.avgCallDuration)}
        />

      </div>

      {/* Recent Calls */}
      <div className="bg-white rounded-xl shadow-sm border p-5 space-y-4">

        <h2 className="text-lg font-semibold  text-gray-700">Recent Calls</h2>

        <div className="space-y-3">

          {agentCalls.map(call => (

            <div
              key={call.id}
              className="border rounded-lg p-3 flex justify-between items-center hover:bg-gray-50 transition"
            >

              <div>
                <p className="font-medium  text-gray-700">{call.company}</p>
                <p className="text-sm text-gray-500">
                  {customOutcome(call.outcome as string)}
                </p>
              </div>

              <p className="text-sm text-gray-600">
                {convertSeconds(call.duration)}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}