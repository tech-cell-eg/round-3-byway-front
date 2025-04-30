import { usePostMutation } from '@/api/usePostMutation';
import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import { setUserRole } from '@/Redux/slices/auth/userSlice';
import { zodResolver } from '@hookForm/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { z } from 'zod';

// form validation
const createRegisterSchema = (t: (key: string) => string) =>
  z.object({
    profilePicture: z
      .string()
      .url(t('signUpForm:errors.profilePicture'))
      .optional()
      .or(z.literal('')),
    bio: z.string().min(10, t('signUpForm:errors.bio')),
    title: z.string().min(2, t('signUpForm:errors.title')),
  });

const formInputStyles =
  'border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base select:bg-transparent';

export const InstructorAccCreate = () => {
  const [t, i18n] = useTranslation(['signUpForm']);
  const isRTL = i18n.language === 'ar';
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const user = useAppSelector(state => state.user);
  // check user role

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createRegisterSchema(t)),
    mode: 'onChange',
  });

  const updateUserRole = () => {
    if (user) {
      dispatch(setUserRole('instructor'));
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  const { mutate, isPending, isError } = usePostMutation('/auth/register', {
    onSuccess: data => {
      console.log(data);
      updateUserRole();
      toast.success('Account upgraded successfully!');
      navigate('/profile');
    },
  });

  const handleRegister = async (data: FieldValues) => {
    const { profilePicture, bio, title } = data;
    console.log('Button clicked');
    const dataToSend = {
      first_name: user?.first_name,
      last_name: user?.last_name,
      username: user?.username,
      email: user?.email,
      profile_picture_url: profilePicture,
      bio: bio,
      title: title,
      role: 'instructor',
    };
    mutate(dataToSend);
  };

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  console.log(`${user?.first_name} ${user?.last_name}`);
  return (
    <div
      className="responsive-secondary-padding-y responsive-primary-padding-x w-full"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <h2 className="text-content-primary text-3xl font-semibold text-center mb-5">
        {t('signUpForm:instructor.pageTitle')}
      </h2>

      {/* form */}

      <div>
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleRegister)}
        >
          {/* profile image and input */}
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
              {t('signUpForm:profilePicture')}
            </h3>
            <img
              src="https://github.com/shadcn.png"
              className="size-20 rounded-full"
              alt=""
            />
            <Input
              {...register('profilePicture')}
              type="url"
              placeholder={t('signUpForm:profilePicture')}
              className="border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base"
            />
            {errors.profilePicture && (
              <p className="text-red-500">{errors.profilePicture.message}</p>
            )}
          </div>

          {/* name */}
          <div>
            <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
              {t('signUpForm:fullName')}
            </h3>
            <Input
              type="text"
              className="border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base"
              readOnly
              disabled
              value={`${user?.first_name} ${user?.last_name}`}
            />
          </div>

          {/* username */}
          <div>
            <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
              {t('signUpForm:userName')}
            </h3>
            <Input
              type="text"
              className={formInputStyles}
              readOnly
              disabled
              defaultValue={user?.username}
            />
          </div>

          {/* email */}
          <div>
            <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
              {t('signUpForm:email')}
            </h3>
            <Input
              type="email"
              className={formInputStyles}
              readOnly
              disabled
              defaultValue={user?.email}
            />
          </div>

          {/* title */}
          <div>
            <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
              {t('signUpForm:instructor.title')}
            </h3>
            <Input
              {...register('title')}
              type="text"
              className={formInputStyles}
            />
            {errors.title && (
              <p className="text-red-500 text-body-small font-medium">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* bio */}
          <div>
            <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
              {t('signUpForm:instructor.bio')}
            </h3>
            <textarea
              {...register('bio')}
              className={`${formInputStyles} w-full h-[100px]`}
            />
            {errors.bio && (
              <p className="text-red-500 text-body-small font-medium">
                {errors.bio.message}
              </p>
            )}
          </div>

          {/* button */}
          <button
            type="submit"
            className="px-6 py-2.5 bg-button-tertiary text-content-light w-fit rounded-small mt-3 hover:cursor-pointer"
            disabled={isPending}
          >
            {t('signUpForm:instructor.button')}
          </button>
        </form>
      </div>
    </div>
  );
};
