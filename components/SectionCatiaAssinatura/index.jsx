import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";

export default function SectionCatiaAssinatura() {
  return (
    <div className=" text-white  pt-[25px] lg:pt-[35px]   lg:bg-[#000] bg-[#000] bg-cover bg-no-repeat">
      <Container>
        <div className="lg:flex flex-col justify-center items-center max-w-[1179px] mx-auto pb-[40px]  lg:pt-[200px]">
          <div className="lg:flex flex-col justify-center items-center max-w-[909px] mx-auto ">
            <Image
              className="mx-auto lg:mx-0 "
              src={"/imgpgvendas/catiav2.webp"}
              width={1196}
              height={600}
              alt="Bem resolvida"
              loading="lazy"
            />
            <Image
              className="mx-auto lg:mx-0 w-[300px] lg:w-[534px]"
              src={"/imgpgvendas/queme.webp"}
              width={44}
              height={32}
              alt="Bem resolvida"
              loading="lazy"
            />
          </div>

          <div className="w-full px-2 lg:px-[130px]  max-w-[1179px] lg:mt-[50px] mt-[40px]">
            <p className="text-[20px]">
              <b>Mãe, esposa, mulher e empreendedora. </b>Pioneira no Brasil com
              a Ginástica Íntima (pompoarismo),  dona do maior canal de Youtube
              sobre sexualidade e relacionamento do mundo, que soma mais de 10
              milhões de inscritos. Impacta diariamente mais de 30 milhões de
              mulheres na internet com seus conteúdos, cursos, teatros e
              imersões presenciais, que  têm ajudado mulheres a se desenvolverem
              sua autoestima, sexualidade, seus relacionamentos e sua
              mentalidade de abundância e prosperidade. A serem Bem Resolvidas
              em todos os aspectos fundamentais das suas vidas!
            </p>
            <br></br>
            <br></br>
            <p className="text-[#E0A45B] text-[24px] font-bold">
              {" "}
              Cátia Damasceno na Mídia
            </p>

            <p className="text-[20px]">
              Somando mais de 20 anos de carreira, Cátia Damasceno já participou
              em quadros de destaque de programas de TV da Rede Globo e outras
              grandes emissoras, juntamente com dezenas de entrevistas para
              jornais e revistas Brasil afora e segue espalhando meu
              conhecimento em Podcasts de renome.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:mt-[40px]">
            {/* Coluna 1 */}
            <div className="p-4">
            <Image
                className="mx-auto lg:mx-0 w-[200px] lg:w-[234px]"
                src={"/imgpgvendas/jo.webp"}
                width={44}
                height={32}
                alt="Bem resolvida"
                loading="lazy"
              />
            </div>

            <div className="p-4"> <Image
                className="mx-auto lg:mx-0 w-[200px] lg:w-[234px]"
                src={"/imgpgvendas/danilo.webp"}
                width={44}
                height={32}
                alt="Bem resolvida"
                loading="lazy"
              /></div>
           
            {/* Coluna 3 */}
            <div className=" p-4"><Image
                className="mx-auto lg:mx-0 w-[200px] lg:w-[234px]"
                src={"/imgpgvendas/podpah.webp"}
                width={44}
                height={32}
                alt="Bem resolvida"
                loading="lazy"
              /></div>
            
            {/* Coluna 4 */}
            <div className=" p-4">
            <Image
                className="mx-auto lg:mx-0 w-[200px] lg:w-[234px]"
                src={"/imgpgvendas/livro.webp"}
                width={44}
                height={32}
                alt="Bem resolvida"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
