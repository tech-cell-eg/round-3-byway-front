import { useState } from 'react';
import QRCodeComponent from '../CommonComponents/QRCodeComponent';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

function QRCodeButton() {
  const [currentUrl, setCurrentUrl] = useState('');

  const handleClick = () => {
    const url = window.location.origin + location.pathname;
    setCurrentUrl(url);
  };

  return (
    <Dialog>
      <DialogTrigger onClick={handleClick}>
        <Button className="lg:text-xs border border-border-light hover:shadow-sm active:shadow-none cursor-pointer">
          QR Code
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-surface-light-primary border-none">
        <DialogHeader>
          <DialogTitle>Course QR Code</DialogTitle>
        </DialogHeader>

        <div className="flex justify-center items-center">
          <QRCodeComponent courseUrl={currentUrl} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default QRCodeButton;
