import React, { useState , useEffect} from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import DashHome from '../pages/Dasboard/DashHome.jsx';
import Sidebar from "../components/Dashboard/Sidebar.jsx";
import AssistantLayout from "./AssistantLayout";
import NotificationPage from "../pages/Dasboard/NotificationPage.jsx";
import DashNav from "../components/Dashboard/DashNav.jsx";
import MyLearningPage from "../pages/Dasboard/MyLearningPage.jsx";
import RecentActitvityPage from "../pages/Dasboard/RecentActitvityPage.jsx";
import ClassDetailsPage from "../pages/Dasboard/ClassDetailsPage.jsx";
import UpcomingTasks from "../pages/Dasboard/UpcomingTasks.jsx";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Determine if the current page is the assistant page
  const isAssistantPage = location.pathname === "/dashboard/assistant";

  return (
    <div className="flex  min-h-screen font-custom3 bg-white">
      <div className="sticky">
        <Sidebar />
      </div>
      
      <div className="flex-1 flex flex-col">
        {/* Conditionally render DashNav based on current route */}
        {!isAssistantPage && <DashNav />}
        
        <main className="">
          <Routes>
            <Route path="/" element={<DashHome />} />
            <Route path="/assistant" element={<AssistantLayout />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/activity" element={<RecentActitvityPage />} />
            <Route path="/tasks" element={<UpcomingTasks />} />
            <Route path="/learning" element={<MyLearningPage />} />
            <Route path="/class-details" element={<ClassDetailsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
