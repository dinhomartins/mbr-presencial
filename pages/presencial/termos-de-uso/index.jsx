import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";



export default function Termosdeuso() {
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
      <div className="flex items-center justify-center lg:h-screen bg-[url('/imgpgvendas/bgobrigado.webp')] bg-cover bg-no-repeat mx-auto py-[40px] px-[20px]">
        <div className="w-full max-w-[1100px] lg:h-full flex flex-col items-center justify-center">

          <div className="flex flex-col  justify-center lg:h-full">
            <h1 className="text-[#fff] lg:text-[32px] text-[20px]  font-bold mb-[40px]">TERMO DE USO DE IMAGEM E SOM
            </h1>
            <p className="text-[#fff] lg:text-[18px]"><b>AUTORIZO</b> o uso de minha imagem em todo e qualquer material entre imagens de vídeo, 
            fotos e documentos, captado durante o Encontro Bem Resolvida que acontecerá nos dias 03,04 e 05 de Maio, 
            para ser utilizada nas peças de comunicação que será veiculada em redes sociais e propagandas futuras do evento. 
            A presente autorização é concedida a título gratuito, abrangendo o uso da imagem acima mencionada em todo território 
            nacional e internacional, das seguintes formas: (I) home page; (II) quaisquer mídias eletrônicas (vídeo-tapes, 
            vídeos para redes sociais em geral, televisão, cinema, entre outros).<br></br><br></br>


              Fica ainda <b>autorizada</b>, de livre e espontânea vontade, para os mesmos fins, a cessão de direitos da veiculação 
              das imagens não recebendo para tanto qualquer tipo de remuneração.<br></br><br></br>


              Por esta ser a expressão da minha vontade declaro que autorizo o uso acima descrito sem que nada haja a ser 
              reclamado a título de direitos conexos à minha imagem ou a qualquer outro e confirmo via aceite de termo em typeform 
              por meio do link  
              <a href="https://catiadamasceno.typeform.com/bemresolvida" target="_blank" rel="noopener noreferrer">
                {" "} <b>catiadamasceno.typeform.com/bemresolvida</b>
              </a>.
            </p>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>

  );
}
