import Icon from '../Icon';
import { useTranslation } from 'react-i18next';

interface TestimonialsControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const TestButtons = ({ onPrev, onNext }: TestimonialsControlsProps) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="flex gap-5">
      {isRTL ? (
        <>
          <button
            className="bg-[#94A3B8] rounded-2xl text-white cursor-pointer"
            onClick={onNext}
          >
            <Icon name="chevron-right" size={35} />
          </button>
          <button
            className="bg-[#94A3B8] rounded-2xl text-white cursor-pointer"
            onClick={onPrev}
          >
            <Icon name="chevron-left" size={35} />
          </button>
        </>
      ) : (
        <>
          <button
            className="bg-[#94A3B8] rounded-2xl text-white cursor-pointer"
            onClick={onPrev}
          >
            <Icon name="chevron-left" size={35} />
          </button>
          <button
            className="bg-[#94A3B8] rounded-2xl text-white cursor-pointer"
            onClick={onNext}
          >
            <Icon name="chevron-right" size={35} />
          </button>
        </>
      )}
    </div>
  );
};

export default TestButtons;
