import menuCloseButton from '@/icons/menuCloseButton.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Logo from './Logo'

interface IMobileNav {
	isOpen: boolean
	toggleMenu: () => void
}

const MobileNav: FC<IMobileNav> = ({ isOpen, toggleMenu }) => {
	return (
		<div
			className={`fixed top-0 left-0 right-0 px-5 bottom-0 bg-light-blue lg:hidden z-10 ${
				isOpen ? 'block' : 'hidden'
			}`}
		>
			<nav className="flex flex-col items-center justify-start h-full">
				<button
					className="absolute top-9 left-10 text-white focus:outline-none"
					onClick={toggleMenu}
				>
					<Image src={menuCloseButton} alt="Close Menu" />
				</button>
				<Logo />
				<ul className="flex flex-col my-8 justify-between items-center gap-8 md:gap-10 text-center text-xl">
					<li>
						<a href={`/#articles`} onClick={toggleMenu}>
							Wichtiges über Hunde
						</a>
					</li>
					<li>
						<a href={`/#about`} onClick={toggleMenu}>
							Über mich
						</a>
					</li>
					<li>
						<a href={`/#price`} onClick={toggleMenu}>
							Preise
						</a>
					</li>
					<li>
						<a href={`/#galery`} onClick={toggleMenu}>
							Galerie
						</a>
					</li>
					<li>
						<a href={`/`} onClick={toggleMenu}>
							Leistungen
						</a>
					</li>
					<Link
						className="flex justify-center items-center gap-2"
						href={'/'}
						onClick={toggleMenu}
					>
						<p>#Help Ukraine</p>
						<Image
							src="https://flagicons.lipis.dev/flags/4x3/ua.svg"
							width={15}
							height={15}
							alt="ua_flag"
						/>
					</Link>
				</ul>
			</nav>
		</div>
	)
}

export default MobileNav
