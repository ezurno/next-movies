/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/old/:path*",
        destination: "/new/:path*",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=5dce6d21a6dda399669ed4fb16a2ee80`,
      },

      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=5dce6d21a6dda399669ed4fb16a2ee80`,
      },
      // movie/{movie_id} 에 id 가 들어가야 하므로
      // api 의 위치는 openAPI 문서를 찾아보자
    ];
  },
};

module.exports = nextConfig;
