import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useTheme } from "@hopcharts/core";
import { CallbackPage } from "./auth/CallbackPage";
import { HomePage } from "./HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { EmbedPage } from "./pages/EmbedPage";

export function App() {
  // Sync userStore.preferences.theme → .dark class on <html>
  useTheme();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/callback" element={<CallbackPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/embed" element={<EmbedPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
