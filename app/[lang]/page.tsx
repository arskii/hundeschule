import CookieConsent from '@component/components/CookieConsent'
import Hero from '@component/components/Hero'
import About from '../../components/about/About'
import Articles from '../../components/articles/Articles'
import Gallery from '../../components/gallery/Gallery'
import Price from '../../components/price/Price'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'

async function getArticles() {
	const res = await fetch(`${process.env.PAYLOAD_SERVER_URL}/api/posts/`, {
		next: { revalidate: 3600 },
	})

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

async function getHeader() {
	const res = await fetch(
		`${process.env.PAYLOAD_SERVER_URL}/api/globals/header/`
	)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const dictionary = await getDictionary(lang)
	const articles = await getArticles()

	return (
		<>
			<main>
				<Hero dictionary={dictionary} lang={lang} />
				<Articles dictionary={dictionary.titles} data={articles} />
				<About dictionary={dictionary.titles} />
				<Price dictionary={dictionary.titles} />
				<Gallery dictionary={dictionary.titles} />
			</main>
			<CookieConsent />
		</>
	)
}
