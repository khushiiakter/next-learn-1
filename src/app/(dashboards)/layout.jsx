import React from "react";

const DashboarLayouts = ({ children }) => {
  return (
    <div className=" border-4 border-emerald-500  ">
        {/* min-h-[calc(100vh-160px)] */}
      {/* <h1>DashboarLayouts</h1> */}
      {/* <div className="grid h-full  grid-cols-12">
        <div className="col-span-3   border-2">menu</div>
        <div className="col-span-9  border-2 ">{children}</div>
      </div> */}
      <div className="grid h-full min-h-[calc(100vh-80px)] grid-cols-12">
        <div className="col-span-3   border-2">menu</div>
        <div className="col-span-9  border-2 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboarLayouts;
