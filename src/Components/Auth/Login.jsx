import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is", email);
    console.log("password is ", password);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={submitHandler}
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-2 px-6 text-lg text-white outline-none bg-transparent placeholder:text-gray-400 font-medium"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-2 px-6 mt-3 text-lg text-white outline-none bg-transparent placeholder:text-gray-400 font-medium"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className=" mt-7 border-none hover:bg-emerald-700  bg-emerald-600 rounded-full py-2 px-8 text-lg text-white outline-none  placeholder:text-white py-2 px-8 w-full "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
