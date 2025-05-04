import { forwardRef, useRef, useImperativeHandle } from 'react';
import QRCode from 'react-qr-code';

interface QRCodeComponentProps {
  courseUrl: string;
}

const QRCodeComponent = forwardRef<SVGSVGElement, QRCodeComponentProps>(
  ({ courseUrl }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => {
      return containerRef.current?.querySelector('svg') as SVGSVGElement;
    });

    return (
      <div ref={containerRef} className="w-full">
        <QRCode
          value={courseUrl}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
        />
      </div>
    );
  }
);

export default QRCodeComponent;
