import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const { loading, login} = useLogin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await login(username, password);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 max-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block p-2">
              <span className="text-base text-gray-300">Username</span>
            </label>
            <input
              type="text"
              value={username}
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full max-w-xs px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-800 text-gray-300"
            />
          </div>
          <div>
            <label className="block p-2">
              <span className="text-base text-gray-300">Password</span>
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full max-w-xs px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-800 text-gray-300"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account? Signup
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 mt-2 text-center text-gray-300 hover:text-gray-200 bg-gray-800 rounded-lg text-sm hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
