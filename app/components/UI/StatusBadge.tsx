type Props = {
  status: string
}

export default function StatusBadge({ status }: Props) {
  const styles: Record<string, string> = {
    active: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
    idle: "bg-gray-100 text-gray-700",
    "in-progress": "bg-gray-100 text-gray-700"
  }

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${styles[status]}`}>
      {status}
    </span>
  )
}