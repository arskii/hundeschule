interface QuestionInterface {
	title: string
	children: React.ReactNode
}
const Question = ({ title, children }: QuestionInterface) => {
	return (
		<div className="flex flex-col lg:flex-row gap-2">
			<div className="w-full lg:w-2/6 lg:pr-10 text-xl">
				<p>{title}</p>
			</div>
			<div className="flex flex-wrap gap-x-10 w-full lg:w-4/6">{children}</div>
		</div>
	)
}

export default Question
