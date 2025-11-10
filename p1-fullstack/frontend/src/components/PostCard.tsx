import React, { useMemo } from "react";

const PropsCard = ({ post, onClick }: any) => {
  // Generate a random pastel background color (stable per render)
  const randomBg = useMemo(() => {
    const colors = [
      "#E0F7FA", // Light Cyan
      "#E8F5E9", // Light Green
      "#FFF8E1", // Light Yellow
      "#F3E5F5", // Light Purple
      "#E1F5FE", // Light Blue
      "#FBE9E7", // Light Coral
      "#F1F8E9", // Light Lime
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  return (
    <div
      onClick={onClick}
      className="h-20 flex justify-center items-center my-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer rounded-xl"
      style={{ backgroundColor: randomBg }}
    >
      <p className="text-xl font-medium text-gray-800">
        {post.id} - {post.title}
      </p>
    </div>
  );
};

export { PropsCard };
