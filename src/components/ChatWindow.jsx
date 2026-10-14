import { FiArrowLeft, FiPhone, FiVideo } from 'react-icons/fi';
import { IoEllipse } from 'react-icons/io5';

export default function ChatWindow({ selectedChat, onBack }) {
  if (!selectedChat) {
    return (
      <div className="flex min-h-0 flex-1 flex-col justify-between bg-gray-100">
        <div className="flex flex-1 items-center justify-center text-gray-400">
          Select a conversation to start chatting.
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-between bg-gray-100">
      <div className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 md:gap-4 md:px-6 md:py-4">
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium text-blue-600 transition hover:bg-sky-100 md:hidden"
          >
            <FiArrowLeft className="text-base" />
            Back
          </button>
        )}

        <img
          src={selectedChat.avatar}
          alt={selectedChat.name}
          className="h-10 w-10 rounded-full border-2 border-white object-cover md:h-12 md:w-12"
        />

        <div className="min-w-0 flex-1">
          <span className="block truncate text-base font-medium text-gray-900 md:text-lg">
            {selectedChat.name}
          </span>
          <span
            className={`flex items-center gap-1 text-xs ${
              selectedChat.online ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <IoEllipse className="text-xs" />
            {selectedChat.online ? 'Online' : 'Offline'}
          </span>
        </div>

        <div className="flex shrink-0 gap-2">
          <button className="rounded-full p-2 transition hover:bg-gray-100" title="Call" type="button">
            <FiPhone className="text-xl text-blue-500" />
          </button>
          <button className="rounded-full p-2 transition hover:bg-gray-100" title="Video call" type="button">
            <FiVideo className="text-xl text-blue-500" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center text-gray-300">
        <span className="text-lg font-bold">[ Chat messages will appear here... ]</span>
      </div>

      <div className="flex items-center border-t border-gray-200 bg-white px-4 py-3 md:px-6 md:py-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="mr-3 flex-1 rounded-full border border-gray-200 bg-gray-100 px-4 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />
        <button
          type="button"
          className="rounded-full bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
