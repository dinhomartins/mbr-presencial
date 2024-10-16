import React from "react";
import VendasBrasilia from '@/components/VendasBrasilia'
import VendasD from "@/components/VendasDinvertida";


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
  <VendasD />
  );
}