import { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input) return;
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:8000/chat", { text: input });
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error connecting to chatbot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Healthcare Assistant</h2>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            className="border border-gray-300 p-2 rounded-l w-full"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white p-2 rounded-r"
            disabled={loading}
          >
            <FaPaperPlane />
          </button>
        </div>
        {loading ? (
          <p className="mt-4 text-gray-500">Processing...</p>
        ) : (
          response && (
            <p className="mt-4 p-3 bg-gray-200 rounded">
              <strong>Bot:</strong> {response}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default App;
