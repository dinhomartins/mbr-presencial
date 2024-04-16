import React from "react";
import Head from 'next/head';

import dynamic from 'next/dynamic';
import Image from "next/image";
import Container from "@/components/Container";
// import ImageSwitcher from '../Slider/Slider'

// import Acordeon from "../Accordeon";
// import CarouselComponent from '../Carrossel'
import SubFooter from "../SubFooter";
import Footer from "../Footer";
import { useUtmParserSales } from '../HotmartTracking'
import { useUtmParserSalesOuro } from '../HotmartTrackingOuro'
import { useUtmParserSalesDiamante } from "../HotmartTrackingDiamante";

import Section1Header from "../Section1Header";
import WhattsFlutuante from "../WhattsFlutuante"
// import Section3FundoRed from "../Section3FundoRed";
// import SectionVideo from "../SectionVideo";
// import Section4Cards from "../Section4Cards";
// import Section5Oferta from "../Section5Oferta";
// import Section6Amigas from "../Section6Amigas";
// import SectionCatiaAssinatura from "../SectionCatiaAssinatura";
// import Section7Perguntas from "../Section7Perguntas";
// import SubFooter2 from "../SubFooter2";
// import FooterPgC from "../FooterPgC";

const Section3FundoRed = dynamic(() => import('../Section3FundoRed'), { ssr: false });
const SectionVideo = dynamic(() => import('../SectionVideo'), { ssr: false });
const Section4Cards = dynamic(() => import('../Section4Cards'), { ssr: false });
const Section5Oferta = dynamic(() => import('../Section5Oferta'), { ssr: false });
const Section6Amigas = dynamic(() => import('../Section6Amigas'), { ssr: false });
const SectionCatiaAssinatura = dynamic(() => import('../SectionCatiaAssinatura'), { ssr: false });
const Section7Perguntas = dynamic(() => import('../Section7Perguntas'), { ssr: false });
const SubFooter2 = dynamic(() => import('../SubFooter2'), { ssr: false });
const FooterPgC = dynamic(() => import('../FooterPgC'), { ssr: false });


// // Componentes importados dinamicamente
// const ImageSwitcher = dynamic(() => import('../Slider/Slider'), { ssr: false });
// const Acordeon = dynamic(() => import('../Accordeon'), { ssr: false });
// const CarouselComponent = dynamic(() => import('../Carrossel'), { ssr: false });


function VendasC() {

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
        <div>
            <Head>
            <title>Encontro Bem Resolvida - Catia Damasceno</title>
        {/* Outros meta tags e links podem estar aqui */}
        {/* Adicione o script do Microsoft Clarity abaixo */}
        <script dangerouslySetInnerHTML={{ __html: `
         (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "kvllr4rlwy");
        `}} />
      </Head>

            <Section1Header />
            {/* <Section3FundoRed /> */}
            <SectionVideo />
            <Section4Cards />
            <Section5Oferta />
            {/* <Section6Amigas /> */}
            <SectionCatiaAssinatura />
            <Section7Perguntas />
            <SubFooter2 />
            <FooterPgC />
            <WhattsFlutuante />
        
        
        </div>
    );
}

export default VendasC