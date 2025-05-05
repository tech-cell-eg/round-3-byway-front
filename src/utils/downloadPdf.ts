import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';

interface DownloadPdfParams {
  elementRef: React.RefObject<SVGSVGElement | HTMLElement | null>;
  fileName: string;
}

const downloadPdf = async ({
  elementRef,
  fileName,
}: DownloadPdfParams): Promise<void> => {
  const element =
    elementRef.current instanceof SVGSVGElement
      ? (elementRef.current as unknown as HTMLElement)
      : elementRef.current;

  if (!element) return;

  const dataUrl = await toPng(element);

  const img = new Image();
  img.src = dataUrl;

  img.onload = () => {
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (img.height * pdfWidth) / img.width;

    pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);

    const cleanFileName = fileName.replace(/\.(png|jpg|jpeg|pdf)$/i, '');
    pdf.save(`${cleanFileName}.pdf`);
  };
};

export default downloadPdf;
