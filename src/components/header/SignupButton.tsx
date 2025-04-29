import { Link } from 'react-router';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

function SignupButton() {
  const { t } = useTranslation(['header']);

  return (
    <Button className="p-0 h-fit text-content-light hover:text-content-primary bg-surface-footer hover:bg-surface-highlight focus:bg-surface-highlight border border-dark shadow-none hover:shadow-lg active:shadow-none duration-short">
      <Link to="/" className="p-2.5">
        {t('signupButton')}
      </Link>
    </Button>
  );
}

export default SignupButton;
