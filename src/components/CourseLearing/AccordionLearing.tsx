import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '../Icon';

export interface Lesson {
  id: string;
  name: string;
  description?: string;
  type: string;
  isCompleted: boolean;
  videoUrl: string;
  duration?: string;
}
export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface LessonAccordionProps {
  sections: Section[];
  selectedLesson: string;
  onLessonSelect: (lessonId: string) => void;
  onToggleCompletion: (lessonId: string) => void;
}

const AccordionLearing: React.FC<LessonAccordionProps> = ({
  sections,
  selectedLesson,
  onLessonSelect,
  onToggleCompletion,
}) => {
  return (
    <>
      <div className="">
        <Accordion
          type="multiple"
          className="w-full border-2 border-gray-200 rounded-2xl   "
        >
          {sections.map((section, sectionIndex) => (
            <AccordionItem
              key={`item-${sectionIndex}`}
              value={section.title}
              className="border-b-2 border-gray-200 px-4 py-2"
            >
              <AccordionTrigger className="hover:no-underline hover:pointer-coarse py-3">
                <div className="flex flex-col w-full">
                  <h2 className="text-body-medium font-medium text-content-primary">
                    {section.title}
                  </h2>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                {section.lessons.map(lesson => (
                  <div
                    key={lesson.id}
                    className={`py-2 px-3 rounded-md ${
                      selectedLesson === lesson.id
                        ? 'bg-surface-dark-primary text-content-light'
                        : 'bg-surface-light-primary text-content-primary'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className="flex items-center gap-2 cursor-pointer w-[70%]"
                        onClick={() => onLessonSelect(lesson.id)}
                      >
                        <Checkbox
                          className="data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary 
                        data-[state=checked]:text-white"
                          checked={lesson.isCompleted}
                          onCheckedChange={() => onToggleCompletion(lesson.id)}
                        />
                        <h2 className="text-body-medium ">{lesson.name}</h2>
                      </div>
                      <span>
                        {lesson.type === 'video' && lesson.duration ? (
                          <div className="flex items-center gap-2">
                            <Icon size={20} name="video" />
                            <span>{lesson.duration}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Icon size={20} name="book-text" />
                            <span>{lesson.duration}</span>
                          </div>
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default AccordionLearing;
