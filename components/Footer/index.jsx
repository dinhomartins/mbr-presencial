import React from 'react';
import Image from 'next/image'; // Importe o componente Image do Next.js
import Container from "@/components/Container";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white p-4">
        <Container>
      {/* Primeira Linha com 3 Colunas */}
      <div className="flex flex-wrap justify-between items-center">
        {/* Primeira Coluna - Imagem */}
        <div className="w-full md:w-1/3 p-2 ">
          <Image src="/imgpgvendas/bemresolvida.webp"  className='w-[250px] mx-auto lg:mx-[0] md:mx-[0]' alt="Imagem" width={100} height={100} />
        </div>

        {/* Segunda Coluna - Texto Centralizado */}
        <div className="w-full md:w-1/3 p-2 text-center">
          <p>Mistermind© 2023 Todos os Direitos Reservados</p>
        </div>

        {/* Terceira Coluna - Texto e 3 Imagens */}
        <div className="w-full md:w-1/3 p-2 flex flex-col items-center justify-end lg:flex-row">
          <p className=' text-[14px] lg:mr-[10px] md:mr-[10px] lg:mt-[20px] md:mt-[20px]'>Acompanhe as novidades</p>
          <div className="flex mt-[20px]">
              <a href="https://www.instagram.com/catiadamasceno/" target="_blank" rel="noopener noreferrer">
              <Image  src="/imgpgvendas/insta.webp" alt="Imagem 1" className='lg:mr-[10px] md:mr-[10px]  mx-[10px] lg:mx-[0]' width={30} height={30} />
              </a>
           <a href="https://www.facebook.com/mulheresbemresolvidas/" target="_blank" rel="noopener noreferrer">
           <Image src="/imgpgvendas/facebook.webp" alt="Imagem 2" className='lg:mr-[10px] md:mr-[10px]  mx-[10px] lg:mx-[0]' width={30} height={30} />
           </a>
            <a href="https://www.youtube.com/@catiadamasceno" target="_blank" rel="noopener noreferrer"></a>
            <Image src="/imgpgvendas/youtube.webp" alt="Imagem 3" className='lg:mr-[10px] md:mr-[10px]  mx-[10px] lg:mx-[0]' width={30} height={30} />
          </div>
        </div>
      </div>

      {/* Segunda Linha com 2 Colunas */}
      <div className="flex flex-wrap justify-between mt-4 ">
        {/* Primeira Coluna - 3 Textos em Linha */}
        <div className="w-full md:w-1/2 p-2 flex ">
          <span className='lg:mr-[40px] text-[14px]'>Suporte</span>
          <span className='lg:mr-[40px] text-[14px]' >Termo de uso</span>
          <span className='lg:mr-[40px] text-[14px]'>Política de privacidade</span>
        </div>

        {/* Segunda Coluna - Texto "Voltar ao Início" */}
        <div className="w-full md:w-1/2 p-2 flex lg:justify-end md:justify-end justify-center">
          <a href="" onClick={scrollToTop} className="flex items-center">
            <span className="mr-2">Voltar ao Topo</span>
            <Image src="/imgpgvendas/voltar.webp" alt="Top" width={20} height={20} />
          </a>
        </div>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
