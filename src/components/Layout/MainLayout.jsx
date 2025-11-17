// Section/MainLayout.jsx
import Navbar from "../ui/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-neutral-950">
      <div className="w-32 flex-none">
        <Navbar />
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
