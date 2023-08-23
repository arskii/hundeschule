/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '188.166.162.101',
				port: '',
				pathname: '/media/**',
			},
		],
	},
}

module.exports = nextConfig
