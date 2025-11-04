const products = [
  {
    id: 1,
    name: "AppDeploy",
    description:
      "Enterprise iOS distribution without App Store rejections or MDM headaches.",
    icon: "/images/solution/maskimg.png",
    img: "/images/home/appdeploy.png",
    bgColor: "bg-blue",
    textColor: "text-blue",
    buttonColor: "bg-blue",
    buttonText: "Download AppDeploy",
  },
  {
    id: 2,
    name: "Opsly",
    description:
      "Track and optimize SaaS usage. Cut waste, save costs, and scale smarter.",
    icon: "/images/solution/maskimg2.png",
    img: "/images/home/opsly.png",
    bgColor: "bg-green",
    textColor: "text-green",
    buttonColor: "bg-green",
    buttonText: "Join Opsly Waitlist",
  },
  {
    id: 3,
    name: "AI Caption Studio",
    description:
      "AI-powered captions & content tools to boost engagement in seconds.",
    icon: "/images/solution/maskimg3.png",
    img: "/images/home/ai.png",
    bgColor: "bg-main-light",
    textColor: "text-main-light",
    buttonColor: "bg-main-light",
    buttonText: "Try Caption Studio Free",
  },
  {
    id: 4,
    name: "ClarityPath",
    description:
      "ClarityPath provides organizations with a unique tool for personal planning and growth.",
    icon: "/images/solution/maskimg4.png",
    img: "/images/home/Claritypath.png",
    bgColor: "bg-green-light",
    textColor: "text-green-light", // Tailwind doesn't have olive, so customize or use closest match
    buttonColor: "bg-green-light",
    buttonText: "Download ClarityPath App",
  },
];

const ProductShowcase = () => {
  return (
    <section className="bg-gray-100 py-20 px-4 text-center">
      <div className=" max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full">

      <h2 className="text-[20px] text-black font-semibold font-karla mb-2">
        Our Solutions at a Glance
      </h2>
      <h1 className="text-4xl font-bold mb-10 text-black/90 font-karla">
        One <span className="text-main-dark">Company</span>. Four{" "}
        <span className="text-main-dark">Powerful</span> Products.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col max-w-[390px] mx-auto"
          >
            <div className="relative h-36 rounded-xl">
              {/* Blurred background image */}
              <img
                src={product.img}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover filter blur-xs"
              />

              {/* Foreground content */}
              <div className="absolute -bottom-6 left-6 shadow-[0_0_25px_rgba(255,255,255,0.2)] rounded-full">
                <img
                  src={product.icon}
                  alt={`${product.name} Icon`}
                  className="size-20 object-contain"
                />
              </div>
            </div>

            <div className="pt-10 pb-14 px-6 flex-1 flex flex-col items-center text-left relative">
              <h3
                className={`text-lg font-semibold mb-2 w-full font-karla ${product.textColor}`}
              >
                {product.name}
              </h3>
              <p className="text-[13px] text-gray-700 mb-3 w-full">
                {product.description}
              </p>
              <div className="space-y-2  left-4 w-[90%] absolute bottom-2">
                <div className="w-full">
                  <a
                    href="#"
                    className={`inline-block bg-white px-3 font-medium font-lora py-0.5 rounded-lg text-[13px] text-blue-600 shadow-[0_0_25px_rgba(128,128,128,0.4)] `}
                  >
                    Read Details
                  </a>
                  <br />
                </div>
                <div className="flex justify-end w-full">
                  <a
                    href="#"
                    className={`px-3 w-fit py-[4px] text-white/80 text-xs rounded-lg flex  ${product.buttonColor} shadow-[0_0_25px_rgba(128,128,128,0.4)] `}
                  >
                    {product.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default ProductShowcase;
