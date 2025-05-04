import { toPng } from 'html-to-image';

interface DownloadImageProps {
  elementRef: React.RefObject<SVGSVGElement | HTMLElement | null>;
  fileName: string;
}

export default function downloadImage({
  elementRef,
  fileName,
}: DownloadImageProps) {
  const node = elementRef.current;

  if (!node) return;

  if (node instanceof HTMLElement || node instanceof SVGSVGElement) {
    toPng(node as HTMLElement)
      .then(dataUrl => {
        const link = document.createElement('a');
        link.download = `${fileName}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(err => {
        console.error('Failed to generate image:', err);
      });
  } else {
    console.warn('Provided ref is not a valid HTML/SVG element');
  }
}
