import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import ChatPage from '../pages/Chat/ChatPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import SettingsPage from '../pages/Settings/SettingsPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public route — no sidebar */}
      <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />

      {/* Protected layout with persistent sidebar */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/chat" replace />} />
        <Route path="/chat"     element={<ChatPage />} />
        <Route path="/profile"  element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
