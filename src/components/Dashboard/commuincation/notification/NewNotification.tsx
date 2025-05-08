import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Input } from '@/components/ui/input';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const inputContainer =
  'flex-col gap-0 bg-surface-light-primary px-4 py-2 rounded-small border-border-light';

const inputLabel = 'text-body-sm text-content-secondary font-normal opacity-80';

const inputStyle = 'w-full border-0 focus-visible:ring-0 p-0 shadow-none';

const createAnnouncementSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  link: z.string().url(),
  thumbnail: z.string().url().optional(),
});

type Props = {
  setNewAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NewNotification = ({ setNewAnnouncement }: Props) => {
  const { t } = useTranslation(['dashboard/notification/notification']);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createAnnouncementSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const handleEmpty = () => {
    reset();
    setNewAnnouncement(false);
  };

  return (
    <div>
      {/* top part */}
      <div className="flex items-center justify-between">
        <Breadcrumb className="*:cursor-pointer hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>Communication</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => setNewAnnouncement(false)}>
                Notification
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-accent-secondary">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-accent-secondary">
                Announcement
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="gap-2 *:cursor-pointer flex justify-end">
          <button
            className="py-3 px-6 border border-border-light rounded-sm text-content-primary text-sm"
            onClick={handleEmpty}
          >
            {t('form.cancel')}
          </button>
          <button
            className="py-3 px-6 border border-border-light rounded-sm text-sm bg-[#16A34A] text-content-light"
            onClick={handleSubmit(onSubmit)}
          >
            {t('form.publish')}
          </button>
        </div>
      </div>

      {/* body form */}

      <div>
        <h2 className="text-body-large font-semibold text-content-primary">
          {t('createAnnouncement')}
        </h2>

        <form className="flex flex-col gap-4 mt-5">
          {/* title */}
          <div className={inputContainer}>
            <p className={inputLabel}>{t('form.title')}</p>
            <Input {...register('title')} type="text" className={inputStyle} />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div className={inputContainer}>
            <p className={inputLabel}>{t('form.description')}</p>
            <Input
              {...register('description')}
              type="text"
              className={inputStyle}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          {/* Link */}
          <div className={inputContainer}>
            <p className={inputLabel}>{t('form.link')}</p>
            <Input {...register('link')} type="text" className={inputStyle} />
            {errors.link && (
              <p className="text-red-500">{errors.link.message}</p>
            )}
          </div>

          {/* Thumbnail */}
          <div className={inputContainer}>
            <p className={inputLabel}>{t('form.thumbnail')}</p>
            <Input
              {...register('thumbnail')}
              type="url"
              className={inputStyle}
            />
            {errors.thumbnail && (
              <p className="text-red-500">{errors.thumbnail.message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
