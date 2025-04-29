import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
// import Courses from '../Courses/Courses';
import { createRoot } from 'react-dom/client';
// import ProfilePage from '@/components/ProfilePage/ProfilePage';
import Reviews from './Reviews';

export default function ProfileCards() {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const { t } = useTranslation('Profile/personProfile');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const contentArea = document.getElementById('content-area');
    if (!contentArea) return;

    // Clear previous content
    while (contentArea.firstChild) {
      contentArea.removeChild(contentArea.firstChild);
    }

    const root = createRoot(contentArea);

    switch (activeSection) {
      case 'profile':
        // root.render(<ProfilePage />);
        break;
      case 'myCourses':
        // root.render(<Courses />);
        break;
      case 'teachers':
        root.render(
          <div>
            <h2>المعلمون</h2>
            <p>محتوى المعلمون</p>
          </div>
        );
        break;
      case 'reviews':
        root.render(<Reviews />);
        break;
      default:
        root.render(
          <div>
            <h2>الملف الشخصي</h2>
            <p>محتوى الملف الشخصي</p>
          </div>
        );
    }

    // Cleanup function
    return () => {
      root.unmount();
    };
  }, [activeSection]);

  return (
    <div className="flex flex-col w-full gap-0 mt-5">
      <Button
        variant="outline"
        className={`w-full py-6 border-t border-transparent bg-transparent text-start justify-end ${
          activeSection === 'profile' ? 'bg-content-primary text-white' : ''
        }`}
        onClick={() => handleSectionChange('profile')}
      >
        <span className="w-full text-start">{t('personMain.profile')}</span>
      </Button>
      <Button
        variant="outline"
        className={`w-full py-6 border-t border-transparent bg-transparent text-start justify-end ${
          activeSection === 'myCourses' ? 'bg-content-primary text-white' : ''
        }`}
        onClick={() => handleSectionChange('myCourses')}
      >
        <span className="w-full text-start">{t('personMain.myCourses')}</span>
      </Button>
      <Button
        variant="outline"
        className={`w-full py-6 border-t border-transparent bg-transparent text-start justify-end ${
          activeSection === 'teachers' ? 'bg-content-primary text-white' : ''
        }`}
        onClick={() => handleSectionChange('teachers')}
      >
        <span className="w-full text-start">{t('personMain.teachers')}</span>
      </Button>
      <Button
        variant="outline"
        className={`w-full py-6 border-t border-transparent bg-transparent text-start justify-end ${
          activeSection === 'reviews' ? 'bg-content-primary text-white' : ''
        }`}
        onClick={() => handleSectionChange('reviews')}
      >
        <span className="w-full text-start">{t('personMain.reviews')}</span>
      </Button>
    </div>
  );
}
