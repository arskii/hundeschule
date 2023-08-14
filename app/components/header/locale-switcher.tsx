'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '../../i18n-config'

export default function LocaleSwitcher() {
	const pathName = usePathname()
	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/'
		const segments = pathName.split('/')
		segments[1] = locale
		return segments.join('/')
	}
	return (
		<ul className="flex items-center gap-4">
			{i18n.locales.map((locale: string) => {
				return (
					<li key={locale}>
						<Link
							className="hover:text-white"
							href={redirectedPathName(locale)}
						>
							{locale}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
