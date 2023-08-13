import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href={'/'}>
			<div className="flex items-center justify-center py-10">
				<Image
					className="hidden lg:block"
					priority
					src={`/logo.svg`}
					width={180}
					height={80}
					alt="logo"
				/>
				<div className="flex flex-col lg:hidden text-center">
					<p className="text-base md:text-lg text-serif font-bold">
						Nataliya & Benito
					</p>
					<p className="text-sm md:text-base">Hundeschule</p>
				</div>
			</div>
		</Link>
	)
}

export default Logo
