import Icon from '../Icon';

interface TestimonialsControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

const TestButtons = ({ onPrev, onNext }: TestimonialsControlsProps) => {
  return (
    <div className="flex gap-5">
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
    </div>
  );
};

export default TestButtons;
