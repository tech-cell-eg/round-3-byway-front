import { useState } from 'react';
import { NotificationFilters } from './NotificationFilters';
import { NewNotification } from './NewNotification';

export const NotificationLayout = () => {
  const [newAnnouncement, setNewAnnouncement] = useState(false);
  return (
    <div className="w-full">
      {!newAnnouncement ? (
        <NotificationFilters setNewAnnouncement={setNewAnnouncement} />
      ) : (
        <NewNotification setNewAnnouncement={setNewAnnouncement} />
      )}
    </div>
  );
};
