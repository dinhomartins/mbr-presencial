import React from "react";
import dynamic from 'next/dynamic';


import S1 from '@/components/CapSection1HeaderAna'
// import S2FundoRed from  '@/components/CapSection3FundoRed'
// // import CapSectionVideo from '@/components/CapSectionVideo'
// // import CapSection4Cards from '@/components/CapSection4Cards'
// import CapSection5Oferta from '@/components/CapSection5Oferta'
// import CapSectionCatiaAssinatura from '@/components/CapSectionCatiaAssinatura'
// import CapSection7Perguntas from '@/components/CapSection7Perguntas'
// import CapSubFooter2 from '@/components/SubFooter2'
import WhattsFlutuante from "@/components/WhattsFlutuante"

const S2FundoRed = dynamic(() => import('../../../components/CapSection3FundoRed'), { ssr: false });
const CapSectionVideoKenia = dynamic(() => import('../../../components/CapSectionVideoAna'), { ssr: false });
const CapSection4Cards = dynamic(() => import('../../../components/CapSection4Cards'), { ssr: false });
const CapSection5OfertAna = dynamic(() => import('../../../components/CapSection5OfertaAna'), { ssr: false });
const CapSectionCatiaAssinatura = dynamic(() => import('../../../components/CapSectionCatiaAssinatura'), { ssr: false });
const CapSection7Perguntas = dynamic(() => import('../../../components/CapSection7Perguntas'), { ssr: false });
const CapSubFooter2 = dynamic(() => import('../../../components/CapSubFooter2'), { ssr: false });


export default function analisboa() {
 return (
  <>
  <S1 />
  {/* <S2FundoRed /> */}
  <CapSectionVideoKenia />
  <CapSection4Cards />
  <CapSection5OfertAna />
  <CapSectionCatiaAssinatura />
  <CapSection7Perguntas />
  <CapSubFooter2 />
  <WhattsFlutuante />

  </>
  );
}

