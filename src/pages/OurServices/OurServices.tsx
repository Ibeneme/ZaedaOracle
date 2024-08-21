import React from "react";
import BlogHero from "../../Components/Blog/BlogHero/BlogHero";
import WhyChooseUsD from "../../Components/Sections/Why_Choose_us/D/WhyChooseUsD";
import WhyChooseUsE from "../../Components/Sections/Why_Choose_us/E/WhyChooseUsE";
import WhyChooseUsF from "../../Components/Sections/Why_Choose_us/F/WhyChooseUsF";
import WhyChooseUsG from "../../Components/Sections/Why_Choose_us/G/WhyChooseUsG";

const OurServices: React.FC = () => {
  return (
    <div>
      <BlogHero title="Our Services" />
      <WhyChooseUsD />
      <WhyChooseUsE />
      <WhyChooseUsF />
      <WhyChooseUsG />
    </div>
  );
};

export default OurServices;
