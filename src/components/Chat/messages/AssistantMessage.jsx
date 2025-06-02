export default function AssistantMessage({ content }) {
  return (
    <div className="flex">
      <div className="max-w-[70%] bg-gray-700 rounded-lg rounded-bl-none p-4">
        <p className="text-white">{content}</p>
      </div>
    </div>
  )
}
