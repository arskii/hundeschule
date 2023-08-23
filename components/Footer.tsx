import Link from 'next/link'
import { FC } from 'react'

const Footer: FC = () => {
	return (
		<footer className="bg-white">
			<div className="container mx-auto flex flex-col lg:flex-row justify-between py-20 gap-12">
				<div className="flex flex-col justify-between">
					<div>
						<h3 className="font-bold font-serif uppercase text-2xl">
							Nataliya & Benito
						</h3>
						<p>Hundeschule</p>
					</div>
					<Link className=" font-serif" href="/">
						Datenschutzerklärung | Impressum & AGB
					</Link>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-32">
					<div className="flex flex-col items-start justify-between">
						<h4 className="font-bold font-serif uppercase text-xl">Menu</h4>
						<ul className="flex flex-col items-start text-lg">
							<li>
								<a className="hover:text-white" href={`#articles`}>
									Wichtiges über Hunde
								</a>
							</li>
							<li>
								<a className="hover:text-white" href={`#about`}>
									Über mich
								</a>
							</li>
							<li>
								<a className="hover:text-white" href={`#price`}>
									Preise
								</a>
							</li>
							<li>
								<a className="hover:text-white" href={`#galery`}>
									Galerie
								</a>
							</li>
							<li>
								<a className="hover:text-white" href={`/`}>
									Leistungen
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-start justify-between">
						<h4 className="font-bold font-serif uppercase text-xl">Kontakt</h4>
						<ul className="flex flex-col items-start text-lg">
							<li>
								<p>
									Hundeschule
									<span className=" uppercase">Nataliya & benito</span>
								</p>
							</li>
							<li>Nataliya - Hundetrainerin</li>
							<li>+49 (0)111 1111 111</li>
							<li>Mail: Info@link.de</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
