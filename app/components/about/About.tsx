import Image from 'next/image'
import Link from 'next/link'
import AboutCard from './AboutCard'

const About = ({
	dictionary,
}: {
	dictionary: {
		about: string
	}
}) => {
	return (
		<section id="about">
			<div className="container mx-auto flex flex-col px-8 lg:px-0 pt-20">
				<h2 className="font-serif font-bold uppercase text-2xl xl:text-4xl lg:text-3xl">
					{dictionary.about}
				</h2>
				<div className="flex flex-col gap-12 lg:flex-row my-10 justify-between items-start">
					<div className="w-full lg:w-1/3 relative">
						<Image
							className="w-full"
							src="/about.jpg"
							width={460}
							height={550}
							alt="about"
						></Image>
					</div>
					<div className="flex text-xl font-sans flex-col max-w-lg justify-between">
						<p>
							<span className="font-bold">
								Herzlich Willkommen lieber Hundefreund,
							</span>
						</p>
						<p>
							ein Hund ist etwas ganz Besonderes. Er kann bester Freund,
							Seelenverwandter, Sportpartner und noch so vieles mehr sein. Was
							ist er für dich?
						</p>
						So einzigartig jeder einzelne Hund ist, so einzigartig ist auch jede
						Beziehung zwischen Hund und Mensch. Um dir und deinem Hund gerecht
						zu werden, arbeite ich deshalb in meiner Hundeschule Hannover.
						<p>
							Ich freue mich auf dich und deine tierische Begleitung in meiner
							Hundeschule Hannover!{' '}
						</p>
						Dein Hunde
						<p>Coach Nataliya</p>
						<h3 className="font-bold text-lg uppercase mt-10">
							<Link href="/">e-mail: Nataliya & benito.com</Link>
						</h3>
						<h3 className="font-bold text-lg uppercase">
							<Link href="/">mobil: 0151 - 291 60 434</Link>
						</h3>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
					<AboutCard image="/sertificate.png" title="Sertificate" />
					<AboutCard
						title="Meine Zertifikate"
						text="Ich bin zertifizierter Hundetrainer und habe Erfahrung in der Ausbildung "
					/>
					<AboutCard image="/sertificate.png" title="Sertificate" />
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

export default About
