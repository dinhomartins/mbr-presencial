import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";


import BtnWhatsMeteoro from '../BtnWhatsMeteoro'

const btnOrg = BtnWhatsMeteoro()


export default function ORGCapSection3FundoRed() {


  const handleClickScroll = () => {
    const element = document.getElementById("oferta");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="   bg-black lg:-mt-[120px] pb-[60px] lg:pb-[0] lg:-mb-[100px]  z-1 relative">
      <Container>
        {/* Fim primeira seção */}
        <div className="flex flex-col items-center justify-center lg:w-[1000px] mx-auto px-[20px] bg-[#FA4335] lg:rounded-tl-[100px] lg:rounded-tr-[50px] lg:rounded-br-[100px] lg:rounded-bl-[50px] rounded-[20px] lg:py-[40px]">
          {/* coluna da esquerda */}
          <div className=" w-full mx-auto  lg:mt-[0] mt-[40px]">
            <div className="flex flex-wrap flex-col items-center content-center ">
              
                <h3
                  className=" text-[#fff]  text-[26px] text-center lg:text-[34px] lg:leading-[38px]  mx-[20px] lg:mt-[20px] tracking-[2px] lg:tracking-[1px]  leading-[30px]   "
                  style={{
                    fontFamily: "'Epilogue', 'Libre Caslon Text', serif",
                  }}
                >
                 Como participar <b className="italic">de graça?</b>
                </h3>

                <p className="font-['Lato']  text-[#fff] text-[18px] lg:text-[20px] leading-[26px] lg:mx-[150px] mt-[20px] lg:mt-[10px] text-center">
                Esta live terá conteúdo exclusivo e inédito. Terá exibição única ao vivo. Ou seja, se você perder, não terá mais como acessar gratuitamente este conhecimento. Para garantir sua vaga, siga os passos abaixo: </p>
                
                {/* grid */}
                <div className="flex mt-[40px] lg:flex-row flex-col ">
                    <div className="lg:w-[250px] flex flex-col items-center">
                    <Image
                      className="mx-auto lg:mx-0 w-[119px] lg:w-[119px]   "
                      src={"/imgpgvendas/d1.webp"}
                      width={526}
                      height={72}
                      alt="Bem resolvida"
                      loading="lazy"
                    />
                    <p className="font-['Lato']  text-[#fff] text-[18px] lg:text-[20px] leading-[26px]  mt-[20px] lg:mt-[10px] text-center"> 
                    Entre no grupo VIP do WhatsApp, por onde receberá o link da live</p>
                    </div>


                    <div className="lg:w-[250px] mt-[40px] lg:mt-[0] flex flex-col items-center">
                    <Image
                      className="mx-auto lg:mx-0 w-[119px] lg:w-[119px]   "
                      src={"/imgpgvendas/d2.webp"}
                      width={526}
                      height={72}
                      alt="Bem resolvida"
                      loading="lazy"
                    />
                     <p className="font-['Lato']  text-[#fff] text-[18px] lg:text-[20px] leading-[26px]  mt-[20px] lg:mt-[10px] text-center"> 
                      Quinta-feira, dia 18/04/2024, às 20h00, acesse o link e assista à live</p>
                    </div>


                    <div className="lg:w-[250px] flex mt-[40px] lg:mt-[0] flex-col items-center">
                    <Image
                      className="mx-auto lg:mx-0 w-[119px] lg:w-[119px]  "
                      src={"/imgpgvendas/d3.webp"}
                      width={526}
                      height={72}
                      alt="Bem resolvida"
                      loading="lazy"
                    />
                     <p className="font-['Lato'] lg:mx-[20px] text-[#fff] text-[18px] lg:text-[20px] leading-[26px]  mt-[20px] lg:mt-[10px] text-center"> 
                    Cadastre-se no formulário deste site</p>
                    </div>
                  
                </div>

               <div className="lg:mt-[40px] lgw-[440px] -mb-[20px] lg:-mb-[70px] mx-auto flex items-center justify-center">
               <BtnWhatsMeteoro />
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
