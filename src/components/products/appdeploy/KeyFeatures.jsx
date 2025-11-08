const features = [
  {
    img: "/images/products/appdeploy/oneclick.png",
    title: "One-Click Installation:",
    description:
      "Employees receive a simple link to install the app instantly. No confusing instructions or technical skills are required.",
  },
  {
    img: "/images/products/appdeploy/uploads.png",
    title: "Direct .IPA Uploads:",
    description:
      "Simply drag and drop your IPA file into our dashboard. We handle the complex processes behind the scenes.",
  },
  {
    img: "/images/products/appdeploy/analytics.png",
    title: "Real-Time Analytics:",
    description:
      "Track every installation in real-time. See who has downloaded the app and manage versions from one central hub.",
  },
  {
    img: "/images/products/appdeploy/redemption.png",
    title: "Secure ABM Redemption:",
    description:
      "We leverage Apple Business Manager (ABM) to create secure, private distribution links, ensuring your app remains compliant and internal.",
  },
  {
    img: "/images/products/appdeploy/required.png",
    title: "No MDM Required:",
    description:
      "Launch your internal apps without forcing employees to enroll their devices in a restrictive MDM profile, simplifying your workflow.",
  },
  {
    img: "/images/products/appdeploy/scalable.png",
    title: "Scalable by Design:",
    description:
      "Whether you're deploying to a team of 10 or a workforce of 10,000, AppDeploy scales effortlessly with your business needs.",
  },
];

export default function KeyFeatures() {
  return (
  
    <section className="relative bg-gradient-to-r from-[#3D297A] to-[#406E8F] text-white py-16  overflow-hidden">
     <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 ">
      <div className="text-3xl lg:text-5xl font-semibold relative text-center font-karla lg:mb-6 mb-2">
        Key Features
        <p className="absolute hidden lg:block text-[83px] opacity-10 top-1/2  font-karla -translate-1/2 left-1/2 text-nowrap">
          Key Features
        </p>
      </div>


      <div className="relative z-10 text-center space-y-2 font-lora">
        <h3 className="lg:text-2xl text-xl text-[#EABFFF]  lg:font-semibold font-karla text-nowrap lg:mb-2">
          Powerful Features, Simple Interface
        </h3>
        <p className="max-w-3xl mx-auto lg:text-lg text-md">
          Everything you need for seamless, secure, and scalable app deployment.
        </p>
      </div>

      {/* Features grid */}
      <div className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 font-lora rounded-xl shadow-xl py-8 px-3 flex flex-col items-center text-center relative border-b-[12px] border-[#7E1A8E]/50"
          >
            {/* Icon circle */}
            <div className="absolute -top-10 bg-gray-100 w-20 h-20 flex items-center justify-center rounded-full border-[6px] border-gray-200 hover:border-[#A52EB8] hover:shadow-[0_0_10px_rgba(140,82,255,0.9)] duration-400 shadow-md">
              <img src={feature.img} alt="" className="size-10" />
            </div>

            <div className="mt-5">
              <h4 className="font-semibold text-main-dark mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-800 text-sm leading-[18px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
