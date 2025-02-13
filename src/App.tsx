import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import BlogPage from "./Components/Blog/BlogPage";
import BlogDetailPage from "./Components/Blog/BlogDetailPage";
import HeroHeader from "./Components/Sections/Hero/HeroHeader";
import AboutUs from "./pages/AboutUs/AboutUs";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Components/Sections/Footer/Footer";
import Events from "./pages/Events/Events";
import OurServices from "./pages/OurServices/OurServices";
import TeamPage from "./pages/OurTeamPage/TeamPage";
import FAQs from "./pages/FAQs/FAQs";
import LegalInsights from "./Components/LegalInsights/LegalInsights";
import LegalInsightDetail from "./Components/LegalInsights/LegalInsightDetail";
import CenteredTextSectionContact from "./Components/Sections/CenteredTextSection/Others/CenteredTextSectionContact";
import LoginPage from "./Admin/Auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import ResetPasswordPage from "./Admin/Auth/PasswordReset/ResetPasswordPage";
import PasswordResetSuccessPage from "./Admin/Auth/PasswordReset/PasswordResetSuccessPage";
import LegalInsightsComponent from "./Admin/Pages/LegalInsights/LegalInsightsComponent";
import NewsInsightsComponent from "./Admin/Pages/NewsInsights/NewsInsightsComponent";
import Header from "./Admin/AdminHeader/Header";
import PrivateRoute from "./PrivateRoute"; // Import PrivateRoute
import "bootstrap/dist/css/bootstrap.min.css";
import BlogDetailPageById from "./Components/Blog/BlogByID";
import UnsubscribePage from "./Components/Blog/UnsubscribePage";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    // Logs every time the effect runs

    let count = 0;
    const maxAttempts = 7; // 7 requests
    const interval = 1000; // 1 second

    const fetchData = async () => {
      try {
        await axios.get("https://server-9mir.onrender.com");
      } catch (err) {
        // No state updates, just silent handling
      }
    };

    const intervalId = setInterval(() => {
      if (count < maxAttempts) {
        console.log("reload");
        fetchData();
        count++;
      } else {
        clearInterval(intervalId);
      }
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/admin"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/blog-details" element={<BlogDetailPage />} />
        <Route path="/blog-details/:id" element={<BlogDetailPageById />} />
        <Route path="/unsubscribe/:email" element={<UnsubscribePage />} />

        <Route
          path="/password-reset-success"
          element={<PasswordResetSuccessPage />}
        />
        <Route
          path="/"
          element={
            <>
              <Index />
              <CenteredTextSectionContact />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Index />
              <CenteredTextSectionContact />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <HeroHeader />
              <BlogPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/our-team"
          element={
            <>
              <HeroHeader />
              <TeamPage />
              <CenteredTextSectionContact />
              <Footer />
            </>
          }
        />
        <Route
          path="/legal-insights"
          element={
            <>
              <HeroHeader />
              <LegalInsights />
              <Footer />
            </>
          }
        />
        <Route
          path="/faqs"
          element={
            <>
              <HeroHeader />
              <FAQs />
              <CenteredTextSectionContact />
              <Footer />
            </>
          }
        />
        <Route
          path="/our-services"
          element={
            <>
              <HeroHeader />
              <OurServices />
              <CenteredTextSectionContact />
              <Footer />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <HeroHeader />
              <AboutUs />
              <CenteredTextSectionContact />
              <Footer />
            </>
          }
        />
        <Route
          path="/events"
          element={
            <>
              <HeroHeader />
              <Events />
              <CenteredTextSectionContact />
              <Footer />
            </>
          }
        />
        <Route path="/legal-insight-details/:id" element={<LegalInsightDetail />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route
          path="/legal-insights-admin"
          element={
            <PrivateRoute>
              <Header />
              <LegalInsightsComponent />
            </PrivateRoute>
          }
        />
        <Route
          path="/news-insights-admin"
          element={
            <PrivateRoute>
              <Header />
              <NewsInsightsComponent />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
