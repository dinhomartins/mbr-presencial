import React from "react";
import dynamic from 'next/dynamic';


import S1 from '@/components/CapSection1Header'
import S2FundoRed from  '@/components/CapSection3FundoRed'
import CapSectionVideo from '@/components/CapSectionVideo'
import CapSection4Cards from '@/components/CapSection4Cards'
import CapSection5Oferta from '@/components/CapSection5Oferta'
import CapSectionCatiaAssinatura from '@/components/CapSectionCatiaAssinatura'
import CapSection7Perguntas from '@/components/CapSection7Perguntas'
import CapSubFooter2 from '@/components/SubFooter2'





export default function sales() {
 return (
  <>
  <S1 />
  <S2FundoRed />
  <CapSectionVideo />
  <CapSection4Cards />
  <CapSection5Oferta />
  <CapSectionCatiaAssinatura />
  <CapSection7Perguntas />
  <CapSubFooter2 />

  </>
  );
}


