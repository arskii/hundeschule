import Image from 'next/image'
import Link from 'next/link'

const TopBar = () => {
	return (
		<div className="hidden lg:flex flex-row gap-x-2 h-14 w-screen bg-white text-center items-center justify-center font-serif text-lx">
			<Link href="/">#Help Ukraine</Link>
			<Image
				src="https://flagicons.lipis.dev/flags/4x3/ua.svg"
				width={15}
				height={15}
				alt="ua_flag"
			/>
		</div>
	)
}

export default TopBar
