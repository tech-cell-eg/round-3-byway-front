import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';
import Certificate from '../Certificate';
import { Button } from '../../ui/button';

interface CourseCompletionCardProps {
  courseTitle: string;
  instructorName: string;
  studentName: string;
  courseDuration: string;
  certificateId: string;
  completionDate: string;
  progress: number; // 0-100
}

const CourseCompletionCard = ({
  courseTitle,
  instructorName,
  studentName,
  courseDuration,
  certificateId,
  completionDate,
  progress,
}: CourseCompletionCardProps) => {
  const { t } = useTranslation(['certificate']);
  const isCompleted = progress === 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 w-full">
      <div className=" flex-row sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="w-full sm:w-auto">
          <h3 className="text-lg font-semibold truncate">{courseTitle}</h3>
          <p className="text-gray-600 truncate">
            {t('instructedBy', 'Instructed by')}: {instructorName}
          </p>
        </div>

        <div className=" flex-row items-center sm:items-end w-full sm:w-auto mt-2">
          <div className="flex items-center mb-2 mt-2 sm:mt-0 w-full sm:w-auto">
            <div className="w-full sm:w-48 h-2 bg-blue-400 rounded-full mr-2">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium whitespace-nowrap">
              {progress}%
            </span>
          </div>

          {isCompleted ? (
            <div className="flex items-center text-green-600 text-sm">
              <CheckCircle className="w-4 h-4 mr-1 flex-shrink-0" />
              <span>{t('completed', 'Completed')}</span>
            </div>
          ) : (
            <span className="text-gray-500 text-sm">
              {t('inProgress', 'In Progress')}
            </span>
          )}
        </div>
      </div>

      {isCompleted && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className=" flex-row sm:flex-row justify-between items-start sm:items-center ">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-700 font-medium">
                {t('congratulations', 'Congratulations!')}
              </p>
              <p className="text-gray-600">
                {t('courseCompletedOn', 'You completed this course on')}{' '}
                {completionDate}
              </p>
            </div>

            <Certificate
              courseTitle={courseTitle}
              instructorName={instructorName}
              studentName={studentName}
              courseDuration={courseDuration}
              certificateId={certificateId}
              issueDate={completionDate}
              trigger={
                <Button className="mt-2 w-full sm:w-auto">
                  {t('viewCertificate', 'View Certificate')}
                </Button>
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCompletionCard;
