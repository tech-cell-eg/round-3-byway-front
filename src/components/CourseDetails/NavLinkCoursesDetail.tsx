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
      <div className="sticky top-[4.1rem] mb-5 bg-surface-light-primary pb-2 pt-4">
        <nav className="flex flex-row gap-2 ">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="bg-button-quaternary px-2 py-2  md:px-6 md:py-3 text-content-primary text-body-small rounded-small border-1 border-border-light"
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
