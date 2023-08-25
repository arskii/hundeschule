import Image from 'next/image'
import Link from 'next/link'

const TopBar = ({ headerLink }: { headerLink: { link: string } }) => {
	return (
		<Link
			target="_blank"
			rel="noopener noreferrer"
			href={headerLink.link}
			className="hidden lg:flex flex-row gap-x-2 h-14 w-screen bg-white text-center items-center justify-center font-serif text-lx"
		>
			<p>#Help Ukraine</p>
			<Image
				src="https://flagicons.lipis.dev/flags/4x3/ua.svg"
				width={15}
				height={15}
				alt="ua_flag"
			/>
		</Link>
	)
}

export default TopBar
