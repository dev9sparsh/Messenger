import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { io } from "socket.io-client";

import { useAuthContext } from "./AuthContext";

export const SocketContext = createContext<any>(null);

export const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [socket, setSocket] = useState<any>(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io("https://mern-chat-app-prod-ppj7.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });

      setSocket(newSocket);

      // newSocket.on() is used to listen to the events. can be used both on client and server side
      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => newSocket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }

    // Cleanup function in case socket is set in a previous render
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  return useContext(SocketContext);
};
