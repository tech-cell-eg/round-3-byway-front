import { ReactNode, MouseEvent } from 'react';

type OverlayProps = {
  onClickFn: (value: boolean) => void;
  children: ReactNode;
};

function Overlay({ onClickFn, children }: OverlayProps) {
  const handleClick = () => {
    onClickFn(false);
  };

  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleClick}
      className="absolute w-full h-full top-0 start-0 bg-overlay z-50"
    >
      <div onClick={stopPropagation}>{children}</div>
    </div>
  );
}

export default Overlay;
