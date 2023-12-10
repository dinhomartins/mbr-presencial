/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  output: "export", // yarn add sharp - para instalar e utilizar outro otimizador de imagens, e dará um nome único na hora de chamar as imagens.
};

module.exports = nextConfig;
