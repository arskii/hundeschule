import Image from 'next/image'
import CardArticle from './CardArticle'

const List = [
	{
		id: 0,
		image: '/article_dog1.jpeg',
		title: 'Welpenerziehung',
		description:
			'Wir erzählen und zeigen das Wichtigste über Welpen: wie man kommuniziert, was, wann und wie unterrichtet, wie man füttert und das Haus ausstattet.',
	},
	{
		id: 1,
		image: '/article_dog2.jpeg',
		title: 'Wie man einem Hund beibringt, allein zu Hause zu bleiben ',
		description:
			'Macht sich der Hund Sorgen, zerstört er das Haus, pinkelt oder bellt er, wenn Sie gehen? Oder haben Sie einen Welpen, den Sie vor möglichen Problemen schützen möchten?',
	},
	{
		id: 2,
		image: '/article_dog3.jpeg',
		title: 'Wie man einen Hund vom Bellen abhält',
		description:
			'Es ist notwendig, das Problem des übermäßigen Hundebellens unabhängig von seiner Art zu lösen.',
	},
	{
		id: 3,
		image: '/article_dog4.png',
		title: 'So lernen Sie, die Krallen Ihres Hundes zu schneiden',
		description:
			'Helfen Sie bei der Auswahl des richtigen Werkzeugs und finden Sie heraus, wie oft Ihr Hund seine Krallen schneiden muss.',
	},
]

export interface Post {
	id: string
	title: string
	description: string
	content?: [{ children: [{ text: string }] }]
	image: {
		url: string
		sizes: {
			thumbnail: {
				url: string
			}
		}
	}
	thumbnail: {}
	author: {
		name: string
	}
}

export interface PostsProps {
	docs: Post[]
}

const Articles = ({
	dictionary,
	data,
}: {
	dictionary: {
		articles: string
	}
	data: PostsProps
}) => {
	return (
		<section id="articles">
			<div className="container mx-auto px-2 lg:px-0 pt-20">
				<h2 className="font-serif font-bold text-2xl uppercase xl:text-3xl lg:text-3xl pb-10">
					{dictionary.articles}
				</h2>
				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{data.docs.map((item: Post) => (
						<CardArticle
							key={item.id}
							image={
								process.env.PAYLOAD_SERVER_URL + item.image.sizes.thumbnail.url
							}
							title={item.title}
							url={item.id}
							description={item.description}
						/>
					))}
				</div>
				<Image
					className="hidden lg:flex mt-18"
					src="/foots.svg"
					width={400}
					height={230}
					alt="foots"
				></Image>
			</div>
		</section>
	)
}

export default Articles
