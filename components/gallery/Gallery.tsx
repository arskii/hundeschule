import PhotoCard from '@/components/gallery/PhotoCard'

const List = [
	{
		id: 0,
		image: '/dog_gallery1.jpeg',
		title: 'dog_gallery',
	},
	{
		id: 1,
		image: '/dog_gallery2.jpeg',
		title: 'dog_gallery',
	},
	{
		id: 2,
		image: '/dog_gallery1.jpeg',
		title: 'dog_gallery',
	},
	{
		id: 3,
		image: '/dog_gallery1.jpeg',
		title: 'dog_gallery',
	},
	{
		id: 4,
		image: '/dog_gallery1.jpeg',
		title: 'dog_gallery',
	},
	{
		id: 5,
		image: '/dog_gallery1.jpeg',
		title: 'dog_gallery',
	},
]

const Gallery = () => {
	return (
		<section id="galery" className="py-10">
			<div className="container mx-auto flex flex-col">
				<h2 className="font-serif font-bold uppercase text-2xl xl:text-4xl lg:text-3xl">
					Galerie
				</h2>
				<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
					{List.map(item => (
						<PhotoCard key={item.id} image={item.image} title={item.title} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Gallery
