import { useState } from 'react';
import AccordionLearingData from './AccordionLearingData';
import { Lesson } from './AccordionLearing';
import DisplayInfoInstructor from './DisplayInfoInstructor';

const DisplayContentCourseLearing = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  const [isLoggedIn] = useState<boolean>(true);

  return (
    <>
      {isLoggedIn ? (
        <div className="bg-surface-light-primary min-h-screen">
          <div className="grid grid-cols-12 gap-5 responsive-primary-padding-x responsive-primary-padding-y">
            <div className="col-span-12 md:col-span-8 space-y-6">
              <div>
                {selectedLesson ? (
                  selectedLesson.type === 'video' ? (
                    <iframe
                      width="100%"
                      height="500"
                      className="w-full"
                      src={selectedLesson.videoUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  ) : (
                    <div className="p-6 bg-white rounded-lg shadow-md">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        {selectedLesson.name}
                      </h2>
                      <p className="text-gray-600">
                        {selectedLesson.description ||
                          'No description provided.'}
                      </p>
                    </div>
                  )
                ) : (
                  <div className="p-6 bg-white rounded-lg shadow-md">
                    <p className="text-gray-600">Please select a lesson. </p>
                  </div>
                )}
              </div>

              {/* instructor */}
              <DisplayInfoInstructor />
            </div>

            {/* Accordion */}
            <div className="col-span-12 md:col-span-4">
              <div className="sticky top-[5rem] max-h-[calc(100vh-5rem)] overflow-auto  rounded-lg">
                <AccordionLearingData onLessonSelect={handleLessonSelect} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>login to see this page</div>
      )}
    </>
  );
};

export default DisplayContentCourseLearing;
