import Image from 'next/image'

import MainButton from '@/components/MainButton'
import SecondButton from '@/components/SecondButton'

const Hero = () => {
	return (
		<section>
			<div className="container mx-auto px-2 lg:px-0 flex lg:flex-row flex-col  justify-between items-center lg:pt-20 gap-10 lg:gap-16">
				<div className="flex flex-col xl:w-4/12 lg:w-1/3 gap-y-16">
					<div className="flex flex-col gap-y-5">
						<h1 className="font-serif font-bold uppercase text-center lg:text-start text-2xl xl:text-5xl lg:text-4xl">
							Hundeerziehung
						</h1>
						<p className=" text-left text-lg">
							Wir schulen Besitzer darin, Hunde so zu erziehen, dass das
							Zusammenleben mit einem Haustier angenehm ist.
						</p>
						<MainButton text="Online termin" link={'/meeting'} />
						<SecondButton text="Beratungsfragebogen" link={'/form'} />
					</div>
					<Image
						className="hidden lg:flex"
						src="/foots.svg"
						width={400}
						height={230}
						alt="foots"
					></Image>
				</div>
				<div className="w-full xl:w-7/12 relative">
					<Image
						className="w-full object-contain"
						src="/zyroImage.png"
						width={650}
						height={700}
						alt={'Main dog'}
					></Image>
				</div>
			</div>
		</section>
	)
}

export default Hero
