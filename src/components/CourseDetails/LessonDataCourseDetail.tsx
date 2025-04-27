// import { useState } from 'react';
import LessonAccordion from './LessonAccordion';

const LessonDataCourseDetail = () => {
  const initialSections = [
    {
      id: 'section-1',
      title: 'Intro to UX Design',
      lesonsnuber: 5,
      hours: 1,
      lessons: [
        {
          id: 'lesson-1',
          name: 'Lesson 1',

          description: 'Description for Lesson 1',
          type: 'video',
        },
        { id: 'lesson-2', name: 'Lesson 2', type: 'video' },
        { id: 'lesson-3', name: 'Lesson 3', type: 'video' },
        { id: 'lesson-4', name: 'Lesson 4', type: 'article' },
        { id: 'lesson-5', name: 'Lesson 5', type: 'video' },
      ],
    },
    {
      id: 'section-2',
      title: 'Basics of User-Centered Design',
      lesonsnuber: 5,
      hours: 1,
      lessons: [
        { id: 'lesson-6', name: 'Lesson 1', type: 'article' },
        { id: 'lesson-7', name: 'Lesson 2', type: 'video' },
        { id: 'lesson-8', name: 'Lesson 3', type: 'video' },
        { id: 'lesson-9', name: 'Lesson 4', type: 'article' },
        {
          id: 'lesson-10',
          name: 'Lesson 5',
          description: 'Description for Lesson 1',
          type: 'video',
        },
      ],
    },
  ];

  return (
    <>
      <div id="syllabus" className="flex flex-col ">
        <h2 className="font-medium text-content-primary text-body-large mt-5">
          Syllabus
        </h2>
        <LessonAccordion sections={initialSections} />
      </div>
    </>
  );
};

export default LessonDataCourseDetail;
