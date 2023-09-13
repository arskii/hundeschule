'use client'

import menuButton from '@/icons/menuButton.svg'
import Image from 'next/image'

interface INavBar {
	toggleMenu: () => void
}
export default function Navbar({ toggleMenu }: INavBar) {
	return (
		<nav className="container mx-auto">
			<button
				className="lg:hidden absolute top-9 left-10 text-white focus:outline-none"
				onClick={toggleMenu}
			>
				<Image src={menuButton} alt="menu" />
			</button>
			<div className="hidden lg:flex justify-between font-serif uppercase xl:text-xl md:text-base">
				<ul className="flex items-center gap-10">
					<li>
						<a className="hover:text-white" href={`#articles`}>
							Wichtiges über Hunde
						</a>
					</li>
					<li>
						<a className="hover:text-white" href={`#about`}>
							Über mich
						</a>
					</li>
					<li>
						<a className="hover:text-white" href={`#price`}>
							Preise
						</a>
					</li>
					<li>
						<a className="hover:text-white" href={`#galery`}>
							Galerie
						</a>
					</li>
					<li>
						<a className="hover:text-white" href={`/`}>
							Leistungen
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
