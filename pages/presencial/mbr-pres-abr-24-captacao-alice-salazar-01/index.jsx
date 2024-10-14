import React from "react";
import dynamic from 'next/dynamic';


import S1 from '@/components/CapSection1HeaderAlice'
import WhattsFlutuante from "@/components/WhattsFlutuante"

import { useEffect } from 'react';
import { useRouter } from 'next/router'

const S2FundoRed = dynamic(() => import('../../../components/CapSection3FundoRed'), { ssr: false });
const CapSectionVideo = dynamic(() => import('../../../components/CapSectionVideoAlice'), { ssr: false });
const CapSection4Cards = dynamic(() => import('../../../components/CapSection4Cards'), { ssr: false });
const CapSection5Oferta = dynamic(() => import('../../../components/CapSection5OfertaOfertaAlice'), { ssr: false });
const CapSectionCatiaAssinatura = dynamic(() => import('../../../components/CapSectionCatiaAssinatura'), { ssr: false });
const CapSection7Perguntas = dynamic(() => import('../../../components/CapSection7Perguntas'), { ssr: false });
const CapSubFooter2 = dynamic(() => import('../../../components/CapSubFooter2'), { ssr: false });

;



export default function Alice() {

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

