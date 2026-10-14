import React, { useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { IoEllipse } from 'react-icons/io5';
import ChatWindow from '../../components/ChatWindow';

const DUMMY_CHATS = [
  {
    id: 1,
    name: 'Maya',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    online: true,
    unread: 3,
    type: 'direct',
    lastMessage: 'Hey, how are you?',
  },
  {
    id: 2,
    name: 'Project Team',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    online: false,
    unread: 0,
    type: 'group',
    lastMessage: "Let's meet at 3PM.",
  },
  {
    id: 3,
    name: 'John',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    online: false,
    unread: 1,
    type: 'direct',
    lastMessage: 'Check the doc please.',
  },
];

const CHAT_SECTIONS = [
  { label: 'All', filter: () => true },
  { label: 'Unread', filter: (chat) => chat.unread > 0 },
  { label: 'Direct', filter: (chat) => chat.type === 'direct' },
  { label: 'Groups', filter: (chat) => chat.type === 'group' },
];

export default function ChatPage() {
  const [activeSection, setActiveSection] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChatId, setSelectedChatId] = useState(DUMMY_CHATS[0]?.id);
  const [mobileChatOpen, setMobileChatOpen] = useState(false);

  const filteredChats = DUMMY_CHATS.filter(
    CHAT_SECTIONS.find((section) => section.label === activeSection).filter
  ).filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const selectedChat = DUMMY_CHATS.find((chat) => chat.id === selectedChatId);

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
    setMobileChatOpen(true);
  };

  const handleBackToList = () => {
    setMobileChatOpen(false);
  };

  const listPanelClass = mobileChatOpen ? 'hidden md:flex' : 'flex md:flex';
  const chatPanelClass = mobileChatOpen ? 'flex md:flex' : 'hidden md:flex';

  return (
    <div className="flex h-full w-full overflow-hidden bg-white">
      <div
        className={`${listPanelClass} w-full min-w-0 flex-col border-r border-gray-200 bg-gray-50 md:w-[350px] md:min-w-[320px]`}
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-4 md:py-3">
          <div className="flex min-w-0 flex-col">
            <span className="text-xl font-bold text-gray-700">Messages</span>
            <p className="text-sm text-gray-500">Your recent conversation</p>
          </div>
          <button type="button" className="rounded-lg p-2 text-gray-700 transition hover:bg-sky-200">
            <FiPlus className="text-xl" />
          </button>
        </div>

        <div className="px-4 py-2">
          <div className="flex items-center rounded-lg bg-sky-100 px-2">
            <FiSearch className="mr-2 text-lg text-gray-500" />
            <input
              type="text"
              placeholder="Search conversations"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-none bg-transparent py-2 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 px-4 py-2">
          {CHAT_SECTIONS.map((section) => (
            <button
              key={section.label}
              type="button"
              onClick={() => setActiveSection(section.label)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                activeSection === section.label
                  ? 'bg-blue-500 text-white'
                  : 'bg-sky-200 text-sky-700 hover:bg-sky-300'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-2">
          {filteredChats.length === 0 ? (
            <div className="mt-8 text-center text-sm text-gray-400">No conversations</div>
          ) : (
            filteredChats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => handleSelectChat(chat.id)}
                className={`flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl p-3 transition ${
                  chat.id === selectedChatId ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
              >
                <div className="relative shrink-0">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="h-12 w-12 rounded-full border-2 border-white object-cover"
                  />
                  {chat.online && (
                    <span className="absolute bottom-0 right-0">
                      <IoEllipse className="text-xs text-green-500" />
                    </span>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center">
                    <span className="truncate font-medium text-gray-900">{chat.name}</span>
                    {chat.unread > 0 && (
                      <span className="ml-2 rounded-full bg-blue-500 px-2 text-[10px] font-semibold text-white">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                  <div className="truncate text-xs font-medium text-gray-500">{chat.lastMessage}</div>
                </div>

                {chat.type === 'group' && (
                  <span className="ml-2 shrink-0 rounded-full bg-purple-100 px-2 py-0.5 text-[10px] font-medium text-purple-700">
                    Group
                  </span>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <div className={`${chatPanelClass} min-w-0 flex-1 bg-gray-100`}>
        <ChatWindow selectedChat={selectedChat} onBack={handleBackToList} />
      </div>
    </div>
  );
}