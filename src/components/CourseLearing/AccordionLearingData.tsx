import { useState } from 'react';
import AccordionLearing, { Lesson, Section } from './AccordionLearing';

interface AccordionLearingDataProps {
  onLessonSelect: (lesson: Lesson) => void;
}

const AccordionLearingData: React.FC<AccordionLearingDataProps> = ({
  onLessonSelect,
}) => {
  const sections: Section[] = [
    {
      id: 'section-1',
      title: 'INTRODUCTION TO UX DESIGN',
      lessons: [
        {
          id: 'lesson-1',
          name: 'What is User Experience (UX) Design?',
          type: 'video',
          isCompleted: true,
          videoUrl:
            'https://www.youtube.com/embed/n7xQVRpYHYY?si=elKflXWYzGAZ9sLQ',
          duration: '6 min',
        },
        {
          id: 'lesson-2',
          name: 'History of UX Design',
          type: 'book-text',
          isCompleted: true,
          videoUrl: '',
          description:
            'History of UX design. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '.repeat(
              10
            ),
        },
      ],
    },
    {
      id: 'section-2',
      title: 'USER-CENTERED DESIGN',
      lessons: [
        {
          id: 'lesson-3',
          name: 'What is User-Centered Design?',
          type: 'video',
          isCompleted: false,
          videoUrl:
            'https://www.youtube.com/embed/huBxeruVnAM?si=WQsDkEK9npyPvXmW',
          duration: '6 min',
        },
        {
          id: 'lesson-4',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
          duration: '6 min',
        },
      ],
    },
    {
      id: 'section-3',
      title: 'USER RESEARCH',
      lessons: [
        {
          id: 'lesson-5',
          name: 'What is User Research?',
          type: 'video',
          isCompleted: false,
          videoUrl: 'https://www.youtube.com/embed/dnRvmHcN_tI',
          duration: '6 min',
        },
        {
          id: 'lesson-6',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-7',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-8',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-9',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-10',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-11',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-12',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-13',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-14',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-15',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-16',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
        {
          id: 'lesson-17',
          name: 'Design Principles',
          type: 'book-text',
          isCompleted: false,
          videoUrl: '',
          description: 'Design Principles.',
        },
      ],
    },
  ];

  const [lessonsState, setLessonsState] = useState<Lesson[]>(
    sections.flatMap(section => section.lessons)
  );

  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    sections[0].lessons[0].id
  );

  const completedLessons = lessonsState.filter(
    lesson => lesson.isCompleted
  ).length;

  const toggleLessonCompletion = (lessonId: string) => {
    setLessonsState(prevLessons =>
      prevLessons.map(lesson =>
        lesson.id === lessonId
          ? { ...lesson, isCompleted: !lesson.isCompleted }
          : lesson
      )
    );
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLessonId(lesson.id);
    onLessonSelect(lesson);
  };

  return (
    <>
      <div className="text-body-medium font-medium text-content-light text-center bg-surface-footer p-3 m-4">
        {completedLessons}/{lessonsState.length}
      </div>
      <AccordionLearing
        sections={sections.map(section => ({
          ...section,
          lessons: lessonsState.filter(lesson =>
            section.lessons.some(l => l.id === lesson.id)
          ),
        }))}
        selectedLesson={selectedLessonId}
        onLessonSelect={lessonId => {
          const lesson =
            lessonsState.find(l => l.id === lessonId) || lessonsState[0];
          handleLessonSelect(lesson);
        }}
        onToggleCompletion={toggleLessonCompletion}
      />
    </>
  );
};

export default AccordionLearingData;
