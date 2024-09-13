import { PiEyeClosedLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import bg from "@/assets/bg.png";
import Crispy from "@/assets/Crispy.png";
import pineapple from "@/assets/pineapple.png";
import pumpkin from "@/assets/pumpkin.png";
import thai from "@/assets/thai.png";
import walmart from "@/assets/walmart.svg";
import carrefour from "@/assets/carrefour.svg";
import auchan from "@/assets/auchan.svg";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "@/components/ui/progress";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

interface objTypes {
  kdcl: string;
  image: string;
  name: string;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const objects: objTypes[] = [
  {
    name: "Crispy Zucchini Fritters",
    image: Crispy,
    kdcl: "356 kcal",
  },
  {
    name: "Pumpkin puree",
    image: pumpkin,
    kdcl: "370 kcal",
  },
  {
    name: "Pineapple Guacamole",
    image: pineapple,
    kdcl: "409 kcal",
  },
  {
    name: "Thai Salad",
    image: thai,
    kdcl: "278 kcal",
  },
  {
    name: "Pineapple Guacamole",
    image: pineapple,
    kdcl: "409 kcal",
  },
  {
    name: "Pineapple Guacamole",
    image: pineapple,
    kdcl: "409 kcal",
  },
];

export default function Tracker() {

  // data set for circular chart
  const circularChartData1 = {
    datasets: [
      {
        data: [6, 2],
        backgroundColor: ["#089BAB", "#CEEBEE"],
        borderColor: ["#089BAB", "#CEEBEE"],
        offset: 20,
      },
    ],
  };

  const circularChartData2 = {
    datasets: [
      {
        data: [6, 2],
        backgroundColor: ["#089BAB", "#CEEBEE"],
        borderColor: ["#089BAB", "#CEEBEE"],
        offset: 20,
      },
    ],
  };

  // vary the thickness of the chart
  const sliceThickness1 = {
    id: "sliceThickness1",
    beforeDraw(chart: any) {
      chart.getDatasetMeta(0).data[1].outerRadius = 35;
      chart.getDatasetMeta(0).data[1].innerRadius = 32;
      chart.getDatasetMeta(0).data[0].innerRadius = 32;
      chart.getDatasetMeta(0).data[0].outerRadius = 40;
    },
  };

  const sliceThickness2 = {
    id: "sliceThickness2",
    beforeDraw(chart: any) {
      chart.getDatasetMeta(0).data[1].outerRadius = 21;
      chart.getDatasetMeta(0).data[1].innerRadius = 20;
      chart.getDatasetMeta(0).data[0].innerRadius = 22;
      chart.getDatasetMeta(0).data[0].outerRadius = 25;
    },
  };

  // Circle middle text
  const circleText = {
    id: "circleText",
    beforeDraw(chart: any) {
      const { ctx, chartArea } = chart;
      ctx.save();
      ctx.font = "18px sans-serif";
      ctx.fillStyle = "#089BAB";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("320", chartArea.width / 2+3, chartArea.height / 2 + 5); 
      
      ctx.font = "lighter 10px sans-serif";
      ctx.fillStyle = "#888C96";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("kcal left", chartArea.width / 2+3, chartArea.height / 2 + 22); 
      // ctx.restore();
    },
  };

  const circleText2 = {
    id: "circleText2",
    beforeDraw(chart: any) {
      const { ctx, chartArea } = chart;
      ctx.save();
      ctx.font = "10px sans-serif";
      ctx.fillStyle = "#089BAB";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("750", chartArea.width / 2+3, chartArea.height / 2 + 5); 
      
      ctx.font = "lighter 10px sans-serif";
      ctx.fillStyle = "#888C96";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("ml left", chartArea.width / 2+3, chartArea.height / 2 + 22); 
      // ctx.restore();
    },
  };
  return (
    <div className=" bg-[#EFF7F8] min-h-screen flex flex-col  xl:flex-row h-fit">
      {/* Left side of the dashboard */}
      <div className="">
        <div className="flex w-[280px] justify-around ml-[8rem] pt-[300px] px-4 text-sm ">
          <Link to="/tracker">
            <button className="text-[#089BAB] font-medium bg-[#089BAB]/[.2] p-2 rounded-xl w-[6rem] hover:bg-[#089BAB] hover:text-white focus:bg-[#089BAB] focus:text-white">
              Meals
            </button>
          </Link>
          <Link to={"/exercises"}>
            <button className="text-[#089BAB] font-medium bg-[#089BAB]/[.2] p-2 rounded-xl w-[6rem] hover:bg-[#089BAB] hover:text-white focus:bg-[#089BAB] focus:text-white">
              Exercises
            </button>
          </Link>
        </div>

        <div className="flex w-[280px] ml-[8rem] mt-5 px-4 text-sm bg-white rounded-2xl flex-col  drop-shadow-[0_0px_1px_rgba(0,0,0,0.09)] py-5 ">
          <span>Calorie counter</span>

          <div className="grid grid-cols-2">
            <div className="flex flex-col ">
              <span className="text-xs text-[#888C96] mt-5">Eaten 🍑</span>
              <span className="mt-2 text-base">1560 kcal</span>

              <span className="text-xs text-[#888C96] mt-5">Burned 🏃☄️</span>
              <span className="mt-2 text-base">350 kcal</span>
            </div>

            <data>
              <Doughnut
                data={circularChartData1}
                options={{}}
                plugins={[sliceThickness1, circleText]}
              ></Doughnut>
            </data>
          </div>

          <div className="grid grid-cols-3 gap-7">
            <div className="flex flex-col gap-1 mt-5">
              <span className="text-[#089BAB] font-medium text-sm">Carbs</span>

              <Progress
                value={70}
                indicatorClassName="bg-[#FF738F]"
                bgClassName="bg-[#FFD6DE]"
                className="h-2"
              />
              <span style={{ fontSize: "10px" }} className="text-[#888C96]">
                24g left
              </span>
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <span className="text-[#089BAB] font-medium text-sm">
                Protein
              </span>

              <Progress
                value={80}
                indicatorClassName="bg-[#738FFF]"
                bgClassName="bg-[#D6DEFF]"
                className="h-2"
              />
              <span style={{ fontSize: "10px" }} className="text-[#888C96]">
                56g left
              </span>
            </div>

            <div className="flex flex-col gap-1 mt-5">
              <span className="text-[#089BAB] font-medium text-sm">Fat</span>

              <Progress
                value={30}
                indicatorClassName="bg-[#B8EEA4]"
                bgClassName="bg-[#DBFCDD]"
                className="h-2"
              />
              <span style={{ fontSize: "10px" }} className="text-[#888C96]">
                16g left
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl justify-between drop-shadow-[0_0px_1px_rgba(0,0,0,0.09)]   w-[280px] ml-[8rem] mt-5 px-4 flex items-center">
          <div className="flex flex-col w-fit">
            <span className="text-xs text-[#888C96] ">Drunk 🐳</span>
            <span className="mt-2 text-base">
              1250 ml <span className="text-[#888C96]">/2000 ml</span>
            </span>
          </div>

          <div className="w-[50%] h-full  -mt-4">
          <Doughnut
                data={circularChartData2}
                options={{}}
                plugins={[sliceThickness2, circleText2]}
              ></Doughnut>
          </div>

        
        </div>
      </div>

      {/* Right side of dashboard */}
      <div className="flex-1 bg-white ml-[4rem] rounded-l-[60px] p-14 drop-shadow-[0_0px_1px_rgba(0,0,0,0.09)] xl:ml-[3rem] mt-[2rem] xl:mt-[0rem]">
        <div className="flex justify-between bg-gradient-to-l from-[#16C0C0] to-[#089BAB] p-2 rounded-3xl items-center ">
          <span className="ml-5 text-xl font-medium text-white">
            Great Job!{" "}
            <span className="font-normal">Your water level is on top!</span>
          </span>
          <div className="flex items-center ">
            <img src={bg} alt="" className="w-[60px]" />
          </div>
        </div>

        {/* Date calendar **/}
        <div className="flex items-center justify-evenly mt-7">
          <span className="text-sm font-medium">August 2019</span>

          <div className="flex items-center gap-6 p-2 text-sm font-semibold border-l-2 border-r-2 rounded-2xl w-fit">
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
          <span className="text-sm  text-[#888C96]">September 2019</span>
        </div>

        {/* Brakfast lunch dinner area */}
        <div className="grid grid-cols-3 mt-10 ">
          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <span className="text-xl">Breakfast</span>
              <span className="text-sm mt-3 text-[#888C96]">Eaten</span>
              <span className="mt-1 text-xl font-medium">395 kcal</span>
            </div>

            <div className="flex items-end ">
              <div className="p-2 text-2xl bg-[#CEEBEE] text-[#089BAB] rounded-xl ">
                <PiEyeClosedLight />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="flex flex-col">
              <span className="text-xl">Lunch</span>
              <span className="text-sm mt-3 text-[#888C96]">Eaten</span>
              <span className="mt-1 text-xl font-medium">567 kcal</span>
            </div>

            <div className="flex items-end ">
              <div className="p-2 text-2xl bg-[#CEEBEE] text-[#089BAB] rounded-xl ">
                <PiEyeClosedLight />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 ">
            <div className="flex flex-col">
              <span className="text-xl">Breakfast</span>
              <span className="text-sm mt-3 text-[#888C96]">Eaten</span>
              <span className="mt-1 text-xl font-medium">395 kcal</span>
            </div>

            <div className="flex items-end ">
              <div className="p-2 text-2xl bg-[#FEAD54] text-white rounded-xl ">
                <FiPlus />
              </div>
            </div>
          </div>
        </div>

        {/* Healthy dishes */}
        <div className="flex items-center justify-between mt-10">
          <span className="text-[#089BAB] font-medium text-xl">
            Healthy dishes
          </span>
          <div className="flex items-center gap-4">
            <div className="px-5 text-xs py-3 h-p[45px] bg-[#CEEBEE] text-[#089BAB] rounded-xl flex items-center justify-center">
              Breakfast
            </div>
            <div className="px-5 py-3 text-xs  h-p[45px] bg-[#CEEBEE] text-[#089BAB] rounded-xl flex items-center justify-center">
              Lunch
            </div>
            <div className="px-5 py-3 text-xs  h-p[45px] bg-[#CEEBEE] text-[#089BAB] rounded-xl flex items-center justify-center">
              Snack
            </div>
            <div className="px-5 py-3 text-xs h-p[45px] bg-[#089BAB] text-white rounded-xl flex items-center justify-center">
              Dinner
            </div>
          </div>
        </div>

        {/* Slider */}
        <div className="mt-10 ">
        <Carousel>
  <CarouselContent className="">
    {objects.map((item, index) => (
      <CarouselItem
        key={index}
        className="-ml-2 rounded-3xl basis-1/4 max-w-[230px]"
      >
        <div
          className="flex flex-col items-center h-64 gap-3 p-3 mx-4 mb-2 border-b-2 rounded-b-3xl"
          style={{ boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.09)' }} 
        >
          <img
            src={item.image}
            className="w-24 h-24 rounded-full"
            alt=""
          />
          <span>{item.name}</span>
          <div className="flex items-end w-full h-full">
            <div className="flex items-center justify-around w-full">
              <span>{item.kdcl}</span>
              <div className="p-2 text-lg bg-[#CEEBEE] text-[#089BAB] rounded-xl">
                <FiPlus />
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

        </div>

        {/* Nearest Treatment and Advice area */}
        <div className="mt-10 ">
          <div className="flex justify-between">
            <div className="flex ">
              <img src={walmart} alt="" />
              <img src={auchan} alt="" />
              <img src={carrefour} alt="" />
            </div>

            <div>
              <div className="flex items-center gap-2 xl:gap-5">
                <span className="text-[#FEAD54] font-medium ">ORDER FOOD</span>
                <div className="p-2 text-2xl bg-[#FEAD54] text-white rounded-xl h-fit">
                  <GoArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
