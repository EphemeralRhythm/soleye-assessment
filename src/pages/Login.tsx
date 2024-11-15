const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <p className="text-center text-gray-600 text-sm mt-2">
          Welcome back
        </p>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
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
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
