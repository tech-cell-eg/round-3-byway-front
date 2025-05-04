import QRCode from 'react-qr-code';

type QRCodeComponentProps = {
  courseUrl: string;
};

function QRCodeComponent({ courseUrl }: QRCodeComponentProps) {
  return <QRCode value={courseUrl} />;
}

export default QRCodeComponent;
