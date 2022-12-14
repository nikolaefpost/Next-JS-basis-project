/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_API: 'https://webapplication120220426093502.azurewebsites.net',
  },
  images: {
    domains: ['courses-top.ru', 'cdn-bucket.hb.bizmrg.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
