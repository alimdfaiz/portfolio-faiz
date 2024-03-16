import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import { LOGO_URL } from "../Utilis/link";
import {Link} from "react-scroll";
import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] bg-opacity-5  text-gray-300">
      <div>
        <img
        className="rounded-[50%] mix-blend-normal "
          // src={LOGO_URL}
          src="https://www.logodesign.net/logo/line-art-letter-f-5218ld.png?nwm=1&nws=1&industry=alphabets&sf="
          alt="logo-img"
          style={{ width: "60px" }}
        />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li><Link className=" hover:text-blue-500 flex items-center" to="home" smooth={true} duration={500} ><IoMdHome className="mx-2 " />Home</Link></li>
        <li><Link className=" hover:text-blue-500 flex items-center" to="about" smooth={true} duration={500}><IoPerson className="mx-2" />About</Link></li>
        <li><Link className=" hover:text-blue-500 flex items-center" to="skills" smooth={true} duration={500}><GiSkills className="mx-2"  />Skills</Link></li>
        <li><Link className=" hover:text-blue-500 flex items-center" to="project" smooth={true} duration={500}><GoProject  className="mx-2" />Projects</Link></li>
        <li><Link  className=" hover:text-blue-500 flex items-center" to="contact" smooth={true} duration={500}><IoIosContact className="mx-2" />Contact Us</Link></li>
      </ul>

      {/* hamberg */}
      <div onClick={handleClick} className="md:hidden z-10">
       {!nav ? <FaBars /> : <FaXmark /> }
      </div>
      {/* mobile view */}
      <div
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick} to="project" smooth={true} duration={500}>Projects</Link></li>
          <li className="py-6 text-4xl"><Link onClick={handleClick}   to="contact" smooth={true} duration={500}>Contact Us</Link></li>
        </ul>
      </div>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className=" git w-[140px] h-[60px] flex justify-between items-center ml-[-100px]  bg-blue-600">
                <a className="flex justify-between items-center w-[full] text-gray-300" href="https://www.linkedin.com/in/md-faiz-ali-42750a172/" target="_blank" >
                   Linkedin <FaLinkedin className="size-8 ml-7"/>
                </a>
            </li>
            <li className="git  w-[140px] h-[60px] flex justify-between items-center ml-[-100px]  bg-[#333333]">
                <a className="flex justify-between items-center w-[full] text-gray-300" href="https://github.com/alimdfaiz" target="_blank" >
Github <FaSquareGithub className="size-8 ml-[37px]"/>
                </a>
            </li>
            <li className="git  w-[140px] h-[60px] flex justify-between items-center ml-[-100px]  bg-[#6fc2b0]">
                <a className="flex justify-between items-center w-[full] text-gray-300" href="alimdfaiz6@gmail.com" target="_blank" >
                   Email <MdEmail className="size-8 ml-[46px]"/>
                </a>
            </li>
            <li className="git w-[140px] h-[60px] flex justify-between items-center ml-[-100px]  bg-[#565f69]">
                <a className="flex justify-between items-center w-[full] text-gray-300" href="/" >
                   Resume <FaUser className="size-8 ml-7"/>
                </a>
            </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;