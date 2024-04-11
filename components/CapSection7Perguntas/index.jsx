import React from "react";
import dynamic from "next/dynamic";
import Container from "@/components/Container";
import Image from "next/image";

const Acordeon = dynamic(() => import("../Accordeon2"), { ssr: false });

export default function CapSection7Perguntas() {
  return (
    <div>
      <div className="   text-white  pt-[25px] lg:pt-[35px] lg:bg-[#000] bg-cover bg-no-repeat lg:bg-[url('/imgpgvendas/bgperguntas.webp')] bg-[url('/imgpgvendas/bgperguntas.webp')]">
        <Container>
          <div className="lg:flex flex-col  justify-center items-center max-w-[1179px] mx-auto lg:mt-[60px]">
            <div className=" flex flex-col lg:flex-row lg:text-left relative  mx-auto lg:mt-[40px] text-center ">
              <h2
                className=" lg:text-center text-left mb-[40px] font-['Libre Caslon Text'] text-[24px] lg:text-[38px] "
                style={{ fontFamily: "'Epilogue', serif" }}
              >
                Dúvidas <span className="font-bold">Frequentes</span>
              </h2>
            </div>
            <Acordeon />
          </div>


                {/* não encontros as repostas */}
                <div className="mt-[40px] lg:mt-[100px] flex flex-col lg:flex-row">
                                {/* Coluna da Esquerda */}
                                <div className="flex flex-col items-center w-full lg:w-full lg:mb-0">
                                    <h2 className="text-center lg:text-center text-[24px] mb-[20px] font-['Libre Caslon Text'] lg:text-[38px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                                        Não encontrou a<br /><b>resposta da sua dúvida?</b>
                                    </h2>
                                    <h2 className="text-center lg:text-center text-[20px] text-[#fff] font-['Archivo'] lg:text-[22px]" style={{ fontFamily: "'Archivo', serif" }}>
                                        FALE CONOSCO
                                    </h2>
                                    <div className="flex items-center justify-center lg:justify-end">
                                        <Image
                                            className="w-[28px] lg:w-[32px] lg:h-[23px] mr-[10px] lg:-mt-[35px] md:-mt-[35px] -mt-[35px]"
                                            src={"/imgpgvendas/emailbranco.webp"}
                                            width={351}
                                            height={77}
                                            alt="Email"
                                        />
                                        <span className="text-[#fff] text-center lg:text-left text-[18px] mb-[40px] text-[#DB8E60] lg:text-[20px]">
                                            suporte@mistermind.com.br
                                        </span>
                                    </div>
                                </div>


                            </div>

        </Container>
      </div>
    </div>
  );
}
