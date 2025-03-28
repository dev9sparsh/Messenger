import React, { useState } from "react";
import { Link } from "react-router-dom";

import GenderCheckBox from "./GenderCheckBox";
import useSignup from "../../hooks/useSignup";

export type SignupInputTypes = {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

function Signup() {

  const { loading, signup } = useSignup(); 

  const [inputs, setInputs] = useState<SignupInputTypes>({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleCheckboxChange = (gender: string) => {
    setInputs({...inputs, gender});
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(inputs);
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 max-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block p-2">
              <span className="text-base text-gray-300">Full Name</span>
            </label>
            <input
              type="text"
              value={inputs.fullName}
              placeholder="Jon Doe"
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              className="w-full max-w-xs px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-800 text-gray-300"
            />
          </div>
          <div>
            <label className="block p-2">
              <span className="text-base text-gray-300">Username</span>
            </label>
            <input
              type="text"
              value={inputs.username}
              placeholder="Enter username"
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              className="w-full max-w-xs px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-800 text-gray-300"
            />
          </div>
          <div>
            <label className="block p-2">
              <span className="text-base text-gray-300">Password</span>
            </label>
            <input
              type="password"
              value={inputs.password}
              placeholder="Enter password"
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              className="w-full max-w-xs px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-800 text-gray-300"
            />
          </div>
          <div>
            <label className="block p-2">
              <span className="text-base text-gray-300">Confirm Password</span>
            </label>
            <input
              type="password"
              value={inputs.confirmPassword}
              placeholder="Confirm password"
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              className="w-full max-w-xs px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 bg-gray-800 text-gray-300"
            />
          </div>
          <div className="mt-3">
            <GenderCheckBox selectedGender={inputs?.gender} onCheckboxChange={handleCheckboxChange} />
          </div>
          <Link
            to="/"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? Login
          </Link>
          <button disabled={loading} type="submit" className="w-full px-4 py-2 mt-2 text-center text-gray-300 hover:text-gray-200 bg-gray-800 rounded-lg text-sm hover:bg-gray-900 transition">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
