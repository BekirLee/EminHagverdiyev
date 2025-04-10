import CustomSelect from "./CustomSelect";

const Footer = ({ onLanguageChange }) => {
  return (
    <div className="absolute font-bold text-lg flex items-center bottom-3">
      <p className="text-[#000] mr-2">
        Created by{" "}
        <a
          href="https://webonly.io/"
          className="bg-[linear-gradient(90deg,_#15411D_0%,_#2BB342_100%)] bg-clip-text text-transparent"
        >
          Webonly
        </a>
      </p>
      <CustomSelect onLanguageChange={onLanguageChange} />
    </div>
  );
};

export default Footer;
