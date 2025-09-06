import AnimatedContent from "../components/AnimatedContent.jsx";
import avatar from "../assets/avatar.jpg";
import TextCursor from "../components/TextCursor.jsx";
const Home = () => {
  return(
      <div className={` h-full flex  rounded-md bg-gray-50 justify-center  items-center  `}>





          <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              duration={1.1}
              ease="power3.out"
              initialOpacity={0.0}
              animateOpacity
              scale={1.1}
              threshold={0.1}
              delay={0.2}
          >
              <div className={`flex flex-col justify-center items-center text-neutral-900 `}>

                  <img src={avatar} alt="avatar" className={`w-48 h-48 rounded-full object-cover `}/>

              <div>

                 <div className={`flex flex-col justify-center gap-1 items-center text-neutral-900 `}>
                     <h3>Hello I am Lwin Min Thein</h3>
                     <h2 className={`text-3xl font-medium text-center`}>Software Engineer</h2>
                     <button className={`bg-gray-900 cursor-pointer text-sm text-white p-2 rounded-sm`}>View My Project</button>
                 </div>
              </div>




              </div>
          </AnimatedContent>








      </div>
  )
}

export default Home;