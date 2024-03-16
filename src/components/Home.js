import { FaArrowRight } from "react-icons/fa6";
import {Link} from "react-scroll";


const Home = ()=>{

    return(
        <div name='home' className="w-full h-screen  ">
          <div className="max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full">
       <p className="text-gray-100">Hi, My Name is</p>
       <h1 className="text-4xl sm:text-7xl font-bold  text-gray-300 font-serif">Md Faiz Ali</h1>
       <div >
<img className="w-[350px] " 
 src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462410-2896028.png?f=webp"/>

       </div>
          </div>
        </div>
    )
}

export default Home;