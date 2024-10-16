import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {

  
  return (
    <Html lang="en">

      <Head>
        {" "}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Lato:wght@300;400;700&family=Raleway:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Archivo:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Barlow:wght@400;500;600;700&family=Lato:wght@300;400;700;900&family=Montserrat:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
        <title>Encontro Bem Resolvida</title>
        <meta
          name="description"
          content=" Um movimento de mulheres que desejam revolucionar a autoestima, conquistar liberdade financeira e resgatar a melhor versão de si mesmas "
        />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
