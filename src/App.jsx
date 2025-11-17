import { useState } from "react";
import { HOME } from "./constant/Lazyload";
import { Outlet } from "react-router-dom";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSlide = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <main className="App w-screen h-screen absolute overflow-hidden bg-gray-50">
      <div className="Layout w-full h-full flex flex-col">
        <section
          className={`h-full flex-none ${
            isOpen &&
            "-translate-y-full opacity-80 transition-all ease-in-out duration-500"
          }`}
        >
          <HOME onClick={handleSlide} />
        </section>

        <section
          className={`h-full flex-1 ${
            isOpen &&
            "-translate-y-full h-full transition-all ease-in-out duration-500"
          }`}
        >
          <Outlet /> 
        </section>
      </div>
    </main>
  );
}
