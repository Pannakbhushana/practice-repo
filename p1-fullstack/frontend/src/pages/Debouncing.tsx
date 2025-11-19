import { useState, useEffect } from "react";

const Debouncing = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    // set a timeout to update the debounced value after 500ms
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 500);

    // cleanup: if user types before 500ms, clear previous timeout
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold">Debouncing Example</h1>

      <input
        type="text"
        placeholder="Type something..."
        className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="text-lg">
        <span className="font-semibold">Debounced Output:</span>{" "}
        {debouncedValue || "Waiting..."}
      </div>
    </div>
  );
};

export default Debouncing;
