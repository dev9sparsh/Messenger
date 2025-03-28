import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="border-r border-slate-500 px-4 flex flex-col py-3">
      <SearchInput />

      <hr className="w-full  bg-gray-100 my-0 py-0 opacity-20 mt-6" />
      <div className=" flex flex-col justify-between h-full">
        <Conversations />
        <div
          className="mb-2 w-fit"
          onClick={() => {
            navigate("/");
          }}
        >
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
