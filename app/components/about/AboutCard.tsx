'use client'
import Image from 'next/image'

interface AboutCardInterface {
	title: string
	text?: string
	image?: string
}

const AboutCard = ({ title, text, image }: AboutCardInterface) => {
	return (
		<div className=" flex flex-col border border-solid border-black justify-around items-center py-8">
			{image ? (
				<Image src={`${image}`} width={300} height={200} alt={`${title}`} />
			) : (
				<>
					<h4 className="font-bold font-serif text-lg">{title}</h4>
					<p className="w-36 text-center font-serif">{text}</p>
				</>
			)}
		</div>
	)
}

export default AboutCard
