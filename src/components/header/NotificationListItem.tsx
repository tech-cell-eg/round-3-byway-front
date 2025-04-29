type NotificationType = 'info' | 'message' | 'success' | 'reminder' | 'warning';

type Notification = {
  id: string;
  message: string;
  date: string; // ISO string
  type: NotificationType;
};

type NotificationListItemProps = {
  notification: Notification;
};

function formatDateTime(isoString: string) {
  const date = new Date(isoString);

  const formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
}

const hoverBgColorMap: Record<NotificationType, string> = {
  info: 'hover:bg-blue-400',
  message: 'hover:bg-sky-300',
  success: 'hover:bg-green-300',
  reminder: 'hover:bg-yellow-200',
  warning: 'hover:bg-red-400',
};

function NotificationListItem({ notification }: NotificationListItemProps) {
  const { date, time } = formatDateTime(notification.date);
  const hoverClass =
    hoverBgColorMap[notification.type] || 'group-hover:bg-gray-100';

  return (
    <li
      className={`py-2 px-4 transition-colors duration-200 bg-white ${hoverClass} border-b border-b-border-light last:border-b-0 hover:border-b-transparent`}
    >
      <div className="py-2 ps-2">
        <h6 className="font-normal text-body-small">{notification.message}</h6>
        <p className="text-body-micro text-gray-500">
          {date} - {time}
        </p>
      </div>
    </li>
  );
}

export default NotificationListItem;
