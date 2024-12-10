"use client";

import * as Clerk from "@clerk/elements/common";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpPage = () => {
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Perform sign-up logic
    try {
      // Sign up the user with Clerk
      await Clerk.client.signUp.create({
        identifier: e.target.username.value,
        password: e.target.password.value,
        publicMetadata: { role }, // Attach role to user metadata
      });

      router.push("/sign-in"); // Redirect to sign-in after successful sign-up
    } catch (err) {
      console.error("Sign-up error:", err);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-4 w-96"
      >
        <h1 className="text-xl font-bold">Sign Up</h1>
        <Clerk.GlobalError className="text-sm text-red-400" />
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-xs text-gray-500">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="p-2 rounded-md ring-1 ring-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-xs text-gray-500">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="p-2 rounded-md ring-1 ring-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-xs text-gray-500">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="p-2 rounded-md ring-1 ring-gray-300"
          >
            <option value="" disabled>
              Select a role
            </option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white my-1 rounded-md text-sm p-[10px] hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
