export default function UserMessage({ content }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[70%] bg-blue-600 rounded-lg rounded-br-none p-4">
        <p className="text-white">{content}</p>
      </div>
    </div>
  )
}
