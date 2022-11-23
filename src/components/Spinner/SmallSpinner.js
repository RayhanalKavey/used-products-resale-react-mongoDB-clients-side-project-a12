import React from "react";

const SmallSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <div className="w-4 h-4 relative border-2 border-separate rounded-full animate-spin  mt-5 border-green-400">
          {" "}
          <div className="h-[12px] w-1 absolute left-1 bottom-3 border-2 border-separate rounded-full animate-pulse mt-5 border-green-400"></div>{" "}
          <div className="h-[12px] w-1 absolute left-1 -bottom-3 border-2 border-separate rounded-full animate-pulse mt-5 border-green-400"></div>{" "}
          <div className="h-1 w-[12px] absolute left-3 bottom-1 border-2 border-separate rounded-full animate-pulse mt-5 border-green-400"></div>{" "}
          <div className="h-1 w-[12px] absolute -left-3 bottom-1 border-2 border-separate rounded-full animate-pulse mt-5 border-green-400"></div>{" "}
          <div className="h-8 w-8 absolute -left-2.5 -bottom-2.5 border-[3px] border-dashed rounded-full animate-spin mt-5 border-green-400"></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SmallSpinner;
