import { useLocation } from 'react-router';
import { Button } from '../ui/button';
import { HTMLAttributes } from 'react';

function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text);
}

interface CopyUrlButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value?: string;
  className?: string;
}

function CopyUrlButton({
  value = 'Copy URL',
  className = '',
}: CopyUrlButtonProps) {
  const location = useLocation();

  const handleClick = () => {
    const url = window.location.origin + location.pathname;
    copyToClipboard(url);
  };

  return (
    <Button
      onClick={handleClick}
      className={`${className} border border-border-light rounded-small shadow-none hover:shadow-sm active:shadow-none cursor-pointer`}
    >
      {value}
    </Button>
  );
}

export default CopyUrlButton;
