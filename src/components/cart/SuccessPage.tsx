import { Check } from 'lucide-react';
import { Link } from 'react-router';

export const SuccessPage = () => {
  return (
    <div className="flex flex-col gap-5 items-center text-center">
      <div className="size-[200px] bg-green-600 rounded-full flex items-center justify-center">
        <Check className="text-white font-bold" size={104} />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-content-primary text-[40px]">
          Order Complete
        </h2>
        <p className="text-content-primary text-2xl font-semibold">
          You can go to your courses page.
        </p>
        <Link
          to="/courses"
          className="text-button-tertiary text-body-large
        font-semibold underline hover:no-underline w-fit mx-auto mt-4"
        >
          Go to Courses
        </Link>
      </div>
    </div>
  );
};
