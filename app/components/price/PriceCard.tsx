import Image from 'next/image'
import SecondButton from '../SecondButton'

interface PriceCardInterface {
	title: string
	image: string
	cost: string
	time: string
	others: string
}

const PriceCard = ({
	title,
	image,
	cost,
	time,
	others,
}: PriceCardInterface) => {
	return (
		<div className="flex w-full flex-col lg:flex-row h-50 border border-solid p-4 justify-between items-center lg:items-start my-12 gap-6">
			<div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
				<div>
					<Image src={`${image}`} width={295} height={210} alt={`${title}`} />
				</div>
				<div className="flex flex-col  justify-between items-center lg:items-start uppercase font-serif gap-2">
					<p className="font-bold text-xl">{title}</p>
					<div className="flex flex-col gap-4 items-center lg:items-start ">
						<p>{time}</p>
						<p>{cost}</p>
						<p>{others}</p>
					</div>
				</div>
			</div>
			<SecondButton text="Anfrage" link="/meeting" />
		</div>
	)
}

export default PriceCard
