interface Notification {
  id: number;
  title: string;
  time: string;
  description: string;
  link: string;
}

type Props = {
  notification: Notification;
};

export const NotificationCard = ({ notification }: Props) => {
  return (
    <div
      className="flex gap-5 border border-border-light rounded-small p-2.5 w-full bg-surface-light-primary shadow-primary;
"
    >
      <img src="https://github.com/shadcn.png" alt="" className="w-[130px]" />
      <div className="flex flex-col gap-2">
        <h3 className="text-body-medium text-content-primary font-semibold">
          {notification.title}
        </h3>
        <p className="text-body-small text-content-primary opacity-60">
          {notification.time}
        </p>
        <p className="text-body-small text-content-primary opacity-60">
          {notification.description}
        </p>
        <p className="text-body-small text-accent-secondary">
          {notification.link}
        </p>
      </div>
    </div>
  );
};
