import { RiDashboardFill } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { TfiPulse } from "react-icons/tfi";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="w-[100px] bg-[#089BAB] h-screen rounded-l-[100px] rounded-r-[30px]  flex flex-col items-center justify-center gap-1 fixed z-10">
      <Link to="/">
        <button className="focus:text-[#089BAB] hover:text-[#089BAB] text-[#ffffff] focus:bg-[#ffffff] hover:bg-[#ffffff] transition h-[100px] w-[65px] rounded-t-full rounded-b-full  items-center flex flex-col justify-center px-6 gap-2">
          <RiDashboardFill className="text-lg " />
          <span style={{ fontSize: "10px" }}>Dashboard</span>{" "}
        </button>
      </Link>
      <button className="focus:text-[#089BAB] hover:text-[#089BAB] text-[#ffffff] focus:bg-[#ffffff] hover:bg-[#ffffff] transition h-[100px] w-[65px] rounded-t-full rounded-b-full  items-center flex flex-col justify-center px-6 gap-2">
        <IoAddCircleOutline className="text-xl " />
        <span style={{ fontSize: "10px" }}>Doctor</span>{" "}
      </button>
      <button className="focus:text-[#089BAB] hover:text-[#089BAB] text-[#ffffff] focus:bg-[#ffffff] hover:bg-[#ffffff] transition h-[100px] w-[65px] rounded-t-full rounded-b-full  items-center flex flex-col justify-center px-6 gap-2">
        <RiContactsLine className="text-lg " />
        <span style={{ fontSize: "10px" }}>Contact</span>{" "}
      </button>
      <Link to="/tracker">
        <button className="focus:text-[#089BAB] hover:text-[#089BAB] text-[#ffffff] focus:bg-[#ffffff] hover:bg-[#ffffff] transition h-[100px] w-[65px] rounded-t-full rounded-b-full  items-center flex flex-col justify-center px-6 gap-2">
          <TfiPulse className="text-lg border-2 border-white" />
          <span style={{ fontSize: "10px" }}>Tracker</span>{" "}
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
