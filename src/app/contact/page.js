"use client";
import { useState } from "react";

import Link from "next/link";
import Footer from "@/components/Footer";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const showAlert = () => {
    alert("Contact form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-8 py-4">
        <section className="py-10 px-5">
          <h2 className="text-white text-3xl font-medium px-4  mb-8 animate-glow">
            CONTACT ME
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap  gap-4 max-w-[480px]">
                <div className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium pb-2">Name</p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-0 border-none bg-[#292d38] h-14 placeholder:text-[#9da4b8] p-4 text-base font-normal leading-normal"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 max-w-[480px]">
                <div className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium pb-2">Email</p>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-0 border-none bg-[#292d38] h-14 placeholder:text-[#9da4b8] p-4 text-base font-normal leading-normal"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 max-w-[480px]">
                <div className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium pb-2">
                    Message
                  </p>
                  <textarea
                    placeholder="Your Message"
                    className="w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-none focus:ring-0 border-none bg-[#292d38] min-h-36 placeholder:text-[#9da4b8] p-4 text-base font-normal leading-normal"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="py-4">
                <button
                  type="submit"
                  onClick={showAlert}
                  className="min-w-20 max-w-[480px] cursor-pointer flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#00c4ff] text-[#111] text-sm font-semibold leading-normal tracking-wide w-full hover:bg-[#00a6d6] transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-white text-3xl font-medium px-4 mb-6 animate-glow">
            FIND ME ON
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 max-w-screen mx-auto">
            <div className="flex gap-3 rounded-lg bg-[#373b47] border border-[#3c4253] p-4 flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#00c4ff] transition-all">
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-2xl font-bold">
                  <Link
                    href="https://github.com/Codelise"
                    target="_blank"
                    className="text-white no-underline hover:text-[#00c4ff] transition-colors"
                  >
                    GitHub
                  </Link>
                </h2>
                <p className="text-white font-['Montserrat'] text-sm">
                  @Codelise
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg bg-[#373b47] border border-[#3c4253] p-4 flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#00c4ff] transition-all">
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-2xl font-bold">
                  <Link
                    href="https://www.facebook.com/aer.yun.1"
                    target="_blank"
                    className="text-white no-underline hover:text-[#00c4ff] transition-colors"
                  >
                    Facebook
                  </Link>
                </h2>
                <p className="text-white font-['Montserrat'] text-sm">
                  Aeryun Caluscos
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-lg bg-[#373b47] border border-[#3c4253] p-4 flex-col hover:-translate-y-1 hover:shadow-xl hover:border-[#00c4ff] transition-all">
              <div className="flex flex-col gap-1">
                <h2 className="text-white text-2xl font-bold">
                  <Link
                    href="https://t.me/Codelise3705"
                    target="_blank"
                    className="text-white no-underline hover:text-[#00c4ff] transition-colors"
                  >
                    Telegram
                  </Link>
                </h2>
                <p className="text-white font-['Montserrat'] text-sm">
                  Aeryun Caluscos
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#1b1f29] p-8 rounded-2xl text-center text-white max-w-md w-full mx-4 animate-slideDown shadow-xl">
            <h2 className="text-[#00c4ff] mb-4 text-2xl">Sent Successfully!</h2>
            <p className="mb-4">
              Thank you for your message. I'll get back to you soon.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#00c4ff] text-[#111] py-3 px-6 border-none rounded-lg font-semibold mt-4 cursor-pointer hover:bg-[#00a6d6] transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
