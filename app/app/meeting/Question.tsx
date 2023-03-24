interface QuestionInterface {
  title: string;
  children: React.ReactNode;
}
const Question = ({ title, children }: QuestionInterface) => {
  return (
    <div className="flex">
      <div className="w-2/6 pr-10">
        <p>{title}</p>
      </div>
      <div className="flex flex-wrap gap-x-10 w-4/6">{children}</div>
    </div>
  );
};

export default Question;
