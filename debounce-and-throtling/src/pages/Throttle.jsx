import { useState } from "react";
import { useThrottle } from "../custom-hook/throttle.hook";

function Throttle() {
  const [count, setCount] = useState(0);
  
  const hanldleThrottle = useThrottle(()=>{
    setCount(prev=>prev+1);
  },1000)

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Throttle</h2>

      <button
        onClick={hanldleThrottle}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Click Rapidly
      </button>

      <p className="mt-4 text-gray-700">
        <span className="font-medium">Count:</span> {count}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Executes once every 1000ms
      </p>
    </div>
  );
}

export default Throttle;
