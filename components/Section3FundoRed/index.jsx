import React from "react";
// import dynamic from 'next/dynamic';
import Container from "@/components/Container";
import Image from "next/image";
import CarrosselSection from "../CarrosselSection";



export default function Section3FundoRed() {



    return (
        <div className="lg:bg-[url('/imgpgvendas/bgred.webp')]  bg-[url('/imgpgvendas/bgred.webp')] lg:-mt-[120px]">

            <Container>
                {/* Fim primeira seção */}
                <div className="flex flex-col items-center justify-center min-h-screen ">


                    {/* coluna da esquerda */}
                    <div className="max-w-[1196px] w-full mx-auto lg:p-4 lg:pt-[80px] mt-[60px]">
                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2   ">
                                <h2 className="text-xl font-bold text-[#fff] leading-[36px]  lg:text-[32px] lg:mt-[45px]   " style={{ fontFamily: "'Epilogue', serif" }}>
                                    <span className="font-normal"> Descubra como acessar <br></br></span>
                                    uma vida livre, independente, satisfatória Bem Resolvida!</h2>


                                <div className="w-full  pl-[20px] lg:mt-[40px]">
                                    <div className="text-center lg:text-left relative">
                                        <span className="hidden lg:block bg-[#E1B16F] h-[455px] w-[2px] absolute bottom-2 -left-5"></span>
                                        <h3 className="font-['Lato'] text-[#fff] text-left text-[16px] lg:text-[18px] mt-[26px] lg:mt-0 tracking-[2px] ">
                                            Você já sentiu que, mesmo batalhando muito, parece impossível alcançar o sucesso no amor, na família e na carreira ao mesmo tempo?<br></br><br></br>
                                            Sente que literalmente vive no piloto automático, tão sobrecarregada que não dá tempo de investir nos seus sonhos, às vezes nem de lembrar deles direito?<br></br><br></br>
                                            Ou, pior ainda: talvez você sequer tenha clareza de quais são seus sonhos, seus valores, o que de fato quer mudar na sua vida, ou o que ama em si mesma.<br></br><br></br>
                                            Você precisa agir agora, para não passar a vida toda servindo aos sonhos dos outros, enquanto negligencia os seus.<br></br><br></br>
                                            Mas há duas ótimas notícias. A primeira é que você não está só. A segunda, que você pode virar esse jogo!
                                        </h3>
                                    </div>
                                </div>

                            </div>
                            {/* fim coluna da direita */}

                            <div className="w-full md:w-1/2 relative ">
                                <Image
                                    className="mx-auto lg:mx-0 w-[200px] lg:w-[650px] absolute lg:mt-[120px]"
                                    src={"/imgpgvendas/trioball.webp"}
                                    width={526}
                                    height={72}
                                    alt="Bem resolvida"
                                />
                            </div>
                        </div>
                    </div>
                    {/*fim da coluna da esquerda */}


                     {/* coluna da esquerda */}
                     <div className="max-w-[1196px] w-full mx-auto lg:p-4  mt-[60px]">
                        <div className="flex flex-wrap -mx-2">
                            

                            <div className="w-full md:w-1/2 relative ">
                                <Image
                                    className="mx-auto lg:mx-0 w-[200px] lg:w-[600px] absolute lg:-mt-[50px]"
                                    src={"/imgpgvendas/catiared.webp"}
                                    width={526}
                                    height={72}
                                    alt="Bem resolvida"
                                />
                            </div>

                            <div className="w-full md:w-1/2 px-2   ">
                
                                <div className="w-full  pl-[20px] lg:mt-[40px]">
                                    <div className="text-center lg:text-left relative">
                                        <span className=""></span>
                                        <h3 className="font-['Lato'] text-[#fff] text-left text-[16px] lg:text-[18px] mt-[26px] lg:mt-0 tracking-[2px] ">
                                        Para ajudar mulheres que vivem essas batalhas,  Cátia Damasceno criou o Encontro Bem Resolvida.<br></br><br></br>
É uma imersão presencial de três dias, onde você irá aprender a assumir o seu lugar de força sem deixar o feminino de lado, ferramentas para melhorar seus negócios, relacionamentos e a relação consigo mesma, e a desbloquear tudo o que te impede hoje de ter a vida Bem Resolvida!<br></br><br></br>
Você também descobrirá como ativar sua sensualidade, atrair relacionamentos saudáveis e a construir uma mentalidade de prosperidade e abundância, para literalmente fazer o universo trabalhar a favor dos seus sonhos.<br></br><br></br>
Chegou a hora de eliminar os obstáculos que estão bloqueando o caminho do seu sucesso!
Está preparada para ativar sua melhor versão?
                                        </h3>
                                    </div>
                                </div>

                            </div>
                            {/* fim coluna da direita */}

                        </div>
                    </div>
                    {/*fim da coluna da esquerda */}

                    





                </div>
            </Container>
        </div>
    );
}