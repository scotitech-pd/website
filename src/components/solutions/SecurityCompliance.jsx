export const securityItems = [
  {
    img: "/images/solution/security1.png",
    text: "Officially supported by Apple",
    ml: "ml-60",
  },
  {
    img: "/images/solution/security2.png",
    text: "Easy revocation to prevent misuse",
    ml: "ml-40",
  },
  {
    img: "/images/solution/security3.png",
    text: "Audit-ready for compliance teams.",
    ml: "ml-20",
  },
  {
    img: "/images/solution/security4.png",
    text: "Secure code signing & license management.",
    ml: "",
  },
];
export default function SecurityCompliance() {
  return (
    <section className="bg-[#D4EFFF] py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background faint text */}

      <div className="max-w-7xl mx-auto relative z-10 grid min-[1010px]:grid-cols-2 min-[1010px]:gap-12 items-center">
        {/* Left Section */}
        <div className="py-10 min-[1010px]:py-20">
          <div className="relative ">
            <p className="absolute max-[1210px]:hidden text-[3.3rem]  font-semibold text-black opacity-5 font-karla -left-3 top-1/2 -translate-y-1/2 text-nowrap select-none">
              Security & Compliance
            </p>
            <h2 className="text-2xl min-[850px]:text-3xl font-medium text-black font-lora">
              Security & Compliance
            </h2>
          </div>
          <h3 className="text-3xl min-[850px]:text-4xl font-medium font-lora text-[#197188] mt-1 min-[1200px]:mt-5 leading-tight">
            Built for Security. Backed by Apple.
          </h3>
          <p className="text-[#197188] text-base mt-4 leading-5 font-lora">
            AppDeploy leverages Apple Business Manager for distribution,
            ensuring compliance with Apple’s official guidelines.
          </p>

          <button className="mt-6 bg-white text-sm text-black font-medium font-lora pl-2 pr-5 py-1 rounded-lg shadow-sm transition relative">
            Securely with AppDeploy
            <div className="absolute right-0 top-1/2 group -translate-y-1/2 translate-x-1/2">
              <img
                src="/images/solution/downloadcircle.png"
                alt=""
                className="size-7 group-hover:size-8 duration-300"
              />
            </div>
          </button>
        </div>

        <div className="space-y-10 text-black ml-5 min-[1220px]:hidden mt-8">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative w-full min-[500px]:w-[400px] mx-auto min-[1010px]:w-full "
            >
              <div className="p-3 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
                <img src={item.img} alt="" className="h-10 min-[1130px]:h-12" />
              </div>
              <p className="ml-12 min-[1130px]:ml-16 text-base font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Section */}

        <div className="space-y-12 text-black hidden min-[1700px]:block">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative ${item.ml}`}
            >
              <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
                <img src={item.img} alt="" className="h-12" />
              </div>

              <p className="ml-16 text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12 text-black absolute right-0 top-32 w-[45%] max-[1220px]:hidden min-[1700px]:hidden">
        {/* Item 1 */}
        <div className="flex items-center bg-white rounded-l-full shadow-md p-2 hover:shadow-lg transition relative ml-60">
          <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
            <img src="/images/solution/security1.png" alt="" className="h-12" />
          </div>
          <p className="ml-16 text-lg  font-medium">
            Officially supported by Apple
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex items-center bg-white rounded-l-full shadow-md p-2 hover:shadow-lg transition relative ml-40">
          <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
            <img src="/images/solution/security2.png" alt="" className="h-12" />
          </div>
          <p className="ml-16 text-lg  font-medium">
            Easy revocation to prevent misuse
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex items-center bg-white rounded-l-full shadow-md p-2 hover:shadow-lg transition relative ml-20">
          <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
            <img src="/images/solution/security3.png" alt="" className="h-12" />
          </div>
          <p className="ml-16 text-lg  font-medium">
            Audit-ready for compliance teams.
          </p>
        </div>

        {/* Item 4 */}
        <div className="flex items-center bg-white rounded-l-full shadow-md p-2 hover:shadow-lg transition relative">
          <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
            <img src="/images/solution/security4.png" alt="" className="h-12" />
          </div>
          <p className="ml-16 text-lg  font-medium">
            Secure code signing & license management.
          </p>
        </div>
      </div>
    </section>
  );
}
