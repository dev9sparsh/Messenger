import { useAuthContext } from "../../context/AuthContext";
import { useConversationContext } from "../../context/ConversationContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }: any) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversationContext();

  const fromMe = message.senderId === authUser?._id || false;
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div>
      <div className="flex flex-col gap-4">
        {!fromMe ? (
          <div className="flex items-start gap-2">
            {" "}
            {/* Left (Incoming) Message */}
            <img
              className="w-10 h-10 rounded-full"
              src={selectedConversation?.profilePic}
              alt="Obi-Wan Avatar"
            />
            <div>
              {/* Chat Bubble */}
              <div
                className={`bg-gray-800 text-white px-4 py-2 rounded-lg max-w-x ${shakeClass}`}
              >
                {message?.message}
              </div>
              {/* Footer (Status) */}
              <div className="text-xs opacity-50">{formattedTime}</div>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-2 justify-end">
            {" "}
            {/* Right (Outgoing) Message */}
            <div className="text-right">
              {/* Chat Bubble */}
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                {message?.message}
              </div>
              {/* Footer (Seen Status) */}
              <div className="text-xs opacity-50">{formattedTime}</div>
            </div>
            <img
              className="w-10 h-10 rounded-full"
              src={authUser?.profilePic}
              alt="Avatar"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
