import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Loader from "../Loader";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto sm:h-[310px] md:h-[410px] mb-2 overflow-y-auto">
      {loading && <Loader />}

      {conversations?.map((conversation: any, ind: number) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={ind === conversations?.length - 1}
        />
      ))}
    </div>
  );
};

export default Conversations;
