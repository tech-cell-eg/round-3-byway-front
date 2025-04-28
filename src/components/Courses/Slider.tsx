import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';

type SliderProps = React.ComponentProps<typeof Slider>;

interface SliderDemoProps extends SliderProps {
  className?: string;
  percentage?: number;
}

export function SliderDemo({
  className,
  percentage = 70,
  ...props
}: SliderDemoProps) {
  if (percentage === undefined) return null;

  return (
    <Slider
      value={[percentage]}
      max={100}
      step={1}
      disabled
      className={cn('relative w-[100%]', className)}
      {...props}
    ></Slider>
  );
}
