import KpiCard from "../components/UI/KpiCard";
import { calls } from "../mock/calls";

export default function DashboardPage() {
  const activeCalls = calls.filter((c) => c.status !== "completed").length;

  const successCalls = calls.filter(
    (c) => c.outcome === "meeting_booked",
  ).length;
  const successRate = Math.round((successCalls / calls.length) * 100);

  const totalDuration = calls.reduce((acc, c) => acc + c.duration, 0);
  const avgDuration = Math.round(totalDuration / calls.length);

  const today = new Date().toISOString().split("T")[0];

  const callsToday = calls.filter((c) => c.startTime.startsWith(today)).length;

  const convertSeconds = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes} min ${seconds} sec`;
  };
  return (
    <div>
      <h1 className="text-2xl px-5 text-gray-700 font-bold mt-5">Dashboard</h1>
      <div className="grid grid-cols-1 px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Active Calls" value={activeCalls} />
        <KpiCard title="Success Rate in %" value={successRate} />
        <KpiCard title="Avg Duration" value={convertSeconds(avgDuration)} />
        <KpiCard title="Calls Today" value={callsToday} />
      </div>
    </div>
  );
}
