import rectangle from "@assets/images/rectangle.png";
const SocialButton = ({ href, src, alt, additionalClass = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative size-[70px] m-[10px]`}
    >
      <img
        src={src}
        alt={alt} 
        className={`absolute w-[70px] z-20 left-1 top-2 ${additionalClass}`}
      />
      {/* <img src={rectangle} alt="reactangle" className="absolute left-0 h-20" /> */}
    </a>
  );
};

export default SocialButton;
