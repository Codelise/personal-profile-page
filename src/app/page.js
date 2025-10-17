"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function ProfilePage() {
  const [h1Text, setH1Text] = useState("");
  const [pText, setPText] = useState("");
  const router = useRouter();

  useEffect(() => {
    const h1Text = "Hi, I'm Aeryun";
    const pText =
      "I'm a 3rd-year BSIT student passionate about building web apps that solve real-world problems. I love working with HTML, CSS, JavaScript, and React, and I enjoy bringing ideas to life through clean and user-friendly projects.";

    let i = 0;
    const typeH1 = setInterval(() => {
      setH1Text(h1Text.substring(0, i + 1));
      i++;
      if (i === h1Text.length) {
        clearInterval(typeH1);
        let j = 0;
        const typeP = setInterval(() => {
          setPText(pText.substring(0, j + 1));
          j++;
          if (j === pText.length) clearInterval(typeP);
        }, 40);
      }
    }, 100);
  }, []);

  const showAlert = () => {
    alert("Thanks for visiting my profile! Feel free to explore my work.");
  };

  const viewProject = () => {
    router.push("/about#projects"); // para makapunta dun sa About -> Projects Section
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 sm:px-6 lg:px-50 py-4">
        <section className="w-full my-8 lg:my-16 py-4 lg:py-0 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          <div className="order-1 lg:order-2 bg-white/10 backdrop-blur-md border border-[#3c4253] rounded-2xl p-4 lg:p-6 flex justify-center items-center opacity-0 animate-zoomIn animation-delay-1200 shadow-lg w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[300px]">
            <img
              src="/assets/profile/Caluscos_Aeryun_Clay_2B.png"
              alt="Picture of Me"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="order-2 lg:order-1 flex-1 font-['Bitcount_Prop_Single'] opacity-0 animate-fadeSlideUp animation-delay-500 text-center lg:text-left w-full">
            <h1 className="font-semibold text-primary text-2xl sm:text-3xl lg:text-4xl mb-3 lg:mb-4 leading-tight">
              {h1Text}
              <span className="inline-block animate-blink text-[#00a6d6]">
                |
              </span>
            </h1>
            <p className="w-full lg:w-4/5 my-3 lg:my-4 font-['Montserrat'] text-base sm:text-lg lg:text-xl font-light text-primary leading-relaxed">
              {pText}
              <span className="inline-block animate-blink text-[#00a6d6]">
                |
              </span>
            </p>
            <div className="flex justify-center lg:justify-start mt-6 lg:mt-4">
              <button
                onClick={viewProject}
                className="bg-[#00c4ff] text-lg sm:text-xl text-[#111] border-none rounded-lg py-3 px-6 font-semibold cursor-pointer font-['Bitcount_Prop_Single'] opacity-0 animate-fadeSlideUp animation-delay-2000 hover:bg-[#00a6d6] hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                View Projects
              </button>
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12 mb-8 lg:mb-12">
          <h2 className="text-primary text-2xl lg:text-3xl font-['Bitcount_Prop_Single'] font-medium mb-6 lg:mb-8 px-2 text-center animate-glow">
            Connect With Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-2 sm:px-4 max-w-6xl mx-auto">
            <div className="flex gap-4 rounded-xl project-bg border border-theme p-4 lg:p-6 flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#00c4ff] transition-all duration-300">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-primary text-lg lg:text-xl font-bold">
                  <Link
                    href="https://github.com/Codelise"
                    target="_blank"
                    className="text-primary no-underline hover:text-[#00c4ff] transition-colors cursor-pointer"
                  >
                    GitHub
                  </Link>
                </h2>
                <p className="text-secondary font-['Montserrat'] text-sm lg:text-base font-normal">
                  Check out my projects and code
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl project-bg border border-theme p-4 lg:p-6 flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#00c4ff] transition-all duration-300">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-primary text-lg lg:text-xl font-bold">
                  <Link
                    href="https://www.facebook.com/aer.yun.1"
                    target="_blank"
                    className="text-primary no-underline hover:text-[#00c4ff] transition-colors cursor-pointer"
                  >
                    Facebook
                  </Link>
                </h2>
                <p className="text-secondary font-['Montserrat'] text-sm lg:text-base font-normal">
                  Connect with me on Facebook
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl project-bg border border-theme p-4 lg:p-6 flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#00c4ff] transition-all duration-300">
              <div className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19Zm-61.14,36L86.15,126.35l-49.6-9.73ZM96,200V152.52l24.79,21.74Zm87.53,8L100.85,135.5l119-85.29Z"></path>{" "}
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-primary text-lg lg:text-xl font-bold">
                  <Link
                    href="https://t.me/Codelise3705"
                    target="_blank"
                    className="text-primary no-underline hover:text-[#00c4ff] transition-colors cursor-pointer"
                  >
                    Telegram
                  </Link>
                </h2>
                <p className="text-secondary font-['Montserrat'] text-sm lg:text-base font-normal">
                  Follow me on Telegram for updates and more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
