import React from "react";
import dynamic from 'next/dynamic';

import { useEffect } from 'react';
import { useRouter } from 'next/router'


import S1 from '@/components/CapSection1HeaderIntimi'
// import S2FundoRed from  '@/components/CapSection3FundoRed'
// // import CapSectionVideo from '@/components/CapSectionVideo'
// // import CapSection4Cards from '@/components/CapSection4Cards'
// import CapSection5Oferta from '@/components/CapSection5Oferta'
// import CapSectionCatiaAssinatura from '@/components/CapSectionCatiaAssinatura'
// import CapSection7Perguntas from '@/components/CapSection7Perguntas'
// import CapSubFooter2 from '@/components/SubFooter2'
import WhattsFlutuante from "@/components/WhattsFlutuante"

const S2FundoRed = dynamic(() => import('../../../components/CapSection3FundoRed'), { ssr: false });
const CapSectionVideoIntimi = dynamic(() => import('../../../components/CapSectionVideoIntimi'), { ssr: false });
const CapSection4Cards = dynamic(() => import('../../../components/CapSection4Cards'), { ssr: false });
const CapSection5OfertaIntimi = dynamic(() => import('../../../components/CapSection5OfertaIntimi'), { ssr: false });
const CapSectionCatiaAssinatura = dynamic(() => import('../../../components/CapSectionCatiaAssinatura'), { ssr: false });
const CapSection7Perguntas = dynamic(() => import('../../../components/CapSection7Perguntas'), { ssr: false });
const CapSubFooter2 = dynamic(() => import('../../../components/CapSubFooter2'), { ssr: false });


export default function Intimi() {

  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const newUrl = `https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-media/?${queryParams.toString()}`;
    router.push(newUrl);
  }, [router])


 return (
  <>
  <S1 />
  {/* <S2FundoRed /> */}
  <CapSectionVideoIntimi />
  <CapSection4Cards />
  <CapSection5OfertaIntimi />
  <CapSectionCatiaAssinatura />
  <CapSection7Perguntas />
  <CapSubFooter2 />
  <WhattsFlutuante />

  </>
  );
}

