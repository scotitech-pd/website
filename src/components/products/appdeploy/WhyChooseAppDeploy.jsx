import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function WhyChooseAppDeploy() {
  const features = [
    {
      title: "Slash Your Costs:",
      desc: "Drastically reduce your expenses. AppDeploy costs up to 80% less than leading MDM providers like Jamf or Intune, potentially saving your company over $60,000 annually.",
    },
    {
      title: "Use a private distribution workflow instead of public App Store release:",
      desc: "Avoid the public App Store process for your internal tools. Deploy updates and new apps on your own schedule securely.",
    },
    {
      title: "Eliminate Technical Hurdles:",
      desc: "Our platform is built for clarity. You don’t need a dedicated IT expert to manage deployments. If you can upload a file, you can use AppDeploy.",
    },
    {
      title: "Accelerate Your Workflow:",
      desc: "From startups needing to test a beta build to enterprises deploying a new internal tool, AppDeploy gets your application where it needs to be—now.",
    },
    {
      title: "Share with Ease:",
      desc: "From Employees to Customers sharing is easy with AppDeploy.",
    },
  ];

  return (
    <section className="relative bg-[#F9F9FB] py-10 lg:py-16 overflow-hidden font-karla">
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        
        {/* Top Heading */}
        <div className="mb-16">
          <h2 className="lg:text-5xl text-3xl font-bold text-[#3D297A] mb-4">
            Why Choose AppDeploy?
          </h2>
          <p className="lg:text-xl text-lg text-gray-600 font-lora max-w-2xl">
            Experience the most efficient and strategic way to manage internal iOS distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Feature Groups (Spans 5 columns) */}
          <div className="lg:col-span-5 space-y-8 relative">
            {/* Vertical Line Connector */}
            <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#7E1A8E]/40 via-[#3D297A]/20 to-transparent hidden lg:block" />

            {features.map((f, i) => (
              <div key={i} className="flex gap-6 relative group">
                <div className="flex-shrink-0 relative z-10">
                  <div className="bg-white border-4 border-[#3D297A] rounded-2xl size-14 flex items-center justify-center group-hover:bg-[#3D297A] transition-colors duration-300">
                    <img
                      src="/images/products/appdeploy/logoicon.png"
                      alt=""
                      className="size-6 group-hover:invert transition-all"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3D297A] mb-2 leading-tight">
                    {f.title}
                  </h4>
                  <p className="text-gray-600 text-sm lg:text-base font-lora leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Laptop Mockup Showcase (Spans 7 columns) */}
          <div className="lg:col-span-7 relative pt-10 lg:pt-0">
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-[#7E1A8E]/5 rounded-[40px] blur-2xl group-hover:bg-[#7E1A8E]/10 transition-all duration-500" />
              
              <div className="relative">
                <img
                  src="/images/products/appdeploy/phoneimg.png"
                  alt="AppDeploy Dashboard"
                  className="rounded-2xl w-full h-auto shadow-[0_30px_60px_rgba(61,41,122,0.15)] border border-gray-100"
                />
                
                {/* Floating Branding / CTA Badge */}
                <div className="absolute -bottom-16 -left-10 hidden lg:block w-[55%]">
                  <div className="relative p-2 pb-6 bg-white rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/images/products/appdeploy/logo.png"
                      alt="appdeploy logo"
                      className="w-full h-auto rounded-2xl"
                    />
                    <Link 
                      href="https://appdeploy.scotitech.com/request-access" 
                      target="_blank"
                      className="absolute bottom-[-8px] -right-8 bg-[#3D297A] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#7E1A8E] transition-all whitespace-nowrap shadow-xl border-2 border-white"
                    >
                      Access Dashboard
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
