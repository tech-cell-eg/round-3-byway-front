import signUpImg from '@/assets/images/signup/SignBannerImage.png';
import { zodResolver } from '@hookForm/resolvers/zod';
import axios from 'axios';
import { Input } from '@/components/ui/input';
import { FieldValues, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { z } from 'zod';
import { ArrowRight } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { IUserSave } from '@/types/types';
import { useAppDispatch } from '@/Redux/reduxHooks';
import { saveUserRedux } from '@/Redux/slices/auth/userSlice';
// save user data in local storage
function saveUserData(data: IUserSave) {
  localStorage.setItem('user', JSON.stringify(data));
}

// form validation
const createRegisterSchema = (t: (key: string) => string) =>
  z
    .object({
      first_name: z.string().min(2, t('signUpForm:errors.firstName')),
      last_name: z.string().min(2, t('signUpForm:errors.lastName')),
      username: z.string().min(2, t('signUpForm:errors.userName')),
      email: z.string().email(t('signUpForm:errors.email')),
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

// sign up component
export const SignUp = () => {
  const [t, i18n] = useTranslation(['signUpForm']);
  const isRTL = i18n.language === 'ar';
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const registerSchema = createRegisterSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const registerUser = async (data: FieldValues) => {
    const requestBody = {
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      password: data.password,
      role: 'student',
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/register`,
      requestBody
    );
    console.log(response);
    const userData = response.data.data;
    console.log(userData);
    return userData; // return the response if you need
  };

  const {
    mutate: handleRegister,
    isPending,
    error,
  } = useMutation({
    mutationFn: registerUser,
    onSuccess: data => {
      console.log(data);
      saveUserData(data);
      dispatch(saveUserRedux(data));
      toast.success('Registration successful');
      navigate('/');
    },
    onError: () => {
      console.error(error);
      toast.error('Registration failed');
    },
  });

  const formInputStyles =
    'border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base select:bg-transparent';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <ToastContainer />
      <div className="flex">
        {/* Image section */}
        <div className="hidden lg:block w-1/2 max-h-screen">
          <img src={signUpImg} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Form section */}
        <div className="responsive-secondary-padding-y responsive-primary-padding-x w-full lg:w-1/2">
          <h2 className="text-content-primary text-4xl font-semibold text-center mb-5">
            {t('signUpForm:title')}
          </h2>

          {/* form */}
          <div>
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(data => handleRegister(data))}
            >
              {/* first and last name */}
              <div>
                <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
                  {t('signUpForm:fullName')}
                </h3>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                  <div className="flex flex-col w-full lg:w-1/2">
                    <Input
                      {...register('first_name')}
                      type="text"
                      placeholder={t('signUpForm:firstName')}
                      className="border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base"
                    />
                    {errors.first_name && (
                      <p className="text-red-500">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col w-full lg:w-1/2">
                    <Input
                      {...register('last_name')}
                      type="text"
                      placeholder={t('signUpForm:lastName')}
                      className="border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base w-full"
                    />
                    {errors.last_name && (
                      <p className="text-red-500">{errors.last_name.message}</p>
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
                  {...register('username')}
                  type="text"
                  placeholder={t('signUpForm:userName')}
                  className={formInputStyles}
                />
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
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

              {/* button */}
              <button
                type="submit"
                className="px-6 py-2.5 bg-button-tertiary text-content-light w-fit rounded-small mt-3 hover:cursor-pointer flex flex-row items-center gap-1.5"
                disabled={isPending}
              >
                {isPending ? 'Loading...' : t('signUpForm:button')}
                <div
                  className={`${isRTL && 'rotate-180 flex items-center justify-center'}`}
                >
                  <ArrowRight size={16} />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
