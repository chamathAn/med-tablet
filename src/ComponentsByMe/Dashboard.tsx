import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoSettingsOutline } from "react-icons/io5";
import { PiEyeClosedLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { XAxis, CartesianGrid, Tooltip, Area, AreaChart } from "recharts";

interface objTypes {
  color1: string;
  color2: string;
  date: string;
  name: string;
  status: string;
  specialText?: string;
  dot?: Boolean;
}

const data = [
  {
    name: "2015",
    uv: 1000,
    pv: 8000,
  },
  {
    name: "2016",
    uv: 4000,
    pv: 2000,
  },
  {
    name: "2017",
    uv: 1000,
    pv: 10000,
  },
  {
    name: "2018",
    uv: 6000,
    pv: 3000,
  },
  {
    name: "2019",
    uv: 0,
    pv: 6000,
    amt: 9000,
  },
];

const objects: objTypes[] = [
  {
    color1: "#D7FBFF",
    color2: "#089BAB",
    date: "21 Jul, 2019",
    name: "Hypertensive crisis",
    status: "Ongoing treatment",
  },
  {
    color1: "#FFE3DF",
    color2: "#FD988B",
    date: "18 Jul, 2019",
    name: "Osteoporosis",
    status: "Incurable",
    specialText: "Need analyzes",
    dot: true,
  },
  {
    color1: "#C8C8C8",
    color2: "#E1E1E1",
    date: "21 Jul, 2019",
    name: "Hypertensive crisis",
    status: "Examination",
  },
  {
    color1: "#FFE3DF",
    color2: "#FD988B",
    date: "18 Jul, 2019",
    name: "Osteoporosis",
    status: "Incurable",
    specialText: "Need analyzes",
    dot: true,
  },
];

export default function Dashboard() {
  return (
    <div className=" bg-[#EFF7F8] min-h-screen flex flex-col xl:flex-row h-fit">
      {/* Left side of the dashboard */}
      <div className="">
        <div className="flex w-[280px] justify-between ml-[8rem] pt-[300px] px-4 text-sm ">
          <span className="text-[#089BAB] font-medium">Notifications</span>
          <span className="text-[#888C96] font-medium">26 Aug 2019</span>
        </div>

        <div className="flex w-[280px] ml-[8rem] mt-5 px-4 text-sm bg-white rounded-2xl flex-col  drop-shadow-[0_0px_1px_rgba(0,0,0,0.09)] py-5 ">
          <div className="flex justify-between ">
            <span className="font-semibold">Kognum</span>
            <span>10mg</span>
          </div>

          <div className="grid grid-cols-4 gap-1 mt-4 mb-2 text-xs">
            <span className="text-[#089BAB]">MON</span>
            <span className="text-[#089BAB]">WED</span>
            <span className="text-[#089BAB]">FRI</span>
            <span className="text-[#089BAB]">SUN</span>
          </div>
          <span className="text-[#888C96] text-xs mb-6">
            2 times in a day before food
          </span>

          <div className="h-[1px] w-full bg-[#E0E0E0]" />

          <div className="flex">
            <Avatar className="w-10 h-10 mt-4">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="mt-5 ml-5 leading-4">
              <span style={{ fontSize: "12px" }}>Dr. Isabella Bowers</span>
              <div className=" text-[#888C96]" style={{ fontSize: "10px" }}>
                California Hospital Medical Center
              </div>
            </div>
          </div>

          <div className="mt-5 ">
            <span className="text-sm font-semibold">Surgeon</span>
            <div className=" text-[#888C96]" style={{ fontSize: "11px" }}>
              Spinal pain
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="mt-4 mb-2 ">
              <span className="text-[#089BAB]" style={{ fontSize: "10px" }}>
                Date
              </span>
              <div className="text-sm">26 Aug 2019</div>
            </div>
            <div className="flex flex-col items-end mt-4 mb-2 mr-5">
              <div>
                <span className="text-[#089BAB]" style={{ fontSize: "10px" }}>
                  Time
                </span>
                <div className="text-sm">12:45 AM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl justify-between drop-shadow-[0_0px_1px_rgba(0,0,0,0.09)] py-5  w-[280px] ml-[8rem] mt-5 px-4 flex">
          <div className="bg-[#FEAD54] p-3 rounded-2xl text-white flex w-fit">
            <div className="flex flex-col ">
              <span className="pb-3 text-xs">5432</span>
              <div className="">
                <span className="text-xs font-thin pr-14">Bess Willis</span>
                <span className="text-xs">VISA</span>
              </div>
            </div>
          </div>

          <div className="p-3 text-white rounded-2xl">
            <div className="flex flex-col items-center">
              <div className="p-1 text-xl bg-[#CEEBEE] rounded-lg w-fit text-[#089BAB]">
                <IoSettingsOutline />
              </div>
              <span
                style={{ fontSize: "12px" }}
                className="pt-2 text-[#089BAB]"
              >
                Settings
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side of dashboard */}
      <div className="flex-1 bg-white ml-[3rem] rounded-l-[60px] p-14 drop-shadow-[0_0px_1px_rgba(0,0,0,0.09)]">
        <div className="flex justify-between ">
          <span className="text-[#089BAB] font-medium text-xl">
            Examinations
          </span>
          <div className="flex items-center ">
            <div className="p-2 text-2xl bg-[#CEEBEE] text-[#089BAB] rounded-xl ">
              <PiEyeClosedLight />
            </div>
            <span className="text-[#089BAB] font-medium ml-3">See All</span>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-5">
          <Carousel>
            <CarouselContent>
              {objects.map((item, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <div className="flex h-[140px] ">
                    <div
                      className=" w-[10px] rounded-xl"
                      style={{
                        background: `linear-gradient(to top, ${item.color2}, ${item.color1})`,
                      }}
                    />
                    <div className="flex flex-col w-full py-3 mx-5">
                      <div className="flex items-center justify-between ">
                        <span className="text-[#888C96] ">{item.date}</span>
                        <span className="text-[#FEAD54] text-xs font-semibold">
                          {item.specialText}
                        </span>
                      </div>

                      <span className="mt-5 text-xl font-medium">
                        {item.name}
                      </span>

                      <div className="flex items-center justify-between ">
                        <span className="text-[#888C96] mt-2">
                          {item.status}
                        </span>
                        {item.dot ? (
                          <div className="w-4 h-4 rounded-full bg-[#FEAD54] mt-2"></div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Health curve area */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-[#089BAB] font-medium text-xl">
            Health Curve
          </span>
          <div className="flex items-center gap-4">
            <div className="p-2 text-xl w-[45px] h-p[45px] bg-[#CEEBEE] text-[#089BAB] rounded-xl flex items-center justify-center">
              D
            </div>
            <div className="p-2 text-xl w-[45px] h-p[45px] bg-[#CEEBEE] text-[#089BAB] rounded-xl flex items-center justify-center">
              W
            </div>
            <div className="p-2 text-xl w-[45px] h-p[45px] bg-[#CEEBEE] text-[#089BAB] rounded-xl flex items-center justify-center">
              M
            </div>
            <div className="p-2 text-xl w-[45px] h-p[45px] bg-[#CEEBEE] text-[#089BAB] rounded-xl flex items-center justify-center">
              Y
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-5">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            {/* <YAxis /> */}
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="100%" stopColor="#E6F5F6" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />

            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#E9F2F2"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#0EB7C3"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>

        {/* Nearest Treatment and Advice area */}
        <div className="mt-5">
          <div className="grid grid-cols-2">
            <div className="flex flex-col ">
              <span className="text-[#089BAB] font-medium text-xl">
                Nearest Treatment
              </span>
              <div className="flex items-center mt-5 ">
                <span className="text-sm font-medium">August 2019</span>
                <GoArrowRight className="ml-6 text-xl" />
              </div>
              <div className="flex items-center gap-6 p-2 mt-8 text-sm font-semibold border-l-2 border-r-2 rounded-2xl w-fit">
                <MdArrowBackIos className="text-[#888C96] " />
                <span className="text-[#FEAD54]">26</span>
                <span>27</span>
                <span>28</span>
                <span>29</span>
                <span>30</span>
                <span>31</span>
                <span>01</span>
                <MdArrowForwardIos className="text-[#888C96]" />
              </div>
            </div>

            <div className="flex flex-col ">
              <span className="text-[#089BAB] font-medium text-xl">Advice</span>
              <span className="mt-5 text-sm">
                The clinical service is consultant-led and available on a
                24-hour basis
              </span>
              <span className="mt-5 text-sm font-medium leading-8">
                More info via the link
              </span>
              <a
                href="https://www.heftpathology.com/Haematology-Clinical-Advice"
                style={{ fontSize: "11px" }}
              >
                https://www.heftpathology.com/Haematology-Clinical-Advice
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
