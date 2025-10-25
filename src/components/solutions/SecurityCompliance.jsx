import {
  ShieldCheck,
  Lock,
  ClipboardList,
  Undo2,
  Download,
} from "lucide-react";

export default function SecurityCompliance() {
  return (
    <section className="bg-[#d9edf7] py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Background faint text */}
      <h1 className="absolute text-[8rem]  font-bold text-[#c6e2ef] opacity-40 top-10 left-10 select-none">
        Security & Compliance
      </h1>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl  font-semibold text-[#013a4a]">
            Security & Compliance
          </h2>
          <h3 className="text-4xl md:text-5xl  font-bold text-[#165a68] mt-4 leading-tight">
            Built for Security. Backed by Apple.
          </h3>
          <p className="text-[#1a5a68] text-lg mt-6 leading-relaxed">
            AppDeploy leverages Apple Business Manager for distribution,
            ensuring compliance with Apple’s official guidelines.
          </p>

          <button className="mt-8 bg-white text-[#1a5a68] font-medium px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition flex items-center gap-2">
            Securely with AppDeploy
            <span className="bg-blue-600 text-white rounded-full p-1">
              <Download size={18} />
            </span>
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-12 text-black">
          {/* Item 1 */}
          <div className="flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative">
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
          <div className="flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative">
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
          <div className="flex items-center bg-white rounded-full shadow-md p-2 hover:shadow-lg transition relative">
            <div className="p-4 rounded-full absolute bg-white -left-5 shadow-[0_0_10px_rgba(100,113,113,0.9)]">
              <img
                src="/images/solution/security3.png"
                alt=""
                className="h-10"
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
    </section>
  );
}
