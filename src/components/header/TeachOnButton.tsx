import appName from '@/components/constants/appName';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

function TeachOnButton() {
  const { t } = useTranslation(['header']);

  return (
    <Link to="/" className="text-body-small hover:underline">
      {t('becomeInstructorButton')} {appName}
    </Link>
  );
}

export default TeachOnButton;
