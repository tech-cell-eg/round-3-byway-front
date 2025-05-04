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
import downloadPdf from '@/utils/downloadPdf';

function QRCodeButton() {
  const [currentUrl, setCurrentUrl] = useState('');
  const qrRef = useRef<SVGSVGElement>(null);

  const handleClick = () => {
    const url = window.location.origin + location.pathname;
    setCurrentUrl(url);
  };

  const handleQRImageDownload = () => {
    if (qrRef.current) {
      downloadImage({ elementRef: qrRef, fileName: 'qr-code' });
    }
  };

  const handleQRPdfDownload = () => {
    if (qrRef.current) {
      downloadPdf({ elementRef: qrRef, fileName: 'qr-code' });
    }
  };

  return (
    <Dialog>
      <DialogTrigger
        onClick={handleClick}
        className=" py-2 px-4 border border-border-light rounded-small hover:shadow-sm active:shadow-none cursor-pointer"
      >
        QR Code
      </DialogTrigger>

      <DialogContent className="bg-surface-light-primary border-none">
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            Course QR Code
          </DialogTitle>
        </DialogHeader>

        <div className="flex justify-center items-center max-w-full">
          <QRCodeComponent courseUrl={currentUrl} ref={qrRef} />
        </div>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 md:mt-4">
          <Button
            onClick={handleQRImageDownload}
            className="min-w-[160px] text-xs sm:text-base text-content-dark hover:text-content-light active:text-content-light bg-surface-light-primary hover:bg-accent-secondary active:bg-accent-primary border border-border-light rounded-small shadow-none hover:shadow-sm active:shadow-none cursor-pointer"
          >
            <Icon name="download" />
            Download as Image
          </Button>

          <Button
            onClick={handleQRPdfDownload}
            className="min-w-[160px] text-xs sm:text-base text-content-dark hover:text-content-light active:text-content-light bg-surface-light-primary hover:bg-accent-secondary active:bg-accent-primary border border-border-light rounded-small shadow-none hover:shadow-sm active:shadow-none cursor-pointer"
          >
            <Icon name="download" />
            Download as PDF
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default QRCodeButton;
