import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/shared/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      { protocol: "https", hostname: "api.dev.zefaafapi.com" },
      { protocol: "https", hostname: "api.zefaafapi.com" },
      { protocol: "https", hostname: "seo.dev.zefaafapi.com" },
      { protocol: "https", hostname: "seo.zefaafapi.com" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default withNextIntl(nextConfig);
