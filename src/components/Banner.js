import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-blue-900">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">
              We are open under WA State Phase-III Guidelines. Accepting new
              students.
            </span>
            <span className="hidden md:inline">
              We are open following WA State's Phase-III Guidelines. Accepting
              new students.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
