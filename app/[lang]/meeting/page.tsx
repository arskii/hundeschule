import { getDictionary } from '../../../get-dictionary'
import { Locale } from '../../../i18n-config'
import SendForm, { Field } from '../form/SendForm'

// interface FieldsData {
//   formFields: Field[];
// }

// async function fetchData() {
//   const response = await fetch(
//     "https://6421965286992901b2b7439c.mockapi.io/meeting",
//     { cache: "no-store" }
//   );
//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const data: FieldsData = await response.json();

//   return data;
// }

const formFields: Field[] = [
	{
		label: 'Bist du bereits Kunde?',
		name: 'customer',
		type: 'radio',
		options: ['Ja', 'Nein'],
		required: true,
	},
	{
		label: 'Wofür möchtest du einen Termin buchen ?',
		name: 'reason',
		type: 'radio',
		options: ['Erststunde', 'Folgestunde'],
		required: true,
	},
	{
		label: 'Datum und Uhrzeit',
		name: 'datetime',
		type: 'datetime',
		options: [
			'2023-04-04T12:00:00.000Z',
			'2023-04-05T09:30:00.000Z',
			'2023-04-06T16:15:00.000Z',
			'2023-04-07T14:00:00.000Z',
		],
		required: true,
	},
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
		label: 'Hiermit bestätige ich die Impressum & AGB gelesen zu haben.',
		name: 'isChecked',
		type: 'checkbox',
		required: true,
	},
]

const Meeting = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	// const data: Field[] = await fetchData();
	const dictionary = await getDictionary(lang)
	return (
		<main>
			<div className="container mx-auto">
				<div className="w-3/6 pt-10">
					<h1 className="font-bold font-serif uppercase text-3xl">
						{dictionary['online-termin'].h1}
					</h1>
					<p>{dictionary['online-termin'].p1}</p>
					<p>{dictionary['online-termin'].p2}</p>
				</div>
				<SendForm formFields={formFields} />
				<div className="my-48"></div>
			</div>
		</main>
	)
}

export default Meeting
