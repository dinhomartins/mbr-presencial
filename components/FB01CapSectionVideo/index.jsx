import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";
import CarrosselSection from "../CarrosselSection";



import BtnWhatsMeteoro from '../BtnWhatsMeteoro'

export default function Fb01CapSectionVideo() {
  return (
    <div className="bg-black lg:-mt-[40px] lg:py-[60px] py-[40px]">
      <Container>
        {/* Fim primeira seção */}
        <div className="flex max-w-[1196px] mx-auto flex-col lg:flex-col  items-center justify-center  ">
          <div>
            <h2
              className="text-xl font-bold hidden lg:block text-center text-[#fff] leading-[36px]  lg:text-[32px]   "
              style={{ fontFamily: "'Epilogue', serif" }}
            >
              <span className="font-normal">
                {" "}
                Um pouco do que você vai viver na imersão  <br></br>
              </span>
               que vai ativar sua versão Bem Resolvida
            </h2>

            <h2
              className="text-[24px] font-bold text-center lg:hidden text-[#fff] leading-[28px]  lg:text-[32px]   "
              style={{ fontFamily: "'Epilogue', serif" }}
            >
              <span className="font-normal">
                {" "}
                Um pouco do que você vai viver na imersão  {" "}
              </span>
              que vai ativar sua versão Bem Resolvida
            </h2>
          </div>

          <div className="">
            <div className="lg:mt-6 video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/J9IpA6m7ebI"
                title="Vigor Masculino"
                frameBorder="0"
                allowFullScreen
                className="mx-auto lg:mx-0 rounded-xl w-[350px]  h-[220px] lg:w-[956px] lg:h-[550px] mt-[10px] lg:-mt-[10px]"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="lg:flex flex-row"></div>

          <div className="flex ">
            <div className="flex  lg:flex-row flex-col lg:w-[956px] justify-center lg:mt-[20px]">
              <Image
                className="mx-auto lg:mx-0 w-[350px] lg:w-[355px] lg:h-[52px] mt-[10px] "
                src={"/imgpgvendas/valorfaixa.webp"}
                width={526}
                height={72}
                alt="Bem resolvida"
                loading="lazy"
              />
{/* 
              <a
                className="bg-[#179B7E] justify-center lg:mb-[0] mt-[10px] text-[#fff] lg:block md:block justify-center items-center flex  text-center py-[10px] px-1 rounded-[4px] max-w-[550px] lg:h-[64px] w-full  text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] lg:w-full md:w-[500px] w-[146px] font-semibold cursor-pointer"
                href="#oferta"
              >
                QUERO SER BEM RESOLVIDA
              </a> */}
            </div>
          </div>
        </div>
        <div className=" flex">
            <div className="flex mx-auto w-full justify-center">
            <BtnWhatsMeteoro />
            </div>
        </div>
      </Container>
    </div>
  );
}
