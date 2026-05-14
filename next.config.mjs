/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/certificacoes/formacao-assessor-futuro",
        destination: "/certificacoes/formacao-assessor-futuro.html",
      },
    ];
  },
};

export default nextConfig;
