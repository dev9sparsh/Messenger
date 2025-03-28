import { useState } from "react";
import { useConversationContext } from "../context/ConversationContext";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { messages, setMessages, selectedConversation } = useConversationContext();

  const id = selectedConversation?._id || null;

  const sendMessage = async (message: string) => {
    console.log("message", message);
    
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${id}`, {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();

      if (data?.error) throw new Error(data?.error);

      setMessages([...messages, data]);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
