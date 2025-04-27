import Icon from '../Icon';

interface IinstructorInfoProps {
  name: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  courses: number;
  students: number;
  id: string;
}
const InstructoInfo: React.FC<IinstructorInfoProps> = ({
  name,
  title,
  description,
  image,
  rating,
  courses,
  students,
  id,
}) => {
  return (
    <>
      <div id={id} className="flex flex-col gap-4 mt-5">
        <h2 className="font-medium text-content-primary text-body-large">
          Instructor
        </h2>

        <div className="flex flex-col gap-1">
          <h3 className="font-medium text-accent-primary text-body-large">
            {name}
          </h3>
          <p className="text-content-secondary text-body-base">{title}</p>
        </div>

        <div className="flex flex-row items-center gap-4">
          <div>
            <img
              src={image}
              alt="Instructor Image"
              className="w-[150px] h-[150px] rounded-circle"
            />
          </div>
          <div className="flex flex-col gap-3 text-content-primary text-body-small">
            <p className="flex items-center gap-2">
              <Icon name="award" className="text-content-primary" />
              {rating} Reviews
            </p>
            <p className="flex items-center gap-2">
              <Icon name="graduationcap" className="text-content-primary" />
              {students} Students
            </p>

            <p className="flex items-center gap-2">
              <Icon name="play" className="text-content-primary" />
              {courses} Courses
            </p>
          </div>
        </div>

        <div>
          <p className="text-content-secondary  md:max-w-[90%] text-body-base/relaxed">
            {description}
          </p>
        </div>

        <div className="border-b-2 border-border-light w-[90%]"></div>
      </div>
    </>
  );
};

export default InstructoInfo;
