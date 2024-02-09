import React from "react";
import dynamic from 'next/dynamic';
import Container from "@/components/Container";
// import ImageSwitcher from '../Slider/Slider'
import Image from "next/image";
// import Acordeon from "../Accordeon";
// import CarouselComponent from '../Carrossel'
import SubFooter from "../SubFooter";
import Footer from "../Footer";
import { useUtmParserSales } from '../HotmartTracking'
import { useUtmParserSalesOuro } from '../HotmartTrackingOuro'
import { useUtmParserSalesDiamante } from "../HotmartTrackingDiamante";

// Componentes importados dinamicamente
const ImageSwitcher = dynamic(() => import('../Slider/Slider'), { ssr: false });
const Acordeon = dynamic(() => import('../Accordeon'), { ssr: false });
const CarouselComponent = dynamic(() => import('../Carrossel'), { ssr: false });


function VendasWhats() {

    const utmPrata = useUtmParserSales()
    const utmOuro = useUtmParserSalesOuro()
    const utmDiamante = useUtmParserSalesDiamante()

    const handleClickScroll = () => {
        const element = document.getElementById('oferta');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }


    };

    return (
        <div className="bg-[#000]  text-white min-h-screen   " id="topo">





            <div className="lg:bg-[url('/imgpgvendas/bg1v3desk.webp')] bg-[url('/imgpgvendas/bg1mobilev2.webp')] pb-[40px] pt-[25px] lg:pt-[35px] lg:bg-bottom md:bg-bottom bg-cover bg-no-repeat">
                <Container>
                    <div className="lg:flex flex-col justify-center items-center max-w-[1179px] mx-auto ">
                        <Image
                            className="mx-auto lg:mx-0 w-[200px] lg:w-[526px] lg:h-[72px]"
                            src={"/imgpgvendas/logo.webp"}
                            width={526}
                            height={72}
                            alt="Bem resolvida"
                        />
                        <Image
                            className="mx-auto lg:mx-0 w-[170px] lg:w-[350px]"
                            src={"/imgpgvendas/data.webp"}
                            width={450}
                            height={112}
                            alt="Data"
                        />
                        <h2 className="text-center lg:text-left text-[14px] lg:text-[20px] text-[#A7A0A0] font-['Archivo'] lg:mt-[10px] mt-[10px] " style={{ fontFamily: "'Archivo', serif" }}>
                            EVENTO PRESENCIAL EM BRASÍLIA
                        </h2>
                    </div>



                    {/* lado esquerdo */}
                    <div className="flex flex-col lg:flex-row lg:text-left relative lg:px-[40px]  mx-auto lg:mt-[40px]">
                        <div className="lg:w-1/2 md:w-1/2 text-center lg:text-left md:text-left ">
                            <div className=" flex flex-col lg:text-left relative  max-w-[1100px] mx-auto lg:mt-[10px] lg:pr-[60px] pr-[] ">

                                <h3 className="font-['Libre Caslon Text'] text-[20px]  lg:text-[28px] mt-[15px] lg:mt-0 tracking-[2px] lg:tracking-[1px]  leading-[26px]   lg:leading-[34px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                                    Toda mulher pode ser Bem Resolvida, livre e independente, mas muitas se perdem ao longo da jornada. Descubra o caminho para uma vida bem resolvida.
                                </h3>
                                <h4 className="font-['Lato'] text-[16px] text-[#A7A0A0] lg:text-[20px] lg:mt-[20px] mt-[10px] lg:mt-0 tracking-[2px] lg:tracking-[1px] lg:leading-[26px] leading-[20px]" style={{ fontFamily: "'Lato', serif" }}>
                                    Três dias de exercícios práticos, desbloqueios emocionais e transformações profundas para você iniciar a sua nova jornada.
                                </h4>

                                <button
                                    className="bg-[#DC8F60]  justify-center hidden lg:block   md:block  items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px] max-w-[600px] lg:h-[64px] w-full  text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] lg:w-full md:w-[500px] w-[146px] font-semibold "
                                    href=""
                                    onClick={handleClickScroll}
                                >

                                    <div className="flex items-center justify-center w-full">
                                        <p className="text-center lg:mr-[20px]">
                                            QUERO SER UMA MULHER BEM RESOLVIDA
                                        </p>
                                        <Image
                                            src="/imgpgvendas/whatsapp.webp"
                                            alt=""
                                            width="17"
                                            height="1"
                                            loading="lazy"
                                            className="lg:w-[20px]"
                                        />
                                    </div>
                                </button>
                                <h4 className="font-['Lato']  text-[16px]  lg:text-[20px] lg:mt-[20px] mt-[10px] lg:mt-0 tracking-[2px] lg:tracking-[1px] lg:leading-[26px]" style={{ fontFamily: "'Lato', serif" }}>
                                    Assista ao vídeo e entenda <b>o que você vai encontrar no evento</b>
                                </h4>
                            </div>
                        </div>


                        {/* lardo direito */}
                        <div className="lg:w-1/2 md:w-1/2 text-center lg:text-left md:text-left">
                            {/* video */}
                            <div className="lg:flex gap-4 xl:gap-[34px] justify-center mt-[20px]  max-w-[1196px] mx-auto">
                                <iframe
                                    autoPlay={true}
                                    className="aspect-video w-full rounded lg:rounded-[10px] "
                                    src="https://www.youtube.com/embed/J9IpA6m7ebI"
                                    onPlay={true}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>

                                <button
                                    className="bg-[#DC8F60]  lg:hidden md:hidden justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px] max-w-[600px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] lg:w-[700px] md:w-[400px]  w-[146px] font-semibold hover:scale-125 transition duration-500 cursor-pointer"
                                    href=""
                                    onClick={handleClickScroll}
                                >
                                    <div className="flex items-center justify-center w-full">
                                        <p className="text-center lg:mr-[20px]">
                                            QUERO SER UMA MULHER BEM RESOLVIDA
                                        </p>
                                        <Image
                                            src="/imgpgvendas/whatsapp.webp"
                                            alt=""
                                            width="17"
                                            height="1"
                                            loading="lazy"
                                            className="lg:w-[20px]"
                                        />
                                    </div>
                                </button>
                                <h4 className="font-['Lato'] hidden lg:hidden md:hidden text-[16px]  lg:text-[20px] lg:mt-[20px] mt-[10px] lg:mt-0 tracking-[2px] lg:tracking-[1px] lg:leading-[26px]" style={{ fontFamily: "'Lato', serif" }}>
                                    Assista ao vídeo e entenda <b>o que você vai encontrar no evento</b>
                                </h4>

                            </div>
                            {/*fIM video */}
                        </div>
                    </div>

                </Container>
            </div>










            {/* area oculta */}
            <div className="lg:bg-[url('/imgpgvendas/bg1v2desk.webp')] bg-[url('/imgpgvendas/bg1mobilev2.webp')]  pt-[25px] lg:pt-[35px] lg:bg-bottom md:bg-bottom bg-cover bg-no-repeat lg:hidden: md:hidden hidden">
                <Container>
                    <div className="lg:flex flex-col justify-center items-center max-w-[1179px] mx-auto ">
                        <Image
                            className="mx-auto lg:mx-0 w-[250px] lg:w-[526px] lg:h-[72px]"
                            src={"/imgpgvendas/logo.webp"}
                            width={526}
                            height={72}
                            alt="Bem resolvida"
                        />
                        <Image
                            className="mx-auto lg:mx-0 w-[190px] lg:w-[350px]"
                            src={"/imgpgvendas/data.webp"}
                            width={450}
                            height={112}
                            alt="Data"
                        />
                        <h2 className="text-center lg:text-left text-[18px] text-[#fff] font-['Archivo'] lg:mt-[10px] mt-[10px] lg:text-[22px]" style={{ fontFamily: "'Archivo', serif" }}>
                            EVENTO PRESENCIAL
                        </h2>
                    </div>
                    <div className=" flex flex-col lg:text-left relative  max-w-[1100px] mx-auto lg:mt-[10px] lg:px-[60px] ">

                        <h3 className="font-['Libre Caslon Text'] lg:mx-20 text-[20px] text-center lg:text-[30px] mt-[15px] lg:mt-0 tracking-[2px] lg:tracking-[1px]  leading-[26px]   lg:leading-[36px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                            Um movimento de mulheres que desejam revolucionar a autoestima, conquistar liberdade financeira e resgatar a melhor versão de si mesmas
                        </h3>
                        <h4 className="font-['Lato'] text-[16px] text-center lg:text-[20px] lg:mt-[20px] mt-[10px] lg:mt-0 tracking-[2px] lg:tracking-[1px] lg:leading-[26px]" style={{ fontFamily: "'Lato', serif" }}>
                            Assista ao vídeo e entenda <b>o que você vai encontrar no evento</b> presencial em Brasília:
                        </h4>
                    </div>

                    {/* video */}
                    <div className="lg:flex gap-4 xl:gap-[34px] justify-center mt-[20px] lg:mt-10 max-w-[1196px] mx-auto">
                        <iframe
                            autoPlay={true}
                            className="aspect-video w-full rounded lg:rounded-[10px] "
                            src="https://www.youtube.com/embed/J9IpA6m7ebI"
                            onPlay={true}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                    {/*fIM video */}

                    <div className=" flex flex-col  flex-col justify-center items-center lg:text-left relative  max-w-[1100px] mx-auto lg:mt-[20px] lg:px-[60px] ">
                        <h4 className="font-['Lato'] text-[16px] text-center lg:text-[20px] mt-[20px] lg:mt-0 tracking-[2px] lg:tracking-[1px] lg:leading-[26px] leading-[20px]  max-w-[739px] lg:px-[20px]" style={{ fontFamily: "'Lato', serif" }}>
                            Clique no botão abaixo para garantir o seu ingresso com preço promocional de pré-venda e <b>participar deste movimento de mulheres:</b>
                        </h4>
                        <button
                            className="bg-[#DC8F60] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px] max-w-[700px] lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] lg:w-[700px] md:w-[700px] w-[146px] font-semibold hover:scale-125 transition duration-500 cursor-pointer"
                            href="" onClick={handleClickScroll}
                        >
                            QUERO PARTICIPAR DO BEM-RESOLVIDA
                        </button>
                    </div>
                </Container>
            </div>
            {/*fim area oculta */}


            <Container>
                {/* Fim primeira seção */}
                <div className="flex flex-col items-center justify-center min-h-screen ">


                    {/* Div com largura máxima e duas colunas */}
                    <div className="max-w-[1196px] w-full mx-auto lg:p-4 lg:pt-[80px] mt-[60px]">
                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 lg:pr-[100px]  ">
                                <h2 className="text-xl font-bold font-['Libre Caslon Text'] lg:text-[48px] " style={{ fontFamily: "'Libre Caslon Text', serif" }}>O que é o
                                </h2>
                                <h2 className="text-xl font-bold text-[#DB8E60] font-['Libre Caslon Text'] lg:text-[48px] lg:mt-[45px]   " style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                                    Bem Resolvida?</h2>
                                <p className="lg:mt-[40px] mt-[20px] lg:text-[20px]">Eu, Cátia Damasceno, quero compartilhar com você tudo que fiz para chegar à vida que tenho hoje, tanto no desenvolvimento pessoal quanto financeiro. Eu quero te dar o caminho das pedras para conquistar liberdade financeira e focar em sua melhor versão: na minha vez, não tinha ninguém pra ensinar. E dessa vez, estarei aqui para te ensinar como começar do zero.
                                    <br></br><br></br>
                                    Você vai encontrar palestras, rodas de conversa, além de um grupo de mulheres com os mesmos objetivos: conquistar a independência emocional e financeira e encontrar forças para correr atrás do que você quer (e precisa).
                                    <br></br><br></br>
                                    Desde o início da minha carreira o “Bem-Resolvida” esteve presente na minha vida… Depois de superar um casamento falido e uma vida financeira destruída, eu percebi que o maior poder que uma mulher pode ter em mãos é o poder da escolha.

                                </p>
                            </div>
                            <div className="w-full md:w-1/2 px-2 lg:pr-[100px]">
                                <div className="text-center lg:text-left relative">
                                    <span className="hidden lg:block bg-[#E1B16F] h-[55px] w-[2px] absolute bottom-2 -left-5"></span>
                                    <h3 className="font-['archivo'] text-[#A7A0A0] text-left text-[16px] lg:text-[18px] mt-[26px] lg:mt-0 tracking-[2px] lg:tracking-[5px] font-semibold">
                                        É um evento presencial, que vai acontecer nos dias 03, 04 e 05 de maio em Brasília.
                                    </h3>
                                </div>
                                <p className="lg:mt-[55px] mt-[20px] lg:text-[20px]">Não tem preço experimentar a liberdade de decidir a própria vida: o seu futuro, o futuro que você quer dar para os seus filhos, os sonhos que você quer tentar, as portas que você quer tentar abrir. A liberdade de escolher quem você quer que esteja ao seu lado.
                                    <br></br><br></br>
                                    Quantas de nós não estamos presas em incertezas, em inseguranças, em problemas emocionais que nos fazem viver uma vida tão mais ou menos que quando deitamos a cabeça no travesseiro à noite sonhamos com um futuro melhor, mas não fazemos ideia de como chegar a esse futuro? Ou pior, até sabemos como chegar lá, mas falta coragem.
                                    <br></br><br></br>
                                    Quantas de nós não temos forças para dar um basta a uma situação desagradável, seja porque estamos insatisfeitas com o rumo da nossa vida ou presas em um relacionamento abusivo e sentimos que não existe outra alternativa?
                                    <br></br><br></br>
                                    A verdade é que sempre existe outra alternativa.

                                </p>

                                <p className="text-[#DB8E60] lg:text-[20px]">E no Bem-Resolvida você vai descobrir isso.</p>
                            </div>
                        </div>
                    </div>
                    {/*FIM Div com largura máxima e duas colunas */}

                    {/* Div 4 colunas */}
                    <div className="max-w-[1196px] w-full mx-auto lg:p-4 lg:pt-[80px] mt-[60px] text-center lg:pb-[80px]">
                        <h2 className="text-xl hidden lg:block lg:text-center text-left mb-[40px] font-bold font-['Libre Caslon Text'] text-[24px] lg:text-[48px] " style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                            Esse evento <span className="text-[#DB8E60]">é para você que...</span>

                        </h2>
                        <h2 className="text-[24px] lg:hidden lg:text-center text-left mb-[40px] font-bold font-['Libre Caslon Text'] text-[24px] lg:text-[48px] " style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                            Esse evento <span className="text-[#DB8E60]"><br></br>é para você que...</span>

                        </h2>
                        <h3 className="font-['Libre Caslon Text'] lg:mx-20 text-[18px] text-center lg:text-[30px] mt-[26px] lg:mt-0 tracking-[2px] lg:tracking-[1px]     lg:leading-[36px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}></h3>

                        {/* 4 colunas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:mt-[60px] hidden lg:flex ">
                            {/* Coluna 1 */}
                            <div className="text-left   rounded-lg lg:p-[20px]  ">
                                <Image src="/imgpgvendas/c1v2.webp" alt="Imagem 1" width={277} height={435} />

                            </div>

                            {/* Coluna 2 */}
                            <div className="text-left  rounded-lg lg:p-[20px]">
                                <Image src="/imgpgvendas/c2v2.webp" alt="Imagem 1" width={277} height={435} />
                            </div>

                            {/* Coluna 3 */}
                            <div className="text-left   rounded-lg lg:p-[20px]">
                                <Image src="/imgpgvendas/c3v2.webp" alt="Imagem 1" width={277} height={435} />
                            </div>

                            {/* Coluna 4 */}
                            <div className="text-left   rounded-lg lg:p-[20px]">
                                <Image src="/imgpgvendas/c4v2.webp" alt="Imagem 1" width={277} height={435} />
                            </div>
                        </div>

                        <div className="lg:hidden">
                            <CarouselComponent />
                        </div>
                    </div>
                </div>
            </Container>














            {/*  Ofertas */}


            <div className="bg-[#000] lg:pt-[60px] text-white  pt-[60px] lg:pt-[35px] lg:bg-[url('/imgpgvendas/bg3deskv2.webp')] bg-[url('/imgpgvendas/b3mobilev2.webp')] bg-top bg-cover bg-no-repeat">
                <Container>
                    {/* pai em coluna */}
                    <div className="flex flex-col">
                        <div className="max-w-[1196px] w-full mx-auto">
                            {/* Imagem Centralizada */}
                            <div className="text-center">
                                {/* Substitua 'path_to_image' pelo caminho da sua imagem */}
                                <img src="/imgpgvendas/ingressosv2.webp" alt="Imagem Centralizada" className="mx-auto " />

                                {/* Título Centralizado */}
                                <h1 className="text-2xl font-bold my-4 lg:text-[42px] lg:mt-[40px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>Valor da Experiência</h1>


                                {/* Texto Centralizado */}
                                <p className="mb-8 lg:text-[24px] font-normal" style={{ fontFamily: "'Lato', serif" }}>O espetáculo 100% presencial que vai transformar sua vida</p>
                            </div>




                            {/* Três Colunas com Conteúdo Diferente */}

                            {/* CARDs */}
                            <div className="  flex flex-col lg:flex-row  " id="oferta">
                                {/* Coluna 1 */}
                                <div className="  lg:w-1/3  text-center lg:p-4   ">
                                    <div className="bg-[#000] text-center pt-[40px] md:pt-[40px] lg:pb-[60px] pb-[40px] p-4 lg:px-[40px] lg:pt-[60px] rounded-lg">
                                        <img src="/imgpgvendas/pacotepratav2.webp" alt="Pacote experience" className="mx-auto md:w-[124px] lg:w-[124px]" />
                                        <hr className="my-2 divide-stone-300 lg:mt-[24px] lg:mb-[20px] mt-[40px]" />

                                        <div className="flex flex-start  lg:pt-[10px]  md:pt-[20px] pt-[10px] mt-[30px]">
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <span className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px] ml-[10px] md:ml-[10px]" style={{ fontFamily: "'Lato', serif" }}>Acesso aos 3 <br></br>dias de evento</span>
                                        </div>

                                        <div className="flex flex-start lg:mt-[10px] md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px]" />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px]  md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Material de Apoio</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Certificado digital<br></br>de participação</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/cancel.webp" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Acesso a lugares mais próximos ao palco</p>
                                        </div>



                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/cancel.webp" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Acesso ao coffeebreak durante o evento</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/cancel.webp" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Jantar especial com a Cátia</p>
                                        </div>

                                        <hr className="my-2 divide-stone-300 lg:mt-[20px] lg:mb-[20px] pt-[10px]  mt-[30px]" />

                                        <img src="/imgpgvendas/p1v2.webp" alt="Imagem Coluna 1" className="mx-auto mt-[20px]" />
                                        <p className="my-2 text-[18px] text-[#CCCCCC] mt-[40px] lg:mt-[40px] lg:mb-[20px] leading-5" style={{ fontFamily: "'Lato', serif" }}>Garanta seu<br></br>
                                            desconto de pré-venda</p>

                                        {/* bptao primeira oferta */}
                                        <a
                                            className="bg-[#DC8F60] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                                            // href="https://pay.hotmart.com/X89033557B?off=bxifabag" 
                                            target="_blank"
                                            href="https://wa.me/5561992757800?text=Ol%C3%A1%21+Vim+da+p%C3%A1gina+do+Festival+Bem+Resolvida+e+quero+saber+mais+sobre+o+Pacote+Prata"
                                        >
                                            QUERO MEU INGRESSO
                                            <Image
                                            src="/imgpgvendas/whatsapp.webp"
                                            alt=""
                                            width="17"
                                            height="1"
                                            loading="lazy"
                                            className="lg:w-[20px] ml-[10px]"
                                        />
                                        </a>
                                    </div>
                                </div>





                                {/* Coluna 2 pacote ouro */}
                                <div className=" lg:w-1/3 text-center lg:p-4 mt-[40px] lg:mt-[0] ">
                                    <div className="bg-[#000] text-center pt-[40px] md:pt-[40px] lg:pb-[60px] pb-[40px]  p-4 lg:px-[40px]  rounded-lg">
                                        {/* mais vendido */}
                                        <img src="/imgpgvendas/maisvendidov2.webp" alt="Pacote experience" className="mx-auto md:w-[150px] lg:w-[200px] lg:-mt-[54px] -mt-[54px] lg:mb-[40px] mb-[40px]" />

                                        <img src="/imgpgvendas/pacoteourov2.webp" alt="Pacote experience" className="mx-auto md:w-[124px] lg:w-[124px]" />
                                        <hr className="my-2 divide-stone-300 lg:mt-[24px] lg:mb-[20px] mt-[40px] " />

                                        <div className="flex flex-start  lg:pt-[10px]  md:pt-[20px] pt-[10px]  mt-[30px]">
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <span className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px] ml-[10px] md:ml-[10px]" style={{ fontFamily: "'Lato', serif" }}>Acesso aos 3 <br></br>dias de evento</span>
                                        </div>

                                        <div className="flex flex-start lg:mt-[10px] md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px]" />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px]  md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Material de Apoio</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Certificado digital<br></br>de participação</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Acesso a lugares mais próximos ao palco</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Acesso ao coffeebreak durante o evento</p>
                                        </div>


                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/cancel.webp" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Jantar especial com a Cátia</p>
                                        </div>

                                        <hr className="my-2 divide-stone-300 lg:mt-[20px] lg:mb-[20px] pt-[10px]  mt-[30px]" />

                                        <img src="/imgpgvendas/p2v2.webp" alt="Imagem Coluna 1" className="mx-auto mt-[20px]" />
                                        <p className="my-2 text-[18px] text-[#CCCCCC] mt-[40px] lg:mt-[40px] lg:mb-[20px] leading-5" style={{ fontFamily: "'Lato', serif" }}>Garanta seu<br></br>
                                            desconto de pré-venda</p>

                                        {/* bptao primeira oferta */}
                                        <a
                                            className="bg-[#DC8F60] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                                            href="https://wa.me/5561992757800?text=Ol%C3%A1%21+Vim+da+p%C3%A1gina+do+Festival+Bem+Resolvida+e+quero+saber+mais+sobre+o+Pacote+Ouro"
                                            target="_blank"
                                        >
                                            QUERO MEU INGRESSO
                                            <Image
                                            src="/imgpgvendas/whatsapp.webp"
                                            alt=""
                                            width="17"
                                            height="1"
                                            loading="lazy"
                                            className="lg:w-[20px] ml-[10px]"
                                        />
                                        </a>
                                    </div>
                                </div>

                                {/* Coluna 3 Pacote diamente */}
                                <div className=" lg:w-1/3 text-center lg:p-4 mt-[40px] lg:mt-[0]">
                                    <div className="bg-[#000] text-center pt-[40px] md:pt-[40px]  lg:pb-[60px] pb-[40px] p-4 lg:px-[40px] lg:pt-[60px]  rounded-lg">
                                        {/* mais vendido */}
                                        {/* <img src="/imgpgvendas/maisvendidov2.webp" alt="Pacote experience" className="mx-auto md:w-[150px] lg:w-[200px] lg:-mt-[54px] -mt-[54px] lg:mb-[40px] mb-[40px]" /> */}

                                        <img src="/imgpgvendas/pacotediamondv2.webp" alt="Pacote experience" className="mx-auto md:w-[155px] lg:w-[155px]" />
                                        <hr className="my-2 divide-stone-300 lg:mt-[24px] lg:mb-[20px] mt-[40px] " />

                                        <div className="flex flex-start  lg:pt-[10px]  md:pt-[20px] pt-[10px]  mt-[30px]">
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <span className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px] ml-[10px] md:ml-[10px]" style={{ fontFamily: "'Lato', serif" }}>Acesso aos 3 <br></br>dias de evento</span>
                                        </div>

                                        <div className="flex flex-start lg:mt-[10px] md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px]" />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px]  md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px] md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Material de Apoio</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Certificado digital<br></br>de participação</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Acesso a lugares mais próximos ao palco</p>
                                        </div>



                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Acesso ao coffeebreak durante o evento</p>
                                        </div>

                                        <div className="flex flex-start  lg:mt-[10px]  md:mt-[10px] pt-[10px]" style={{ fontFamily: "'Lato', serif" }}>
                                            <img src="/imgpgvendas/check.png" alt="Imagem Coluna 1" className="w-[18px] h-[13px] " />
                                            <p className="text-left text-[#CCCCCC] my-2 text-[20px] md:text-[18px]  lg:text-[20px] lg:ml-[16px] lg:-mt-[10px]  md:-mt-[10px] -mt-[10px]  ml-[10px] md:ml-[10px]">Jantar especial com a Cátia</p>
                                        </div>

                                        <hr className="my-2 divide-stone-300 lg:mt-[20px] lg:mb-[20px] pt-[10px]  mt-[30px]" />

                                        <img src="/imgpgvendas/p3v2.webp" alt="Imagem Coluna 1" className="mx-auto mt-[20px]" />
                                        <p className="my-2 text-[18px] text-[#CCCCCC] mt-[40px] lg:mt-[40px] lg:mb-[20px] leading-5" style={{ fontFamily: "'Lato', serif" }}>Garanta seu<br></br>
                                            desconto de pré-venda</p>

                                        {/* bptao primeira oferta */}
                                        <a
                                            className="bg-[#DC8F60] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px]  lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold"
                                            href="https://wa.me/5561992757800?text=Ol%C3%A1%21+Vim+da+p%C3%A1gina+do+Festival+Bem+Resolvida+e+quero+saber+mais+sobre+o+Pacote+Diamante"
                                            target="_blank"
                                        >
                                            QUERO MEU INGRESSO
                                            <Image
                                            src="/imgpgvendas/whatsapp.webp"
                                            alt=""
                                            width="17"
                                            height="1"
                                            loading="lazy"
                                            className="lg:w-[20px] ml-[10px]"
                                        />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div>

                        </div>


                        {/* garantia */}
                        <div className="container mx-auto lg:mt-[40px] mt-[40px] max-w-[1100px] ">

                            <div className="hidden lg:block  md:block">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Coluna 1 */}
                                    <div className="flex justify-center">
                                        <Image
                                            className="mx-auto lg:mx-0 lg:w-[371px] lg:h-[95px] "
                                            src={"/imgpgvendas/garantia01v2.webp"}
                                            width={371}
                                            height={87}
                                            alt="Data"
                                        />
                                    </div>

                                    {/* Coluna 2 */}
                                    <div className="flex justify-center">
                                        <Image
                                            className="mx-auto lg:mx-0 lg:w-[371px] lg:h-[95px]"
                                            src={"/imgpgvendas/garantia02v2.webp"}
                                            width={371}
                                            height={97}
                                            alt="Data"
                                        />
                                    </div>

                                    {/* Coluna 3 */}
                                    <div className="flex justify-center">
                                        <Image
                                            className="mx-auto lg:mx-0 lg:w-[371px] lg:h-[90px] "
                                            src={"/imgpgvendas/garantia03v2.webp"}
                                            width={371}
                                            height={97}
                                            alt="Data"
                                        />

                                    </div>

                                </div>
                            </div>
                            <Image
                                className="mx-auto lg:mx-0 w-[250px] lg:hidden md:hidden"
                                src={"/imgpgvendas/garantiamobilev2.webp"}
                                width={371}
                                height={97}
                                alt="Data"
                            />
                        </div>
                        {/* fim garantia */}


                        {/* cronograma */}
                        <div className="container flex flex-col lg:flex-row mx-auto pb-[60px] lg:mt-[120px] mt-[40px] max-w-[1100px] lg:mt-[160px] lg:pb-[80px]">
                            <div className=" lg:w-1/2 text-center  mt-[40px] lg:mt-[0] ">
                                <Image
                                    className="mx-auto lg:mx-0 "
                                    src={"/imgpgvendas/cronograma.webp"}
                                    width={254}
                                    height={15}
                                    alt="Cronograma"
                                />
                                <h1 className="lg:text-left text-center text-[#A7A0A0] lg:text-[32px] text-[24px]  my-4 lg:text-[42px] lg:leading-[50px] " style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                                    Confira a programação<br></br>
                                    <b>do Bem Resolvida</b>
                                </h1>
                                <h1 className="lg:text-left text-center text-[18px]  my-4 lg:text-[18px] lg:leading-[24px] " style={{ fontFamily: "'Lato', serif" }}>
                                    Três dias de uma experiência incrível.
                                </h1>

                                <a
                                    className="bg-[#DA001B] justify-center items-center flex lg:mt-[20px] mt-[20px] text-center py-[10px] px-1 rounded-[4px] lg:w-[340px] lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px]  w-[146px] font-semibold hover:scale-125 transition duration-500 cursor-pointer"
                                    href="#oferta"
                                >QUERO PARTICIPAR</a>
                            </div>
                            <div className=" lg:w-1/2 text-center   lg:mt-[0] ">
                                <ImageSwitcher />
                            </div>
                        </div>


                    </div>
                </Container>
            </div>


            {/* secao */}
            <div className=" text-white  pt-[25px] lg:pt-[35px]   lg:bg-[#000] bg-cover bg-no-repeat">

                <Container>
                    <div className="lg:flex flex-col justify-center items-center max-w-[1179px] mx-auto pb-[40px] ">
                        <div className="lg:flex flex-col justify-center items-center max-w-[909px] mx-auto ">
                            <Image
                                className="mx-auto lg:mx-0 "
                                src={"/imgpgvendas/catiav2.webp"}
                                width={1196}
                                height={600}
                                alt="Bem resolvida"
                            />
                            <Image
                                className="mx-auto lg:mx-0 w-[22px] lg:w-[44px]"
                                src={"/imgpgvendas/aspas.webp"}
                                width={44}
                                height={32}
                                alt="Bem resolvida"
                            />
                            <div className=" flex flex-col lg:text-left relative  max-w-[667px] mx-auto lg:mt-[40px] text-center ">

                                <h3 className="font-['Libre Caslon Text'] lg:mx-20 text-[18px] text-left lg:text-center lg:text-[30px] text-[24px] mt-[26px] lg:mt-0 tracking-[2px] lg:tracking-[1px]     lg:leading-[36px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                                    Minha missão é despertar na mulher o que ela tem de melhor.</h3>
                                <Image
                                    className="mx-auto lg:mt-[20px]  lg:w-[412px] mt-[20px] mb-[20px] w-[200px] "
                                    src={"/imgpgvendas/assinatura.webp"}
                                    width={412}
                                    height={61}
                                    alt="Bem resolvida"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-2 lg:mt-[40px] ">
                            <div className="w-full md:w-1/2 px-2 lg:pr-[100px]  ">
                                <p>Cátia Damasceno é mãe, esposa, mulher e empreendedora. Pioneira no Brasil com a Ginástica Íntima (pompoarismo), é dona do maior canal de sexualidade e relacionamento do mundo. Impactando diariamente mais de 30 milhões de mulheres na internet, Cátia tem uma única missão: levar de forma divertida e acessível todo o conhecimento que acumulou durante mais de 20 anos para a maior quantidade possível de mulheres.</p>
                            </div>
                            <div className="w-full md:w-1/2 px-2 lg:pr-[100px]">

                                <p className="">
                                    Seus vídeos, cursos e teatros têm ajudado mulheres a se desenvolverem na área íntima e emocional, muitas resgatam casamentos e reconstroem famílias destruídas, outras abandonam relacionamentos tóxicos. Mas independente da mudança que elas decidem experimentar, essas mulheres escolhem ir atrás da própria felicidade e serem bem-resolvidas em todos os aspectos da vida.
                                </p>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* perguntas frequentes */}
            {/* secao */}
            <div className="   text-white  pt-[25px] lg:pt-[35px] lg:bg-[#000] bg-cover bg-no-repeat">

                <Container>
                    <div className="lg:flex flex-col  justify-center items-center max-w-[1179px] mx-auto lg:mt-[60px]">
                        <div className=" flex flex-col lg:flex-row lg:text-left relative  mx-auto lg:mt-[40px] text-center ">
                            <h2 className="text-xl lg:text-center text-left mb-[40px] font-bold font-['Libre Caslon Text'] text-[24px] lg:text-[38px] " style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                                Dúvidas <span className="text-[#DC8F60]">Frequentes</span>
                            </h2>
                        </div>
                        <Acordeon />
                    </div>
                </Container>
            </div>



            {/* parceiros */}
            <div className="bg-[#000]  bg-top bg-cover bg-no-repeat lg:mt-[40px] mt-[40px] lg:pb-[20px]">

                <Container>
                    <div className="  container mx-auto  max-w-[1196px]  lg:px-[0] px-4 lg:pt-[40px]">
                        <div className="flex flex-col">
                            <h2 className="lg:text-center text-center text-[24px] text-left mb-[20px]  font-['Libre Caslon Text'] lg:text-[38px] " style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                                Nossos <span className="text-[#DB8E60] text-[24px] lg:text-[38px]">Parceiros</span>
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">

                            {/* Coluna 2 */}
                            <div className="flex lg:justify-end  lg:mr-[40px]">
                                <Image
                                    className="mx-auto lg:mx-0 w-[150px] lg:w-[237px] lg:h-[50px] md:w-[180px] md:h-[40px]"
                                    src={"/imgpgvendas/caixaoculta.webp"}
                                    width={351}
                                    height={77}
                                    alt="Data"
                                />
                            </div>

                            {/* Coluna 3 */}
                            <div className="flex lg:justify-start  lg:ml-[40px] mt-[20px] md:mt-[0]">
                                <Image
                                    className="mx-auto lg:mx-0 w-[150px] lg:w-[197px] lg:h-[47px] md:w-[180px] md:h-[40px]"
                                    src={"/imgpgvendas/audax.webp"}
                                    width={371}
                                    height={97}
                                    alt="Data"
                                />
                            </div>



                        </div>

                        <div>


                            {/* não encontros as repostas */}
                            <div className="mt-[40px] lg:mt-[100px] flex flex-col lg:flex-row">
                                {/* Coluna da Esquerda */}
                                <div className="flex flex-col items-center w-full lg:w-full lg:mb-0">
                                    <h2 className="text-center lg:text-center text-[24px] mb-[20px] font-['Libre Caslon Text'] lg:text-[38px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                                        Não encontrou a<br /><b>resposta da sua dúvida?</b>
                                    </h2>
                                    <h2 className="text-center lg:text-center text-[20px] text-[#fff] font-['Archivo'] lg:text-[22px]" style={{ fontFamily: "'Archivo', serif" }}>
                                        FALE CONOSCO
                                    </h2>
                                    <div className="flex items-center justify-center lg:justify-end">
                                        <Image
                                            className="w-[28px] lg:w-[32px] lg:h-[23px] mr-[10px] lg:-mt-[35px] md:-mt-[35px] -mt-[35px]"
                                            src={"/imgpgvendas/email.webp"}
                                            width={351}
                                            height={77}
                                            alt="Email"
                                        />
                                        <span className="text-[#fff] text-center lg:text-left text-[18px] mb-[40px] text-[#DB8E60] lg:text-[20px]">
                                            suporte@mistermind.com.br
                                        </span>
                                    </div>
                                </div>

                                {/* Coluna da Direita */}
                                {/* <div className="w-full lg:w-1/2 flex flex-col lg:items-end md:items-end lg:mt-[20px] -mt-[30px] ">
                                    <h2 className="text-center lg:text-left text-[20px] text-[#fff] font-['Archivo'] lg:text-[22px]" style={{ fontFamily: "'Archivo', serif" }}>
                                        FALE CONOSCO
                                    </h2>
                                    <div className="flex items-center justify-center lg:justify-end">
                                        <Image
                                            className="w-[28px] lg:w-[32px] lg:h-[23px] mr-[10px] lg:-mt-[35px] md:-mt-[35px] -mt-[35px]"
                                            src={"/imgpgvendas/email.webp"}
                                            width={351}
                                            height={77}
                                            alt="Email"
                                        />
                                        <span className="text-[#fff] text-center lg:text-left text-[18px] mb-[40px] text-[#DB8E60] lg:text-[20px]">
                                            suporte@mistermind.com.br
                                        </span>
                                    </div>
                                </div> */}


                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* fim parceiros */}


            <SubFooter />

            <Footer />
        </div>


    );
}

export default VendasWhats