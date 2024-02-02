import React from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import Container from "@/components/Container";
// import ImageSwitcher from '../Slider/Slider'

// import Acordeon from "../Accordeon";
// import CarouselComponent from '../Carrossel'
import SubFooter from "../SubFooter";
import Footer from "../Footer";
import { useUtmParserSales } from '../HotmartTracking'
import { useUtmParserSalesOuro } from '../HotmartTrackingOuro'
import { useUtmParserSalesDiamante } from "../HotmartTrackingDiamante";

import Section1Header from "../Section1Header";
import Section3FundoRed from "../Section3FundoRed";

// Componentes importados dinamicamente
const ImageSwitcher = dynamic(() => import('../Slider/Slider'), { ssr: false });
const Acordeon = dynamic(() => import('../Accordeon'), { ssr: false });
const CarouselComponent = dynamic(() => import('../Carrossel'), { ssr: false });


function VendasC() {

    const utmPrata = useUtmParserSales()
    const utmOuro = useUtmParserSalesOuro()
    const utmDiamante = useUtmParserSalesDiamante()

    const handleClickScroll = () => {
        const element = document.getElementById('oferta');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }


    };

    return (
        <div>

            <Section1Header />
            <Section3FundoRed />




        </div>


    );
}

export default VendasC