import React from "react";

const SCHEDULE = [
  { day: "M", type: "🥋 Gi", times: "4:45, 5:30, 6:15, 7:00" },
  { day: "TU", type: "🤼‍♂️ No Gi", times: "4:45, 5:30, 6:15, 7:00" },
  { day: "W", type: "🥋 Gi", times: "4:45, 5:30, 6:15, 7:00" },
  { day: "TH", type: "🤼‍♂️ No Gi", times: "4:45, 5:30, 6:15, 7:00" },
  { day: "FR", type: "🤼‍♂️ No Gi", times: "4:45, 5:30, 6:15, 7:00" },
  { day: "SA", type: "", times: "CLOSED" },
  { day: "SU", type: "", times: "CLOSED" },
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
                    <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p class="text-sm text-gray-500">
                          Times
                          <div class="font-medium text-gray-900">
                            {item.times}
                          </div>
                        </p>
                        <div class="text-md whitespace-nowrap text-gray-500">
                          {item.type}
                        </div>
                      </div>
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
