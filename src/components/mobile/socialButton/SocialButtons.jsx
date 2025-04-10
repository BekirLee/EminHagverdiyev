import SocialButton from "./SocialButton";
import ph from "@assets/images/ph.png";
import wp from "@assets/images/wp.png";
import tg from "@assets/images/tg.png";
import insta from "@assets/images/insta.png";
import web from "@assets/images/web.png";
import rating from "@assets/images/rating.png";
import share from "@assets/images/share.png";
import tt from "@assets/images/tt.png";
import yt from "@assets/images/yt.png";
import location from "@assets/images/location.png";
import { useState, useEffect } from "react";

const SocialButtons = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const totalButtons = 10;

  useEffect(() => {
    // Create a loop that triggers each button's animation
    const interval = setInterval(() => {
      setActiveButtonIndex((prevIndex) => (prevIndex + 1) % totalButtons);
    }, 1500); // Delay time should match the animation duration (1.5s)

    return () => clearInterval(interval);
  }, []);

  const buttonData = [
    { href: "tel:+994507971707", src: ph, alt: "ph" },
    { href: "https://wa.me/+994507971707", src: wp, alt: "wp" },
    { href: "https://t.me/+994507971707", src: tg, alt: "tg" },
    {
      href: "https://www.instagram.com/dreminhaqverdiyev/?hl=en",
      src: insta,
      alt: "insta",
    },
    {
      href: "https://www.youtube.com/@duruklinikofficial",
      src: yt,
      alt: "youtube",
    },
    {
      href: "https://www.tiktok.com/@dreminhaqverdiyev",
      src: tt,
      alt: "tiktok",
    },
    {
      href: "https://wa.me/?text=https://eminhaqverdiyev.digicardsapp.com/",
      src: share,
      alt: "share",
    },

    {
      href: "https://maps.app.goo.gl/zmqvVhEKiVz39rGy7",
      src: location,
      alt: "location",
    },
    {
      href: "https://eminhaqverdiyev.az/",
      src: web,
      alt: "web",
    },
    {
      href: "https://www.google.com/maps/place/M%C9%99rcan+Medicare+Clinic/@40.4054673,49.8100927,15z/data=!4m18!1m9!3m8!1s0x403063e44a296ce5:0x567509527774bcec!2sM%C9%99rcan+Medicare+Clinic!8m2!3d40.4054673!4d49.8100927!9m1!1b1!16s%2Fg%2F11s0200wqq!3m7!1s0x403063e44a296ce5:0x567509527774bcec!8m2!3d40.4054673!4d49.8100927!9m1!1b1!16s%2Fg%2F11s0200wqq?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
      src: rating,
      alt: "rating",
    },
  ];

  return (
    <>
      <div className="mt-[25px] left-0 flex flex-row flex-wrap items-center justify-center gap-[20px]">
        {buttonData.map((button, index) => (
          <SocialButton
            key={index}
            href={button.href}
            src={button.src}
            alt={button.alt}
            additionalClass={
              index === activeButtonIndex ? "animate-grow-shrink" : ""
            }
          />
        ))}
      </div>
    </>
  );
};

export default SocialButtons;
