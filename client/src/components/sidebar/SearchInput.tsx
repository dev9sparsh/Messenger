import React, {useState} from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useConversationContext } from "../../context/ConversationContext";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {

  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversationContext();
  const { conversations } = useGetConversations();

  const handleSearch = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if(!search) return;
    
    const filteredConversation = conversations?.find((conversation:any) => conversation.fullName.toLowerCase().includes(search.toLowerCase()));
    
    if (filteredConversation) {
      setSelectedConversation(filteredConversation);
      setSearch("");
    } else {
      toast.error("No such user found!");
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <input
        type="text"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder="Search..."
        className="px-4 py-2 bg-gray-800 border border-gray-300 rounded-full focus:outline-none"
      />
      <button
        type="submit"
        className="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-full hover:bg-gray-900 transition"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
