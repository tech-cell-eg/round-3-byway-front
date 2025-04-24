interface StatisticsProps {
  number_of_courses: number;
  title: string;
  className?: string;
}
const Statistics: React.FC<StatisticsProps> = ({
  number_of_courses,
  title,
  className,
}) => {
  return (
    <>
      <div
        className={`flex flex-col gap-2 justify-center items-center ${className} mb-3 md:mb-0 border-border-light`}
      >
        <span className="text-3xl font-medium">{number_of_courses}+</span>
        <span className="text-content-secondary text-body-base lg:text-center">
          {title}
        </span>
      </div>
    </>
  );
};

export default Statistics;
