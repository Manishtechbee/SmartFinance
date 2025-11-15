import { useState } from "react";
import { Eye } from "lucide-react";
import axios from "axios";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! I'm your financial assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

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
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-gray-100 rounded-xl shadow-lg flex flex-col overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.from === "bot" ? "bg-gray-300 self-start" : "bg-blue-500 text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-gray-300 p-2">
        <input
          className="flex-1 px-3 py-2 rounded-xl border border-gray-400 focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="ml-2 p-2 bg-blue-600 rounded-xl text-white" onClick={sendMessage}>
          <Eye size={20} />
        </button>
      </div>
    </div>
  );
}
