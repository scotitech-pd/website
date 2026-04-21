"use client";
import React from "react";

export default function CompetitorComparisonPremium() {
  const data = [
    {
      parameter: "Best fit",
      appdeploy:
        "Organisations that want a branded internal app distribution layer built around Apple Business workflows.",
      applivery:
        "Enterprises that already want a heavier MDM-style application management stack.",
      appcenter:
        "Developer teams focused on testing and release pipelines, not employee app delivery.",
    },
    {
      parameter: "Complexity",
      appdeploy:
        "Lower operational complexity, with a more focused app distribution workflow.",
      applivery:
        "Higher – broader device and application management model.",
      appcenter:
        "Medium – requires CI/CD and developer-oriented release process.",
    },
    {
      parameter: "Primary focus",
      appdeploy:
        "Internal app distribution, branded delivery, and rollout visibility.",
      applivery: "Enterprise mobile application management.",
      appcenter: "Build, test, and release workflows for development teams.",
    },
    {
      parameter: "Apple Business workflow fit",
      appdeploy:
        "Positioned as the operational layer around Apple Business based app delivery.",
      applivery: "Part of a larger enterprise mobility stack.",
      appcenter: "Not designed as an Apple Business operational layer.",
    },
    {
      parameter: "End-user experience",
      appdeploy:
        "Branded internal distribution experience for employees, partners, and client teams.",
      applivery: "More admin-centric mobile management experience.",
      appcenter:
        "Developer and testing oriented experience rather than employee distribution.",
    },
  ];

  return (
    <section className="relative bg-white py-20 font-karla text-gray-900">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        <div className="relative mb-14 text-center">
          <h2 className="relative z-10 text-3xl font-bold text-[#3D297A] lg:text-5xl">
            How AppDeploy Stands Apart
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-lg text-gray-600 font-lora">
            A practical look at where AppDeploy sits: more focused than a full
            MDM, and more operationally useful for internal distribution than
            developer-only release tooling.
          </p>

          <span className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none text-[70px] font-bold tracking-wide text-nowrap text-gray-300/20 lg:block">
            Comparison Analysis
          </span>
        </div>

        <div className="hidden overflow-x-auto rounded-2xl border border-gray-200 shadow-lg lg:block">
          <table className="min-w-full border-collapse text-left text-sm font-lora md:text-base">
            <thead>
              <tr className="bg-gradient-to-r from-[#3D297A] to-[#7E1A8E] text-white font-karla">
                <th className="w-[18%] border-r border-white/20 px-6 py-5 font-semibold">
                  Parameter
                </th>
                <th className="relative w-[28%] border-r border-white/20 px-6 py-5 font-semibold">
                  AppDeploy (ScotiTech)
                </th>
                <th className="w-[27%] border-r border-white/20 px-6 py-5 font-semibold">
                  Applivery
                </th>
                <th className="w-[27%] px-6 py-5 font-semibold">
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
                  <td className="border-r border-gray-200 px-6 py-5 font-semibold text-[#3D297A]">
                    {row.parameter}
                  </td>

                  <td className="border-r border-gray-200 border-l-4 border-[#7E1A8E] bg-[#F5EDFF] px-6 py-5 font-medium text-[#1A1A1A]">
                    {row.appdeploy}
                  </td>

                  <td className="border-r border-gray-200 px-6 py-5 text-[#6B7280]">
                    {row.applivery}
                  </td>

                  <td className="px-6 py-5 text-[#6B7280]">{row.appcenter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 font-lora lg:hidden">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition duration-300 hover:shadow-lg"
            >
              <h4 className="mb-4 text-lg font-bold text-[#3D297A] font-karla">
                {item.parameter}
              </h4>

              <div className="space-y-4">
                <div className="rounded-md border-l-4 border-[#7E1A8E] bg-[#F5EDFF] p-4">
                  <p className="mb-1 font-semibold text-[#7E1A8E] font-karla">
                    AppDeploy (ScotiTech)
                  </p>
                  <p className="text-gray-800">{item.appdeploy}</p>
                </div>

                <div className="rounded-md border-l-4 border-[#406E8F]/50 bg-gray-50 p-4">
                  <p className="mb-1 font-semibold text-[#406E8F] font-karla">
                    Applivery
                  </p>
                  <p className="text-gray-800">{item.applivery}</p>
                </div>

                <div className="rounded-md border-l-4 border-gray-400/40 bg-gray-50 p-4">
                  <p className="mb-1 font-semibold text-gray-700 font-karla">
                    AppCenter (Microsoft)
                  </p>
                  <p className="text-gray-800">{item.appcenter}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 hidden max-w-5xl rounded-xl border-l-[8px] border-[#7E1A8E] bg-[#F5EDFF] p-10 text-center shadow-md lg:block">
          <p className="text-md leading-relaxed text-gray-700 font-lora">
            “AppDeploy is designed for organisations that want a clearer
            operational layer around Apple Business based app delivery without
            defaulting every internal rollout to a full MDM programme.”
          </p>
        </div>
      </div>
    </section>
  );
}
