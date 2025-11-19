"use client";
import React from "react";

export default function CompetitorComparisonPremium() {
  const data = [
    {
      parameter: "Target User",
      appdeploy:
        "SMEs, schools, startups, and developers needing private app distribution.",
      applivery: "Large enterprises with IT & MDM infrastructure.",
      appcenter: "Developers testing pre-release apps.",
    },
    {
      parameter: "Complexity",
      appdeploy: "Low – simple web dashboard, no technical setup.",
      applivery:
        "High – requires MDM configuration and enterprise accounts.",
      appcenter:
        "Medium – requires CI/CD setup and moderate developer knowledge.",
    },
    {
      parameter: "Cost",
      appdeploy: "Affordable subscription plans (SME-friendly).",
      applivery: "Expensive – enterprise pricing only.",
      appcenter: "Free for basic use, limited functionality.",
    },
    {
      parameter: "Primary Focus",
      appdeploy:
        "Secure, compliant private app deployment (ABM + APK hosting).",
      applivery: "Device management and enterprise control.",
      appcenter: "Continuous integration and app testing.",
    },
    {
      parameter: "Deployment Method",
      appdeploy:
        "Apple Business Manager (Custom App) & direct APK hosting.",
      applivery: "MDM & enterprise certificates.",
      appcenter: "CI/CD pipelines and manual install links.",
    },
  ];

  return (
    <section className="relative bg-white py-20 font-karla text-gray-900">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        
        {/* Heading */}
        <div className="text-center mb-14 relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#3D297A] relative z-10 font-karla">
            How AppDeploy Stands Apart
          </h2>

          <p className="mt-3 text-gray-600 font-lora text-lg max-w-3xl mx-auto">
            A transparent look at how AppDeploy compares against leading app distribution platforms.
          </p>

          <span className="absolute hidden lg:block text-[70px] text-nowrap tracking-wide font-bold text-gray-300/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            Comparison Analysis
          </span>
        </div>

        {/* Table for LG+ */}
        <div className="hidden lg:block overflow-x-auto shadow-lg rounded-2xl border border-gray-200">
          <table className="min-w-full text-left text-sm md:text-base border-collapse font-lora">
            <thead>
              <tr className="bg-gradient-to-r from-[#3D297A] to-[#7E1A8E] text-white font-karla">
                
                <th className="py-5 px-6 font-semibold border-r border-white/20 w-[18%] font-karla">
                  Parameter
                </th>

                <th className="py-5 px-6 font-semibold border-r border-white/20 w-[28%] relative font-karla">
                  AppDeploy (ScotiTech)
                </th>

                <th className="py-5 px-6 font-semibold border-r border-white/20 w-[27%] font-karla">
                  Applivery
                </th>

                <th className="py-5 px-6 font-semibold w-[27%] font-karla">
                  AppCenter (Microsoft)
                </th>

              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-200 transition duration-300 hover:bg-[#F9F6FF] ${
                    i % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-5 font-semibold text-[#3D297A] border-r border-gray-200 font-karla">
                    {row.parameter}
                  </td>

                  <td className="px-6 py-5 bg-[#F5EDFF] border-l-4 border-[#7E1A8E] text-[#1A1A1A] font-medium border-r border-gray-200 font-karla">
                    {row.appdeploy}
                  </td>

                  <td className="px-6 py-5 text-[#6B7280] border-r border-gray-200 font-karla">
                    {row.applivery}
                  </td>

                  <td className="px-6 py-5 text-[#6B7280] font-karla">
                    {row.appcenter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="grid grid-cols-1 gap-8 lg:hidden font-lora mt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition duration-300"
            >
              <h4 className="text-lg font-bold text-[#3D297A] mb-4 font-karla">
                {item.parameter}
              </h4>

              <div className="space-y-4">
                <div className="p-4 bg-[#F5EDFF] rounded-md border-l-4 border-[#7E1A8E]">
                  <p className="text-[#7E1A8E] font-semibold mb-1 font-karla">
                    AppDeploy (Scotitech)
                  </p>
                  <p className="text-gray-800">{item.appdeploy}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-md border-l-4 border-[#406E8F]/50">
                  <p className="text-[#406E8F] font-semibold mb-1 font-karla">
                    Applivery
                  </p>
                  <p className="text-gray-800">{item.applivery}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-md border-l-4 border-gray-400/40">
                  <p className="text-gray-700 font-semibold mb-1 font-karla">
                    AppCenter (Microsoft)
                  </p>
                  <p className="text-gray-800">{item.appcenter}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-16 hidden lg:block bg-[#F5EDFF] border-l-[8px] border-[#7E1A8E] rounded-xl shadow-md p-10 text-center max-w-5xl mx-auto">
          <p className="text-gray-700 font-lora text-md leading-relaxed">
            “AppDeploy bridges the gap between simplicity and enterprise-grade compliance.
            Built for modern teams who value control, security, and simplicity — all without
            the complexity and cost of MDM platforms.”
          </p>
        </div>

      </div>
    </section>
  );
}
