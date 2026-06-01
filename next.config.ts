import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images:{
    qualities: [50, 75, 100]
  },
  env: {
    API_URL: process.env.API_URL,
  },
  redirects: async () => {
    return [
      {
        source: "/administracion/:path*",
        destination: "/login?redirect_reason=no_token",
        permanent: true,
        missing: [
          {
            type: "cookie",
            key: "session"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
