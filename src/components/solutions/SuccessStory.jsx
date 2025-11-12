"use client";
import { motion } from "framer-motion";

export default function SuccessStory() {
  return (
    <section className="relative bg-white py-8 lg:py-20 font-karla text-gray-900">
      <div className="max-w-8xl mx-auto px-5 sm:px-10 md:px-20">
        {/* Heading */}
        <div className="text-center mb-14 relative">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#3D297A] relative z-10">
            From Frustration to Breakthrough
          </h2>
          <p className="mt-3 text-gray-600 font-lora text-lg max-w-3xl mx-auto">
            A true story of resilience, technical depth, and the moment
            AppDeploy’s foundation was built.
          </p>
          <span className="absolute text-nowrap hidden lg:block text-[90px] font-bold text-gray-300/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            Success Story
          </span>
        </div>

        {/* Story content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-gray-100 shadow-md py-4 lg:py-7 px-8 md:px-10 lg:px-14 relative z-10 font-lora"
        >
          <h3 className="text-2xl font-semibold text-[#3D297A] mb-6 font-karla text-center lg:text-left">
            The Journey — Swift’s Android Breakthrough
          </h3>

          <div className="space-y-6 text-gray-700 text-[15px] leading-relaxed">
            <p>
              At first, it was chaos. I tried to cross-compile Swift manually
              using old snapshots, custom paths, and partial NDK integrations.
              Every step ended with the same frustrating error:
              <span className="italic text-[#7E1A8E]">
                {" "}
                “unable to load standard library for target
                aarch64-unknown-linux-android33.”
              </span>
            </p>

            <p>
              After hours of debugging paths, re-linking libraries, and reading
              incomplete GitHub threads, I almost gave up. Most examples were
              outdated, and official builds unstable. There were moments when I
              thought,{" "}
              <strong>“Maybe Swift just isn’t meant for Android yet.”</strong>
            </p>

            <p>
              Then came the breakthrough — the official Swift SDK for Android,
              backed by the newly formed Android Workgroup. For the first time,
              it wasn’t an experiment but a structured approach by Swift.org.
            </p>

            <div className="bg-[#F9F6FF] border-l-4 border-[#7E1A8E] p-5 rounded-md text-sm">
              <p className="text-gray-800 font-mono text-xs whitespace-pre-wrap">
                {`swiftly install main-snapshot-2025-10-16
swiftly use main-snapshot-2025-10-16
swift sdk install https://lnkd.in/eD9vAY-A

export ANDROID_NDK_HOME=~/android-ndk/android-ndk-r27d
./setup-android-sdk.sh

swift package init --type executable
swift build --swift-sdk aarch64-unknown-linux-android28 --static-swift-stdlib`}
              </p>
              <p className="text-xs text-gray-600 mt-2">
                (Those lines marked the moment Swift officially compiled for
                Android.)
              </p>
            </div>

            <p>
              The success message confirmed the setup:
              <span className="italic text-[#406E8F]">
                “success: ndk-sysroot linked to Android NDK…”
              </span>
              That was the moment of realization — the future of cross-platform
              Swift had arrived.
            </p>

            <blockquote className="border-l-4 border-[#7E1A8E] bg-[#F5EDFF] p-6 rounded-lg italic text-gray-800">
              “What started as a random experiment turned into a genuine
              breakthrough — Swift can now build for Android officially. It’s
              still early, but this opens a whole new chapter for cross-platform
              Swift development.”
            </blockquote>
          </div>

          {/* Images */}
          <div className="mt-10 lg:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 hidden  ">
            <img
              src="/images/products/appdeploy/1.jpeg"
              alt="Code setup"
              className="rounded-xl object-center  w-full shadow-sm hover:scale-[1.02] transition"
            />
            <img
              src="/images/products/appdeploy/2.jpeg"
              alt="Console output"
              className="rounded-xl object-center  w-full shadow-sm hover:scale-[1.02] transition"
            />
            <img
              src="/images/products/appdeploy/3.jpeg"
              alt="App screenshot"
              className="rounded-xl object-center  w-full shadow-sm hover:scale-[1.02] transition"
            />
            <img
              src="/images/products/appdeploy/4.jpeg"
              alt="Team working"
              className="rounded-xl object-center w-full shadow-sm hover:scale-[1.02] transition"
            />
          </div>
        </motion.div>

        {/* Quote */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto bg-[#F5EDFF] border-l-[8px] border-[#7E1A8E] rounded-xl shadow-md p-10 font-lora"
        >
          <p className="text-gray-700 text-lg italic">
            “Every challenge we faced shaped AppDeploy’s DNA — to simplify deployment and empower developers who refuse to stop innovating.”
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
