import Statistics from '@/components/Statistics/Statistics';

const StatisticsSection = () => {
  return (
    <>
      <div
        className="bg-surface-light-secondary min-h-[149px] responsive-primary-padding-x 
            responsive-primary-padding-y grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        <Statistics
          number_of_courses={250}
          title="Courses by our best mentors ."
          className="lg:border-r-4"
        />
        <Statistics
          number_of_courses={1000}
          title="Courses by our best mentors ."
          className="lg:border-r-4"
        />
        <Statistics
          number_of_courses={15}
          title="Courses by our best mentors ."
          className="lg:border-r-4"
        />
        <Statistics
          number_of_courses={2400}
          title="Courses by our best mentors ."
        />
      </div>
    </>
  );
};

export default StatisticsSection;
