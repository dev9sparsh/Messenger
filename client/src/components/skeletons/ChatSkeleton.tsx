const ChatSkeleton = () => {
  return (
    <div className="flex h-screen bg-gray-900 p-4">
      <div className="flex-1 flex flex-col space-y-4 overflow-y-auto">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {index % 2 === 0 && (
              <div className="w-10 h-10 bg-gray-700 rounded-full mr-2 animate-pulse"></div>
            )}
            <div className="bg-gray-800 p-3 rounded-lg shadow w-1/2 animate-pulse"></div>
            {index % 2 !== 0 && (
              <div className="w-10 h-10 bg-gray-700 rounded-full ml-2 animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSkeleton;
