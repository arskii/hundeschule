interface ErrorMessageInterface {
	message: string
}

const ErrorMessage = ({ message }: ErrorMessageInterface) => {
	return (
		<div
			className="error bg-red-100 border border-red-400 text-red-700 px-5 font-bold py-3 relative"
			role="alert"
		>
			<span className="block sm:inline"> {message}</span>
		</div>
	)
}

export default ErrorMessage
