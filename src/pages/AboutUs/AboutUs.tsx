import BlogHero from "../../Components/Blog/BlogHero/BlogHero";
import CenteredTextSection from "../../Components/Sections/CenteredTextSection/CenteredTextSection";
import CenteredTextSectionPink from "../../Components/Sections/CenteredTextSection/Others/CenteredTextPink";
import WhyChooseUsA from "../../Components/Sections/Why_Choose_us/A/WhyChooseUsA";
import WhyChooseUsB from "../../Components/Sections/Why_Choose_us/B/WhyChooseUs";

const AboutUs = () => {
  return (
    <div>
      {" "}
      <BlogHero title="About Us" />
      <div style={{ marginTop: -120 }}>
        <CenteredTextSectionPink />
      </div>
      <WhyChooseUsA />
      <CenteredTextSection />
      <WhyChooseUsB />
    </div>
  );
};

export default AboutUs;
