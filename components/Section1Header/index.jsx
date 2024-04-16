import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";
import CarrosselSection from "../CarrosselSection";

export default function Section1Header() {
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

          <div className="max-w-[1196px] w-full mx-auto lg:p-4 lg:pt-[80px] mt-[60px] text-center lg:pb-[80px]">
          <Image
                  className="mx-auto  w-[20px] mt-[20px] lg:w-[20px] "
                  src={"/imgpgvendas/seta.webp"}
                  width={20}
                  height={72}
                  alt="Bem resolvida"
                  loading="lazy"
                />
            <h2
              className=" text-center  lg:text-center text-left  mb-[10px] text-[#E0A45B]  text-[24px] lg:text-[28px] "
              style={{ fontFamily: "'Archivo', serif" }}
            >
              INGRESSOS
            </h2>

            {/* texto versao mobile */}
            <h2
              className="leading-[24px] lg:hidden text-center text-[#fff] lg:block lg:text-center text-left mb-[40px] font-bold  text-[24px] lg:text-[40px] lg:eading-[46px] "
              style={{ fontFamily: "'Epilogue', serif" }}
            >
              O encontro Bem Resolvida é{" "}
              <span className="text-[#DB8E60] italic ">para mulheres que querem:</span>
            </h2>

            <h2
              className="text-[20px] leading-[24px] hidden text-center text-[#fff] lg:block lg:text-center text-left mb-[40px] font-bold  text-[24px] lg:text-[40px] leading-[46px] "
              style={{ fontFamily: "'Epilogue', serif" }}
            >
              O encontro Bem Resolvida é <br></br>
              <span className="text-[#fff] italic ">para mulheres que querem:</span>
            </h2>

            <h3
              className="font-['Libre Caslon Text'] lg:mx-20 text-[18px] text-center lg:text-[30px] mt-[26px] lg:mt-0 tracking-[2px] lg:tracking-[1px]     lg:leading-[36px]"
              style={{ fontFamily: "'Libre Caslon Text', serif" }}
            ></h3>

            {/* 3 colunas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mt-[60px] hidden lg:flex ">
              {/* Coluna 1 */}
              <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c01.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B]  mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Autoestima
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Conexão com sua essência, reconhecendo, valorizando, e amando
                  ser quem é.
                </h2>
              </div>

              <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c02.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Autoconfiança
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Ativar a fé em si mesma e assumir seu lugar de força, sem se
                  desconectar da sua essência feminina.
                </h2>
              </div>

              <div className="text-left  w-full rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c03.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Sensualidade
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Práticas para destravar e expandir sua sensualidade para
                  manter essa energia sempre ativa na sua vida
                </h2>
              </div>
            </div>

            {/* segnda linha */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mt-[20px] hidden lg:flex ">
              {/* Coluna 1 */}
              <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c04.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Relacionamentos Saudáveis
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Métodos certeiros para atrair as pessoas certas, dar limites,
                  nutrir e manter boas relações
                </h2>
              </div>

              <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c05.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Independência Emocional
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Libertar-se da prisão das relações falidas que não agregam à
                  sua vida e sugam seu potencial.
                </h2>
              </div>

              <div className="text-left  w-full rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c06.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Família
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Equilibrar a relação com seus parceiros, seus filhos, e seus
                  pais, dividindo responsabilidades e priorizando suas batalhas.
                </h2>
              </div>
            </div>
            {/* fim segunda linha */}

            {/* segnda linha */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mt-[20px] hidden lg:flex ">
              {/* Coluna 1 */}
              <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c07.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Mentalidade de Abundância
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Limpar suas crenças limitantes, silenciar suas vozes
                  sabotadores e colocar o universo para trabalhar a seu favor
                </h2>
              </div>

              <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c08.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Ambiência
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Construir ambientes físicos, mentais e emocionais favoráveis
                  ao seu progresso.
                </h2>
              </div>

              <div className="text-left  w-full rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] lg:p-[50px] pt-[40px] pb-[40px]">
                <Image
                  src="/imgpgvendas/c09.webp"
                  alt="Imagem 1"
                  width={277}
                  height={435}
                  className="lg:w-[130px] w-[100px]"
                  loading="lazy"
                />
                <h2
                  className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Prosperidade Financeira
                </h2>
                <h2
                  className="text-[18px] lg:text-[16px] text-[#fff]"
                  style={{ fontFamily: "'Epilogue', serif" }}
                >
                  Desbloquear tudo o que te impede hoje de alcançar seu sucesso
                  financeiro, profissional e material.
                </h2>
              </div>
            </div>
            {/* fim segunda linha */}

            <div className="lg:hidden md:hidden flex flex-col mx-auto ">
              <CarrosselSection />
            </div>

            <div className="mx-auto flex items-center justify-center lg:mt-[60px]">
              <button
                className="bg-[#179B7E] justify-center lg:mb-[0]  text-[#fff] lg:block md:block  items-center flex  mt-[20px] text-center py-[10px] px-1 rounded-[4px] max-w-[450px] lg:h-[64px] w-full  text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] lg:w-full md:w-[500px] w-[146px] font-semibold hover:scale-125 transition duration-500 cursor-pointer"
                href=""
                onClick={handleClickScroll}
              >
                QUERO SER BEM RESOLVIDA
              </button>
            </div>
          </div>

          {/* fim s2 */}
        </Container>
      </div>

      {/* Fim S1 */}
    </div>
  );
}
