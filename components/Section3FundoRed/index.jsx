import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";
import CarrosselSection from "../CarrosselSection";

export default function Section3FundoRed() {

  const handleClickScroll = () => {
    const element = document.getElementById("oferta");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:bg-[url('/imgpgvendas/bgred.webp')] bg-black bg-cover bg-no-repeat lg:h-[1100px]  bg-[url('/imgpgvendas/bgredm.webp')] lg:-mt-[120px]">
      <Container>
        {/* Fim primeira seção */}
        <div className="flex flex-col items-center justify-center min-h-screen ">
          {/* coluna da esquerda */}
          <div className="max-w-[1196px] w-full mx-auto lg:p-4 lg:mt-[0] mt-[60px]">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2   ">
                <h2
                  className="text-xl font-bold hidden text-[#fff] leading-[36px]  lg:text-[32px] lg:mt-[45px]  "
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  <span className="font-normal">
                    {" "}
                    Descubra como acessar <br></br>
                  </span>
                  uma vida livre, independente, satisfatória Bem Resolvida!
                </h2>

                {/* txt mobile */}
                <h2
                  className="text-center lg:text-left font-bold text-[#fff] text-[28px]  leading-[32px] lg:leading-[40px]   lg:text-[36px]  lg:mt-[45px]  italic "
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  <span className="font-normal not-italic">
                    {" "}
                    Descubra como acessar  {" "} <br></br>
                  </span>
                  uma vida livre, independente, satisfatória Bem Resolvida!
                </h2>
                {/* fim txt mobile */}

                <div className="w-full  lg:pl-[20px] lg:mt-[40px] lg:-ml-[20px]">
                  <div className="text-center lg:text-left relative">
                    {/* <span className="hidden lg:block bg-[#E1B16F] h-[585px] w-[2px] absolute bottom-2 -left-5"></span> */}

                    <Image
                      className="mx-auto lg:mx-0 w-[350px] lg:w-[650px] lg:absolute lg:mt-[120px] lg:hidden"
                      src={"/imgpgvendas/trioball.webp"}
                      width={526}
                      height={72}
                      alt="Bem resolvida"
                      loading="lazy"
                    />

                    {/* Lista */}
                    <div className="flex flex-row ">
                      <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[40px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/chek.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                      </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] font-semibold text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">Você vai identificar e aprender a eliminar os obstáculos  que estão bloqueando o caminho do seu sucesso </p>
                      </div>
                    </div>

                    <div className="flex flex-row mt-[10px]">
                      <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[40px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/chek.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                      </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] font-semibold text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Aprenderá o passo a passo para tornar-se a mulher de sucesso,  atraente e poderosa que sempre sonhou
                          </p>
                      </div>
                    </div>

                    <div className="flex flex-row mt-[10px]">
                      <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[40px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/chek.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                      </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] font-semibold text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Construirá um plano sólido para o sucesso no amor, na família e na carreira  -  tudo ao mesmo tempo 
                          </p>
                      </div>
                    </div>

                    <div className="flex flex-row mt-[10px]">
                      <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[40px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/chek.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                      </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] font-semibold text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Sairá do piloto automático, começará a se priorizar mais e investir nos próprios sonhos  </p>
                      </div>
                    </div>

                    <div className="flex flex-row mt-[10px]">
                      <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[40px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/chek.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                      </div>
                      <div  className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] font-semibold text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Saberá como ter força para assumir papel de protagonista na própria vida, mas sem deixar sua essência feminina de lado   </p>
                      </div>
                    </div>

                    <div className="flex flex-row mt-[10px]">
                      <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[40px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/chek.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] font-semibold text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Acessará ferramentas práticas para melhorar seus negócios, relacionamentos e a relação consigo mesma  </p>
                      </div>
                    </div>

                    <div className="flex flex-row mt-[10px]">
                      <div className="lg:w-[5%]">
                        <Image
                          className="mx-auto lg:mx-0 w-[20px] lg:w-[40px] lg:mt-[7px] mt-[7px]"
                          src={"/imgpgvendas/chek.webp"}
                          width={526}
                          height={72}
                          alt="Bem resolvida"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-[90%]">
                        <p className="font-['Lato'] lg:ml-[10px] ml-[10px] font-semibold text-[#fff] text-left text-[18px] lg:text-[20px]  mt-[0] lg:mt-0 tracking-[2px]">
                        Resgatará sua autoestima e sua autoconfiança, ativando sua sensualidade e construindo um poder de conquista irresistível! </p>
                      </div>
                    </div>
                    <button
                  className="bg-[#179B7E] justify-center mb-[40px] lg:mb-[0] lg:ml-[35px]  text-[#fff] lg:block md:block  items-center flex lg:mt-[30px] mt-[30px] text-center py-[10px] px-1 rounded-[4px] max-w-[450px] lg:h-[64px] w-full  text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] lg:w-full md:w-[500px] w-[146px] font-semibold hover:scale-125 transition duration-500 cursor-pointer"
                  href="#oferta"
                 onClick={handleClickScroll}
                >
                  QUERO SER UMA MULHER BEM RESOLVIDA
                </button>


                    {/* <h3 className="font-['Lato'] font-semibold text-[#fff] text-left text-[18px] lg:text-[20px] mt-[26px] lg:mt-0 tracking-[2px] ">
                      Você já sentiu que, mesmo batalhando muito, parece
                      impossível alcançar o sucesso no amor, na família e na
                      carreira ao mesmo tempo?<br></br>
                      <br></br>
                      Sente que literalmente vive no piloto automático, tão
                      sobrecarregada que não dá tempo de investir nos seus
                      sonhos, às vezes nem de lembrar deles direito?<br></br>
                      <br></br>
                      Ou, pior ainda: talvez você sequer tenha clareza de quais
                      são seus sonhos, seus valores, o que de fato quer mudar na
                      sua vida, ou o que ama em si mesma.<br></br>
                      <br></br>
                      Você precisa agir agora, para não passar a vida toda
                      servindo aos sonhos dos outros, enquanto negligencia os
                      seus.<br></br>
                      <br></br>
                      Mas há duas ótimas notícias. A primeira é que você não
                      está só. A segunda, que você pode virar esse jogo!
                    </h3> */}

                  </div>
                </div>
              </div>
              {/* fim coluna da direita */}

              <div className="w-full md:w-1/2 relative ">
                <Image
                  className="mx-auto lg:mx-0 w-[350px] lg:w-[650px] lg:absolute lg:mt-[120px] hidden lg:block"
                  src={"/imgpgvendas/trioball.webp"}
                  width={526}
                  height={72}
                  alt="Bem resolvida"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/*fim da coluna da esquerda */}


          {/*fim da coluna da esquerda */}
        </div>
      </Container>
    </div>
  );
}
