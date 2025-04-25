interface InstructorDescriptionProps {
  id: string;
  titleone: string;
  titletwo?: string;
  descriptionone: string;
  descriptiontwo?: string;
}
const InstructorDescription: React.FC<InstructorDescriptionProps> = ({
  id,
  titleone,
  titletwo,
  descriptionone,
  descriptiontwo,
}) => {
  return (
    <>
      <div id={id} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-content-primary text-body-large">
            {titleone}
          </h2>
          <p className="text-body-base/relaxed text-content-dark md:max-w-[90%]">
            {descriptionone}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-content-primary text-body-large ">
            {titletwo}
          </h2>
          <p className="text-body-base/relaxed text-content-dark md:max-w-[90%]">
            {descriptiontwo}
          </p>
        </div>
        <div className="border-b-2 border-border-light w-[90%]"></div>
      </div>
    </>
  );
};

export default InstructorDescription;
