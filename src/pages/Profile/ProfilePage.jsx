
import { useState } from 'react';
import { FiCamera, FiMail, FiUser, FiEdit2 } from 'react-icons/fi';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Mohamed Gamal',
    email: 'mohamed@example.com',
    status: 'Available',
    bio: 'Hey there! I am using ChatFlow.',
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200';

  return (
    <div className="min-h-full bg-sky-50 p-4 pb-24 sm:p-8 sm:pb-24 md:pb-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your personal information.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-sky-300" />

          <div className="px-6 pb-6 sm:px-8">
            <div className="-mt-12 flex flex-wrap items-end justify-between gap-4">
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-3xl font-bold text-blue-600">
                  {profile.fullName.charAt(0).toUpperCase()}
                </div>

                <button
                  type="button"
                  title="Change profile picture"
                  className="absolute bottom-1 right-1 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
                >
                  <FiCamera />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
              >
                <FiEdit2 />
                {isEditing ? 'Cancel' : 'Edit profile'}
              </button>
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-900">
                {profile.fullName}
              </h2>
              <p className="text-sm text-gray-500">{profile.email}</p>
            </div>

            <div className="my-6 border-t border-gray-100" />

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`${inputClass} pl-10 disabled:cursor-default disabled:opacity-70`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`${inputClass} pl-10 disabled:cursor-default disabled:opacity-70`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={profile.status}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`${inputClass} disabled:cursor-default disabled:opacity-70`}
                >
                  <option>Available</option>
                  <option>Busy</option>
                  <option>Away</option>
                  <option>Do not disturb</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  About me
                </label>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  rows={3}
                  maxLength={200}
                  className={`${inputClass} resize-none disabled:cursor-default disabled:opacity-70`}
                />
              </div>

              {isEditing && (
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-500 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 sm:w-auto sm:px-8"
                >
                  Save changes
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
