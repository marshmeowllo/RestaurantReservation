// pages/register/page.tsx
"use client";
import { useState } from 'react';
import type { NextPage } from 'next';

const Register: NextPage = () => {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your registration logic here
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2 mt-300">
    {/* <div className="container mx-auto flex flex-col items-center justify-center mt-100"> */}

      <form onSubmit={handleFormSubmit} className="w-full max-w-lg space-y-4">
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="name" className="block leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-1 text-base border border-black outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="telephone" className="block leading-7 text-sm text-gray-600">
              Telephone
            </label>
            <input
              id="telephone"
              type="tel"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full px-3 py-1 text-base border border-black outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block leading-7 text-sm text-gray-600">
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

        <div>
          <label htmlFor="confirmEmail" className="block leading-7 text-sm text-gray-600">
            Confirm Email
          </label>
          <input
            id="confirmEmail"
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            className="w-full px-3 py-1 text-base border border-black outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <label htmlFor="password" className="block leading-7 text-sm text-gray-600">
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
          <div className="flex-1">
            <label htmlFor="confirmPassword" className="block leading-7 text-sm text-gray-600">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-1 text-base border border-black outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-2 mt-4 text-black bg-white border-2 border-black hover:bg-black hover:text-white"
        >
          Register
        </button>
        {error && (
          <p className="mt-3 text-xs text-center text-red-500">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
