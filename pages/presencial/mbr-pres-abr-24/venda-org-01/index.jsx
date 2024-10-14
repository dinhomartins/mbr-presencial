import React from "react";
import VendasC from '@/components/VendasC'
import VendasB from '@/components/VendasB'
import VendasD from "@/components/VendasDinvertida";
import Redirect from "../../../../components/Redirect";

import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Sales() {

  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const newUrl = `https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-media/?${queryParams.toString()}`;
    router.push(newUrl);
  }, [router])

 return (
  <VendasC />
  
  );
}