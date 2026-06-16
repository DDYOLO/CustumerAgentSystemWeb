import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { InboxPage } from "../pages/inbox/InboxPage";
import { TicketDetailPage } from "../pages/inbox/TicketDetailPage";
import { KnowledgePage } from "../pages/knowledge/KnowledgePage";
import { LoginPage } from "../pages/login/LoginPage";
import { MonitoringPage } from "../pages/monitoring/MonitoringPage";
import { SettingsPage } from "../pages/settings/SettingsPage";
import { SopCandidatePage } from "../pages/sop-candidates/SopCandidatePage";
import { SopDetailPage } from "../pages/sop/SopDetailPage";
import { SopListPage } from "../pages/sop/SopListPage";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "inbox", element: <InboxPage /> },
      { path: "inbox/:ticketId", element: <TicketDetailPage /> },
      { path: "sop", element: <SopListPage /> },
      { path: "sop/:sopId", element: <SopDetailPage /> },
      { path: "sop-candidates", element: <SopCandidatePage /> },
      { path: "knowledge", element: <KnowledgePage /> },
      { path: "monitoring", element: <MonitoringPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
