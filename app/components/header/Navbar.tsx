'use client'

import menuButton from '@/icons/menuButton.svg'
import Image from 'next/image'
import LocaleSwitcher from './locale-switcher'

interface INavBar {
	dictionary: {
		articles: string
		about: string
		price: string
		gallery: string
		services: string
	}
	toggleMenu: () => void
}
export default function Navbar({ dictionary, toggleMenu }: INavBar) {
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
							{dictionary.articles}
						</a>
					</li>
					<li>
						<a className="hover:text-white" href={`#about`}>
							{dictionary.about}
						</a>
					</li>
					<li>
						<a className="hover:text-white" href={`#price`}>
							{dictionary.price}
						</a>
					</li>
					<li>
						<a className="hover:text-white" href={`#galery`}>
							{dictionary.gallery}
						</a>
					</li>
					<li>
						<a className="hover:text-white" href={`/`}>
							{dictionary.services}
						</a>
					</li>
				</ul>
				<LocaleSwitcher />
			</div>
		</nav>
	)
}
