import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { NotificationCard } from './NotificationCard';
import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import { useTranslation } from 'react-i18next';

interface Notification {
  id: number;
  title: string;
  time: string;
  description: string;
  link: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    title: '20% off on Xmas',
    time: 'Draft on 25 Jan 2022',
    description: 'Hurry, get the last chance for discount of courses',
    link: 'https://test.com/courses',
  },
  {
    id: 2,
    title: 'New Year Special Offer',
    time: 'Sent on 1 Jan 2023',
    description: 'Celebrate the new year with amazing course deals!',
    link: 'https://test.com/newyear',
  },
  {
    id: 3,
    title: 'Spring Sale!',
    time: 'Scheduled for 15 Mar 2023',
    description: 'Up to 30% off on all programming courses.',
    link: 'https://test.com/spring-sale',
  },
];

type Props = {
  setNewAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NotificationFilters = ({ setNewAnnouncement }: Props) => {
  const [notificationsState, setNotificationsState] = useState(notifications);
  const [assignmentFilter, setAssignmentFilter] = useState<string>('all');
  const { t } = useTranslation(['dashboard/notification/notification']);

  useEffect(() => {
    let filteredNotifications = notifications;

    if (assignmentFilter === 'draft') {
      filteredNotifications = notifications.filter(notification =>
        notification.time.toLowerCase().includes('draft')
      );
    }

    setNotificationsState(filteredNotifications);
  }, [assignmentFilter]);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <h3 className="text-body-small text-content-primary opacity-60">
              Assignment:
            </h3>
            <Select onValueChange={setAssignmentFilter} disabled>
              <SelectTrigger className="w-fit border-0">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent className="p-0 border-0">
                <SelectGroup className="bg-surface-light-primary text-content-primary rounded-sm">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2.5">
            <h3 className="text-body-small text-content-primary opacity-60">
              Sort by:
            </h3>
            <Select disabled>
              <SelectTrigger className="w-fit border-0">
                <SelectValue placeholder="Newest First" />
              </SelectTrigger>
              <SelectContent className="p-0 border-0">
                <SelectGroup className="bg-surface-light-primary text-content-primary rounded-sm">
                  <SelectItem value="new">Newest First</SelectItem>
                  <SelectItem value="old">Oldest First</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <button
          className="py-3 px-6 text-sm text-content-primary font-normal bg-surface-light-primary rounded-sm hover:bg-accent-secondary active:bg-accent-primary focus:bg-accent-secondary border border-border-light cursor-pointer flex items-center gap-2 hover:shadow-primary active:shadow-none"
          onClick={() => setNewAnnouncement(true)}
        >
          {t('newAnnouncement')} <Icon name="podcast" className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col gap-5 mt-2">
        {notificationsState.map(notification => (
          <NotificationCard key={notification.id} notification={notification} />
        ))}
      </div>
    </>
  );
};
