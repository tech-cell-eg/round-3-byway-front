import { useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import logoImg from '@/assets/logo.png';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface CertificateProps {
  courseTitle: string;
  instructorName: string;
  studentName: string;
  courseDuration: string;
  certificateId: string;
  issueDate?: string; // Optional, defaults to current date if not provided
  trigger?: React.ReactNode; // Custom trigger element
}

const Certificate = ({
  courseTitle,
  instructorName,
  studentName,
  courseDuration,
  certificateId,
  issueDate = new Date().toLocaleDateString(),
  trigger,
}: CertificateProps) => {
  const { t, i18n } = useTranslation(['certificate']);
  const isRTL = i18n.language === 'ar';
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Generate verification URL
  const verificationUrl = `${window.location.origin}/certificate/${certificateId}`;

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      // إظهار رسالة تحميل للمستخدم
      const loadingMessage = document.createElement('div');
      loadingMessage.style.position = 'fixed';
      loadingMessage.style.top = '50%';
      loadingMessage.style.left = '50%';
      loadingMessage.style.transform = 'translate(-50%, -50%)';
      loadingMessage.style.background = 'rgba(0, 0, 0, 0.7)';
      loadingMessage.style.color = 'white';
      loadingMessage.style.padding = '20px';
      loadingMessage.style.borderRadius = '5px';
      loadingMessage.style.zIndex = '9999';
      loadingMessage.textContent = t('generatingPDF', 'Generating PDF...');
      document.body.appendChild(loadingMessage);

      // إنشاء نسخة من الشهادة لتعديلها
      const certificateClone = certificateRef.current.cloneNode(
        true
      ) as HTMLElement;

      // إخفاء زر التنزيل في النسخة المستخدمة للتصدير
      const downloadButton = certificateClone.querySelector('button');
      if (downloadButton && downloadButton.parentNode) {
        downloadButton.parentNode.removeChild(downloadButton);
      }

      // تطبيق أنماط بسيطة لتجنب مشاكل الألوان
      const applySimpleStyles = (element: HTMLElement) => {
        // تطبيق الأنماط على العنصر نفسه
        element.style.color = '#000000';
        element.style.backgroundColor = '#ffffff';
        element.style.borderColor = '#cccccc';

        // تطبيق الأنماط على العناصر الفرعية
        Array.from(element.children).forEach(child => {
          if (child instanceof HTMLElement) {
            applySimpleStyles(child);
          }
        });
      };

      // تطبيق الأنماط البسيطة على النسخة
      applySimpleStyles(certificateClone);

      // إضافة النسخة إلى المستند مؤقتًا ولكن إخفاؤها
      certificateClone.style.position = 'absolute';
      certificateClone.style.left = '-9999px';
      certificateClone.style.top = '-9999px';
      document.body.appendChild(certificateClone);

      // تحويل النسخة المعدلة إلى صورة
      const canvas = await html2canvas(certificateClone, {
        scale: 2, // جودة أعلى
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false, // تعطيل السجلات
      });

      // إزالة النسخة من المستند
      document.body.removeChild(certificateClone);

      // إنشاء ملف PDF بحجم مناسب
      const imgWidth = 210; // عرض A4 بالملم
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pdf = new jsPDF('p', 'mm', 'a4');

      // إضافة الصورة إلى ملف PDF
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

      // تحميل ملف PDF
      pdf.save(`certificate-${certificateId}.pdf`);

      // إزالة رسالة التحميل
      document.body.removeChild(loadingMessage);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert(t('pdfError', 'Failed to generate PDF. Please try again.'));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline">
            {t('viewCertificate', 'View Certificate')}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>
            {t('certificateTitle', 'Course Certificate')}
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-2">
          <div
            ref={certificateRef}
            className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
            style={{ minHeight: '500px' }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Certificate Header */}
            <div className="flex justify-center mb-6">
              <img src={logoImg} alt="Logo" className="h-16 object-contain" />
            </div>

            {/* Certificate Title */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {t('certificateOf', 'Certificate of Completion')}
              </h1>
              <p className="text-gray-600">
                {t('awardedTo', 'This certificate is awarded to')}
              </p>
            </div>

            {/* Student Name */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary inline-block px-4 pb-1">
                {studentName}
              </h2>
            </div>

            {/* Certificate Text */}
            <div className="text-center mb-8">
              <p className="text-gray-700 mb-2">
                {t('completionText', 'For successfully completing the course')}
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {courseTitle}
              </h3>
              <p className="text-gray-700">
                {t('instructedBy', 'Instructed by')}:{' '}
                <span className="font-semibold">{instructorName}</span>
              </p>
              <p className="text-gray-700">
                {t('duration', 'Course Duration')}:{' '}
                <span className="font-semibold">{courseDuration}</span>
              </p>
            </div>

            {/* Certificate Footer */}
            <div className="flex justify-between items-end mt-12">
              <div>
                <p className="text-gray-600 text-sm">
                  {t('issueDate', 'Issue Date')}: {issueDate}
                </p>
                <p className="text-gray-600 text-sm">
                  {t('certificateId', 'Certificate ID')}: {certificateId}
                </p>
              </div>
              <div className="text-center">
                <QRCodeCanvas value={verificationUrl} size={100} level="H" />
                <p className="text-xs text-gray-500 mt-1">
                  {t('scanToVerify', 'Scan to verify')}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  onClick={downloadCertificate}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                  {t('downloadCertificate', 'Download Certificate')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Certificate;
