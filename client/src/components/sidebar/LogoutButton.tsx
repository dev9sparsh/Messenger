import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { logout, loading } = useLogout();

  return (
    <button
      type="button"
      disabled={loading}
      onClick={logout}
      className="mt-auto"
    >
      <BiLogOut className="w-6 h-6 text-white cursor-pointer" />
    </button>
  );
};

export default LogoutButton;
