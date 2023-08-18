/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    protocol: "https",
    // hostname: "*.googleusercontent.com",

    // pathname: "**",
    domains: [
      'storage.googleapis.com',
      'lh3.googleusercontent.com',
      'lh1.googleusercontent.com',
      'lh2.googleusercontent.com',

      'lh4.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ]
  },
}