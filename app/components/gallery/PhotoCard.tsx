import Image from 'next/image'

interface PhotoCardInterface {
	image: string
	title: string
}

const PhotoCard = ({ image, title }: PhotoCardInterface) => {
	return (
		<div className="flex border border-solid border-white items-center justify-center aspect-square w-full">
			<Image src={image} width={280} height={180} alt={title} />
		</div>
	)
}

export default PhotoCard
