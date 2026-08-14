/** @type {import('next').NextConfig} */
const suburbs = [
  "box-hill",
  "blackburn",
  "doncaster",
  "templestowe",
  "ringwood",
  "croydon",
  "glen-waverley",
  "mount-waverley",
  "mitcham",
  "vermont",
  "surrey-hills",
  "balwyn",
  "camberwell",
];

const nextConfig = {
  async redirects() {
    return suburbs.flatMap((slug) => [
      {
        source: `/gutter-cleaning-${slug}`,
        destination: `/gutter-cleaning/${slug}`,
        permanent: true,
      },
      {
        source: `/window-cleaning-${slug}`,
        destination: `/window-cleaning/${slug}`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
