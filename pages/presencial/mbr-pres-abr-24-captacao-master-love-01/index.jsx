import React from "react";
import dynamic from 'next/dynamic';


import S1 from '@/components/CapSection1HeaderMasterLove'
// import S2FundoRed from  '@/components/CapSection3FundoRed'
// // import CapSectionVideo from '@/components/CapSectionVideo'
// // import CapSection4Cards from '@/components/CapSection4Cards'
// import CapSection5Oferta from '@/components/CapSection5Oferta'
// import CapSectionCatiaAssinatura from '@/components/CapSectionCatiaAssinatura'
// import CapSection7Perguntas from '@/components/CapSection7Perguntas'
// import CapSubFooter2 from '@/components/SubFooter2'
import WhattsFlutuante from "@/components/WhattsFlutuante"

const S2FundoRed = dynamic(() => import('../../../components/CapSection3FundoRed'), { ssr: false });
const CapSectionVideoMasterLove = dynamic(() => import('../../../components/CapSectionVideoMasterLove'), { ssr: false });
const CapSection4Cards = dynamic(() => import('../../../components/CapSection4Cards'), { ssr: false });
const CapSection5OfertaMasterLove = dynamic(() => import('../../../components/CapSection5OfertaMasterLove'), { ssr: false });
const CapSectionCatiaAssinatura = dynamic(() => import('../../../components/CapSectionCatiaAssinatura'), { ssr: false });
const CapSection7Perguntas = dynamic(() => import('../../../components/CapSection7Perguntas'), { ssr: false });
const CapSubFooter2 = dynamic(() => import('../../../components/CapSubFooter2'), { ssr: false });


export default function masterLove() {
 return (
  <>
  <S1 />
  {/* <S2FundoRed /> */}
  <CapSectionVideoMasterLove />
  <CapSection4Cards />
  <CapSection5OfertaMasterLove />
  <CapSectionCatiaAssinatura />
  <CapSection7Perguntas />
  <CapSubFooter2 />
  <WhattsFlutuante />

  </>
  );
}

