import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Profile() {
  return (
    <div className="absolute flex ml-[8rem] top-10 max-w-[280px] min-h-[236px] bg-white w-[280px] rounded-2xl flex-col items-center drop-shadow-[0_0px_1px_rgba(0,0,0,0.09)]">
      <Avatar className="flex -top-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="pb-2 text-sm font-semibold">Bess Willis</span>
      <span className="text-xs  text-[#888C96]">24 years, California</span>
      <div className="grid grid-cols-3 pt-5 gap-7">
        <div>
          <div className="text-[#089BAB] font-semibold" style={{ fontSize: "10px" }}>
            Blood
          </div>
          <span>-B</span>
        </div>
        <div>
          <div className="text-[#089BAB] font-semibold" style={{ fontSize: "10px" }}>
            Height
          </div>

          <span>170</span>
          <span className="text-xs">cm</span>
        </div>
        <div>
          <div className="text-[#089BAB] font-semibold" style={{ fontSize: "10px" }}>
            Weight
          </div>

          <span>60</span>
          <span className="text-xs">kg</span>
        </div>
      </div>
    </div>
  );
}
