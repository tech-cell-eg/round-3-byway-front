// ShareSection.tsx
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
  const { t } = useTranslation('Profile/personProfile');

  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

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

  return (
    <div className="flex flex-col gap-4 items-center">
      {/* Share Options Box */}
      <div className="flex flex-col gap-4 p-4 border bg-white border-border-light rounded-lg shadow-sm mt-2 w-full md:w-3/4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">
            {t('personMain.shareProfile')}
          </h2>

          {/* Copy Link Button */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleCopy}
              variant="outline"
              className="flex items-center gap-2"
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

        {/* Social Share Buttons */}
        <div className="flex gap-1 w-full flex-wrap justify-center">
          <FacebookShareButton url={url}>
            <Button variant="ghost" size="icon">
              <Facebook className="w-5 h-5" />
            </Button>
          </FacebookShareButton>

          <TwitterShareButton url={url}>
            <Button variant="ghost" size="icon">
              <Twitter className="w-5 h-5" />
            </Button>
          </TwitterShareButton>

          <LinkedinShareButton url={url}>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
          </LinkedinShareButton>

          <WhatsappShareButton url={url}>
            <Button variant="ghost" size="icon">
              <MessageCircle className="w-5 h-5" />
            </Button>
          </WhatsappShareButton>

          <TelegramShareButton url={url}>
            <Button variant="ghost" size="icon">
              <Send className="w-5 h-5" />
            </Button>
          </TelegramShareButton>
        </div>

        {/* QR Code Section */}
        <div className="flex flex-col items-center gap-2 mt-4" ref={qrRef}>
          <QRCodeCanvas value={url} size={128} />
          <Button
            onClick={handleDownloadQR}
            variant="secondary"
            size="sm"
            className="flex items-center gap-1"
          >
            <Download className="w-4 h-4" />
            {t('personMain.downloadQR')}
          </Button>
        </div>
      </div>
    </div>
  );
}
