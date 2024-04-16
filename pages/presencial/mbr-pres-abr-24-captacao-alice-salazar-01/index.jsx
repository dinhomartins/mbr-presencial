import React from "react";
import dynamic from 'next/dynamic';


import S1 from '@/components/CapSection1HeaderAlice'
import WhattsFlutuante from "@/components/WhattsFlutuante"

const S2FundoRed = dynamic(() => import('../../../components/CapSection3FundoRed'), { ssr: false });
const CapSectionVideo = dynamic(() => import('../../../components/CapSectionVideoAlice'), { ssr: false });
const CapSection4Cards = dynamic(() => import('../../../components/CapSection4Cards'), { ssr: false });
const CapSection5Oferta = dynamic(() => import('../../../components/CapSection5OfertaOfertaAlice'), { ssr: false });
const CapSectionCatiaAssinatura = dynamic(() => import('../../../components/CapSectionCatiaAssinatura'), { ssr: false });
const CapSection7Perguntas = dynamic(() => import('../../../components/CapSection7Perguntas'), { ssr: false });
const CapSubFooter2 = dynamic(() => import('../../../components/CapSubFooter2'), { ssr: false });


export default function alice() {
 return (
  <>
  <S1 />
  {/* <S2FundoRed /> */}
  <CapSectionVideo />
  <CapSection4Cards />
  <CapSection5Oferta />
  <CapSectionCatiaAssinatura />
  <CapSection7Perguntas />
  <CapSubFooter2 />
  <WhattsFlutuante />

  </>
  );
}

