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
      <div ref={containerRef}>
        <QRCode value={courseUrl} />
      </div>
    );
  }
);

export default QRCodeComponent;
