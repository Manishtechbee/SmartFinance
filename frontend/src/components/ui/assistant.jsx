import { useState } from "react";
import { MessageSquare } from "lucide-react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I'm your financial assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!input) return;

    const userMsg = { from: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message: input });
      const botMsg = { from: "bot", text: res.data.reply };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      const botMsg = { from: "bot", text: "Sorry, I couldn't process your request." };
      setMessages(prev => [...prev, botMsg]);
    }
  };

  return (
    <>
      {/* Floating Icon */}
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {!open && (
          <div className="bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition">
            <MessageSquare className="text-white" size={28} />
          </div>
        )}
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-4 border-gray-600 shadow-gray-700 right-6 w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden z-50">
          <div className="flex justify-between items-center p-3 border-b border-gray-300">
            <h3 className="font-semibold text-gray-700">Financial Assistant</h3>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-xs break-words ${
                  msg.from === "bot" ? "bg-gray-200 self-start" : "bg-blue-600 text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-300 p-2 bg-white">
            <input
              className="flex-1 px-3 py-2 rounded-xl border border-gray-400 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button className="ml-2 p-2 bg-blue-600 rounded-xl text-white" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
