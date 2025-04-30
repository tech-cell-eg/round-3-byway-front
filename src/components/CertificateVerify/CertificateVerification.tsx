import { useState, useEffect } from 'react';
import SearcharVerification from './SearcharVerification';
import ScanQR from './ScanQR';
import DisplayCertificateDetail from './DisplayCertificateDetail';
import axios from 'axios';

const CertificateVerification = () => {
  const [certificateId, setCertificateId] = useState<string | null>(null);
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //  >>>===<<< make Custom hook in the future >>>===<<<
  useEffect(() => {
    if (certificateId) {
      const fetchCertificate = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            `http://localhost:3001/certificates?certificateId=${certificateId}`
          );
          const data = response.data.length > 0 ? response.data[0] : null;
          if (data) {
            setCertificate(data);
          } else {
            throw new Error('Certificate not found');
          }
        } catch (err) {
          if (axios.isAxiosError(err)) {
            setError(
              err.response?.status === 404
                ? 'Certificate not found. Check ID .'
                : 'An error occurred while fetching the certificate.'
            );
          } else {
            setError('Certificate not found. Check ID.');
          }
          setCertificate(null);
        } finally {
          setLoading(false);
        }
      };
      fetchCertificate();
    }
  }, [certificateId]);

  const handleSearch = (id: string) => {
    setCertificateId(id);
  };

  const handleScanResult = (result: string) => {
    const idCertificate = result.split('/').pop();
    setCertificateId(idCertificate ?? null);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Certificate Verification</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearcharVerification onSearch={handleSearch} />
        <ScanQR onScanResult={handleScanResult} />
      </div>
      {loading && (
        <p className="text-center">Loading certificate details ...</p>
      )}
      {error && <p className="text-center text-red-600 text-2xl">{error}</p>}
      <DisplayCertificateDetail certificate={certificate} />
    </div>
  );
};

export default CertificateVerification;
