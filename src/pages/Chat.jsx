import { useState, useRef, useCallback } from 'react'
import Message from '../components/Chat/Message'
import UserMessage from '../components/Chat/messages/UserMessage'
import AssistantMessage from '../components/Chat/messages/AssistantMessage'

export default function Chat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const sendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const response = 'This is a simulated AI response to your message.'
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
      setIsLoading(false)
      scrollToBottom()
    }, 1000)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <Message
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}
        {isLoading && (
          <div className="text-center text-gray-400">
            <span className="loading">Thinking</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-700 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !isLoading) {
                sendMessage()
              }
            }}
            placeholder="Type your message..."
            className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isLoading
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isLoading ? '...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  )
}
