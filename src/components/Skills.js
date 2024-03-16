import { HTML_URl } from "../Utilis/link";
import { CSS_URL } from "../Utilis/link";
import { JAVASCRIPT_URL } from "../Utilis/link";
import { REACT_URL } from "../Utilis/link";
import { GIT_HUB } from "../Utilis/link";
import { TAILWIND_CSS } from "../Utilis/link";
import { REDUX } from "../Utilis/link";
import { BOOTSTRAP } from "../Utilis/link";






const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Skills</p>
        <p className="py-4 text-gray-200">These are the technologies I've gained</p>
        </div>
      <div className="html  w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
        <div className=" project shadow-md shadow-[#040c16]" >
              <img className=" w-20 mx-auto" src={HTML_URl} alt="HTML_icons"/>
              <p className="my-4 text-gray-200">HTML</p>
        </div>
        <div className=" project shadow-md shadow-[#040c16] " >
              <img className="w-20 mx-auto" src={CSS_URL} alt="css_icons"/>
              <p className="my-4 text-gray-200">CSS</p>
        </div>
        <div className=" project shadow-md shadow-[#040c16] " >
              <img className="w-20 mx-auto" src={JAVASCRIPT_URL} alt="javascript_icons"/>
              <p className="my-4 text-gray-200">JavaScript</p>
        </div>
        <div className=" project shadow-md shadow-[#040c16] " >
              <img className="w-20 mx-auto" src={REACT_URL} alt="react_icons"/>
              <p className="my-4 text-gray-200">React.js</p>
        </div>
        <div className="project shadow-md shadow-[#040c16] " >
              <img className="w-20 mx-auto" src={GIT_HUB} alt="github_icons"/>
              <p className="my-4 text-gray-200">Github</p>
        </div>
        <div className="project shadow-md shadow-[#040c16] " >
              <img className="w-20 mx-auto" src={TAILWIND_CSS} alt="tailwind_icons"/>
              <p className="my-4 text-gray-200">Tailwind Css</p>
        </div>
        <div className="project shadow-md shadow-[#040c16] " >
              <img className="w-20 mx-auto" src={REDUX} alt="redux_icons"/>
              <p className="my-4 text-gray-200">Redux</p>
        </div>
        <div className="project shadow-md shadow-[#040c16] " >
              <img className="w-36 mx-auto" src={BOOTSTRAP} alt="bootstrap_icons"/>
              <p className="my-4 text-gray-200">BootStrap</p>
        </div>
        
       
        
      </div>
      </div>
    </div>
  );
};

export default Skills;