import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useConversationContext } from "../context/ConversationContext";

const useGetMessages = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const { messages, setMessages, selectedConversation } = useConversationContext();

  const getMessages = async () => {
    const id = selectedConversation?._id || null;

    setLoading(true);
    try {
      const res = await fetch(`/api/messages/${id}`);
      const data = await res.json();
      if (data?.error) throw new Error(data?.error);

      setMessages(data);
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=> {
    if(selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
