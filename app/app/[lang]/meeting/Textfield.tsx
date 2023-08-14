'use client'

import { ChangeEventHandler } from 'react'

interface TextfieldInterface {
	name: string
	value: string
	type: 'text' | 'textarea' | 'email'
	onChange: ChangeEventHandler<HTMLInputElement>
}

const Textfield = ({ type, name, value, onChange }: TextfieldInterface) => {
	return (
		<input
			className="block bg-white w-full border-none h-50 py-2 pl-5 pr-3 text-xl"
			type={type}
			name={name}
			value={value}
			onChange={onChange}
		/>
	)
}

export default Textfield
