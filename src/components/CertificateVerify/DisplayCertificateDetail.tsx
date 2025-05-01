import { Link } from 'react-router';

interface CertificateData {
  certificateId: string;
  certificateName: string;
  courseName: string;
  issuedAt: string;
  expiresAt: string;
  profileId: string;
  courseId: string;
}

interface DisplayCertificateDetailProps {
  certificate: CertificateData | null;
}

const DisplayCertificateDetail: React.FC<DisplayCertificateDetailProps> = ({
  certificate,
}) => {
  if (!certificate) {
    return (
      <p className="text-center text-2xl">
        Search for a certificate or scan a QR code
      </p>
    );
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4">Certificate Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-content-primary text-lg font-medium">
        <h2 className="col-span-3 bg-surface-highlight  p-3 t rounded-md">
          <Link to={`/profile`}>Name: {certificate.certificateName}</Link>
        </h2>
        <h2 className="col-span-3 bg-surface-highlight p-3 text-content-primary  rounded-md">
          <Link to={`/coursespage`}>Course: {certificate.courseName}</Link>
        </h2>
        <h2 className="col-span-2 bg-surface-highlight p-3 rounded-md ">
          Certificate ID: {certificate.certificateId}
        </h2>
        <h2 className="col-span-2 bg-surface-highlight p-3 rounded-md ">
          Issued At: {certificate.issuedAt}
        </h2>
        <h2 className="col-span-2 bg-surface-highlight p-3 rounded-md ">
          Expires At: {certificate.expiresAt}
        </h2>
      </div>
    </div>
  );
};

export default DisplayCertificateDetail;
