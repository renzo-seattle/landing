import React from "react";

import cust1 from "../assets/images/cust-1.png";
import cust2 from "../assets/images/cust-2.png";
import cust3 from "../assets/images/cust-3.png";

const Customers = () => {
  return (
    <div className="bg-gray-100 mt-10">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          ActionNote is trusted by
        </p>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center justify-center">
              <a href="https://www.apexconyers.com/">
                <img className="h-20 text-center" src={cust1} alt="Tuple" />
              </a>
              <div className="text-center mt-1 md:mt-3">
                <div className="text-gray-400">Apex MMA</div>
                <div className="text-gray-400 text-sm">Covington, GA</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center justify-center">
              <a href="https://nextedgeacademy.com/">
                <img className="h-20 text-center" src={cust2} alt="Mirage" />
              </a>
              <div className="text-center mt-1 md:mt-3">
                <div className="text-gray-400">NextEdge Academy</div>
                <div className="text-gray-400 text-sm">Sioux Falls, SD</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center justify-center">
              <a href="https://renzogracieseattle.com/">
                <img className="h-20 text-center" src={cust3} alt="StaticKit" />
              </a>
              <div className="text-center mt-1 md:mt-3">
                <div className="text-gray-400">Renzo Gracie Seattle</div>
                <div className="text-gray-400 text-sm">Seattle, WA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
