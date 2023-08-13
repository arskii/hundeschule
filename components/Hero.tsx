import Image from 'next/image'

import { Locale } from '@component/i18n-config'
import MainButton from './MainButton'
import SecondButton from './SecondButton'

interface IHero {
	h1: string
	p: string
	mainButton: string
	secondButton: string
}

const Hero = ({
	dictionary,
	lang,
}: {
	dictionary: {
		home: IHero
	}
	lang: Locale
}) => {
	return (
		<section>
			<div className="container mx-auto px-8 lg:px-0 flex lg:flex-row flex-col  justify-between items-center lg:pt-20 gap-10 lg:gap-16">
				<div className="flex flex-col xl:w-4/12 lg:w-1/3 gap-y-16">
					<div className="flex flex-col gap-y-5">
						<h1 className="font-serif font-bold uppercase text-center lg:text-start text-2xl xl:text-5xl lg:text-4xl">
							{dictionary['home'].h1}
						</h1>
						<p className=" text-left text-lg">{dictionary['home'].p}</p>
						<MainButton
							text={dictionary['home']['mainButton']}
							link={`/${lang}/meeting`}
						/>
						<SecondButton
							text={dictionary['home']['secondButton']}
							link={`/${lang}/form`}
						/>
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
