import { useRouter } from "next/router";


export function useUtmParserSales() {
    const router = useRouter();
    const getQueryValue = (param, defaultValue = "undefined") =>
      router.query[param] ? router.query[param] : defaultValue;
    const source = getQueryValue("utm_source");
    const medium = getQueryValue("utm_medium");
    const campaign = getQueryValue("utm_campaign");
    const id = getQueryValue("utm_id");
    const term = getQueryValue("utm_term");
    const content = getQueryValue("utm_content");
    // const sck = getQueryValue("sck");
    // const src = getQueryValue("src");
    const link = `https://pay.hotmart.com/X89033557B?off=ffa2loty&checkoutMode=10&sck=${source}&src=${source}|${medium}|${campaign}|${id}|${term}|${content}&utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}&utm_id=${id}&utm_term=${term}&utm_content=${content}`;
    return link;
  }


 