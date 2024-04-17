import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";
import CarrosselSection from "../CarrosselSection";

import { useUtmParserSales } from "../HotmartTracking";
import { useUtmParserSalesOuro } from "../HotmartTrackingOuro";
import { useUtmParserSalesDiamante } from "../HotmartTrackingDiamante";


export default function Section1HeaderComOferta() {

  const utmPrata = useUtmParserSales();
  const utmOuro = useUtmParserSalesOuro();
  const utmDiamante = useUtmParserSalesDiamante();

  const handleClickScroll = () => {
    const element = document.getElementById("oferta");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const font16 = "lg:text-[16px]"; // Defina o tamanho da fonte desejado

  return (
    <div>
      {/* S1 */}

      <div className="lg:bg-[url('/imgpgvendas/b01d.webp')]  bg-[url('/imgpgvendas/b1m.webp')]   mx-auto pb-[40px] pt-[25px] lg:pt-[35px] lg:bg-top bg-botton lg:pb-[100px] md:bg-bottom bg-cover bg-no-repeat">
        <Container>
          {/* lado esquerdo */}
          <div className="flex flex-col lg:flex-row lg:text-left relative  max-w-[1179px]  mx-auto lg:mt-[40px]">
            <div className="lg:w-1/2 md:w-1/2 text-center lg:text-left md:text-left ">
              <div className=" flex flex-col lg:text-left relative  max-w-[1100px] mx-auto lg:mt-[10px]  ] ">
                <Image
                  className="mx-auto lg:mx-0 w-[200px] lg:w-[450px]"
                  src={"/imgpgvendas/encontro.webp"}
                  width={526}
                  height={72}
                  alt="Bem resolvida"
                  loading="lazy"
                />
             <h3
                  className=" text-[#fff]  text-[20px]  lg:text-[34px] lg:leading-[38px] font-semibold mt-[15px] lg:mt-[20px] tracking-[2px] lg:tracking-[1px]  leading-[26px]   "
                  style={{
                    fontFamily: "'Epilogue', 'Libre Caslon Text', serif",
                  }}
                >
                  Revolucione sua autoestima e torne-se a mulher de sucesso,
                  atraente e poderosa que sempre sonhou.
                </h3>

                <h4
                  className=" text-[16px] text-[#fff] lg:text-[18px] lg:leading-[24px] lg:mt-[10px] mt-[10px] lg:mt-0 tracking-[2px] lg:tracking-[1px]  leading-[20px]"
                  style={{ fontFamily: "'Lato', serif" }}
                >
                 03 dias de imersão profunda, desbloqueios, experiências intensas e exercícios práticos que transformarão sua vida.<br></br>
Escreva um novo futuro para sua história!
                </h4>

                <Image
                  className="mx-auto lg:mx-0 w-[300px] mt-[20px] lg:w-[450px] lg:mt-[20px]"
                  src={"/imgpgvendas/datanova.webp"}
                  width={526}
                  height={72}
                  alt="Bem resolvida"
                  loading="lazy"
                />

                <button
                  className="bg-[#179B7E] justify-center lg:mb-[0]  text-[#fff] lg:block md:block  items-center flex lg:mt-[30px] mt-[30px] text-center py-[10px] px-1 rounded-[4px] max-w-[450px] lg:h-[64px] w-full  text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] lg:w-full md:w-[500px] w-[146px] font-semibold hover:scale-125 transition duration-500 cursor-pointer"
                  href=""
                  onClick={handleClickScroll}
                >
                  QUERO SER UMA MULHER BEM RESOLVIDA
                </button>
              </div>
            </div>

            {/* lardo direito */}
            <div className="lg:w-1/2 md:w-1/2 text-center lg:text-left md:text-left ">
              <Image
                className="mx-auto mx-0 lg:mx-0 w-full lg:w-[450px] lg:hidden"
                src={"/imgpgvendas/catiamobiletopo.webp"}
                width={526}
                height={72}
                alt="Bem resolvida"
                loading="lazy"
              />
            </div>
          </div>

          {/* s2 */}

          <div className="max-w-[1196px] w-full mx-auto lg:p-4  mt-[60px] text-center lg:pb-[80px]">






            {/* oferta */}

{/* pai em coluna */}
<div className="flex flex-col">
          <div className="max-w-[1196px] w-full mx-auto">
            {/* Imagem Centralizada */}
            <div className="text-center -mt-[60px] lg:mt-[0]">

            <h2
              className=" text-center  lg:text-center text-left  text-[#E0A45B]  text-[24px] lg:text-[28px] "
              style={{ fontFamily: "'Archivo', serif" }}
            >
              INGRESSOS
            </h2>

    

              {/* Título Centralizado */}
              <h1
                className="text-[28px] mb-[0] font-bold my-4 text-[#fff] lg:text-[42px] "
                style={{ fontFamily: "'Epilogue', serif" }}
              >
                Valor da Experiência
              </h1>

              {/* Texto Centralizado */}
              <p
                className="mb-8 lg:text-[24px] font-normal text-[#fff]"
                style={{ fontFamily: "'Lato', serif" }}
              >
                O espetáculo 100% presencial que vai transformar sua vida
              </p>
            </div>

            {/* Três Colunas com Conteúdo Diferente */}

            {/* CARDs */}
            <div className="  flex flex-col lg:flex-row  " id="oferta">
              {/* pt-[40px] md:pt-[40px] lg:pb-[60px] pb-[40px] p-4 lg:px-[40px]  */}
              <div className="  lg:w-1/3  text-center lg:p-4   lg:pb-[60px] pb-[40px]">
                <div className="bg-[#161616] text-center  rounded-lg">
                  <div className="w:full  bg-gradient-to-r from-[#FD4938] to-[#DA001B] lg:pt-[30px] lg:pb-[30px]">
                    <Image
                      src="/imgpgvendas/pacotepratav4.webp"
                      alt="Pacote experience"
                      className="mx-auto md:w-[124px] w-[100px] py-[20px] lg:py-[0] lg:w-[124px]"
                      width={526}
                      height={72}
                      loading="lazy"
                    />
                  </div>
                  <a target="_blank"
                      href={utmPrata}>
                  <Image
                      src="/imgpgvendas/btncompraragora.webp"
                      alt="Pacote experience"
                      className="mx-auto md:w-[124px] w-[200px] lg:-mt-[14px] -mt-[14px]  lg:py-[0] lg:w-[260px]"
                      width={526}
                      height={72}
                      loading="lazy"
                    />
                  </a>

                  <div className="pt-[40px] md:pt-[40px] lg:pb-[60px] pb-[40px] p-4 lg:px-[40px]">
                  
                    <div className="flex flex-start  lg:pt-[10px]  md:pt-[20px] pt-[10px] ">
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <span
                        className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px] ml-[10px] md:ml-[10px]"
                        style={{ fontFamily: "'Lato', serif" }}
                      >
                        Acesso aos 3 <br></br>dias de evento
                      </span>
                    </div>

                    <div
                      className="flex flex-start lg:mt-[10px] md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px]"
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px]  md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Material de Apoio
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Certificado digital<br></br>de participação
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/cancel0.webp"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                       <s> Acesso a lugares mais próximos ao palco</s>
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/cancel0.webp"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        <s>Acesso ao coffeebreak durante o evento</s>
                      </p>
                    </div>

                  

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/cancel0.webp"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        <s>Livro autografado</s>
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/cancel0.webp"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        <s>joia personalizada</s>
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/cancel0.webp"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                       <s> Jantar especial com a Cátia</s>
                      </p>
                    </div>

                    <hr className="my-2 divide-stone-300 lg:mt-[20px] lg:mb-[20px] pt-[10px]  mt-[30px]" />

                    <img
                      src="/imgpgvendas/precov501.webp"
                      alt="Imagem Coluna 1"
                      className="mx-auto mt-[20px]"
                      loading="lazy"
                    />
                    <p
                      className="my-2 text-[18px] text-[#CCCCCC] mt-[40px] lg:mt-[40px] lg:mb-[20px] leading-5"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      Garanta seu <br />
                      desconto de pré-venda  <br />
                      do Pacote Prata 
                    </p>

                    {/* bptao primeira oferta */}
                    <a
                      className="bg-[#179B7E] text-[#fff] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                      // href="https://pay.hotmart.com/X89033557B?off=bxifabag"
                      target="_blank"
                      href={utmPrata}
                    >
                      QUERO MEU INGRESSO
                    </a>
                  </div>
                </div>
              </div>

              {/* Coluna 2 pacote ouro */}
              <div className=" lg:w-1/3 text-center lg:p-4 mt-[40px] lg:mt-[0] ">
                <div className="bg-[#161616] text-center   rounded-lg">
                  {/* mais vendido */}

                  <div className=" lg:pt-[34px]  lg:pb-[30px] lg:bg-[url('/imgpgvendas/bgmaisvendido.webp')] bg-[url('/imgpgvendas/masivendidomobilev2.webp')]  bg-cover">
                    {/* <Image
                      src="/imgpgvendas/vendido.webp"
                      alt="Pacote experience"
                      className="faixamaisvendido mx-auto md:w-[150px]  w-[180px]  lg:pt-[0]  lg:mb-[15px] lg:w-[200px] lg:-mt-[44px] -mt-[54px]   mb-[20px]"
                      width={526}
                      height={72}
                      loading="lazy"
                    /> */}
                    <Image
                      src="/imgpgvendas/pacoteourov3.webp"
                      alt="Pacote experience"
                      className="mx-auto md:w-[124px] w-[100px] pb-[30px] lg:pb-[0]  lg:w-[104px] pt-[20px] lg:pt-[0]"
                      width={526}
                      height={72}
                      loading="lazy"
                    />
                  </div>
                  <a target="_blank"
                      href={utmOuro}>
                  <Image
                      src="/imgpgvendas/btncompraragora.webp"
                      alt="Pacote experience"
                      className="mx-auto md:w-[124px] w-[200px] lg:-mt-[14px] -mt-[14px]  lg:py-[0] lg:w-[260px]"
                      width={526}
                      height={72}
                      loading="lazy"
                    />
                  </a>
                  <div className="pt-[40px] md:pt-[40px] lg:pb-[60px] pb-[40px] p-4 lg:px-[40px]">
                    <div className="flex flex-start  lg:pt-[10px]  md:pt-[20px] pt-[10px] ">
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <span
                        className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px] ml-[10px] md:ml-[10px]"
                        style={{ fontFamily: "'Lato', serif" }}
                      >
                        Acesso aos 3 <br></br>dias de evento
                      </span>
                    </div>

                    <div
                      className="flex flex-start lg:mt-[10px] md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px]"
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px]  md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Material de Apoio
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Certificado digital<br></br>de participação
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Acesso a lugares mais próximos ao palco
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Acesso ao coffeebreak durante o evento
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                      Livro autografado
                      </p>
                    </div>

                 

                    {/* <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/cancel0.webp"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        <s>Livro autografado</s>
                      </p>
                    </div> */}

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/cancel0.webp"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        <s>joia personalizada</s>
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <Image
                        src="/imgpgvendas/cancel0.webp"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        width={526}
                        height={72}
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                       <s> Jantar especial com a Cátia</s>
                      </p>
                    </div>

                    <hr className="my-2 divide-stone-300 lg:mt-[20px] lg:mb-[20px] pt-[10px]  mt-[30px]" />

                    <img
                      src="/imgpgvendas/precov502.webp"
                      alt="Imagem Coluna 1"
                      className="mx-auto mt-[20px]"
                      loading="lazy"
                    />
                    <p
                      className="my-2 text-[18px] text-[#CCCCCC] mt-[40px] lg:mt-[40px] lg:mb-[20px] leading-5"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      Garanta seu <br />
                      desconto de pré-venda  <br />
                      do Pacote Ouro 
                    </p>

                    {/* bptao primeira oferta */}
                    <a
                      className="bg-[#179B7E]  text-[#fff] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                      href={utmOuro}
                      target="_blank"
                    >
                      QUERO MEU INGRESSO
                    </a>
                  </div>
                </div>
              </div>

              {/* Coluna 3 Pacote diamente */}
              <div className=" lg:w-1/3 text-center lg:p-4 mt-[40px] lg:mt-[0]">
                <div className="bg-[#161616] text-center   rounded-lg">
                  {/* mais vendido */}
                  {/* <img src="/imgpgvendas/maisvendidov2.webp" alt="Pacote experience" className="mx-auto md:w-[150px] lg:w-[200px] lg:-mt-[54px] -mt-[54px] lg:mb-[40px] mb-[40px]" /> */}

                  <div className="bg-gradient-to-r from-[#FD4938] to-[#DA001B] lg:pt-[30px] lg:pb-[30px]">
                    <Image
                      src="/imgpgvendas/pacotediamantev4.webp"
                      alt="Pacote experience"
                      className="mx-auto md:w-[124px] w-[120px] py-[20px] lg:py-[1px] lg:w-[174px]"
                      width={526}
                      height={72}
                      loading="lazy"
                    />
                  </div>
                  <a target="_blank"
                      href={utmDiamante}>
                  <Image
                      src="/imgpgvendas/btncompraragora.webp"
                      alt="Pacote experience"
                      className="mx-auto md:w-[124px] w-[200px] lg:-mt-[14px] -mt-[14px]  lg:py-[0] lg:w-[260px]"
                      width={526}
                      height={72}
                      loading="lazy"
                    />
                  </a>
                  <div className="pt-[40px] md:pt-[40px] lg:pb-[60px] pb-[40px] p-4 lg:px-[40px]">
                    <div className="flex flex-start  lg:pt-[10px]  md:pt-[20px] pt-[10px]  ">
                      <img
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        loading="lazy"
                      />
                      <span
                        className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px] ml-[10px] md:ml-[10px]"
                        style={{ fontFamily: "'Lato', serif" }}
                      >
                        Acesso aos 3 <br></br>dias de evento
                      </span>
                    </div>

                    <div
                      className="flex flex-start lg:mt-[10px] md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <img
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px]"
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px]  md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Material de Apoio
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <img
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Certificado digital<br></br>de participação
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <img
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Acesso a lugares mais próximos ao palco
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <img
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Acesso ao coffeebreak durante o evento
                      </p>
                    </div>

                    

                    
                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <img
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                       Livro autografado
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <img
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Joia personalizada
                      </p>
                    </div>

                    <div
                      className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      <img
                        src="/imgpgvendas/check.png"
                        alt="Imagem Coluna 1"
                        className="w-[18px] h-[13px] "
                        loading="lazy"
                      />
                      <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">
                        Jantar especial com a Cátia
                      </p>
                    </div>

                    <hr className="my-2 divide-stone-300 lg:mt-[20px] lg:mb-[20px] pt-[10px]  mt-[30px]" />

                    <img
                      src="/imgpgvendas/precov503.webp"
                      alt="Imagem Coluna 1"
                      className="mx-auto mt-[20px]"
                      loading="lazy"
                    />
                    <p
                      className="my-2 text-[18px] text-[#CCCCCC] mt-[40px] lg:mt-[40px] lg:mb-[20px] leading-5"
                      style={{ fontFamily: "'Lato', serif" }}
                    >
                      Garanta seu <br />
                      desconto de pré-venda  <br />
                      do Pacote Diamond 
                    </p>

                    {/* bptao primeira oferta */}
                    <a
                      className="bg-[#179B7E]  text-[#fff] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                      href={utmDiamante}
                      target="_blank"
                    >
                      QUERO MEU INGRESSO
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>

          {/* garantia */}
          <div className="container mx-auto pb-[40px] lg:mt-[40px] mt-[40px] max-w-[1100px] ">
            <div className="hidden lg:block  md:block">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Coluna 1 */}
                <div className="flex justify-center">
                  <Image
                    className="mx-auto lg:mx-0 lg:w-[371px] lg:h-[95px] "
                    src={"/imgpgvendas/garantia01v2.webp"}
                    width={371}
                    height={87}
                    alt="Data"
                    loading="lazy"
                  />
                </div>

                {/* Coluna 2 */}
                <div className="flex justify-center">
                  <Image
                    className="mx-auto lg:mx-0 lg:w-[371px] lg:h-[95px]"
                    src={"/imgpgvendas/garantia02v2.webp"}
                    width={371}
                    height={97}
                    alt="Data"
                    loading="lazy"
                  />
                </div>

                {/* Coluna 3 */}
                <div className="flex justify-center">
                  <Image
                    className="mx-auto lg:mx-0 lg:w-[371px] lg:h-[90px] "
                    src={"/imgpgvendas/garantia03v2.webp"}
                    width={371}
                    height={97}
                    alt="Data"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <Image
              className="mx-auto lg:mx-0 w-[250px] lg:hidden md:hidden"
              src={"/imgpgvendas/garantiamobilev2.webp"}
              width={371}
              height={97}
              alt="Data"
              loading="lazy"
            />
          </div>
          {/* fim garantia */}

          {/* cronograma */}
          {/* <div className="flex mx-auto justify-stretch max-w-[1179px] lg:-mb-[150px]">
          

           <a href="#oferta">
           <Image
              className="mx-auto lg:mx-0 lg:w-full lg:mt-[20px] hidden lg:block"
              src={"/imgpgvendas/amigas.webp"}
              width={371}
              height={97}
              alt="Data"
              loading="lazy"
            />
           </a>

          </div> */}


        </div>

{/* fim oferta topo */}


















</div> 
           
        </Container>
      </div>

      {/* Fim S1 */}
    </div>
  );
}
