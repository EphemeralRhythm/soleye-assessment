import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error: any) {
      if (error.response) {
        alert(`Login failed: ${error.response.data.message}`);
      } else {
        alert("An error occurred. Please try again later.");
      }
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <p className="text-center text-gray-600 text-sm mt-2">Welcome back</p>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <a
              href="https://youtu.be/dQw4w9WgXcQ?si=jBld8cqJqa_2yRvu"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
