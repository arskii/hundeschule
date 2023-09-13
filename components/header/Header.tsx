'use client'
import Logo from '@/components/header/Logo'
import MobileNav from '@/components/header/MobileNav'
import Navbar from '@/components/header/Navbar'
import TopBar from '@/components/header/TopBar'
import { useState } from 'react'

interface IMenu {
	articles: string
	about: string
	price: string
	gallery: string
	services: string
}

const Header = ({ headerLink }: { headerLink: { link: string } }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(prev => !prev)
	}

	return (
		<header>
			<TopBar headerLink={headerLink} />
			<Logo />
			<MobileNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<Navbar toggleMenu={toggleMenu} />
		</header>
	)
}

export default Header
