"use client";
import React from "react";

const PricingSection = () => {
  const plans = [
    {
      color: "from-green-400 to-green-600",
      name: "Starter Plan",
      price: "£15 / month or £120 / year",
      bestFor: "Independent developers and small startups",
      includes: [
        "Upload up to 3 apps (iOS & Android)",
        "Up to 100 installs per month",
        "Secure HTTPS hosting",
        "Basic dashboard & support",
        "Compliance-friendly setup",
      ],
      tip: "Perfect for testing or small team use.",
    },
    {
      color: "from-blue-400 to-blue-600",
      name: "Pro Plan",
      price: "£39 / month or £360 / year",
      bestFor: "SMEs, schools, and agencies",
      includes: [
        "Upload up to 10 apps",
        "Up to 1,000 installs per month",
        "App analytics dashboard",
        "Email & chat support",
        "Team access (3 users)",
      ],
      tip: "Ideal for growing teams and internal app management.",
    },
    {
      color: "from-gray-700 to-gray-900",
      name: "Enterprise Plan",
      price: "£99 / month or £950 / year",
      bestFor: "Larger organisations and enterprises",
      includes: [
        "Unlimited apps & installs",
        "Custom domain & branding",
        "Advanced analytics",
        "Priority 24/7 support",
        "Dedicated onboarding & integration help",
      ],
      tip: "For organisations needing full control, scale, and compliance.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-8xl mx-auto px-5 min-[500px]:px-10 md:px-20">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-karla font-bold">
            AppDeploy Pricing Plans
          </h2>
          <p className="text-gray-300 text-base md:text-lg mt-4 font-lora max-w-3xl mx-auto">
            Choose a plan that fits your needs. All plans include secure cloud
            hosting, Apple Business Manager (ABM) integration for iOS, direct
            APK hosting for Android, and GDPR-compliant data protection.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-[1.02] transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-10 rounded-2xl`}
              ></div>

              <div className="relative z-10 text-left">
                <h3 className="text-2xl font-karla font-bold mb-1">
                  {plan.name}
                </h3>
                <p className="text-gray-300 font-lora mb-4">{plan.price}</p>
                <p className="text-sm font-semibold text-[#FFF600] mb-3">
                  Best for: {plan.bestFor}
                </p>
                <ul className="space-y-2 mb-4 text-gray-200 text-sm font-lora">
                  {plan.includes.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <p className="italic text-gray-400 text-sm">{plan.tip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Planned Add-ons */}
        <div className="relative z-10 mt-14 text-center text-white font-lora">
          <h3 className="text-2xl font-semibold mb-3">Planned Add-ons</h3>
          <ul className="space-y-1 text-gray-300 text-sm md:text-base">
            <li>• Automated App Store & Play Store compliance reports</li>
            <li>• AppDeploy Cloud white-label version</li>
            <li>• App usage analytics and version tracking</li>
          </ul>
        </div>

        {/* Custom Solutions */}
        <div className="relative z-10 mt-14 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-white">Need something custom?</h3>
          <p className="text-gray-300 font-lora text-sm md:text-base mb-4 max-w-2xl mx-auto">
            We also offer tailored enterprise packages and consulting for
            organisations needing secure private app deployment solutions.
          </p>
          <a
            href="mailto:support@appdeploy.co"
            className="inline-block bg-[#FFF600] text-black font-karla font-semibold px-6 py-3 rounded-full hover:bg-white transition"
          >
            Contact: support@appdeploy.co
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
