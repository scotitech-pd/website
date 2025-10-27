import { Settings, Shield, Rocket, Users } from "lucide-react";

export default function WhoUsesAppDeploy() {
  return (
    <section className="bg-white py-24 px-6 md:px-20 relative overflow-hidden">
      {/* Heading */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <div className="relative my-8">
              <p className="absolute text-[5rem]  font-semibold text-black/20 font-karla opacity-40 top-1/2 -left-5 -translate-y-1/2 text-nowrap select-none">
                Who It’s For
              </p>
              <p className="text-2xl font-medium text-black font-kayra">
                Who It’s For
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-medium mt-2 text-gray-900">
              Who Uses <span className="text-blue">AppDeploy</span>?
            </h2>
          </div>
        {/* Button */}
        <div className="mt-6">
          <button className="bg-gradient-to-r from-[#3D2C72] to-[#3D758C] text-white font-medium px-6 py-3 rounded-md shadow-md hover:shadow-[0_0_12px_rgba(61,44,114,0.9)] duration-300 transition">
            Get Started Now
          </button>
        </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-16">
          {/* SMEs */}
          <div className="bg-[#CEEAFF] rounded-2xl p-8 shadow-md hover:shadow-xl transition text-left">
            <div className="bg-white p-2.5 rounded-full inline-block shadow-sm">
              <img src="/images/solution/smes.png" alt="" className="size-12" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-blue font-karla">SMEs</h3>
            <p className="mt-3 text-black font-lora leading-relaxed">
              Affordable internal app distribution.
            </p>
          </div>

          {/* Enterprises */}
          <div className="bg-[#DBFFE6] rounded-2xl p-8 shadow-md hover:shadow-xl transition text-left">
            <div className="bg-white p-2.5 rounded-full inline-block shadow-sm">
              <img src="/images/solution/enter.png" alt="" className="size-12" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#35BA54]  font-karla">
              Enterprises
            </h3>
            <p className="mt-3 text-black font-lora leading-relaxed">
              Secure, scalable deployment across thousands of devices.
            </p>
          </div>

          {/* Startups */}
          <div className="bg-[#FFE8D9] rounded-2xl p-8 shadow-md hover:shadow-xl transition text-left">
            <div className="bg-white p-3.5 rounded-full inline-block shadow-sm">
              <img src="/images/solution/startup.png" alt="" className="size-11" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#D39964]  font-karla">
              Startups
            </h3>
            <p className="mt-3 text-black font-lora leading-relaxed">
              Fast, compliant delivery without Apple delays.
            </p>
          </div>

          {/* Agencies */}
          <div className="bg-[#F9D5FF] rounded-2xl p-8 shadow-md hover:shadow-xl transition text-left">
            <div className="bg-white p-2.5 rounded-full inline-block shadow-sm">
              <img src="/images/solution/agencies.png" alt="" className="size-12" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#B954CE]  font-karla">
              Agencies
            </h3>
            <p className="mt-3 text-black font-lora leading-relaxed">
              Simplify app deployment for clients & partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
