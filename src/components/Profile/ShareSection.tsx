import { Button } from '@/components/ui/button';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share';
import {
  Copy,
  Check,
  Download,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  MessageCircle,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useTranslation } from 'react-i18next';

export function ShareSection() {
  const [url, setUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation('profile/personProfile');
  const qrRef = useRef<HTMLDivElement>(null);

  // Get current page URL
  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  // Copy URL to clipboard
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Download QR code as image
  const handleDownloadQR = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'profile-qr-code.png';
        link.click();
      }
    }
  };

  const iconButtonClass =
    'bg-white transition-colors w-8 h-8 rounded-full p-0 cursor-pointer flex items-center justify-center';

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-4 p-4 border bg-white border-border-light rounded-lg shadow-sm mt-2 w-full md:w-3/4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">
            {t('personMain.shareProfile')}
          </h2>

          <div className="flex items-center gap-2">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="flex items-center gap-2 cursor-pointer transition-colors hover:text-white hover:bg-accent-primary"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? t('personMain.copied') : t('personMain.copyLink')}
            </Button>
          </div>
        </div>

        {/* Social Media Share Buttons */}
        <div className="flex gap-2 w-full flex-wrap justify-center">
          <FacebookShareButton url={url}>
            <Button
              variant="outline"
              size="lg"
              className={`${iconButtonClass} text-[#1877F2] hover:bg-[#1877F2] hover:text-white`}
            >
              <Facebook className="w-5 h-5" />
            </Button>
          </FacebookShareButton>

          <TwitterShareButton url={url}>
            <Button
              variant="outline"
              size="lg"
              className={`${iconButtonClass} text-black hover:bg-black hover:text-white`}
            >
              <Twitter className="w-5 h-5" />
            </Button>
          </TwitterShareButton>

          <LinkedinShareButton url={url}>
            <Button
              variant="outline"
              size="lg"
              className={`${iconButtonClass} text-[#0077B5] hover:bg-[#0077B5] hover:text-white`}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
          </LinkedinShareButton>

          <WhatsappShareButton url={url}>
            <Button
              variant="outline"
              size="lg"
              className={`${iconButtonClass} text-green-500 hover:bg-green-500 hover:text-white`}
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          </WhatsappShareButton>

          <TelegramShareButton url={url}>
            <Button
              variant="outline"
              size="lg"
              className={`${iconButtonClass} text-blue-500 hover:bg-blue-500 hover:text-white`}
            >
              <Send className="w-5 h-5" />
            </Button>
          </TelegramShareButton>
        </div>

        {/* QR Code + Download */}
        <div className="flex flex-col items-center gap-2 mt-4  " ref={qrRef}>
          <QRCodeCanvas value={url} size={128} className="cursor-pointer" />
          <Button
            onClick={handleDownloadQR}
            variant="secondary"
            size="sm"
            className="flex items-center gap-1 hover:text-accent-primary cursor-pointer"
          >
            <Download className="w-4 h-4" />
            {t('personMain.downloadQR')}
          </Button>
        </div>
      </div>
    </div>
  );
}
