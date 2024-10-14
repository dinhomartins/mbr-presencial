import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";
import FormProximoEvento from '../../../components/FormProximoEvento'

import { useEffect } from 'react';
import { useRouter } from 'next/router'


export default function Obrigado() {
  const handleClickScroll = () => {
    const element = document.getElementById("oferta");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const font16 = "lg:text-[16px]"; // Defina o tamanho da fonte desejado

  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const newUrl = `https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-media/?${queryParams.toString()}`;
    router.push(newUrl);
  }, [router])

  return (
<div>
  <div className="flex items-center justify-center h-screen bg-[url('/imgpgvendas/bgobrigado.webp')] bg-cover bg-no-repeat mx-auto">
    <div className="w-full max-w-[1100px] h-full flex flex-col items-center justify-center">

      <div className="flex flex-col items-center justify-center h-full">
        
        <Image
          className="w-[300px] lg:w-[450px]"
          src={"/imgpgvendas/logobemresolvida.webp"}
          width={526}
          height={72}
          alt="Bem resolvida"
          loading="lazy"
        />
        <span className="text-[#fff] text-center lg:mx-[200px] text-[20px] lg:text-[30px] lg:mt-[20px] mt-[20px] lg:mb-[20px]">
            Obrigado por se cadastrar, em breve você receberá mais informações sobre o evento.
            </span>


      </div>
    </div>
  </div>
</div>

  );
}
