type Props = {
  sentiment: string
}

export default function SentimentBadge({ sentiment }: Props) {
  const styles: Record<string, string> = {
    positive: "bg-green-100 text-green-700",
    neutral: "bg-gray-100 text-gray-700",
    negative: "bg-red-100 text-red-700",
  }

  return (
    <span className={`px-2 py-1 text-xs rounded-full font-medium ${styles[sentiment]}`}>
      {sentiment}
    </span>
  )
}