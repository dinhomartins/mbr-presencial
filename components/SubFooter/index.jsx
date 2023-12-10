import React from "react";
import Container from "@/components/Container";
import ImageSwitcher from '../Slider/Slider'
import Image from "next/image";


function SubFooter() {


    return (

        <div className="bg-[#DB8E60] lg:pt-[60px] md:pt-[60px] lg:pb-[60px] md:pb-[60px] pt-[40px] pb-[40px]">
            <div className="max-w-[1196px] w-full mx-auto  ">
                <div className="flex flex-wrap ">
                    <div className="w-full md:w-1/2 ">
                        <h2 className="text-center lg:mx-[0] md:mx-[0] mx-[40px] lg:text-left text-[24px] mb-[40px] font-['Libre Caslon Text'] lg:text-[38px]" style={{ fontFamily: "'Libre Caslon Text', serif" }}>
                            Garanta seu ingresso e
                            torne-se <b>Bem Resolvida</b>
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2 px-2 flex lg:justify-end lg:items-center justify-center">
                        <a
                            className="bg-[#000] text-center py-[10px] px-1 rounded-[4px] max-w-[342px] lg:h-[64px] w-full text-[16px] lg:text-[18px] py-[17px] px-5 rounded-[4px] font-semibold"
                            href="#oferta" 
                        >
                            QUERO PARTICIPAR
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SubFooter