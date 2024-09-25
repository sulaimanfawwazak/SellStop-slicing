"use client";

import { FAQData } from "@/data/FAQ";
import { featuresData } from "@/data/Features";
import Image from "next/image";
import { useState } from "react";
import { FiArrowRight, FiChevronDown, FiChevronUp, FiDownload, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Home() {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle FAQ visibility
  const toggleFAQ = (id) => {
    if (openFAQ === id) {
      setOpenFAQ(null); //Close the currently open FAQ
    }
    else {
      setOpenFAQ(id);
    }
  };


  return <main>
    {/* Navbar */}
    <header className="fixed inset-0 flex mx-auto h-[80px] py-[19px] px-[50px] items-center justify-between z-10 bg-dark border-b-[1px] border-b-light w-screen">
      <div className="font-semibold text-[28px]">SellSpot</div>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          <li>Home</li>
          <li>Features</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <button className="btn">
        Start Now
        <FiArrowRight size={20}/>
      </button>
    </header>
    {/* End of Navbar */}


    {/* Hero Section */}
    <section className="container mx-auto pt-[80px] h-screen grid place-content-center w-screen">
      <div className="max-w-2xl text-center flex flex-col items-center justify-center gap-[40px]  ">
        <h1 className="text-[60px] font-bold leading-tight">
          <span className="text-primary"
            >Revolutionize </span>
          Your Shopping Experience
        </h1>
        <p>
          Wellcome to SellSpot, where bying and seeling meet seamless convenience on your fingertips. Exlore a world of endless possibilities today!
        </p>
        <button className="btn">
          Start For Free
          <FiArrowRight className="" size={20}/>
        </button>
      </div>
    </section>
    {/* End of Hero Section */}


    {/* Motto Section */}
    <section className="container mx-auto max-w-2xl pb-[80px] h-screen">
      <div className="relative w-[730px] h-[355px] mx-auto mb-[80px]">
        <Image src="/smartphone.png" alt="Smartphone Illustration" fill/>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <h2 className="mb-[20px] text-[36px] font-medium">Discover, Connect, Transact</h2>
        <p className="mb-[40px]">
          <span className="font-semibold">SellSpot </span>is more than just an app; it's your gateway to a vibrant marketplace community where buyers and sellers converge, creating a dynamic ecosystem of exchange.
        </p>
        <button className="btn">
          Download Now
          <FiDownload size={18}/>
        </button>
      </div>
    </section>
    {/* End of Motto Section */}


    {/* Feature Section */}
    <section className="container mx-auto h-screen my-[80px]">
      <div className="max-w-xl mx-auto">
        <h2 className="font-bold text-[36px] text-center mb-[26px] ">Why SellSpot?</h2>
        <p className="text-center">
          Choose SpellSpot for a seamsless, enjoyable, and rewarding marketplace experience unlike any other.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-[70px] grid grid-cols-3 gap-12">
        {/* Pokoknya ini kita ngemap array yang ada di data/featuresData */}
        {featuresData.map(feature => (
          <div key={feature.id} className="text-left bg-gradient-to-b from-[#242333] to-[#010014] border border-[#3F3E4E] rounded-xl p-[25px]">
            <div className="bg-gray w-fit p-[10px] rounded-md mb-[18px]">
              {feature.icon}
            </div>
            <h3 className="text-[18px] font-semibold">
              {feature.title}
            </h3>
            <p>
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      {/* End of Cards*/}

    </section>
    {/* End of Features Section */}

    {/* FAQ Section */}
    <section className="container mx-auto h-screen my-[80px]">
      <div className="max-w-xl mx-auto">
        <h2 className="font-bold text-[36px] text-center mb-[26px] ">Frequently Asked Questions</h2>
        <p className="text-center">
          Do you need some help with something or do you have questions on some features?
        </p>
      </div>

      {/* Accordions */}
      {/* <div className="mt-[50px] grid grid-cols-1 gap-2"> */}
      <div className="mt-[50px] max-w-2xl mx-auto">
        {FAQData.map(faq => (
          <div key={faq.id} className="mb-[20px]">
            <div 
              className="flex justify-between items-center bg-gradient-to-b from-[#242333] to-[#010014] border border-[#3F3E4E] rounded-xl p-[20px] cursor-pointer container mx-auto"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3 className="text-[18px] font-semibold">
                {faq.question}
              </h3>
              <span className="">
                {openFAQ === faq.id ? <FiChevronUp size={20}/> : <FiChevronDown size={20}/>}
              </span>
            </div>

            {/* FAQ Answer */}
            {openFAQ === faq.id && (
              <div className="bg-[#3F3E4E] p-[20px] mt-[10px] rounded-xl">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    {/* End of FAQ Section */}

    {/* Footer Section */}
    <footer className="container mx-auto py-[80px]">
      <hr className="mb-[22px]"/>
      <div className="flex justify-between items-center">
        <p>{new Date().getFullYear()} SellSpot. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 text-xl">
          <FiTwitter className="cursor-pointer"/>
          <FiInstagram className="cursor-pointer"/>
          <FiYoutube className="cursor-pointer"/>
        </div>
      </div>
    </footer>
    {/* End of Footer Section */}

  </main>
}