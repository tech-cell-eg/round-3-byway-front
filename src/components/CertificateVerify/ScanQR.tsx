import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
// import { n } from 'node_modules/react-router/dist/development/fog-of-war-D2zsXvum.d.mts';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';

interface ScanQRProps {
  onScanResult: (result: string) => void;
}

const ScanQR: React.FC<ScanQRProps> = ({ onScanResult }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setError(null);
  };

  const handleScan = (detectedCodes: IDetectedBarcode[]) => {
    if (detectedCodes && detectedCodes[0]?.rawValue) {
      onScanResult(detectedCodes[0].rawValue);
      setIsOpen(false);
    }
  };

  const handleError = (error: unknown) => {
    if (error instanceof Error) {
      if (error.name === 'NotAllowedError') {
        setError(
          'The camera is blocked. Please allow camera access from your browser settings.'
        );
      } else {
        setError('Error on scanning: ' + error.message);
      }
    } else {
      setError('An unexpected error occurred.');
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (error) {
      toast(error, {
        description:
          'open chrome://settings/camer => allow camera access => reload',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
    }
  }, [error]);

  return (
    <div>
      <Toaster />
      <button
        onClick={handleOpen}
        className="bg-surface-dark-primary text-white py-2 px-4 rounded-md hover:cursor-pointer"
      >
        {isOpen ? 'Close' : 'Scan QR'}
      </button>
      {isOpen && (
        <div className="w-[250px] h-[250px] mt-4">
          <Scanner onScan={handleScan} onError={handleError} />
        </div>
      )}
    </div>
  );
};

export default ScanQR;
