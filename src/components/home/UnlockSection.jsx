import Link from "next/link";
export default function UnlockSection() {
  return (
    <section
      className="relative bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/home/unlockbg.png')", // replace with your image path
      }}
    >
      <img
        src="/images/home/rectangle.png"
        alt="bg"
        className="absolute bottom-0 h-full right-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20 w-full grid-cols-1 min-[1000px]:grid-cols-[60%_40%] grid items-center justify-between ">
        {/* Left Content */}
        <div className="relative z-10  py-28 w-full">
          <h1 className="text-4xl md:text-5xl font-semibold font mb-5 font-karla">
            Unlock Efficiency
          </h1>
          <h2 className="text-lg md:text-2xl mb-3 font-medium font-karla">
            Drive Innovation with Our Technology Solutions
          </h2>
          <p className="text-white/90 font-lora mb-4 text-lg leading-6 max-w-2xl">
            Team's best work happens when they're focused on innovation, not
            operational hurdles. ScotiTech provides the tools to make that
            happen. Our lean, scalable solutions streamline everything from app
            deployment to content creation, reducing costs and unlocking new
            levels of efficiency for your business.
          </p>

          <p className="text-sm md:text-lg bg-main inline-block px-1 sm:px-4 py-0.5 font-karla rounded">
            ScotiTech: The Power of Lean. The Speed of Growth.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="px-6 py-2 text-lg rounded-full shadow-md transition font-lora text-white bg-gray-700 border border-white">
              Connect With Us
            </Link>
          </div>
        </div>

        {/* Right Stats */}
        <div className=" z-10 h-full w-full  min-[1122px]:block hidden relative">
          <StatCircle
            number="15+"
            label="Years Of Experience"
            className="absolute top-6 right-16 size-40 font-karla hover:scale-101 duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          />
          <StatCircle
            number="120+"
            label="Expert Team"
            className="absolute top-52 right-24 size-36 font-karla hover:scale-101 duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          />
          <StatCircle
            number="1.5k+"
            label="Clients"
            className="font-karla absolute bottom-16 right-64 size-32 hover:scale-101 duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          />
          <StatCircle
            number="5+"
            label="Products"
            className="absolute bottom-4 right-[430px] font-karla size-32 hover:scale-101 duration-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.9)]"
          />
        </div>
      </div>
    </section>
  );
}

function StatCircle({ number, label, className }) {
  return (
    <div
      className={`bg-white text-main rounded-full flex flex-col items-center justify-center absolute ${className}`}
    >
      <span className="text-3xl font-bold">{number}</span>
      <span className="text-sm font-semibold text-center px-2">{label}</span>
    </div>
  );
}
