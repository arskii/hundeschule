'use client'

import LocaleSwitcher from './locale-switcher'

export default function Navbar({
	dictionary,
}: {
	dictionary: {
		articles: string
		about: string
		price: string
		gallery: string
		services: string
	}
}) {
	return (
		<nav className="container mx-auto">
			<div className="hidden lg:flex justify-between font-serif uppercase xl:text-xl md:text-base">
				<ul className="flex items-center xl:gap-10 md:gap-5">
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
