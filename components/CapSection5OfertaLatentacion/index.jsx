import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";

import FormMasterLove from '../FormLatentacion'


import { useUtmParserSales } from "../HotmartTracking";
import { useUtmParserSalesOuro } from "../HotmartTrackingOuro";
import { useUtmParserSalesDiamante } from "../HotmartTrackingDiamante";

export default function CapSection5OfertaLatentacion() {
  const utmPrata = useUtmParserSales();
  const utmOuro = useUtmParserSalesOuro();
  const utmDiamante = useUtmParserSalesDiamante();

  return (
    <div className="bg-[#000] lg:pt-[60px] text-white  pt-[60px] lg:pt-[35px] lg:bg-[url('/imgpgvendas/bgoferta.webp')] bg-[url('/imgpgvendas/bgoferta.webp')] bg-top bg-cover bg-no-repeat">
      <Container>
        {/* pai em coluna */}
        <div className="flex flex-col">
          <div className="max-w-[1196px] w-full mx-auto">
            {/* Imagem Centralizada */}
            <div className="text-center">
              <Image
                src={"/imgpgvendas/ingressosv2.webp"}
                alt="Imagem Centralizada"
                className="mx-auto lg:w-[210px] w-[140px]"
                width={526}
                height={72}
              />

              {/* Título Centralizado */}
              <h1
                className="text-[28px] mb-[0] font-bold my-4 lg:text-[42px] lg:mt-[40px]"
                style={{ fontFamily: "'Epilogue', serif" }}
              >
                Valor da Experiência
              </h1>

              {/* Texto Centralizado */}
              <p
                className="mb-8 lg:text-[24px] font-normal"
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
                       >
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
                        <s>Acesso a lugares mais próximos ao palco</s>
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
                       <s> Acesso ao coffeebreak durante o evento</s>
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
                    {/* <a
                      className="bg-[#179B7E] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                      // href="https://pay.hotmart.com/X89033557B?off=bxifabag"
                      target="_blank"
                      href={utmPrata}
                    >
                      QUERO MEU INGRESSO
                    </a> */}
                  </div>
                </div>
              </div>

              {/* Coluna 2 pacote ouro */}
              <div className=" lg:w-1/3 text-center lg:p-4 mt-[40px] lg:mt-[0] ">
                <div className="bg-[#161616] text-center   rounded-lg">
                  {/* mais vendido */}

                  <div className=" lg:pt-[34px]  lg:pb-[30px] lg:bg-[url('/imgpgvendas/bgmaisvendido.webp')] bg-[url('/imgpgvendas/masivendidomobilev2.webp')] bg-cover">
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
                     >
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
                        <s>Jantar especial com a Cátia</s>
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
                    {/* <a
                      className="bg-[#179B7E] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                      href={utmOuro}
                      target="_blank"
                    >
                      QUERO MEU INGRESSO
                    </a> */}
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
                     >
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
                    {/* <a
                      className="bg-[#179B7E] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                      href={utmDiamante}
                      target="_blank"
                    >
                      QUERO MEU INGRESSO
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mx-auto w-full flex items-center justify-center">
            <FormMasterLove />
          </div>

          {/* garantia */}
          {/* <div className="container mx-auto pb-[40px] lg:mt-[40px] mt-[40px] max-w-[1100px] ">
            <div className="hidden lg:block  md:block">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
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
          </div> */}
          {/* fim garantia */}

          {/* fim garantia */}

          {/* amigas */}
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
      </Container>
    </div>
  );
}
