import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/router';






function Redirect() {

    

  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const newUrl = `https://lp.toquefeminino.com.br/pp-new/ginastica-intima-pompoarismo-media/?${queryParams.toString()}`;
    router.push(newUrl);
  }, [router])

  return (
    <div className="">
 

    </div>
  );
}

export default Redirect;