import Logo from '@component/components/header/Logo'
import TopBar from '@component/components/header/TopBar'
import Navbar from '@component/components/header/Navbar'

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
			<Logo />
			<Navbar dictionary={dictionary.menu} />
		</header>
	)
}

export default Header
