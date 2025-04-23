//import signUpImg from '@/assets/images/signup-banner.png';
import { zodResolver } from '@hookForm/resolvers/zod';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

// save user data in local storage
function saveUserData(data: unknown) {
  localStorage.setItem('user', JSON.stringify(data));
}

// form validation
const createRegisterSchema = (t: (key: string) => string) =>
  z
    .object({
      firstName: z.string().min(2, t('signUpForm:errors.firstName')),
      lastName: z.string().min(2, t('signUpForm:errors.lastName')),
      userName: z.string().min(2, t('signUpForm:errors.userName')),
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

export const SignUp = () => {
  const [t, i18n] = useTranslation(['signUpForm']);
  const isRTL = i18n.language === 'ar';

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

  const handleRegister = async (data: FieldValues) => {
    try {
      // const response = await axios.post('PLaceHolder', data);
      // console.log(response);
      saveUserData(data);
      toast.success('Registration successful');
      navigate('/');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formInputStyles =
    'border-border-light border p-4 placeholder:text-placeholder placeholder:text-body-base select:bg-transparent';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <ToastContainer />
      <div className="flex">
        {/* Image section */}
        <div className="hidden lg:block w-1/2 max-h-screen">
          {/* <img src={signUpImg} alt="" className="w-full h-full object-cover" />*/}
        </div>

        {/* Form section */}
        <div className="responsive-secondary-padding-y responsive-primary-padding-x w-full lg:w-1/2">
          <h2 className="text-content-primary text-3xl font-semibold text-center mb-5">
            {t('signUpForm:title')}
          </h2>

          {/* form */}
          <div>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(handleRegister)}
            >
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
              <div>
                <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
                  {t('signUpForm:password')}
                </h3>
                <Input
                  {...register('password')}
                  type="password"
                  placeholder={t('signUpForm:password')}
                  className={formInputStyles}
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div>
                <h3 className="text-content-primary text-body-base font-semibold mb-1.5">
                  {t('signUpForm:confirmPassword')}
                </h3>
                <Input
                  {...register('confirmPassword')}
                  type="password"
                  placeholder={t('signUpForm:confirmPassword')}
                  className={formInputStyles}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* button */}
              <button
                type="submit"
                className="px-6 py-2.5 bg-button-tertiary text-content-light w-fit rounded-small mt-3 hover:cursor-pointer"
              >
                {t('signUpForm:button')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
