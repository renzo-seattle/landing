import React from "react";

const SCHEDULE = [
  {
    day: "M",
    blocks: [
      { type: "🥋 Gi - Fundamentals", time: "5:30PM - 6:30PM" },
      { type: "🥋 Gi - Advanced", time: "6:30PM - 8:00PM" },
    ],
  },
  {
    day: "TU",
    blocks: [
      { type: "🤼‍♂️ No Gi", time: "5:30PM - 7:00PM" },
      { type: "🥋 Gi", time: "7:00PM - 8:00PM" },
    ],
  },
  {
    day: "W",
    blocks: [
      { type: "🥋 Gi - Fundamentals", time: "5:30PM - 6:30PM" },
      { type: "🥋 Gi - Advanced", time: "6:30PM - 8:00PM" },
    ],
  },
  {
    day: "TH",
    blocks: [
      { type: "🤼‍♂️ No Gi", time: "5:30PM - 7:00PM" },
      { type: "🥋 Gi", time: "7:00PM - 8:00PM" },
    ],
  },
  {
    day: "FR",
    blocks: [{ type: "🤼‍♂️ No Gi", time: "5:30PM - 7:00PM" }],
  },
  { day: "SA", blocks: [{ type: "", time: "CLOSED" }] },
  { day: "SU", blocks: [{ type: "", time: "CLOSED" }] },
];

const Schedule = () => {
  return (
    <div className="flex justify-center mt-20 p-5">
      <div class="w-full md:w-1/3 flow-root border border-gray-200 shadow rounded-md p-5">
        <div className="font-bold">Current Schedule</div>
        <ul class="mt-5">
          {SCHEDULE.map((item, idx) => {
            return (
              <li>
                <div class="relative pb-8">
                  {idx === SCHEDULE.length - 1 ? null : (
                    <span
                      class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    ></span>
                  )}
                  <div class="relative flex space-x-3">
                    <div>
                      <span class="h-8 w-8 rounded-full bg-blue-900 flex items-center justify-center ring-8 ring-white text-white">
                        {item.day}
                      </span>
                    </div>
                    <div class="min-w-0 flex-1 pt-1.5 flex space-x-4">
                      {item.blocks.map((block) => {
                        return (
                          <div>
                            <div class="text-md whitespace-nowrap text-gray-500">
                              {block.type}
                            </div>
                            <p class="text-sm text-gray-500">
                              <div class="font-medium text-gray-900">
                                {block.time}
                              </div>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
