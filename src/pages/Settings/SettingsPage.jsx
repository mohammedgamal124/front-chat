
import { useState } from 'react';
import {
  FiBell,
  FiLock,
  FiMoon,
  FiUser,
  FiShield,
  FiGlobe,
} from 'react-icons/fi';

function SettingToggle({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <h3 className="text-sm font-medium text-gray-800">{label}</h3>
        <p className="mt-1 text-xs leading-5 text-gray-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? 'bg-blue-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
            checked ? 'left-6' : 'left-1'
          }`}
        />
      </button>
    </div>
  );
}

function SettingsSection({ icon: Icon, title, children }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-lg bg-blue-50 p-2.5 text-blue-500">
          <Icon className="text-xl" />
        </div>
        <h2 className="font-semibold text-gray-900">{title}</h2>
      </div>

      <div className="divide-y divide-gray-100">{children}</div>
    </section>
  );
}

export default function Settings() {
  const [settings, setSettings] = useState({
    messages: true,
    emailNotifications: false,
    sound: true,
    showOnline: true,
    readReceipts: true,
  });

  const [theme, setTheme] = useState('Light');
  const [language, setLanguage] = useState('English');
  const [saved, setSaved] = useState(false);

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem(
      'chatflow-settings',
      JSON.stringify({ ...settings, theme, language })
    );
    setSaved(true);
  };

  return (
    <div className="min-h-full bg-sky-50 p-4 pb-24 sm:p-8 sm:pb-24 md:pb-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="mt-1 text-sm text-gray-500">
            Customize your ChatFlow experience.
          </p>
        </div>

        <div className="space-y-5">
          <SettingsSection icon={FiBell} title="Notifications">
            <SettingToggle
              label="Message notifications"
              description="Get notified when you receive new messages."
              checked={settings.messages}
              onChange={(v) => updateSetting('messages', v)}
            />
            <SettingToggle
              label="Email notifications"
              description="Receive notifications through email."
              checked={settings.emailNotifications}
              onChange={(v) => updateSetting('emailNotifications', v)}
            />
            <SettingToggle
              label="Notification sounds"
              description="Play a sound when a new message arrives."
              checked={settings.sound}
              onChange={(v) => updateSetting('sound', v)}
            />
          </SettingsSection>

          <SettingsSection icon={FiShield} title="Privacy">
            <SettingToggle
              label="Show online status"
              description="Let other users see when you are online."
              checked={settings.showOnline}
              onChange={(v) => updateSetting('showOnline', v)}
            />
            <SettingToggle
              label="Read receipts"
              description="Let others know when you have read their messages."
              checked={settings.readReceipts}
              onChange={(v) => updateSetting('readReceipts', v)}
            />
          </SettingsSection>

          <SettingsSection icon={FiMoon} title="Appearance">
            <div className="flex items-center justify-between gap-4 py-4">
              <div>
                <h3 className="text-sm font-medium text-gray-800">Theme</h3>
                <p className="mt-1 text-xs text-gray-500">
                  Choose your preferred appearance.
                </p>
              </div>

              <select
                value={theme}
                onChange={(e) => {
                  setTheme(e.target.value);
                  setSaved(false);
                }}
                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-400"
              >
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
          </SettingsSection>

          <SettingsSection icon={FiGlobe} title="Language">
            <div className="flex items-center justify-between gap-4 py-4">
              <div>
                <h3 className="text-sm font-medium text-gray-800">App language</h3>
                <p className="mt-1 text-xs text-gray-500">
                  Select your preferred language.
                </p>
              </div>

              <select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  setSaved(false);
                }}
                className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-blue-400"
              >
                <option>English</option>
                <option>Arabic</option>
              </select>
            </div>
          </SettingsSection>

          <SettingsSection icon={FiLock} title="Account">
            <div className="flex items-center justify-between gap-4 py-4">
              <div>
                <h3 className="text-sm font-medium text-gray-800">
                  Change password
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Update your account password securely.
                </p>
              </div>

              <button
                type="button"
                onClick={() => alert('Connect this to your password update flow.')}
                className="shrink-0 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Change
              </button>
            </div>

            <div className="flex items-center gap-3 py-4 text-sm text-gray-500">
              <FiUser />
              <span>Manage your account from your profile page.</span>
            </div>
          </SettingsSection>

          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-green-600">
              {saved ? 'Settings saved on this device.' : ''}
            </p>

            <button
              type="button"
              onClick={handleSave}
              className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Save settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
