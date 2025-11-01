const ScotiTechPulse = () => {
  return (
    <section
      className="relative bg-[#f8fafc] py-16 px-6 lg:px-24"
      style={{
        backgroundImage: "url('/images/home/pulsebg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-karla font-semibold text-gray-900">
            The ScotiTech Pulse
          </h2>
          <p className="mt-3 text-xl text-black font-lora">
            Stay connected with our latest{" "}
            <span className="text-purple-600 font-medium">innovations</span>,{" "}
            <span className="text-purple-600 font-medium">insights</span>, and{" "}
            <span className="text-purple-600 font-medium">
              community events
            </span>
            .
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:w-[80%] mx-auto gap-6 text-black">
          {/* Launch Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md ">
            <img
              src="/images/home/rocket.png"
              alt="Launch Your Future"
              className="w-full h-56 object-cover"
            />
            <div className="p-10">
              <h3 className="text-2xl font-semibold mb-2 font-lora">
                ClarityPath Beta: <br />
                The Future of Secure App Delivery
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our revolutionary decision. Get exclusive early access.
              </p>
              <button className="bg-blue text-white px-4 py-2 rounded-full text-sm flex transition items-center justify-center font-medium">
                <img
                  src="/images/home/rocketicon.png"
                  alt="rocketicon"
                  className="size-4 mr-1"
                />
                Join the Waitlist
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Webinar Card */}
            <div className="bg-white rounded-xl  drop-shadow-md shadow-md p-6">
              <div className="flex justify-between items-center mb-2 text-white">
                <span className="bg-yellow/90 px-4 py-1.5 rounded-full text-[13px] flex gap-3 font-bold">
                  <img
                    src="/images/home/eventicon.png"
                    alt="eventicon"
                    className="size-5 opacity-50"
                  />
                  EVENT
                </span>
                <span className="text-xs text-gray-500">07/Oct/2025</span>
              </div>
              <h4 className="text-xl font-semibold font-lora mb-2 mt-4">
                Webinar: Secure App Deployment 2025
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                Learn best practices for internal app distribution with
                AppDeploy
              </p>
              <div className="w-full flex justify-end">
                <button className="border border-blue text-blue font-lora px-4 py-1 rounded-full text-sm  transition">
                  Register Now
                </button>
              </div>
            </div>

            {/* Product Update Card */}
            <div className="bg-white rounded-xl drop-shadow-md  shadow-md p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-orange/90 px-4 py-1.5 rounded-full text-[13px] flex gap-3 font-bold text-white">
                  <img
                    src="/images/home/boxicon.png"
                    alt="eventicon"
                    className="size-5"
                  />
                  PRODUCT UPDATE
                </span>
                <span className="text-xs text-gray-500">07/Oct/2025</span>
              </div>
              <h4 className="text-xl font-semibold font-lora mb-2">
                Opsly Early Access Optimize Your SaaS Stack
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                Our new SASS optimization tool, now open for limited beta
                testing
              </p>
              <div className="w-full flex justify-end">
                <button className="border border-blue text-blue font-lora px-4 py-1 rounded-full text-sm  transition">
                  Apply Now
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
