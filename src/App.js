import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Fonts.css";
import RootLayout from "./layouts/RootLayout";

import AuthLayout from "./layouts/AuthLayout"
import DashboardLayout from "./layouts/DashboardLayout"

function App() {
  // const [showScrollToTop, setShowScrollToTop] = useState(false);

  // // Show the scroll button when the user scrolls down
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 300) {
  //       // Show after 300px scroll
  //       setShowScrollToTop(true);
  //     } else {
  //       setShowScrollToTop(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // // Function to handle scroll to top
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Smooth scroll effect
  //   });
  // };

  // useEffect(() => {
  //   document.documentElement.style.scrollBehavior = "smooth";
  // }, []);
  return (

    <div>
    <BrowserRouter> 
    <>
    <Routes>
    <Route path="/*" element={<RootLayout />} />
    <Route path="/auth/*" element={<AuthLayout/>} />
    <Route path="/dashboard/*" element={<DashboardLayout/>} />
      </Routes>
      </>
      </BrowserRouter>
      {/* Scroll to Top Button
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-purple-700 duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )} */}
     
    </div>
  );
}

export default App;
