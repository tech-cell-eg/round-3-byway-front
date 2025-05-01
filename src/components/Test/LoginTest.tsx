'use client';
import { usePostMutation } from '@/api/usePostMutation';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAppDispatch } from '@/Redux/reduxHooks';
import { saveUserRedux } from '@/Redux/slices/auth/userSlice';
import { IUserSave } from '@/types/types';
import { zodResolver } from '@hookForm/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from 'zod';
import img from '../../assets/loginImage.jpg';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

function saveUserData(data: IUserSave) {
  localStorage.setItem('user', JSON.stringify(data));
}
interface ApiResponse {
  data: IUserSave;
  status: number;
}

export default function LoginTest() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // validation form

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { t } = useTranslation(['login']);

  //submit fn

  const {
    mutate,
    isPending,
    error: loginError,
  } = usePostMutation<ApiResponse>('/auth/login', {
    onSuccess: data => {
      console.log(data);
      saveUserData(data.data);
      dispatch(saveUserRedux(data.data));
      toast.success('Logged in successfully!');
      navigate('/');
    },
  });

  function onSubmit(values: LoginSchema) {
    const dataToSend = {
      login: values.email,
      password: values.password,
    };

    mutate(dataToSend);
  }

  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left Side - Form */}
      <div className="flex items-center justify-center bg-white px-6">
        <div className="w-full  min-h-[80vh] p-8 flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-center pb-16 text-3xl font-semibold">
              {t('signIn')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="appearance-none !bg-surface-light-primary !text-gray-900 !placeholder-surface-light-primary !border !border-gray-300 !rounded-2xl p-6 focus-visible:ring-0"
                          placeholder="Username or Email ID"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('password')}</FormLabel>
                      <FormControl>
                        <Input
                          className="appearance-none !bg-surface-light-primary !text-gray-900 !placeholder-surface-light-primary !border !border-gray-300 !rounded-2xl p-6 focus-visible:ring-0"
                          type="password"
                          placeholder="Enter Password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-[30%] bg-black text-white rounded p-4 transition-all  hover:bg-gray-600 hover:text-surface-light-primary "
                  disabled={isPending}
                >
                  {t('submit')} <ArrowRight className=" h-9 w-9 text-white" />
                </Button>
                {loginError && <p>{loginError.message}</p>}
              </form>
            </Form>
          </CardContent>
          <ToastContainer />
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:flex items-center justify-center sm:ps-10 bg-gray-50">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <img
            src={img}
            alt="Login visual"
            className="w-[90%] h-[80vh] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
