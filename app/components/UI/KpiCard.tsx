type Props = {
  title: string
  value: string | number
}

export default function KpiCard({ title, value }: Props) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <p className="text-sm text-gray-600">{title}</p>
      <h2 className="text-2xl text-gray-700 font-bold mt-2">{value}</h2>
    </div>
  )
}