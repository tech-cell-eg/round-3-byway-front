// import { Link } from 'react-router';
import DropdownContainer from '../CommonComponents/DropdownContainer';
// import { Icon } from 'lucide-react';
import NotificationsList from './NotificationsList';

function NotificationsDropdown() {
  return (
    <DropdownContainer as="section" className="end-[1%]">
      <NotificationsList />

      {/* <Link
        to="/"
        className="group border-t border-t-white flex justify-center items-center gap-4 py-3 px-4 font-semibold text-center text-content-dark hover:text-content-light bg-surface-highlight hover:bg-accent-secondary active:bg-accent-primary duration-short"
      >
        View More
        <Icon
          name="arrow-right"
          className="group-hover:animate-horizontal-move"
        />
      </Link> */}
    </DropdownContainer>
  );
}

export default NotificationsDropdown;
