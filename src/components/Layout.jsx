import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile sidebar button */}
      <div className="fixed top-4 left-4 md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-800"
        >
          {isSidebarOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 md:static md:w-64 md:translate-x-0 transition-transform duration-200 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-16 flex items-center px-4">
          <h1 className="text-xl font-bold">Chat App</h1>
        </div>
        <nav className="mt-6">
          <div className="space-y-1 px-2">
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700">
              <span className="text-sm font-medium">New Chat</span>
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700">
              <span className="text-sm font-medium">History</span>
            </button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700">
              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64 md:ml-64">
        <main className="p-4 md:p-6 h-full flex flex-col">
          {children}
        </main>
      </div>
    </div>
  )
}
