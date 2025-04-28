import Icon from '../Icon';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
interface InfoInstructor {
  name: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  courses: number;
  students: number;
}
interface InstructorInfoProps {
  instructor: InfoInstructor[];
  id: string;
}
const InstructoInfo: React.FC<InstructorInfoProps> = ({ instructor, id }) => {
  return (
    <>
      <h2 className="font-medium text-content-primary text-body-large mt-4">
        Instructor
      </h2>

      {instructor.map((item, index) => (
        <div id={id} key={index} className="flex flex-col gap-4 mt-1 ">
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-accent-primary text-body-large">
              {item.name}
            </h3>
            <p className="text-content-secondary text-body-base">
              {item.title}
            </p>
          </div>

          <div className="flex flex-row items-center gap-4">
            <div>
              {/* <img
                src={item.image}
                alt="Instructor Image"
                className="w-[150px] h-[150px] rounded-circle"
              /> */}
              <Avatar className="w-[150px] h-[150px]">
                <AvatarImage src={item.image} />
                <AvatarFallback className="w-[150px] h-[150px] bg-gray-200">
                  {item.name}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col gap-3 text-content-primary text-body-small">
              <p className="flex items-center gap-2">
                <Icon name="award" className="text-content-primary" />
                {item.rating} Reviews
              </p>
              <p className="flex items-center gap-2">
                <Icon name="graduationcap" className="text-content-primary" />
                {item.students} Students
              </p>

              <p className="flex items-center gap-2">
                <Icon name="play" className="text-content-primary" />
                {item.courses} Courses
              </p>
            </div>
          </div>

          <div>
            <p className="text-content-secondary  mb-4 md:max-w-[90%] text-body-base/relaxed">
              {item.description}
            </p>
          </div>

          <div className="border-b-2 border-border-light w-[90%]"></div>
        </div>
      ))}
    </>
  );
};

export default InstructoInfo;
