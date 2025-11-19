import { useState, useRef } from "react";

const Throttling = () => {
  const [inputValue, setInputValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");
  const lastExecuted = useRef<number>(0); // store last execution timestamp

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const now = Date.now();
    const THROTTLE_DELAY = 1000; // 1 second

    if (now - lastExecuted.current >= THROTTLE_DELAY) {
      setThrottledValue(value);
      lastExecuted.current = now;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">Throttling Example</h1>

      <input
        type="text"
        placeholder="Type something..."
        className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={handleChange}
      />

      <div className="text-lg">
        <span className="font-semibold">Throttled Output:</span>{" "}
        {throttledValue || "Waiting..."}
      </div>
    </div>
  );
};

export default Throttling;
