import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";


export default function Section4Cards() {
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
              <span className="font-normal ">
                3 dias de desbloqueios, exercícios,<br></br> transformações
                intensas, práticas e conexões<br></br>
              </span>
              para você escrever uma nova história
            </h2>

            <h2
              className="text-[24px] font-bold  lg:hidden text-center text-[#fff] leading-[28px]  lg:text-[32px]   "
              style={{ fontFamily: "'Epilogue', serif" }}
            >
              <span className="font-normal ">
                3 dias de desbloqueios, exercícios, transformações intensas,
                práticas e conexões {" "}
              </span>
              para você escrever uma nova história
            </h2>
          </div>

          <div className="flex ">
            <div className="flex  lg:flex-row flex-col lg:w-[956px] justify-between lg:mt-[20px]">
              <div className="flex lg:flex-row flex-col">
                <div className="flex-1 p-4">
                  <Image
                    className="mx-auto lg:mx-0 w-[350px]  mt-[10px] "
                    src={"/imgpgvendas/card01.webp"}
                    width={526}
                    height={72}
                    alt="Bem resolvida"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-4">
                  <Image
                    className="mx-auto lg:mx-0 w-[350px]  mt-[10px] "
                    src={"/imgpgvendas/card02.webp"}
                    width={526}
                    height={72}
                    alt="Bem resolvida"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 p-4">
                  <Image
                    className="mx-auto lg:mx-0 w-[350px]  mt-[10px] "
                    src={"/imgpgvendas/card03.webp"}
                    width={526}
                    height={72}
                    alt="Bem resolvida"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
