import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/LOGO/LOGO.png';
import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneCall,
  Twitter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-[#1E293B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-3">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold ml-2">{t('footer.byway')}</h2>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-gray-300 mx-2 mb-2">
              {t('footer.empowering')}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-300 mx-2">
              {t('footer.platform')}
            </p>
          </div>

          {/* Get Help */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-2">{t('footer.getHelp')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  {t('footer.verifyCertificate')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-2">{t('footer.programs')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  {t('footer.artDesign')}
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  {t('footer.business')}
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  {t('footer.itSoftware')}
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  {t('footer.languages')}
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-400 transition-colors">
                  {t('footer.programming')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1 w-full md:w-auto">
            <h3 className="font-semibold text-base md:text-lg mb-3 text-gray-100">
              {t('footer.contactUs')}
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm leading-relaxed break-words max-w-full">
              <li>
                <span className="font-medium">{t('footer.address')}:</span>
              </li>
              <li>
                <span className="font-medium">{t('footer.tel')}:</span>
              </li>
              <li>
                <span className="font-medium">{t('footer.Mail')}:</span>
              </li>
            </ul>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 ">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors w-8 h-8 rounded-full p-0 cursor-pointer"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-black hover:bg-black hover:text-white transition-colors w-8 h-8 rounded-full p-0 cursor-pointer"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-pink-500 hover:bg-pink-500 hover:text-white transition-colors w-8 h-8 rounded-full p-0 cursor-pointer"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors w-8 h-8 rounded-full p-0 cursor-pointer"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>

              <a
                href="https://wa.me/14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-green-500 hover:bg-green-500 hover:text-white transition-colors w-8 h-8 rounded-full p-0 cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
