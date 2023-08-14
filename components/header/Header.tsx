'use client'
import Logo from '@component/components/header/Logo'
import Navbar from '@component/components/header/Navbar'
import TopBar from '@component/components/header/TopBar'
import { useState } from 'react'
import MobileNav from './MobileNav'

interface IMenu {
	articles: string
	about: string
	price: string
	gallery: string
	services: string
}

const Header = ({
	dictionary,
}: {
	dictionary: {
		menu: IMenu
	}
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev)
	}

	return (
		<header>
			<TopBar />
			<Logo />
			<MobileNav
				dictionary={dictionary.menu}
				isOpen={isMenuOpen}
				toggleMenu={toggleMenu}
			/>
			<Navbar dictionary={dictionary.menu} toggleMenu={toggleMenu} />
		</header>
	)
}

export default Header
