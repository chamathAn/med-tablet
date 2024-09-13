import NavBar from "@/ComponentsByMe/NavBar";
import Profile from "@/ComponentsByMe/Profile";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <div className=" font-poppins">
      <Profile />
      <NavBar />
      <Outlet />
    </div>
  );
}
