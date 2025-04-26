import { Link } from 'react-router';

interface NavLinkItem {
  label: string;
  path: string;
  sectionId: string;
}

interface NavLinkCoursesDetailProps {
  links: NavLinkItem[];
}

const NavLinkCoursesDetail: React.FC<NavLinkCoursesDetailProps> = ({
  links,
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="sticky top-0 mb-5 bg-surface-light-primary ">
        <nav className="flex flex-row gap-4 ">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="bg-button-quaternary px-2 py-3  md:px-6 md:py-3 text-content-primary text-body-small rounded-small border-1 border-border-light"
              onClick={() => scrollToSection(link.sectionId)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavLinkCoursesDetail;
