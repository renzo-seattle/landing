import React from "react";

import fred from "../assets/images/fred-3.jpg";
import josh from "../assets/images/josh-2.jpg";

const Team = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your Coaches
            </h2>
            <p className="text-md text-gray-500">
              At Renzo Gracie Seattle, our coaches have devoted their lives to
              the art of grappling and take the greatest care in sharing their
              knowledge to students of all experience levels.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-4 aspect-h-4">
                    <img
                      className="object-cover w-auto shadow-lg rounded-lg"
                      src={fred}
                      alt=""
                    />
                  </div>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Fred Borden</h3>
                    <p className="text-blue-800 font-bold">Head Coach</p>
                  </div>
                  <div className="text-md">
                    <p className="text-gray-500">
                      Born and raised in New York City, Fred began his Jiu-jitsu
                      career training under the respected John Danaher and honed
                      his wrestling at the prestigious NYAC Wrestling Club. He
                      has trained alongside Gregor and Rolles Gracie, and UFC
                      stars Georges St. Pierre, Chris Weidman and Frankie Edgar.
                      In 2011, Fred took gold at the NoGi Pan Ams Masters. From
                      2008-2012 Fred served as a teacher's assistant at the
                      legendary Renzo Gracie Academy, and in 2018 he was awarded
                      his black belt by Rolles Gracie.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-4 aspect-h-4">
                    <img
                      className="object-center w-auto shadow-lg rounded-lg"
                      src={josh}
                      alt=""
                    />
                  </div>
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Josh Prado</h3>
                    <p className="text-blue-800 font-bold">Coach</p>
                  </div>
                  <div className="text-md">
                    <p className="text-gray-500">
                      Born and raised in New York City, Josh began his jiu-jitsu
                      career under Daniel Gracie, Leo Leonardo Leite, and John
                      Danaher in the legendary blue basement at Renzo Gracie
                      Academy NYC. Prior to BJJ, Josh wrestled at Phillips
                      Exeter Academy. During his tenure Exeter’s Big Red won
                      three New England titles. He continued his career at
                      Wesleyan University for multiple time New England
                      Wrestling Association Coach of the Year and the winningest
                      coach in school history, Drew Black. In 2019, Josh was
                      promoted to Black Belt by Renzo Gracie Black Belt, Lincoln
                      Pereira
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
