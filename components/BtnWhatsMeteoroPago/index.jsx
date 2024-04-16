import React from "react";
export default function BtnWhatsMeteoroPago() {
    const font16 = "lg:text-[16px]"; // Pago
    return (
        <div className="lg:w-[500px]" >
            <a
                className="bg-[#179B7E] mt-[20px] flex justify-center items-center w-full text-[#fff] py-[17px] px-5 rounded-[4px] max-w-[450px] lg:h-[64px] lg:w-full md:w-[500px] font-semibold hover:scale-125 transition duration-500 cursor-pointer"
                href="https://pp.catiadamasceno.com.br/mbr-pres-mt-tpg-grupos-wpp"
                target="_blank"
            >
                QUERO ENTRAR NO GRUPO
                <img
                    src="/imgpgvendas/whatsapp.webp"
                    alt=""
                    width="20"
                    height="20"
                    loading="lazy"
                    className="ml-2 lg:ml-[20px] ml-[20px]"
                />
            </a>
        </div>
    );
}
