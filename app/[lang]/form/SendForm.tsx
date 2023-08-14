'use client'

import { ChangeEvent, useState } from 'react'

import MainButton from '../../../components/MainButton'
import Checkbox from '../meeting/Checkbox'
import DateTimeField from '../meeting/DateTimeField'
import Question from '../meeting/Question'
import Textfield from '../meeting/Textfield'
import ErrorMessage from './ErrorMessage'

export interface Field {
	label: string
	name: string
	type: 'text' | 'radio' | 'checkbox' | 'datetime' | 'email'
	options?: string[]
	required?: boolean
}

interface FieldsData {
	formFields: Field[]
}

const SendForm = ({ formFields }: FieldsData) => {
	// const formFields: Field[] = [];

	const [formData, setFormData] = useState<{ [key: string]: string | boolean }>(
		{}
	)

	const [errors, setErrors] = useState<{ [key: string]: string }>({})
	const [showSuccess, setShowSuccess] = useState(false)

	const isEmailValid = (email: string) => {
		// Regular expression to validate email address
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
		return emailRegex.test(email)
	}

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = event.target
		setFormData(prevState => ({
			...prevState,
			[name]: type === 'checkbox' ? Boolean(value) : value,
			datetime:
				name === 'datetime'
					? new Date(value).toISOString()
					: prevState.datetime,
		}))
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const errors: { [key: string]: string } = {}
		formFields.forEach(field => {
			if (field.required && !formData[field.name]) {
				errors[field.name] = `Bitte füllen Sie das Feld "${field.label}" aus.`
			} else if (
				field.type === 'email' &&
				!isEmailValid(String(formData[field.name]))
			) {
				errors[field.name] = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
			}
		})
		setErrors(errors)
		if (Object.keys(errors).length === 0) {
			console.log(formData)
			const response = await fetch('http://localhost:1337/api/online-forms', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ data: formData }),
			})

			if (response.ok) {
				setShowSuccess(true)
			} else {
				setShowSuccess(false)
			}

			setFormData({})
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} noValidate>
				<div className="flex flex-col py-10 gap-y-10">
					<h2 className="font-bold font-serif">Fragen zum Termin</h2>
					{formFields.map(field => {
						if (field.type === 'radio') {
							return (
								<>
									<Question key={field.name} title={field.label}>
										{field.options?.map(option => (
											<Checkbox
												key={`${field.name}-${option}`}
												type={field.type}
												name={field.name}
												value={option}
												checked={formData[field.name] === option}
												onChange={handleChange}
											/>
										))}
									</Question>
									{errors[field.name] && (
										<span>{<ErrorMessage message={errors[field.name]} />}</span>
									)}
								</>
							)
						} else if (field.type === 'checkbox') {
							return (
								<>
									<Checkbox
										key={field.name}
										type={field.type}
										name={field.name}
										value={field.label}
										checked={Boolean(formData[field.name] || false)}
										onChange={handleChange}
									></Checkbox>
									{errors[field.name] && (
										<span>{<ErrorMessage message={errors[field.name]} />}</span>
									)}
								</>
							)
						} else if (field.type === 'text') {
							return (
								<>
									<Question key={field.name} title={field.label}>
										<Textfield
											type={field.type}
											name={field.name}
											value={String(formData[field.name] || '')}
											onChange={handleChange}
										/>
									</Question>
									{errors[field.name] && (
										<span>{<ErrorMessage message={errors[field.name]} />}</span>
									)}
								</>
							)
						} else if (field.type === 'datetime') {
							return (
								<>
									<Question key={field.name} title={field.label}>
										<DateTimeField
											key={field.name}
											value={String(formData[field.name] || '')}
											availableDates={field.options!}
											name={field.name}
											onChange={handleChange}
										/>
									</Question>
									{errors[field.name] && (
										<span>{<ErrorMessage message={errors[field.name]} />}</span>
									)}
								</>
							)
						} else if (field.type === 'email') {
							return (
								<>
									<Question key={field.name} title={field.label}>
										<Textfield
											type={field.type}
											name={field.name}
											value={String(formData[field.name] || '')}
											onChange={handleChange}
										/>
									</Question>
									{errors[field.name] && (
										<span>{<ErrorMessage message={errors[field.name]} />}</span>
									)}
								</>
							)
						}
					})}
				</div>
				<MainButton text="Termin buchen" link="/meeting" />
			</form>
			{showSuccess && (
				<div className="fixed inset-0 flex items-center justify-center">
					<div className="bg-white p-4 shadow-lg border ">
						<p className="text-green-500 font-bold font-serif text-xl">
							Formular erfolgreich eingereicht!
						</p>
						<button
							className="mt-4 font-serif text-xl"
							onClick={() => setShowSuccess(false)}
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default SendForm
