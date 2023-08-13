'use client'

import Cookies from 'js-cookie'
import Link from 'next/link'
import { MouseEvent, useEffect, useState } from 'react'

const USER_CONSENT_COOKIE_KEY = 'cookie_consent_is_true'
const USER_CONSENT_COOKIE_EXPIRE_DATE = 365

const CookieConsent = () => {
	const [cookieConsentIsTrue, setCookieConsentIsTrue] = useState(true)

	useEffect(() => {
		const consentIsTrue = Cookies.get(USER_CONSENT_COOKIE_KEY) === 'true'
		setCookieConsentIsTrue(consentIsTrue)
	}, [])

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()

		if (!cookieConsentIsTrue) {
			Cookies.set(USER_CONSENT_COOKIE_KEY, 'true', {
				expires: USER_CONSENT_COOKIE_EXPIRE_DATE,
			})
			setCookieConsentIsTrue(true)
		}
	}

	if (cookieConsentIsTrue) {
		return null
	}

	return (
		<section className="fixed bottom-0 left-0 w-full py-2 md:py-4 bg-white">
			<div className="flex flex-col items-start px-5 py-3 space-y-2 bg-gray-200 md:flex-row md:space-y-0 md:items-stretch md:space-x-2">
				<div className="flex items-center flex-grow text-gray-900">
					<p className="font-medium text-sm md:text-base">
						Diese Website verwendet Dienste, die Cookies verwenden, um besser zu
						liefern Verkehr erleben und analysieren. Sie können mehr über die
						erfahren Dienstleistungen, die wir bei unserem verwenden{' '}
						<Link
							href="/privacy-policy"
							className="text-sm md:text-base underline hover:text-lightAccent"
						>
							Datenschutzbestimmungen
						</Link>
						.
					</p>
				</div>
				<div className="flex items-center">
					<button
						className="p-3 text-sm md:text-base font-bold text-main uppercase bg-gray-700 whitespace-nowrap"
						onClick={onClick}
					>
						Akzeptieren
					</button>
				</div>
			</div>
		</section>
	)
}

export default CookieConsent
