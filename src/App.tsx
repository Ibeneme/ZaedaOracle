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

function App() {
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
        <Route path="/legal-insights/:title" element={<LegalInsightDetail />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
