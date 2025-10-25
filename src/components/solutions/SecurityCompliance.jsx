import {
  ShieldCheck,
  Lock,
  ClipboardList,
  Undo2,
  Download,
} from "lucide-react";

export default function SecurityCompliance() {
  return (
    <section className="bg-[#D4EFFF] py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background faint text */}

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="py-20">
          <div className="relative">
            <p className="absolute text-[4.5rem]  font-semibold text-black/20 font-karla opacity-40 top-1/2 -translate-y-1/2 text-nowrap select-none">
              Security & Compliance
            </p>
            <h2 className="text-3xl font-medium text-black font-lora">
              Security & Compliance
            </h2>
          </div>
          <h3 className="text-4xl font-medium font-lora text-[#197188] mt-8 leading-tight">
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

        {/* Right Section */}
        <div className="space-y-12 text-black hidden min-[1700px]:block">
          {/* Item 1 */}
          <div className="flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative ml-60">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security1.png"
                alt=""
                className="h-12"
              />
            </div>
            <p className="ml-16 text-lg  font-medium">
              Officially supported by Apple
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative ml-40">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security2.png"
                alt=""
                className="h-12"
              />
            </div>
            <p className="ml-16 text-lg  font-medium">
              Easy revocation to prevent misuse
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative ml-20">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security3.png"
                alt=""
                className="h-12"
              />
            </div>
            <p className="ml-16 text-lg  font-medium">
              Audit-ready for compliance teams.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security4.png"
                alt=""
                className="h-12"
              />
            </div>
            <p className="ml-16 text-lg  font-medium">
              Secure code signing & license management.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12 text-black absolute right-0 top-32 w-[45%]">
          {/* Item 1 */}
          <div className="flex items-center bg-white rounded-l-full shadow-md p-2 hover:shadow-lg transition relative ml-60">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security1.png"
                alt=""
                className="h-12"
              />
            </div>
            <p className="ml-16 text-lg  font-medium">
              Officially supported by Apple
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center bg-white rounded-l-full shadow-md p-2 hover:shadow-lg transition relative ml-40">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security2.png"
                alt=""
                className="h-12"
              />
            </div>
            <p className="ml-16 text-lg  font-medium">
              Easy revocation to prevent misuse
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center bg-white rounded-l-full shadow-md p-2 hover:shadow-lg transition relative ml-20">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security3.png"
                alt=""
                className="h-12"
              />
            </div>
            <p className="ml-16 text-lg  font-medium">
              Audit-ready for compliance teams.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex items-center bg-white rounded-l-full shadow-md p-2 hover:shadow-lg transition relative">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security4.png"
                alt=""
                className="h-12"
              />
            </div>
            <p className="ml-16 text-lg  font-medium">
              Secure code signing & license management.
            </p>
          </div>
        </div>
    </section>
  );
}
