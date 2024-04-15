import React from "react";
import Head from 'next/head';

import dynamic from 'next/dynamic';
import Image from "next/image";
import Container from "@/components/Container";

import { useUtmParserSales } from '../../../../components/HotmartTracking'
import { useUtmParserSalesOuro } from '../../../../components/HotmartTrackingOuro'
import { useUtmParserSalesDiamante } from "../../../../components/HotmartTrackingDiamante";

import S1 from "../../../../components/FB01CapSection1Header";
import WhattsFlutuante from "../../../../components/WhattsFlutuante"


const Section3FundoRed = dynamic(() => import('../../../../components/FB01CapSection3FundoRed'), { ssr: false });
const SectionVideo = dynamic(() => import('../../../../components/FB01CapSectionVideo'), { ssr: false });
const Section4Cards = dynamic(() => import('../../../../components/Section4Cards'), { ssr: false });
const Section5Oferta = dynamic(() => import('../../../../components/FB01Section5Oferta'), { ssr: false });
const Section6Amigas = dynamic(() => import('../../../../components/Section6Amigas'), { ssr: false });
const SectionCatiaAssinatura = dynamic(() => import('../../../../components/SectionCatiaAssinatura'), { ssr: false });
const Section7Perguntas = dynamic(() => import('../../../../components/Section7Perguntas'), { ssr: false });
const SubFooter2 = dynamic(() => import('../../../../components/SubFooter2'), { ssr: false });
const FooterPgC = dynamic(() => import('../../../../components/FooterPgC'), { ssr: false });



function CapturaOrg() {
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

            <S1 />
            <Section3FundoRed />
           
            <SectionCatiaAssinatura />
 
         
            <FooterPgC />

        
        
        </div>
    );
}

export default CapturaOrg