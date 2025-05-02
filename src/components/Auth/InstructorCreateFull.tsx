// if no user is logged in, show this page

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { z } from 'zod';
import { ArrowRight } from 'lucide-react';
import { usePostMutation } from '@/api/usePostMutation';
import { IUserSave } from '@/types/types';
import { useAppDispatch } from '@/Redux/reduxHooks';
import { saveUserRedux } from '@/Redux/slices/auth/userSlice';

function saveUserData(data: IUserSave) {
  localStorage.setItem('user', JSON.stringify(data));
}

interface ApiResponse {
  data: IUserSave;
  status: number;
}

// form validation
const createRegisterSchema = (t: (key: string) => string) =>
  z
    .object({
      profilePicture: z
        .string()
        .url(t('signUpForm:errors.profilePicture'))
        .optional()
        .or(z.literal('')),
      firstName: z.string().min(2, t('signUpForm:errors.firstName')),
      lastName: z.string().min(2, t('signUpForm:errors.lastName')),
      bio: z.string().min(10, t('signUpForm:errors.bio')),
      title: z.string().min(2, t('signUpForm:errors.title')),
      email: z.string().email(t('signUpForm:errors.email')),
      userName: z.string().min(2, t('signUpForm:errors.userName')),
      password: z.string().min(8, t('signUpForm:errors.password')),
      confirmPassword: z.string().min(6, t('signUpForm:errors.password')),
    })
    .refine(data => /[a-zA-Z]/.test(data.password), {
      message: t('signUpForm:errors.passwordLetters'),
      path: ['password'],
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t('signUpForm:errors.confirmPassword'),
      path: ['confirmPassword'],
    });

export const InstructorCreateFull = () => {
  const [t, i18n] = useTranslation(['signUpForm']);
  const isRTL = i18n.language === 'ar';
  const dispatch = useAppDispatch();

  const registerSchema = createRegisterSchema(t);

  const { mutate, isPending, isError } = usePostMutation<ApiResponse>(
    '/auth/register',
    {
      onSuccess: data => {
        console.log(data);
        saveUserData(data.data);
        dispatch(saveUserRedux(data.data));
        toast.success('Instructor registered successfully!');
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const handleRegister = async (data: FieldValues) => {
    const {
      profilePicture,
      firstName,
      lastName,
      bio,
      title,
      userName,
      email,
      password,
    } = data;
    const requestBody = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      username: userName,
      password: password,
      profile_picture: profilePicture,
      role: 'instructor',
      bio: bio,
      title: title,
    };
    mutate(requestBody);
  };

  const formInputStyles =
    'border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base select:bg-transparent';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <ToastContainer />
      <div className="flex justify-center items-center">
        {/* Form section */}
        <div className="responsive-secondary-padding-y responsive-primary-padding-x w-full lg:w-1/2">
          <h2 className="text-content-primary text-4xl font-semibold text-center mb-5">
            {t('signUpForm:instructor.pageTitle')}
          </h2>

          {/* form */}
          <div>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(handleRegister)}
            >
              {/* profile picture */}
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
                  <p className="text-red-500">
                    {errors.profilePicture.message}
                  </p>
                )}
              </div>

              {/* first and last name */}
              <div>
                <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
                  {t('signUpForm:fullName')}
                </h3>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                  <div className="flex flex-col w-full lg:w-1/2">
                    <Input
                      {...register('firstName')}
                      type="text"
                      placeholder={t('signUpForm:firstName')}
                      className="border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base"
                    />
                    {errors.firstName && (
                      <p className="text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col w-full lg:w-1/2">
                    <Input
                      {...register('lastName')}
                      type="text"
                      placeholder={t('signUpForm:lastName')}
                      className="border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base w-full"
                    />
                    {errors.lastName && (
                      <p className="text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* username */}
              <div>
                <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
                  {t('signUpForm:userName')}
                </h3>
                <Input
                  {...register('userName')}
                  type="text"
                  placeholder={t('signUpForm:userName')}
                  className={formInputStyles}
                />
                {errors.userName && (
                  <p className="text-red-500">{errors.userName.message}</p>
                )}
              </div>

              {/* email */}
              <div>
                <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
                  {t('signUpForm:email')}
                </h3>
                <Input
                  {...register('email')}
                  type="email"
                  placeholder={t('signUpForm:email')}
                  className={formInputStyles}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* password and confirm password */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                <div className="flex flex-col w-full lg:w-1/2">
                  <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
                    {t('signUpForm:password')}
                  </h3>
                  <Input
                    {...register('password')}
                    type="password"
                    placeholder={t('signUpForm:password')}
                    className="border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <div className="flex flex-col w-full lg:w-1/2">
                  <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
                    {t('signUpForm:confirmPassword')}
                  </h3>
                  <Input
                    {...register('confirmPassword')}
                    type="password"
                    placeholder={t('signUpForm:confirmPassword')}
                    className="border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
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
                  placeholder={t('signUpForm:instructor.title')}
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
                  placeholder={t('signUpForm:instructor.bio')}
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
                className="px-6 py-2.5 bg-button-tertiary text-content-light w-fit rounded-small mt-3 hover:cursor-pointer flex flex-row items-center gap-1.5"
                disabled={isPending}
              >
                {t('signUpForm:instructor.button')}
                <div
                  className={`${isRTL && 'rotate-180 flex items-center justify-center'}`}
                >
                  <ArrowRight size={16} />
                </div>
              </button>
              {isError && (
                <p className="text-red-500 text-body-small font-medium">
                  {t('signUpForm:instructor.error')}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
