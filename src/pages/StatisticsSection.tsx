import Statistics from '@/components/Statistics/Statistics';

const StatisticsSection = () => {
  const statistics = [
    {
      number: 250,
      text: 'Number of instructors.',
    },
    {
      number: 15,
      text: 'Courses by our best mentors',
    },
    {
      number: 1000,
      text: 'Number of categories.',
    },
    {
      number: 4500,
      text: 'Number of students.',
    },
  ];
  return (
    <>
      <div
        className="bg-surface-light-secondary min-h-[149px] responsive-primary-padding-x 
            responsive-primary-padding-y grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {statistics.map((statistic, index) => (
          <Statistics
            key={index}
            number_of_courses={statistic.number}
            title={statistic.text}
          />
        ))}
      </div>
    </>
  );
};

export default StatisticsSection;
