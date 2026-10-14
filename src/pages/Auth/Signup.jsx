
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChatLeftDotsFill } from 'react-icons/bs';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    console.log({ fullName, email, password });

    // Connect to your signup API here.
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200';

  const labelClass = 'text-sm font-medium text-gray-700';

  return (
    <div className="flex min-h-screen items-center justify-center bg-sky-100 p-4">
      <div className="flex w-full max-w-md flex-col items-center rounded-2xl bg-white p-8 shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500">
            <BsChatLeftDotsFill className="text-2xl text-white" />
          </div>

          <h3 className="text-xl font-bold">ChatFlow</h3>
        </div>

        {/* Heading */}
        <div className="mt-8 w-full text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Create an account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign up to start your conversations
          </p>
        </div>

        {/* Signup Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full flex-col gap-4"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className={labelClass}>
              Full name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className={labelClass}>
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className={labelClass}>
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
              minLength={8}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirmPassword" className={labelClass}>
              Confirm password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={inputClass}
              minLength={8}
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-blue-500 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Create account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-sm text-gray-500">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-semibold text-blue-500 hover:text-blue-600"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
