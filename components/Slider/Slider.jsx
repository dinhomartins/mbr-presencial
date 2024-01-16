import React, { useState } from 'react';

function ImageSwitcher() {
  const [activeImage, setActiveImage] = useState(1);

  const handleButtonClick = (imageNumber) => {
    setActiveImage(imageNumber);
  };

  return (
    <div className='flex  lg:justify-end lg:flex-col  lg:items-end mt-[40px]' >
      <div className=''>
      <div className="flex  space-x-4 w-[300px] ">
        {/* Botões */}
        <button onClick={() => handleButtonClick(1)}>
          <img src="/imgpgvendas/03.webp" alt="Botão 1" className={activeImage === 1 ? 'opacity-100' : 'opacity-20'} />
        </button>
        <button onClick={() => handleButtonClick(2)}>
          <img src="/imgpgvendas/04.webp" alt="Botão 2" className={activeImage === 2 ? 'opacity-100' : 'opacity-20'} />
        </button>
        <button onClick={() => handleButtonClick(3)}>
          <img src="/imgpgvendas/05.webp" alt="Botão 3" className={activeImage === 3 ? 'opacity-100' : 'opacity-20'} />
        </button>
      </div>

      {/* Imagem Ativa */}
      <div className="mt-4  lg:mr-[60px] flex ">
        {activeImage === 1 && <img src="/imgpgvendas/26conteudo.webp" alt="dia26" className='w-[300px]' />}
        {activeImage === 2 && <img src="/imgpgvendas/27conteudo.webp" alt="dia27" className='w-[300px]' />}
        {activeImage === 3 && <img src="/imgpgvendas/27conteudo.webp" alt="dia28" className='w-[300px]'/>}
      </div>
      </div>
    </div>
  );
}

export default ImageSwitcher;
