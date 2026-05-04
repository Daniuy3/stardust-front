import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images:{
    qualities: [50, 75, 100]
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
