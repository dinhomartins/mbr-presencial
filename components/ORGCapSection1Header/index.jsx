import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";
import CarrosselSection from "../CarrosselSection";

import BtnWhatsMeteoro from '../BtnWhatsMeteoro'

export default function ORG01CapSection1Header(props) {
  const font16 = "lg:text-[16px]"; // Defina o tamanho da fonte desejado


  return (
    <div>
      {/* S1 */}

      <div className="lg:bg-[url('/imgpgvendas/bgcapturadesk.webp')]  bg-[#000]   mx-auto pb-[40px] pt-[25px] lg:pt-[35px] lg:bg-top bg-botton lg:pb-[100px] md:bg-bottom bg-cover bg-no-repeat">
        <Container>
          {/* lado esquerdo */}
          <div className="flex flex-col lg:flex-row lg:text-left relative  max-w-[1179px]  mx-auto lg:mt-[40px]">
            <div className="lg:w-1/2 md:w-1/2 text-center lg:text-left md:text-left ">
              <div className=" flex flex-col text-left relative  max-w-[1100px] mx-auto lg:mt-[10px] ">
                <Image
                  className=" lg:mx-0 w-[300px] lg:w-[450px]"
                  src={"/imgpgvendas/catialogo.webp"}
                  width={526}
                  height={72}
                  alt="Bem resolvida"
                  loading="lazy"
                />
                <h3
                  className=" text-[#fff]  text-[30px] leading-[35px] lg:text-[34px] lg:leading-[38px]  mt-[15px] lg:mt-[20px] tracking-[2px] lg:tracking-[1px]     "
                  style={{
                    fontFamily: "'Epilogue', 'Libre Caslon Text', serif",
                  }}
                >
                  Descubra os 03 segredos da Cátia Damasceno para você <b>se tornar definitivamente:</b>
                </h3>
                <Image
                  className=" lg:mx-0 w-full mt-[20px] lg:w-[450px] lg:mt-[20px]"
                  src={"/imgpgvendas/datalive.webp"}
                  width={526}
                  height={72}
                  alt="Bem resolvida"
                  loading="lazy"
                />
                <BtnWhatsMeteoro/>
                <div className="lg:w-[400px]">
                    <p className="text-[#B6B6B6] text-[14px] mt-[10px]">*Atenção, o conteúdo ficará disponível apenas ao vivo. Será sua única chance de ter esse aprendizado de graça.</p>
                </div>
              </div>
            </div>

            {/* lardo direito */}
            <div className="lg:w-1/2 md:w-1/2 text-center lg:text-left md:text-left ">
              <Image
                className="mx-auto mx-0 lg:mx-0 w-full lg:w-[450px] mt-[20px] lg:hidden"
                src={"/imgpgvendas/catialivemobile.webp"}
                width={526}
                height={72}
                alt="Bem resolvida"
                loading="lazy"
              />
            </div>
          </div>
          



          {/* s2 */}
          <div className="flex flex-col  items-center justify-center min-h-screen lg:mt-[150px] -mt-[40px] lg:mb-[60px]">
            {/* coluna da esquerda */}
            <div className="max-w-[1196px]  w-full mx-auto lg:p-4 lg:mt-[0] mt-[60px]">
              <div className="flex flex-wrap -mx-2 flex-col-reverse lg:flex-row">
                <div className="w-full md:w-1/2 px-2   ">
                  <div className="w-full  lg:pl-[20px] lg:mt-[40px] lg:-ml-[20px]">
                    <div className="text-center lg:text-left ">
                      {/* <span className="hidden lg:block bg-[#E1B16F] h-[585px] w-[2px] absolute bottom-2 -left-5"></span> */}
                      <Image
                        className="mx-auto lg:mx-0 w-[350px] lg:w-[650px]  lg:mt-[150px]  lg:block"
                        src={"/imgpgvendas/mulheres.webp"}
                        width={526}
                        height={72}
                        alt="Bem resolvida"
                        loading="lazy"
                      />
                      
                    </div>
                  </div>
                </div>




                {/* fim coluna da direita */}
                <div className="w-full md:w-1/2  ">
                <h3
                  className=" text-[#fff]  text-[24px]  lg:text-[34px] lg:leading-[38px]  mt-[15px] lg:mt-[150px] tracking-[2px] lg:tracking-[1px]  leading-[26px]   "
                  style={{
                    fontFamily: "'Epilogue', 'Libre Caslon Text', serif",}}
                >
                  Para <b className="italic">quem</b> é essa live?
                </h3>

                <div className="flex flex-row mt-[10px]">
                  {/* lista com */}
                  <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[20px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/checknovo.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                  </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[10px] lg:mt-0 tracking-[2px]">
                        Aumentar a autoconfiança e a autoestima </p>
                      </div>
                </div>

                <div className="flex flex-row mt-[10px]">

                  {/* lista com */}
                  <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[20px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/checknovo.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                  </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Construir sua jornada de independência financeira </p>
                      </div>
                </div>

                <div className="flex flex-row mt-[10px]">
                  {/* lista com */}
                  <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[20px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/checknovo.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                  </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Acelerar seu desenvolvimento pessoal para alcançar  </p>
                      </div>
                  </div>

                  
                <div className="flex flex-row mt-[10px]">
                  {/* lista com */}
                  <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[20px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/checknovo.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                  </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        sua melhor versão: a versão Bem Resolvida! </p>
                      </div>
                  </div>

                  {/* fim lista 1 */}

                  {/* inicio lista 2 */}
                  <h3
                  className=" text-[#fff]  text-[24px]  lg:text-[34px] lg:leading-[38px]  mt-[40px]  lg: mt-[40px] tracking-[2px] lg:tracking-[1px]  leading-[26px]   "
                  style={{
                    fontFamily: "'Epilogue', 'Libre Caslon Text', serif",}}
                >
                  O que <b className="italic">vou aprender?</b>
                </h3>
                <p className="font-['Lato']   text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[20px] lg:mt-[10px] tracking-[2px]">
                O passo a passo do método SPA - que ensina a ser uma mulher de Sucesso, Próspera e Atraente,  exclusivo da Cátia Damasceno, que irá ajudar você a: 
                </p>


                <div className="flex flex-row mt-[10px]">
                  {/* lista com */}
                  <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[20px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/star.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                  </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Vencer os desafios e se destacar na carreira </p>
                      </div>
                  </div>

                  <div className="flex flex-row mt-[10px]">
                  {/* lista com */}
                  <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[20px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/star.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                  </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Conciliar o sucesso na carreira com a família e autodesenvolvimento  </p>
                      </div>
                  </div>

                  <div className="flex flex-row mt-[10px]">
                  {/* lista com */}
                  <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[20px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/star.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                  </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Ativar seu poder feminino de atração e sedução  </p>
                      </div>
                  </div>

                  <BtnWhatsMeteoro />

                </div>

                
              </div>
            </div>
            {/*fim da coluna da esquerda */}


            {/*fim da coluna da esquerda */}
          </div>

          {/* fim s2 */}
        </Container>
      </div>

      {/* Fim S1 */}
    </div>
  );
}
