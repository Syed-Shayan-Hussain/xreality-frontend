import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Roles from "../pages/Roles";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import TermsOfUse from "../pages/TermsOfUse.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound.jsx";
import AvatarPage from "../pages/Dasboard/AvatarPage.jsx";

const RootLayout = () => {
  // State to control sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Hook to track location changes
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Check if the current route is '/select-role'
  const isSelectRolePage = location.pathname === "/select-role";

  return (
    <div className="min-h-screen">
      <div className="flex-1 flex flex-col">
        {/* Conditionally render Navbar and Footer */}
        {!isSelectRolePage  && (
          <>
            <Navbar />

          </>
        )}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select-role" element={<Roles />} />
          <Route path="select-avatar" element={<AvatarPage />} />
          <Route path="/error" element={<NotFound />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </div>
      {!isSelectRolePage && (
          <>

            <Footer />
          </>
        )}
    </div>
  );
};

export default RootLayout;
