/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard/performance',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;