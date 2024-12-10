'use client';

import { useRouter } from "next/navigation";

const WelcomePage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to SC School</h1>
      <p className="text-gray-600 mb-8">Sign in or Sign up to continue.</p>
      <div className="flex gap-4">
        <button
          onClick={handleSignIn}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Sign In
        </button>
        <button
          onClick={handleSignUp}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
