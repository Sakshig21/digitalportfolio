import React from "react";
import "./AppReact.css";
import { IoIosArrowForward ,IoIosArrowBack} from "react-icons/io";
import {IoImagesSharp} from "react-icons/io5"
import {AiOutlineHtml5} from "react-icons/ai"
import {SiBootstrap} from 'react-icons/si'
import { Link } from "react-scroll";
import {BiLogoReact, BiCodeCurly} from "react-icons/bi"
import {MdOutlineDesignServices} from 'react-icons/md'
import {DiJavascript1} from "react-icons/di"
import { BsGit} from "react-icons/bs"
const AppReact = () => {
  return (
    <div className="appreact">
      <div className="logo">
        <img src="logo512.png" alt="" className="logo-img" />
        <h5>Sakshi-React-App</h5>
      </div>

      <div className="app_body">
        <ul>
          <li className="list">
            <IoIosArrowForward />
            <Link to = 'skills' className="skill">node_modules <span> - Skills</span></Link> 
            <div className="node_list">
            <li className="list"> <IoIosArrowForward /> HTML</li>
            <li className="list"> <IoIosArrowForward /> CSS</li>
            <li className="list"> <IoIosArrowForward /> Bootstrap</li>
            <li className="list"> <IoIosArrowForward /> Javascript</li>
            <li className="list"> <IoIosArrowForward /> React</li>
            <li className="list"> <IoIosArrowForward /> UI-UX Design</li>
            </div>
            </li>
            <li className="list">
            <IoIosArrowForward />
            <Link to = "about"> public <span> - About</span></Link>
            <div className="public_list">
              <li className="list"><IoIosArrowBack/><IoIosArrowForward /> index.html</li>
              <li className="list list-2"> <IoImagesSharp/> logo.png</li>
            </div>
            </li>
            <li className="list">
            <IoIosArrowForward />
            <Link to = "projects"> src <span> - Projects</span></Link>
            <li className="list"><IoIosArrowForward /> components
            {/* Html list  */}
            <li className="list"> <IoIosArrowForward /> Html And Vanilla css Projects
               
            </li>
            {/* Bootstrap list  */}
            <li className="list"> <IoIosArrowForward /> Bootstrap Projects
               {/* <li className="list"> <SiBootstrap/>  Food Website</li>
               <li className="list"><SiBootstrap/>Digital marketing Website</li>
               <li className="list"> <SiBootstrap/>Kindergarden Website</li> */}
            </li>
            {/* React list  */}
            <li className="list"> <IoIosArrowForward /> React Projects
               {/* <li className="list"> <BiLogoReact /> Todo App</li>
               <li className="list"><BiLogoReact />Weather App</li>
               <li className="list"><BiLogoReact />Calculator</li>
               <li className="list"><BiLogoReact />Gym Website</li> */}
            </li>
            {/* ui-ux list  */}
            <li className="list"> <IoIosArrowForward /> UI-UX Project
               {/* <li className="list"><MdOutlineDesignServices/>HomeMade Food App</li> */}
               
            </li>
            <li><DiJavascript1/> App.js</li>
            <li><DiJavascript1/> index.js</li>
            
            </li>
            </li>

            <li className="list"> <BsGit/>.gitignore <span> - Hobbies and Interests</span></li>
            <li className="list"><BiCodeCurly/>package.json  <span> - Contact Me</span></li>

            
            
          
          
        </ul>
      </div>
    </div>
  );
};

export default AppReact;
