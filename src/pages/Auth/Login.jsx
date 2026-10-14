import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsChatLeftDotsFill } from 'react-icons/bs';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-100 p-4">
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-8 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500">
            <BsChatLeftDotsFill className="text-2xl text-white" />
          </div>
          <h3 className="text-xl font-bold">ChatFlow</h3>
        </div>

        <div className="mt-8 w-full text-center">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-500">
            Enter your credentials to access your conversations
          </p>
        </div>

        <form className="mt-8 flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-blue-500 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold text-blue-500 hover:text-blue-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
