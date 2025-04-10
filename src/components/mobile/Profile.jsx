import logo from "@assets/images/logo.png";
import bell from '@assets/images/bell.png'
import male from '@assets/images/male.png'
import SocialButtons from "./socialButton/SocialButtons";

const Profile = () => {
  return (
    <div className="w-full pt-5">
      <div className="relative w-screen px-[20px] flex justify-between">
        <img src={logo} alt="logo" className="w-[181.65px]" />
        <img src={bell} alt="" className="w-[68px]" />
      </div>

      <div className="rounded-full h-[330px] w-[330px] mx-auto overflow-hidden shadow-[0px_4px_14.3px_0px_rgba(0,0,0,0.39)]">
        <img src={male} alt="" className="rounded-full mt-[-40px]" />
      </div>
    </div>


  );
};

export default Profile;
