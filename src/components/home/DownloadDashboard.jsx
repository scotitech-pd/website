import { Download } from "lucide-react";

export default function DownloadDashboard() {
  const data = [
    {
      title: "AppDeploy",
      subtitle: "IOS Distribution Platform",
      color: "from-blue-50 to-blue-100",
      titleColor: "text-blue",
      titleColor1: "bg-blue",
      items: [
        {
          name: "macOS App",
          details: "v2.1.0 • 45 MB • macOS 11+",
          bg: "bg-blue-100",
          link: "",
        },
        {
          name: "Windows App",
          details: "v2.1.0 • 52 MB • Windows 10+",
          bg: "bg-blue-100",
          link: "",
        },
        {
          name: "CLI Tool",
          details: "v2.1.0 • 12 MB • Cross-platform",
          bg: "bg-blue-100",
          link: "",
        },
      ],
    },
    {
      title: "Opsly",
      subtitle: "SaaS Cost Optimization",
      color: "from-teal-50 to-teal-100",
      titleColor: "text-green",
      titleColor1: "bg-green",
      items: [
        {
          name: "Web Dashboard",
          details: "Latest • N/A • Browser-based",
          bg: "bg-teal-100",
          link: "",
        },
        {
          name: "Desktop App",
          details: "v1.8.2 • 38 MB • Windows/macOS",
          bg: "bg-teal-100",
          link: "",
        },
        {
          name: "Browser Extension",
          details: "v1.5.1 • 2 MB • Chrome/Firefox",
          bg: "bg-teal-100",
          link: "",
        },
      ],
    },
    {
      title: "AI Caption Studio",
      subtitle: "Content Creation Tool",
      color: "from-purple-50 to-purple-100",
      titleColor: "text-main",
      titleColor1: "bg-main",
      items: [
        {
          name: "iOS App",
          details: "v3.2.1 • 28 MB • iOS 14+",
          bg: "bg-purple-100",
          link: "",
        },
        {
          name: "Android App",
          details: "v3.2.0 • 32 MB • Android 8+",
          bg: "bg-purple-100",
          link: "",
        },
        {
          name: "Web App",
          details: "Latest • N/A • Browser-based",
          bg: "bg-purple-100",
          link: "",
        },
      ],
    },
    {
      title: "ClarityPath",
      subtitle: "Private decision-support app",
      color: "from-yellow-50 to-yellow-100",
      titleColor: "text-yellow",
      titleColor1: "bg-yellow",
      items: [
        {
          name: "iOS App",
          details: "v1.4.3 • 42 MB • iOS 15+",
          bg: "bg-yellow-100",
          link: "",
        },
        {
          name: "Android App",
          details: "v1.4.2 • 38 MB • Android 9+",
          bg: "bg-yellow-100",
          link: "",
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-black py-10">
      <div className="font-karla font-medium text-4xl text-center mt-4 min-[570px]:my-4 min-[1000px]:my-10 relative w-full">
        <p className=" min-[565px]:text-[4rem] min-[1000px]:text-[7rem] font-bold text-gray-100 text-nowrap -z-0 w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Product Download
        </p>
        <h2 className="relative z-10">Product Download</h2>
      </div>

      <div className="grid min-[600px]:grid-cols-2 justify-center items-start gap-8 p-8 max-w-7xl mx-auto">
        {data.map((section) => (
          <div
            key={section.title}
            className={`p-6 rounded-2xl shadow-md bg-gradient-to-br border border-black h-full`}
          >
            <h2
              className={`text-4xl font-semibold font-karla mb-3 ${section.titleColor}`}
            >
              {section.title}
            </h2>
            <p className="text-gray-500 font-lora mb-2">{section.subtitle}</p>

            <div className="flex flex-col gap-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className={`flex min-[770px]:justify-between items-center ${item.bg}  rounded-lg px-4 py-3 shadow-sm`}
                >
                  <button
                    className={`flex min-[770px]:hidden mr-3 shrink-0 rounded-full p-2 shadow hover:bg-gray-50 transition ${section.titleColor1}`}
                  >
                    <img
                      src="/images/home/droparrow.png"
                      alt="download"
                      className="size-5"
                    />
                  </button>
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{item.details}</p>
                  </div>
                  <button
                    className={`hidden min-[770px]:flex rounded-full p-2 shadow hover:bg-gray-50 transition ${section.titleColor1}`}
                  >
                    <img
                      src="/images/home/droparrow.png"
                      alt="download"
                      className="size-5"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
