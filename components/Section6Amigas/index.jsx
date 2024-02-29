import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";

export default function Section6Amigas() {
  return (
    <div className="flex flex-col mx-auto justify-stretch max-w-[1179px] pt-[20px] px-[20px] bg-[#FD4938] lg:hidden ">
      {/* Coluna da esquerda */}

      <h1
        className="text-2xl text-center text-[#fff] font-bold my-4 lg:text-[42px] lg:mt-[40px]"
        style={{ fontFamily: "'Epilogue', serif" }}
      >
        Vá em dupla,<br></br> pague menos
      </h1>

      <p
        className="mb-8 lg:text-[24px] font-normal text-center  text-[#fff]"
        style={{ fontFamily: "'Epilogue', serif" }}
      >
        Se você vai com uma amiga, é possível conseguir melhores condições de pagamento.Toque no botão para falar com nossa equipe e saiba mais!
      </p>

      <a
        className="bg-[#179B7E] justify-center items-center flex lg:mt-[20px]  text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
        href="#oferta"
        
      >
        QUERO MEU INGRESSO
      </a>

      <Image
        className="mx-auto lg:mx-0 lg:w-full lg:mt-[20px]  lg:hidden"
        src={"/imgpgvendas/amigasmobile.webp"}
        width={371}
        height={97}
        alt="Data"
        loading="lazy"
      />
    </div>
  );
}
