import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import SendForm, { Field } from './SendForm'

const formFields: Field[] = [
	{
		label: 'Vorname und Nachname des Hundehalters',
		name: 'name',
		type: 'text',
		required: true,
	},
	{
		label: 'Straße, PLZ und Ort',
		name: 'address',
		type: 'text',
		required: true,
	},
	{
		label: 'Telefon für Rückfragen',
		name: 'phone',
		type: 'text',
		required: true,
	},
	{
		label: 'Erstgespräch findet statt am',
		name: 'meeting',
		type: 'text',
		required: true,
	},
	{
		label: 'E-Mail',
		name: 'email',
		type: 'email',
		required: true,
	},
	{
		label: 'Name des Hundes',
		name: 'dog_name',
		type: 'text',
		required: true,
	},
	{
		label: 'Rasse / Rassen bei Mischlingen',
		name: 'dog_breed',
		type: 'text',
		required: true,
	},
]

const Form = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const dictionary = await getDictionary(lang)
	return (
		<main>
			<div className="container mx-auto">
				<div className="flex flex-col w-full lg:w-1/2 pt-10 lg:pt-20 gap-4 ">
					<h1 className="font-bold font-serif uppercase text-xl lg:text-3xl ">
						{dictionary['online-form'].h1}
					</h1>
					<p className="font-sans text-base lg:text-lg">
						{dictionary['online-form'].p}
					</p>
				</div>
				<SendForm formFields={formFields} />
				<div className="my-48"></div>
			</div>
		</main>
	)
}

export default Form
