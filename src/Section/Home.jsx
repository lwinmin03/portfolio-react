import AnimatedContent from "../components/ui/AnimatedContent.jsx";
import avatar from "../assets/avatar.jpg";
import TextCursor from "../components/ui//TextCursor.jsx";
import ColorBends from "../components/ui/ColorBends.jsx";
const Home = ({ onClick }) => {
  return (
   
      <div className={`relative z-10 h-full flex w-full  justify-center  items-center  `}>
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
          <div
            className={`flex flex-col justify-center items-center text-neutral-900 `}
          >
            <img
              src={avatar}
              alt="avatar"
              className={`w-48 h-48 rounded-full object-cover `}
            />

            <div>
              <div
                className={`flex flex-col justify-center gap-x-1 gap-y-1.5 items-center text-neutral-900 `}
              >
                <h3>Hello I am Lwin Min Thein</h3>
                <h2 className={`text-3xl font-medium text-center`}>
                  Software Engineer
                </h2>
                <button
                  onClick={onClick}
                  className={`bg-neutral-900 cursor-pointer text-sm text-white px-4 py-3 rounded-sm`}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
   
  );
};

export default Home;
