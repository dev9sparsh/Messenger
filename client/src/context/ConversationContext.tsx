import { createContext, useContext, useState, ReactNode } from "react";

export const ConversationContext = createContext<any>(null);

export const ConversationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedConversation, setSelectedConversation] = useState<any>(null);
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <ConversationContext.Provider
      value={{
        messages,
        setMessages,
        selectedConversation,
        setSelectedConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversationContext = () => {
  return useContext(ConversationContext);
};
