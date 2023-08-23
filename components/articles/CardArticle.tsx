import Image from 'next/image'
import Link from 'next/link'

interface ICardArticle {
	image: string
	title: string
	description: string
	url: string
}

const CardArticle = ({ image, title, description, url }: ICardArticle) => {
	return (
		<div className="flex flex-col max-w-lg lg:max-w-md gap-y-8">
			<div className="relative">
				<Link href={`/posts/${url}`}>
					<Image
						className="w-full object-cover"
						src={image}
						width={512}
						height={340}
						alt={'State dog'}
					></Image>
				</Link>
			</div>
			<Link href={`/posts/${url}`}>
				<div className="flex flex-col gap-y-5">
					<h3 className="font-bold font-serif uppercase text-2xl">{title}</h3>
					<p className=" font-sans text-left text-lg">{description}</p>
				</div>
			</Link>
		</div>
	)
}

export default CardArticle
