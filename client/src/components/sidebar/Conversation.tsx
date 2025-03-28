import { useConversationContext } from "../../context/ConversationContext";
import { useSocketContext } from "../../context/SocketContext";
interface ConversationPropType {
  conversation: any;
  emoji: string;
  lastIdx: boolean;
}

const Conversation = (props: ConversationPropType) => {
  const { conversation, emoji, lastIdx } = props || {};

  const { selectedConversation, setSelectedConversation } =
    useConversationContext();

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);

  const isSelected = selectedConversation?._id === conversation?._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center ${isSelected && "bg-green-500"} ${
          !isSelected && "hover:bg-sky-500"
        } rounded p-2 py-3 cursor-pointer`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative w-12 h-12">
          {/* Avatar Image */}
          <img
            src={conversation?.profilePic}
            alt="User Avatar"
            className="w-full h-full rounded-full border-2 border-gray-800 shadow-md"
          />

          {/* Status Indicator */}
          <span
            className={`absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-gray-300 ${
              isOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation?.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <hr className="w-full bg-gray-100 my-0 py-0 opacity-20" />}
    </>
  );
};

export default Conversation;
