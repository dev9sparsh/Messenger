import { ConversationContextProvider } from "../../context/ConversationContext";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden gh-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <ConversationContextProvider>
        <Sidebar />
        <MessageContainer />
      </ConversationContextProvider>
    </div>
  );
}

export default Home;
