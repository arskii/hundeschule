import CookieConsent from '@component/components/CookieConsent'
import Hero from '@component/components/Hero'
import About from '../../components/about/About'
import Articles from '../../components/articles/Articles'
import Gallery from '../../components/gallery/Gallery'
import Price from '../../components/price/Price'
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const dictionary = await getDictionary(lang)
	return (
		<>
			<main>
				<Hero dictionary={dictionary} lang={lang} />
				<Articles dictionary={dictionary.titles} />
				<About dictionary={dictionary.titles} />
				<Price dictionary={dictionary.titles} />
				<Gallery dictionary={dictionary.titles} />
			</main>
			<CookieConsent />
		</>
	)
}
