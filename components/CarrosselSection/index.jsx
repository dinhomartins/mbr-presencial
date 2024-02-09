import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const customDotStyles = {
    backgroundColor: '#E0A45B', // Cor desejada para os dots
    width: '8px', // Largura dos dots
    height: '8px', // Altura dos dots
    margin: '0 5px', // Espaçamento entre os dots
    borderRadius: '50%', // Borda arredondada
};


export default function CarrosselSection() {
    return (
        <div className="flex flex-col">
            <Carousel responsive={responsive}
            
                customDot={customDotStyles}
                ssr={true}
                autoPlaySpeed={1000}
                transitionDuration={500}

            >
                <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px] lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c01.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                        loading="lazy"
                    />
                    <h2 className="text-[24px] text-[#E0A45B]  mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}   >
                        Autoestima
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Conexão com sua essência, reconhecendo, valorizando, e amando ser quem é.
                    </h2>
                </div>


                <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px]  lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c02.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                        loading="lazy"
                    />
                    <h2 className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Autoconfiança
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Ativar a fé em si mesma e assumir seu lugar de força, sem se desconectar da sua essência feminina.
                    </h2>
                </div>

                <div className="text-left  w-full rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px]  lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c03.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                        loading="lazy"
                    />
                    <h2 className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Sensualidade
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Práticas para destravar e expandir sua sensualidade para manter essa energia sempre ativa na sua vida
                    </h2>
                </div>

                <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px]  lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c04.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                    />
                    <h2 className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Relacionamentos
                        Saudáveis
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Métodos certeiros para atrair as pessoas certas, dar limites, nutrir e manter boas relações
                    </h2>
                </div>

                <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px]  lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c05.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                        loading="lazy"
                    />
                    <h2 className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Independência
                        Emocional
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Libertar-se da prisão das relações falidas que não agregam à sua vida e sugam seu potencial.
                    </h2>
                </div>

                <div className="text-left  w-full rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px]  lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c06.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                        loading="lazy"
                    />
                    <h2 className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Família
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Equilibrar a relação com seus parceiros, seus filhos, e seus pais, dividindo responsabilidades e priorizando suas batalhas.
                    </h2>
                </div>


                <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px]  lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c07.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                        loading="lazy"
                    />
                    <h2 className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Mentalidade de
                        Abundância
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Limpar suas crenças limitantes, silenciar suas vozes sabotadores e colocar o universo para trabalhar a seu favor
                    </h2>
                </div>

                <div className="text-left w-full  rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px]  lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c08.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                        loading="lazy"
                    />
                    <h2 className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Ambiência
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Construir ambientes físicos, mentais e emocionais favoráveis ao seu progresso.
                    </h2>
                </div>

                <div className="text-left  w-full rounded-lg lg:p-[20px] bg-[#131211]  hover:bg-[#131211] p-[40px]  lg:p-[50px] pt-[40px] pb-[40px]">
                    <Image src="/imgpgvendas/c09.webp" alt="Imagem 1" width={277} height={435}
                        className="lg:w-[130px] w-[100px]"
                        loading="lazy"
                    />
                    <h2 className="text-[24px] text-[#E0A45B] lg:mt-[20px] mt-[20px]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Prosperidade
                        Financeira
                    </h2>
                    <h2 className="text-[18px] lg:text-[16px] text-[#fff]" style={{ fontFamily: "'Epilogue', serif" }}>
                        Desbloquear tudo o que te impede hoje de alcançar seu sucesso financeiro, profissional e material.
                    </h2>
                </div>


            </Carousel>;
        </div>
    );
}



