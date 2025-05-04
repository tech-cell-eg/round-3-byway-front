import { useRef, useState } from 'react';
import QRCodeComponent from '../CommonComponents/QRCodeComponent';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import Icon from '../Icon';
import downloadImage from '@/utils/downloadImage';

function QRCodeButton() {
  const [currentUrl, setCurrentUrl] = useState('');
  const qrRef = useRef<SVGSVGElement | null>(null);

  const handleClick = () => {
    const url = window.location.origin + location.pathname;
    setCurrentUrl(url);
  };

  const handleQRImageDownload = () => {
    if (qrRef.current) {
      downloadImage({ elementRef: qrRef, fileName: 'qr-code' });
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        onClick={handleClick}
        className="font-semibold lg:text-xs py-2 px-4 border border-border-light rounded-small hover:shadow-sm active:shadow-none cursor-pointer"
      >
        QR Code
      </DialogTrigger>

      <DialogContent className="bg-surface-light-primary border-none">
        <DialogHeader>
          <DialogTitle>Course QR Code</DialogTitle>
        </DialogHeader>

        <div className="flex justify-center items-center">
          <QRCodeComponent courseUrl={currentUrl} ref={qrRef} />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <Button
            onClick={handleQRImageDownload}
            className="text-content-dark hover:text-content-light active:text-content-light bg-surface-light-primary hover:bg-accent-secondary active:bg-accent-primary border border-border-light rounded-small shadow-none hover:shadow-sm active:shadow-none cursor-pointer"
          >
            <Icon name="download" />
            Download as Image
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default QRCodeButton;
