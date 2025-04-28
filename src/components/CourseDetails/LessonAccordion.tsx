import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '../Icon';

interface Lesson {
  id: string;
  name: string;
  description?: string;
  type: string;
}

interface Section {
  id: string;
  title: string;
  lesonsnuber?: number;
  hours?: number;
  lessons: Lesson[];
}

interface LessonAccordionProps {
  sections: Section[];
}

const LessonAccordion: React.FC<LessonAccordionProps> = ({ sections }) => {
  return (
    <div>
      <Accordion
        type="multiple"
        className="w-full md:w-[90%] mt-4 border-2 border-gray-200 rounded-medium p-3"
      >
        {sections.map((section, sectionIndex) => (
          <AccordionItem
            key={`item-${sectionIndex}`}
            value={section.title}
            className="border-b-2 border-gray-200"
          >
            <AccordionTrigger className="hover:no-underline hover:pointer-coarse">
              <div className="flex flex-col w-full">
                <h2 className="text-body-medium font-medium">
                  {section.title}
                </h2>
                <div className="flex flex-row gap-2 text-body-small text-gray-500">
                  <p>{section.lesonsnuber} Lesson</p>
                  <p>{section.hours} Hours</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {section.lessons.map((lesson, lessonIndex) => (
                <div key={lesson.id} className="py-2">
                  {lesson.description ? (
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem
                        value={`lesson-${sectionIndex}-${lessonIndex}`}
                        className="border-b border-gray-100"
                      >
                        <AccordionTrigger className="hover:no-underline hover:pointer-coarse py-2">
                          <div className="flex items-center gap-2">
                            <span>
                              {lesson.type === 'video' ? (
                                <Icon name="video" />
                              ) : (
                                <Icon name="book-text" />
                              )}
                            </span>
                            <div className="flex flex-col text-left">
                              <h2 className="text-body-medium/relaxed font-medium">
                                {lesson.name}
                              </h2>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-6 text-gray-600">
                          <p>{lesson.description}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>
                        {lesson.type === 'video' ? (
                          <Icon name="video" />
                        ) : (
                          <Icon name="book-text" />
                        )}
                      </span>
                      <h2 className="text-body-medium/relaxed font-medium">
                        {lesson.name}
                      </h2>
                    </div>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default LessonAccordion;
