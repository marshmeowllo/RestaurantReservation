"use client";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import type { NextPage } from 'next';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        window.location.href = '/myTable'; // Modify this URL as needed
      }
    } catch (error) {
      // Handle error cases here
      setError('Login failed');
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2">
      <form onSubmit={handleFormSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-1 text-base border border-black outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-1 text-base border border-black outline-none focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-white border-2 border-black text-black px-8 py-2 hover:bg-black hover:text-white"
        >
          Sign In
        </button>
        {error && (
          <p className="mt-3 text-xs text-center text-red-500">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
