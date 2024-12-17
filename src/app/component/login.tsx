import React from "react";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
                {/* Card Content */}
                <div className="p-6">
                    {/* Title */}
                    <h1 className="text-3xl font-semibold text-center uppercase text-heading2">
                        Login
                    </h1>
                    <p className="text-center text-sm text-gray-500 mt-2">
                        Please login using account details below.
                    </p>

                    {/* Form */}
                    <form className="mt-6 flex flex-col gap-4">
                        {/* Email Input */}
                        <input
                            type="email"
                            className="p-3 rounded-lg w-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                            placeholder="Enter your Email"
                        />

                        {/* Password Input */}
                        <input
                            type="password"
                            className="p-3 rounded-lg w-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                            placeholder="Enter your Password"
                        />

                        {/* Forgot Password */}
                        <p className="text-sm text-right text-bcolour hover:underline cursor-pointer">
                            Forgot your password?
                        </p>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="py-3 px-5 rounded-lg bg-bcolour text-white text-lg font-medium hover:bg-pink-600 transition duration-200"
                        >
                            Sign In
                        </button>

                        {/* Footer Links */}
                        <p className="text-center text-sm text-gray-500">
                            Don’t have an account?{' '}
                            <a
                                href="#"
                                className="text-bcolour font-medium hover:underline"
                            >
                                Create account
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
