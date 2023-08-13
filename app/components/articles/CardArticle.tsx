import Image from 'next/image'
import Link from 'next/link'

interface ICardArticle {
	image: string
	title: string
	description: string
}

const CardArticle = ({ image, title, description }: ICardArticle) => {
	return (
		<div className="flex flex-col max-w-lg lg:max-w-md gap-y-8">
			<div className="relative">
				<Link href={'/'}>
					<Image
						className="w-full object-cover"
						src={image}
						width={512}
						height={340}
						alt={'State dog'}
					></Image>
				</Link>
			</div>
			<div className="flex flex-col gap-y-5">
				<h3 className="font-bold font-serif uppercase text-xl">{title}</h3>
				<p className=" font-sans text-left text-lg">{description}</p>
				<h3 className=" text-white font-bold font-serif uppercase">
					<Link href="/">weiter lesen</Link>
				</h3>
			</div>
		</div>
	)
}

export default CardArticle
