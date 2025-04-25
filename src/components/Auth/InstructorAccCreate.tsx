import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookForm/resolvers/zod';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { z } from 'zod';

interface UserData {
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  userName: string;
}

// form validation
const createRegisterSchema = (t: (key: string) => string) =>
  z.object({
    profilePicture: z.string().url(t('signUpForm:errors.profilePicture')),
    bio: z.string().min(10, t('signUpForm:errors.bio')),
    title: z.string().min(2, t('signUpForm:errors.title')),
  });

const formInputStyles =
  'border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base select:bg-transparent';

export const InstructorAccCreate = () => {
  const [t, i18n] = useTranslation(['signUpForm']);
  const isRTL = i18n.language === 'ar';

  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);

  // check user role
  useEffect(() => {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      const pasredData = JSON.parse(storedData);
      setUser(pasredData);
    }
  }, [navigate]);

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
      user.role = 'instructor';
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  const handleRegister = async (data: FieldValues) => {
    const { profilePicture, bio, title } = data;
    console.log('Button clicked');
    const dataToSend = {
      'first-name': user?.firstName,
      'last-name': user?.lastName,
      username: user?.userName,
      email: user?.email,
      profile_picture_url: profilePicture, // placeholder for image url
      bio: bio,
      title: title,
    };

    try {
      // const response = await axios.post('#010', dataToSend);
      // console.log(response);
      updateUserRole();
      toast.success('Registration successful');
      console.log(`Data sent: ${JSON.stringify(dataToSend)}`);
      //  navigate('/profile');
    } catch (error) {
      console.log(error);
      console.log('something went wrong');
      toast.error('Registration failed');
    }
  };

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
              defaultValue={`${user?.firstName} ${user?.lastName}`}
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
              defaultValue={user?.userName}
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
          >
            {t('signUpForm:instructor.button')}
          </button>
        </form>
      </div>
    </div>
  );
};
