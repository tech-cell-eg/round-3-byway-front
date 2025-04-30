import { z } from 'zod';
import { zodResolver } from '@hookForm/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/Redux/reduxHooks';
import { useEffect } from 'react';

const userSettingsSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' }),
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  bio: z.string().min(10, { message: 'Bio must be at least 10 characters.' }),
  facebookAccount: z.string().url({ message: 'Invalid URL.' }).optional(),
  twitterAccount: z.string().url({ message: 'Invalid URL.' }).optional(),
  instagramAccount: z.string().url({ message: 'Invalid URL.' }).optional(),
  profileImage: z.string().url({ message: 'Invalid URL.' }).optional(),
  experince: z
    .string()
    .min(10, { message: 'Experince must be at least 10 characters.' }),
  information: z
    .string()
    .min(10, { message: 'Information must be at least 10 characters.' }),
});

const inputContainer =
  'flex-col gap-1 bg-surface-light-primary px-4 py-2 rounded-small border-border-light';

const inputLabel = 'text-body-sm text-content-secondary font-normal opacity-80';

const inputStyle =
  'w-full border-0 focus-visible:ring-0 p-0 shadow-none selection:bg-gray-200';

export const UserSettings = () => {
  const userDefault = useAppSelector(state => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof userSettingsSchema>>({
    resolver: zodResolver(userSettingsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      title: '',
      bio: '',
      facebookAccount: '',
      twitterAccount: '',
      instagramAccount: '',
      profileImage: '',
    },
  });

  useEffect(() => {
    if (userDefault?.first_name) {
      reset({
        firstName: userDefault.first_name,
        lastName: userDefault.last_name,
        username: userDefault.username,
        email: userDefault.email,
        title: userDefault.title,
        bio: userDefault.bio,
        // facebookAccount: userDefault.facebookAccount,
        // twitterAccount: userDefault.twitterAccount,
        // instagramAccount: userDefault.instagramAccount,
        // profileImage: userDefault.profileImage,
      });
    }
  }, [userDefault, reset]);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // Here you would typically make an API call to update the user settings
  };

  return (
    <div>
      <h2 className="text-body-large font-semibold text-content-primary">
        Edit Profile
      </h2>

      <div>
        <form
          className="flex flex-col gap-4 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* first name */}
          <div className={inputContainer}>
            <p className={inputLabel}>First Name</p>
            <Input
              {...register('firstName')}
              type="text"
              className={`${inputStyle}text-body-large`}
              aria-invalid={errors.firstName ? true : undefined}
            />
            {errors.firstName && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* last name */}
          <div className={inputContainer}>
            <p className={inputLabel}>Last Name</p>
            <Input
              {...register('lastName')}
              type="text"
              className={inputStyle}
              aria-invalid={errors.lastName ? true : undefined}
            />
            {errors.lastName && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* user name */}
          <div className={inputContainer}>
            <p className={inputLabel}>Username</p>
            <Input
              {...register('username')}
              type="text"
              className={inputStyle}
              aria-invalid={errors.username ? true : undefined}
            />
            {errors.username && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* email */}
          <div className={inputContainer}>
            <p className={inputLabel}>Email</p>
            <Input
              {...register('email')}
              type="email"
              className={inputStyle}
              aria-invalid={errors.email ? true : undefined}
            />
            {errors.email && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* title */}
          <div className={inputContainer}>
            <p className={inputLabel}>Title</p>
            <Input
              {...register('title')}
              type="text"
              className={inputStyle}
              aria-invalid={errors.title ? true : undefined}
            />
            {errors.title && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* bio */}
          <div className={inputContainer}>
            <p className={inputLabel}>Bio</p>
            <Input
              {...register('bio')}
              type="text"
              className={inputStyle}
              aria-invalid={errors.bio ? true : undefined}
            />
            {errors.bio && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.bio.message}
              </p>
            )}
          </div>

          {/* experince */}
          <div className={inputContainer}>
            <p className={inputLabel}>Experince</p>
            <Input
              {...register('experince')}
              type="text"
              className={inputStyle}
              aria-invalid={errors.experince ? true : undefined}
            />
            {errors.experince && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.experince.message}
              </p>
            )}
          </div>

          {/* information */}
          <div className={inputContainer}>
            <p className={inputLabel}>Information</p>
            <Input
              {...register('information')}
              type="text"
              className={inputStyle}
              aria-invalid={errors.information ? true : undefined}
            />
            {errors.information && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.information.message}
              </p>
            )}
          </div>

          {/* facebook account */}
          <div className={inputContainer}>
            <p className={inputLabel}>Facebook Account</p>
            <Input
              {...register('facebookAccount')}
              type="url"
              className={inputStyle}
              aria-invalid={errors.facebookAccount ? true : undefined}
            />
            {errors.facebookAccount && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.facebookAccount.message}
              </p>
            )}
          </div>

          {/* twitter account */}
          <div className={inputContainer}>
            <p className={inputLabel}>Twitter Account</p>
            <Input
              {...register('twitterAccount')}
              type="url"
              className={inputStyle}
              aria-invalid={errors.twitterAccount ? true : undefined}
            />
            {errors.twitterAccount && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.twitterAccount.message}
              </p>
            )}
          </div>

          {/* instagram account */}
          <div className={inputContainer}>
            <p className={inputLabel}>Instagram Account</p>
            <Input
              {...register('instagramAccount')}
              type="url"
              className={inputStyle}
              aria-invalid={errors.instagramAccount ? true : undefined}
            />
            {errors.instagramAccount && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.instagramAccount.message}
              </p>
            )}
          </div>

          {/* profile image */}
          <div className={inputContainer}>
            <p className={inputLabel}>Profile Image</p>
            <Input
              {...register('profileImage')}
              type="url"
              className={inputStyle}
              aria-invalid={errors.profileImage ? true : undefined}
            />
            {errors.profileImage && (
              <p className="text-error-primary text-body-xs mt-1">
                {errors.profileImage.message}
              </p>
            )}
          </div>

          <Button
            className="py-3 px-6 border border-border-light text-sm bg-[#16A34A] text-content-light w-fit rounded-small"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'saving' : 'Save'}
          </Button>
        </form>
      </div>
    </div>
  );
};
