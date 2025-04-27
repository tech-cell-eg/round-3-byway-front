import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FaFacebookF,
  FaTwitter,
  FaLink,
  FaQrcode,
  FaWhatsapp,
} from 'react-icons/fa';
import QRCode from 'react-qr-code';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
//import img from '../../assets/InstructorImg.png';

export default function ShareProfile() {
  const [showQR, setShowQR] = useState<boolean>(false);
  const url: string = 'https://your-profile-link.com';
  const fullName = 'John Doe';

  const initials = fullName
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex justify-end p-6">
      <Card className="w-full max-w-xs !shadow-none !border-none">
        <CardContent className="flex flex-col items-center gap-4">
          {/* Avatar */}
          <Avatar className="w-40 ms-14 h-40">
            <AvatarImage src="/invalid-path.jpg" alt="Profile" />
            <AvatarFallback className="flex items-center  justify-center w-full h-full text-5xl font-bold text-white bg-blue-500 rounded-full border-4 border-gray-500">
              {initials}
            </AvatarFallback>
          </Avatar>

          {/* Share Buttons */}
          <div className="flex flex-col items-end w-full gap-2">
            <FacebookShareButton url={url} title="Check out this profile!">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 w-[100%] me-24 border-1 border-gray-300 rounded-[10px] bg-white text-black hover:bg-gray-100 !px-1"
              >
                <FaFacebookF className="text-blue-600" /> Facebook
              </Button>
            </FacebookShareButton>

            <TwitterShareButton url={url} title="Check out this profile!">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 w-[100%] me-24 border-1 border-gray-300 rounded-[10px] bg-white text-black hover:bg-gray-100 !px-3"
              >
                <FaTwitter className="text-blue-400" /> Twitter
              </Button>
            </TwitterShareButton>

            <WhatsappShareButton url={url} title="Check out this profile!">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 w-[99%] me-19  ps-10 border-1 border-gray-300 rounded-[10px] bg-white text-black hover:bg-gray-100 "
              >
                <FaWhatsapp className="text-green-500" /> WhatsApp
              </Button>
            </WhatsappShareButton>

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 w-[70%] border border-gray-300 rounded-[10px] bg-white text-black hover:bg-gray-100"
              onClick={copyToClipboard}
            >
              <FaLink /> Copy URL
            </Button>
            {/**youtube & twitter links */}

            <Button
              variant="outline"
              className="flex items-center ms-20 justify-center gap-2 w-[70%] border border-gray-300 rounded-[10px] bg-white text-black hover:bg-gray-100"
              onClick={() => window.open('https://youtube.com', '_blank')}
            >
              Go to YouTube
            </Button>

            <Button
              variant="outline"
              className="flex items-center ms-20 justify-center gap-2 w-[70%] border border-gray-300 rounded-[10px] bg-white text-black hover:bg-gray-100"
              onClick={() => window.open('https://twitter.com', '_blank')}
            >
              Go to Twitter
            </Button>

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 w-[70%] border border-gray-300 rounded-[10px] bg-white text-black hover:bg-gray-100"
              onClick={() => setShowQR(prev => !prev)}
            >
              <FaQrcode /> {showQR ? 'Hide QR' : 'Show QR'}
            </Button>

            {/* QR Code */}
            {showQR && (
              <div className="mt-4 ms-20 bg-white rounded-lg shadow-md">
                <QRCode value={url} size={150} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
