import { useEffect, useRef } from "react";

import Message from "./Message";
import ChatSkeleton from "../skeletons/ChatSkeleton";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  useListenMessages();
  const lastMessageRef: any = useRef(null);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && <ChatSkeleton />}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start conversation</p>
      )}
      {messages?.map((message: any) => (
        <div key={message?._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}
    </div>
  );
};

export default Messages;
