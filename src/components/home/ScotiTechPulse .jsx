import { Rocket } from "lucide-react";

const ScotiTechPulse = () => {
  return (
    <section
      className="relative bg-[#f8fafc] py-16"
      style={{
        backgroundImage: "url('/images/home/pulsebg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-karla font-semibold text-gray-900">
            The ScotiTech Pulse
          </h2>
          <p className="mt-3 text-xl md:text-2xl text-black font-lora">
            Stay connected with our latest{" "}
            <span className="text-main-dark font-medium">innovations</span>,{" "}
            <span className="text-main-dark font-medium">insights</span>, and{" "}
            <span className="text-main-dark font-medium">community events</span>
            .
          </p>
        </div>

        <div className="grid min-[990px]:grid-cols-[45%_53%] lg:w-[88%] mx-auto gap-6 text-black">
          {/* Launch Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md ">
            <img
              src="/images/home/rocket.png"
              alt="Launch Your Future"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 sm:p-10">
              <h3 className="text-xl min-[650px]:text-2xl font-semibold mb-2 font-karla">
                ClarityPath Beta: <br />
                The Future of Secure App Delivery
              </h3>
              <p className="text-black/90 text-lg mb-4 font-lora">
                Our revolutionary decision. Get exclusive early access.
              </p>
              <div className="w-full flex justify-end min-[990px]:justify-start">
                <button className="bg-blue flex text-white px-6 font-karla cursor-pointer sm:px-12 py-1.5 sm:py-2 rounded-full text-md transition items-center justify-center font-medium gap-2 group">
                  <Rocket className="m-1 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Join the Waitlist
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Webinar Card */}
            <div className="bg-white rounded-xl  drop-shadow-md shadow-md p-6">
              <div className="flex justify-between items-center mb-2 text-white">
                <span className="bg-[#BCB96A] px-4 py-1.5 rounded-full text-[12px] sm:text-[14px] flex gap-1.5 sm:gap-3 items-center font-bold font-karla">
                  <img
                    src="/images/home/eventicon.png"
                    alt="eventicon"
                    className="size-5 sm:size-7"
                  />
                  EVENT
                </span>
                <span className="text-sm text-gray-500 font-lora">
                  07/Oct/2025
                </span>
              </div>
              <h4 className="text-xl min-[650px]:text-2xl font-semibold font-karla mb-2 mt-4 ">
                Webinar: Secure App Deployment 2025
              </h4>
              <p className="text-gray-600 mb-4 text-md font-lora">
                Learn best practices for internal app distribution with
                AppDeploy
              </p>
              <div className="w-full flex justify-end">
                <button className="relative overflow-hidden border border-blue cursor-pointer text-blue-700 font-lora px-5 py-2 rounded-full text-md transition-all duration-300 group">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Register Now
                  </span>

                  {/* fill layer */}
                  <span className="absolute inset-0 bg-blue scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></span>
                </button>
              </div>
            </div>

            {/* Product Update Card */}
            <div className="bg-white rounded-xl drop-shadow-md  shadow-md p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-[#FFA662] font-karla px-4 py-1.5 items-center rounded-full text-[12px] sm:text-[14px] flex gap-1.5 sm:gap-3 font-bold text-white  ">
                  <img
                    src="/images/home/boxicon.png"
                    alt="eventicon"
                    className="size-5 sm:size-7"
                  />
                  PRODUCT UPDATE
                </span>
                <span className="text-sm text-gray-500 font-lora ">
                  07/Oct/2025
                </span>
              </div>
              <h4 className="text-xl min-[650px]:text-2xl font-semibold font-karla mb-2 ">
                Opsly Early Access Optimize Your SaaS Stack
              </h4>
              <p className="text-gray-600 mb-4 text-md font-lora  ">
                Our new SASS optimization tool, now open for limited beta
                testing
              </p>
              <div className="w-full flex justify-end">
                <button className="relative overflow-hidden border border-blue cursor-pointer text-blue-700 font-lora px-5 py-2 rounded-full text-md transition-all duration-300 group">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Apply Now
                  </span>

                  {/* fill layer */}
                  <span className="absolute inset-0 bg-blue scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScotiTechPulse;
