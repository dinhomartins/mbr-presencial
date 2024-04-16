import React from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import S1 from "../../../../components/FB01CapSection1Header";

const Section3FundoRed = dynamic(() => import('../../../../components/FB01CapSection3FundoRed'), { ssr: false });
const SectionCatiaAssinatura = dynamic(() => import('../../../../components/SectionCatiaAssinatura'), { ssr: false });
const FooterPgC = dynamic(() => import('../../../../components/FooterPgC'), { ssr: false });

function CapturaFb() {
    return (
        <div>
            <Head>
            <title>Encontro Bem Resolvida - Catia Damasceno</title>
        {/* Outros meta tags e links podem estar aqui */}
        {/* Adicione o script do Microsoft Clarity abaixo */}
        {/* <script dangerouslySetInnerHTML={{ __html: `
         (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "kvllr4rlwy");
        `}} /> */}
      </Head>

            <S1 />
            <Section3FundoRed />
            <SectionCatiaAssinatura />
            <FooterPgC />
        </div>
    );
}

export default CapturaFb