import React from "react";
import Container from "@/components/Container";
import ImageSwitcher from '../Slider/Slider'
import Image from "next/image";



function SubFooter2() {


    return (

        <div className="bg-[#E0A45B] lg:pt-[40px] md:pt-[60px] lg:pb-[40px] md:pb-[30px] pt-[20px] pb-[30px]">
            <div className="max-w-[1196px] w-full mx-auto  ">
                <div className="flex flex-wrap ">
                    <div className="w-full md:w-full lg:w-full justify-center items-center">
                        <h2 className="text-center text-[#fff] lg:mx-[0] md:mx-[0] mx-[40px] lg:text-center text-[24px] mb-[20px] leading-[26px]  font-['Libre Caslon Text'] lg:leading-[42px] lg:text-[38px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                            Garanta seu ingresso e<br></br>
                            torne-se <b>Bem Resolvida</b>
                        </h2>
                        <div className="w-full  px-2 flex lg:justify-center lg:items-center justify-center lg:-mt-[20px]  md:-mt-[20px]">
                        <a
                            className="bg-[#179B7E] text-[#fff] text-center py-[10px] px-1 rounded-[4px] lg:mt-[20px] max-w-[242px] lg:max-w-[342px] md:max-w-[342px] lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] font-semibold"
                            href="#oferta" 
                        >
                            QUERO PARTICIPAR
                        </a>
                    </div>
                    </div>
                    {/* <div className="w-full md:w-1/2 px-2 flex lg:justify-end lg:items-center justify-center">
                        <a
                            className="bg-[#000] text-center py-[10px] px-1 rounded-[4px] max-w-[342px] lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] font-semibold"
                            href="#oferta" 
                        >
                            QUERO PARTICIPAR
                        </a>
                    </div> */}
                </div>
            </div>
            
        </div>

        



    );
}

export default SubFooter2