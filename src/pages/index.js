import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

// external imports
import logo from "../assets/images/logo.png";
import video from "../assets/videos/banner-video.mp4";
import Schedule from "../components/Schedule";
import Team from "../components/Team";

export default () => {
  return (
    <div>
      <div className="z-50">
        <MessengerCustomerChat pageId="400520927033804" />
      </div>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="flex flex-row justify-center items-center">
                      <img src={logo} className="h-10 w-auto" alt="" />
                      <span className="ml-2 text-md font-bold uppercase text-blue-900">
                        Renzo Gracie Seattle
                      </span>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>
                        {/* <!-- Heroicon name: outline/menu --> */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8"></div>
              </nav>
            </div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                  <span className="block xl:inline">Changing lives</span>
                  <span className="block text-blue-800">
                    through self-defense instruction
                  </span>
                </h1>
                <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Renzo Gracie Seattle offers world-class Brazilian Jiu-Jitsu
                  and self-defense training to students of all ages in the Puget
                  Sound area
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <div className="font-bold mb-2 text-blue-800">
                      Ready for a change? Your first class is free
                    </div>
                    <a
                      href="https://jnnrhgtwxlr.typeform.com/to/igbvrkeW"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                    >
                      Try Now
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Video autoPlay loop muted controls={["PlayPause", "Fullscreen"]}>
            <source src={video} type="video/webm" />
          </Video>
        </div>
      </div>
      <Team />
      <Schedule />
    </div>
  );
};
