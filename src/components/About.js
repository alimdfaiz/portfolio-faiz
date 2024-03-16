const About = () => {
    return (
      <div name="about" className="w-full h-screen text-gray-300 ">
        <div className="flex flex-col justify-center items-center w-full h-full ">
          <div className="m-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="m-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right font-bold text-4xl">
              <p className="text-gray-200">Hi. I'm Md Faiz Ali,Please take a look around..</p>
            </div>
            <div>
              <p className="text-gray-200">Looking position within an organization that offers security and challenging assignments for professional growths which require my strong analytical and technical skills shaping me to be an asset for the organization.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;