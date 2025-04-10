import { useState } from "react";
import Profile from "./Profile";
import About from "./About";
import Footer from "./Footer";
import Modal from "./Modal";
import NotificationButton from "./NotificationButton";
import "@assets/styles/style.css";
import SocialButtons from "./socialButton/SocialButtons";

const Mobile = () => {
  const [language, setLanguage] = useState("az");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="md:none ">
      <div className="w-full h-full flex flex-col items-center">
        <Profile setIsOpen={setIsOpen} />
        {/* <NotificationButton setIsOpen={setIsOpen} /> */}
        <About language={language} />
        <SocialButtons />

        <Footer onLanguageChange={handleLanguageChange} />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} language={language} />
      </div>
    </div>
  );
};

export default Mobile;
