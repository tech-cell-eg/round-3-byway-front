import { useLocation } from 'react-router';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const shareOptions = [
  {
    id: 1,
    shareButton: FacebookShareButton,
    icon: FacebookIcon,
    shareUrl: 'https://facebook.com',
  },
  {
    id: 2,
    shareButton: TwitterShareButton,
    icon: TwitterIcon,
    shareUrl: 'https://facebook.com',
  },
  {
    id: 3,
    shareButton: LinkedinShareButton,
    icon: LinkedinIcon,
    shareUrl: 'https://facebook.com',
  },
  {
    id: 4,
    shareButton: TelegramShareButton,
    icon: TelegramIcon,
    shareUrl: 'https://facebook.com',
  },
  {
    id: 5,
    shareButton: WhatsappShareButton,
    icon: WhatsappIcon,
    shareUrl: 'https://facebook.com',
  },
];

function ShareIcons() {
  const location = useLocation();

  const fullUrl = `${window.location.origin}${location.pathname}`;

  return (
    <div className="flex items-center gap-3 px-2">
      {shareOptions.map(option => (
        <option.shareButton key={option.id} url={fullUrl}>
          <option.icon size={32} round />
        </option.shareButton>
      ))}
    </div>
  );
}

export default ShareIcons;
