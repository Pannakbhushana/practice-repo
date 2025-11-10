import React, { useEffect, useState } from "react";

type PopupProps = {
  message: string;
  type: "success" | "error";
  duration?: number;
};

const Popup: React.FC<PopupProps> = ({ message, type, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`px-6 py-3 rounded-xl shadow-md text-white text-center text-sm font-medium
        ${type === "success" ? "bg-green-500" : "bg-red-500"}
        transition-opacity duration-300`}
      >
        {message}
      </div>
    </div>
  );
};

export default Popup;
