import Hero from '@/components/Hero'
import About from '@/components/about/About'
import Articles from '@/components/articles/Articles'
import Gallery from '@/components/gallery/Gallery'
import Price from '@/components/price/Price'

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

export default async function Home() {
	const articles = await getArticles()

	return (
		<>
			<main>
				<Hero />
				<Articles data={articles} />
				<About />
				<Price />
				<Gallery />
			</main>
		</>
	)
}
