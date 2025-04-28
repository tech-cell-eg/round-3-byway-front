import { memo } from 'react';

interface Description {
  title: string;
  description: string;
}

interface InstructorDescriptionProps {
  id: string;
  descriptions: Description[];
}

const InstructorDescription: React.FC<InstructorDescriptionProps> = ({
  id,
  descriptions,
}) => {
  return (
    <>
      {descriptions.map((item, index) => (
        <div id={id} key={index} className="flex flex-col gap-2">
          <h2 className="font-medium text-content-primary text-body-large mt-2 ">
            {item.title}
          </h2>
          <p className="text-body-base/relaxed text-content-dark md:max-w-[90%] mb-4 ">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default memo(InstructorDescription);
