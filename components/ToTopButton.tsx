'use client'

import toTopButton from '@/icons/toTopButton.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.scrollY > 700) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<div className="fixed bottom-5 right-5 lg:bottom-10 lg:right-10">
			{isVisible && (
				<button
					className=" bg-main text-white uppercase font-serif font-bold"
					onClick={scrollToTop}
				>
					<Image src={toTopButton} alt="top button" />
				</button>
			)}
		</div>
	)
}
