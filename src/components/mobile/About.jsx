const About = ({ language }) => {
  const translations = {
    az: {
      name: "Dr. Emin",
      surname: "Haqqverdiyev",
      description: "Gözəlliyinizi texnologiya ilə kəşf edin.",
    },
    en: {
      name: "Dr. Emin",
      surname: "Hagverdiev",
      description: "Discover your beauty through technology.",
    },
    ru: {
      name: "Др. Эмин",
      surname: "Хагвердиев",
      description: "Откройте свою красоту с помощью технологий.",
    },
  };


  const content = translations[language] || translations.uz;

  return (
    <div className="mt-4 h-auto font-semibold right-[20%] top-[410px] leading-[30px]">
      <p id="name" className="text-[25px]  text-[#004d09]">
        {content.name + ' '}
        {content.surname}
      </p>
      <p
        id="description"
        className="text-[17px] font-normal text-[#004d09]"
      >
        {content.description}
      </p>
      {/* <p
        id="description"
        className="text-[24px] w-[260px] leading-[22px] mt-16"
      >
      </p> */}
    </div>

  );
};

export default About;
