/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        color: {
            background: "#fff",
            theme: "#1E13FF",
        },
        dimension: {
            sideMargin: "0.8rem",
            navHeight: "3rem",
            borderRadius: "0.2rem",
        },
    },
};

module.exports = nextConfig;
