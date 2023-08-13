import Logo from '@component/components/Logo'
import Navbar from '@component/components/Navbar'
import TopBar from '@component/components/TopBar'

interface IMenu {
	articles: string
	about: string
	price: string
	gallery: string
	services: string
}

const Header = ({
	dictionary,
}: {
	dictionary: {
		menu: IMenu
	}
}) => {
	return (
		<header>
			<TopBar />
			<nav className="container mx-auto">
				<Logo />
				<Navbar dictionary={dictionary.menu} />
			</nav>
		</header>
	)
}

export default Header
