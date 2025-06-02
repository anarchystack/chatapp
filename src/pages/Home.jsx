import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Chat App</h1>
      <p className="text-gray-400 mb-8">
        Your personal AI assistant is ready to help you with anything.
      </p>
      <Link
        to="/chat"
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Start New Chat
      </Link>
    </div>
  )
}
