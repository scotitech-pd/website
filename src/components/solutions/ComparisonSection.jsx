"use client";

import Image from "next/image";

export default function AppDeployComparison() {
  return (
    <div className="bg-gradient-to-r from-[#202F5A] to-[#2A7559] text-white py-12 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12 font-karla text-3xl md:text-4xl ">
          <h2 className="font-bold">AppDeploy vs Traditional MDM:</h2>
          <p className="mt-2 font-bold">The Clear Winner</p>
        </div>

        <div className="bg-white rounded-xl rounded-br-none shadow-md text-gray-800 border-[1px] border-white">
          <div className="grid grid-cols-3 items-center bg-white rounded-t-xl">
            <div className="flex justify-center items-center">
              <img
                src="/images/solution/errow.png"
                alt=""
                className="w-6 min-[500px]:w-8 min-[850px]:w-12 py-6 min-[850px]:py-7"
              />
            </div>
            <div className="flexr relative w-full h-full">
              <div className="size-20 min-[500px]:size-24 min-[850px]:size-28 flex justify-center items-center rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-white shadow-2xl">
                <img
                  src="/images/solution/sett.png"
                  alt="Traditional MDM"
                  className="h-20 w-14 min-[500px]:h-22 min-[500px]:w-16 min-[850px]:h-26 min-[850px]:w-20"
                />
              </div>
            </div>
            <div className="flexr relative w-full h-full">
              <div className="size-20 min-[500px]:size-24 min-[850px]:size-28 flex justify-center items-center rounded-full absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-white shadow-2xl">
                <img
                  src="/images/solution/appdeploy.png"
                  alt="Traditional MDM"
                  className="size-10 min-[500px]:size-12 min-[850px]:size-14"
                />
              </div>
            </div>
          </div>

          <table className="w-full text-sm min-[500px]:text-base min-[850px]:text-xl text-center overflow-hidden">
            <thead className="bg-gradient-to-r from-[#223B5A] to-[#296D59]  text-white text-center font-karla">
              <tr className="">
                <th className="font-medium py-3">Feature / Cost</th>
                <th className="font-medium">Jamf / Intune</th>
                <th className="font-medium">AppDeploy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-black text-xs min-[500px]:text-sm min-[850px]:text-lg py-2 overflow-hidden font-karla">
              {[
                ["Cost per Device", "$6 - $12/month", "Flat monthly fee"],
                ["Annual Cost (500 devices)", "$36k - $72k", "$6k"],
                ["Setup Time", "Weeks", "<30 min"],
                [
                  "User Experience",
                  "Complex (enrollment)",
                  "One-click install",
                ],
                ["Tracking", "Limited", "Real-time tracking"],
              ].map(([feature, jamf, appdeploy], idx) => (
                <tr key={idx} className="hover:bg-gray-50 text-left overflow-hidden">
                  <td className="px-6 py-4 font-medium text-grey">{feature}</td>
                  <td className="px-6 py-4 text-grey">{jamf}</td>
                  <td className="px-6 py-4 text-grey flex justify-between items-center min-[1011px]:w-[80%] gap-2">
                    {appdeploy}
                    <img
                      src="/images/solution/tick.png"
                      alt=""
                      className="h-3"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2 flex justify-center items-center bg-white w-fit px-2 py-1 rounded-2xl rounded-tr-none ml-auto">
          <button className="bg-[#1C8BEA] font-karla text-white pl-4 group pr-1.5 py-1.5 rounded-3xl flex items-center gap-2 hover:bg-[#1C8BEA]/90 transition text-sm">
            Download AppDeploy
            <div className="bg-white p-1.5 rounded-full group-hover:scale-110 duration-300 group-hover:shadow-2xl"> 
              <img
              src="/images/solution/download.png"
              alt=""
              className="h-3"
            />
            </div>
          </button>
          <img
            src="/images/solution/app.png"
            alt=""
            className="h-10 pr-6 pl-2"
          />
        </div>
      </div>
    </div>
  );
}
