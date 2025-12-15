import { useState } from "react";
import { useDebounce } from "../custom-hook/debounce.hook";

function Debounce() {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  const handleDebounce = useDebounce((val)=>{
    setDebouncedValue(val)
  },500)

  const handleChange = (e)=>{
    setInput(e.target.value)
    handleDebounce(e.target.value)
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Debounce</h2>

      <input
        type="text"
        placeholder="Type something..."
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={handleChange}
      />

      <p className="mt-4 text-gray-700">
        <span className="font-medium">Debounced Output:</span>{" "}
        {debouncedValue || "—"}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Triggered after user stops typing for 500ms
      </p>
    </div>
  );
}

export default Debounce;
